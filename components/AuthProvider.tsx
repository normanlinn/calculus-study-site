"use client";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Auth, User } from "firebase/auth";
import type { Firestore } from "firebase/firestore";
import { firebaseConfig } from "@/lib/firebase-config";
import { readDone, replaceDone, subscribeDone } from "@/lib/progress";
import { readGen, writeGen, subscribeGen, type GenStats } from "@/lib/genstats";

export interface Account {
  enabled: boolean;
  ready: boolean;
  user: { uid: string; name: string | null; email: string | null; photo: string | null } | null;
  syncing: boolean;
  signInGoogle: () => Promise<void>;
  signInEmail: (email: string, password: string) => Promise<void>;
  signUpEmail: (name: string, email: string, password: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
  signOut: () => Promise<void>;
}

const noop = async () => {};
const AccountContext = createContext<Account>({
  enabled: false, ready: true, user: null, syncing: false,
  signInGoogle: noop, signInEmail: noop, signUpEmail: noop, resetPassword: noop, signOut: noop,
});
export const useAccount = () => useContext(AccountContext);

type Done = Record<string, boolean>;
interface Remote { done?: Done; gen?: GenStats }

/** Combine progress from this device with the account's: a tick on either side stays ticked; scores keep the larger count. */
function merge(localDone: Done, localGen: GenStats, remote: Remote) {
  const done: Done = { ...(remote.done ?? {}) };
  for (const [k, v] of Object.entries(localDone)) if (v) done[k] = true;
  const gen: GenStats = { ...(remote.gen ?? {}) };
  for (const [k, v] of Object.entries(localGen)) {
    const r = gen[k];
    gen[k] = r ? { tried: Math.max(r.tried, v.tried), right: Math.max(r.right, v.right) } : v;
  }
  return { done, gen };
}

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const enabled = !!firebaseConfig;
  const [ready, setReady] = useState(!enabled);
  const [user, setUser] = useState<User | null>(null);
  const [syncing, setSyncing] = useState(false);
  const fb = useRef<{ auth: Auth; db: Firestore; m: typeof import("firebase/auth"); fs: typeof import("firebase/firestore") } | null>(null);

  // Load Firebase only when it's configured, so the rest of the site stays light.
  useEffect(() => {
    if (!firebaseConfig) return;
    let unsub = () => {};
    (async () => {
      const [{ initializeApp, getApps }, m, fs] = await Promise.all([import("firebase/app"), import("firebase/auth"), import("firebase/firestore")]);
      const app = getApps()[0] ?? initializeApp(firebaseConfig);
      const auth = m.getAuth(app);
      fb.current = { auth, db: fs.getFirestore(app), m, fs };
      m.getRedirectResult(auth).catch(() => {});
      unsub = m.onAuthStateChanged(auth, (u) => { setUser(u); setReady(true); });
    })();
    return () => unsub();
  }, []);

  // Sync progress with users/{uid} while signed in.
  useEffect(() => {
    const f = fb.current;
    if (!user || !f) return;
    const ref = f.fs.doc(f.db, "users", user.uid);
    let lastSent = "";
    let timer: ReturnType<typeof setTimeout> | undefined;
    let stopRemote = () => {};
    let stopLocal = () => {};
    let cancelled = false;

    const snapshot = () => JSON.stringify({ done: readDone(), gen: readGen() });
    const push = () => {
      const body = snapshot();
      if (body === lastSent) return;
      lastSent = body;
      setSyncing(true);
      f.fs.setDoc(ref, { ...JSON.parse(body), updatedAt: f.fs.serverTimestamp() }, { merge: true })
        .catch(() => { lastSent = ""; })
        .finally(() => setSyncing(false));
    };

    (async () => {
      setSyncing(true);
      try {
        const snap = await f.fs.getDoc(ref);
        if (cancelled) return;
        const merged = merge(readDone(), readGen(), (snap.data() as Remote) ?? {});
        replaceDone(merged.done);
        writeGen(merged.gen);
        push();
      } finally {
        setSyncing(false);
      }
      // changes made on another device
      stopRemote = f.fs.onSnapshot(ref, (s) => {
        if (s.metadata.hasPendingWrites) return;
        const r = (s.data() as Remote) ?? {};
        const body = JSON.stringify({ done: r.done ?? {}, gen: r.gen ?? {} });
        if (body === snapshot()) return;
        lastSent = body;
        replaceDone(r.done ?? {});
        writeGen(r.gen ?? {});
      });
      // changes made here
      const onLocal = () => { clearTimeout(timer); timer = setTimeout(push, 800); };
      const a = subscribeDone(onLocal), b = subscribeGen(onLocal);
      stopLocal = () => { a(); b(); };
    })();

    return () => { cancelled = true; clearTimeout(timer); stopRemote(); stopLocal(); };
  }, [user]);

  const need = () => {
    if (!fb.current) throw new Error("Sign-in is still loading. Try again in a moment.");
    return fb.current;
  };

  const signInGoogle = useCallback(async () => {
    const { auth, m } = need();
    const provider = new m.GoogleAuthProvider();
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      await m.signInWithPopup(auth, provider);
    } catch (e) {
      const code = (e as { code?: string }).code;
      if (code === "auth/popup-blocked" || code === "auth/operation-not-supported-in-this-environment") await m.signInWithRedirect(auth, provider);
      else throw e;
    }
  }, []);
  const signInEmail = useCallback(async (email: string, password: string) => {
    const { auth, m } = need();
    await m.signInWithEmailAndPassword(auth, email.trim(), password);
  }, []);
  const signUpEmail = useCallback(async (name: string, email: string, password: string) => {
    const { auth, m } = need();
    const cred = await m.createUserWithEmailAndPassword(auth, email.trim(), password);
    if (name.trim()) {
      await m.updateProfile(cred.user, { displayName: name.trim() });
      setUser({ ...cred.user } as User);
    }
  }, []);
  const resetPassword = useCallback(async (email: string) => {
    const { auth, m } = need();
    await m.sendPasswordResetEmail(auth, email.trim());
  }, []);
  const signOut = useCallback(async () => {
    const { auth, m } = need();
    await m.signOut(auth);
  }, []);

  const value: Account = {
    enabled, ready, syncing,
    user: user ? { uid: user.uid, name: user.displayName, email: user.email, photo: user.photoURL } : null,
    signInGoogle, signInEmail, signUpEmail, resetPassword, signOut,
  };
  return <AccountContext.Provider value={value}>{children}</AccountContext.Provider>;
}

/** Plain-language messages for Firebase sign-in errors. */
export function authMessage(e: unknown): string {
  const code = (e as { code?: string }).code ?? "";
  const map: Record<string, string> = {
    "auth/invalid-email": "That email address doesn't look right. Check for typos.",
    "auth/missing-password": "Enter your password.",
    "auth/invalid-credential": "The email or password is incorrect.",
    "auth/wrong-password": "The email or password is incorrect.",
    "auth/user-not-found": "There's no account with that email. Create one instead.",
    "auth/email-already-in-use": "An account with this email already exists. Sign in instead.",
    "auth/weak-password": "Use a password with at least 6 characters.",
    "auth/too-many-requests": "Too many tries. Wait a few minutes, then try again.",
    "auth/popup-closed-by-user": "The Google window was closed before signing in finished.",
    "auth/cancelled-popup-request": "The Google window was closed before signing in finished.",
    "auth/network-request-failed": "No connection. Check your internet and try again.",
    "auth/unauthorized-domain": "This website isn't allowed to sign in yet. Add it under Authorized domains in Firebase.",
    "auth/operation-not-allowed": "This sign-in method isn't turned on in Firebase yet.",
  };
  return map[code] ?? ((e as Error).message || "Something went wrong. Try again.");
}
