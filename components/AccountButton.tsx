"use client";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { authMessage, useAccount } from "./AuthProvider";

type Mode = "signin" | "signup" | "reset";

const GoogleLogo = () => (
  <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
    <path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.6l6.8-6.8C35.8 2.4 30.3 0 24 0 14.6 0 6.6 5.4 2.7 13.3l7.9 6.1C12.5 13.7 17.8 9.5 24 9.5z" />
    <path fill="#4285F4" d="M46.1 24.5c0-1.6-.1-3.1-.4-4.5H24v9h12.4c-.5 2.9-2.2 5.3-4.6 6.9l7.4 5.8c4.3-4 6.9-9.9 6.9-17.2z" />
    <path fill="#FBBC05" d="M10.6 28.6c-.5-1.4-.8-3-.8-4.6s.3-3.2.8-4.6l-7.9-6.1C1 16.6 0 20.2 0 24s1 7.4 2.7 10.7l7.9-6.1z" />
    <path fill="#34A853" d="M24 48c6.5 0 11.9-2.1 15.9-5.8l-7.4-5.8c-2.1 1.4-4.8 2.3-8.5 2.3-6.2 0-11.5-4.2-13.4-9.9l-7.9 6.1C6.6 42.6 14.6 48 24 48z" />
  </svg>
);

export default function AccountButton() {
  const acct = useAccount();
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<Mode>("signin");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState<{ kind: "error" | "ok"; text: string } | null>(null);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => setMounted(true), []);
  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    const opener = btnRef.current;
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", onKey); opener?.focus(); };
  }, [open]);
  // close the window once sign-in succeeds
  useEffect(() => { if (acct.user && open && mode !== "reset") { setMsg(null); setPassword(""); } }, [acct.user, open, mode]);

  if (!acct.enabled) return null;

  const run = async (fn: () => Promise<void>, ok?: string) => {
    setBusy(true); setMsg(null);
    try { await fn(); if (ok) setMsg({ kind: "ok", text: ok }); }
    catch (e) { setMsg({ kind: "error", text: authMessage(e) }); }
    finally { setBusy(false); }
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === "signin") run(() => acct.signInEmail(email, password));
    else if (mode === "signup") run(() => acct.signUpEmail(name, email, password));
    else run(() => acct.resetPassword(email), `If an account exists for ${email.trim()}, a reset link is on its way. Check your inbox and spam folder.`);
  };

  const u = acct.user;
  const initial = (u?.name || u?.email || "?").trim().charAt(0).toUpperCase();

  return (
    <>
      <button ref={btnRef} type="button" className={u ? "acct-avatar" : "acct-signin"} onClick={() => { setOpen(true); setMsg(null); }}
        aria-label={u ? `Account: ${u.name || u.email}` : "Sign in"} disabled={!acct.ready}>
        {u ? (u.photo ? <img src={u.photo} alt="" referrerPolicy="no-referrer" /> : initial) : "Sign in"}
      </button>

      {mounted && open && createPortal(
        <div className="modal-backdrop" onClick={() => setOpen(false)}>
          <div className="modal acct-modal" role="dialog" aria-modal="true" aria-labelledby="acct-title" onClick={(e) => e.stopPropagation()}>
            <div className="modal-head">
              <h3 id="acct-title">{u ? "Your account" : mode === "signup" ? "Create an account" : mode === "reset" ? "Reset your password" : "Sign in"}</h3>
              <button ref={closeRef} type="button" className="modal-x" onClick={() => setOpen(false)} aria-label="Close">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
              </button>
            </div>
            <div className="modal-body">
              {u ? (
                <>
                  <div className="acct-who">
                    <span className="acct-avatar big">{u.photo ? <img src={u.photo} alt="" referrerPolicy="no-referrer" /> : initial}</span>
                    <div><b>{u.name || "Signed in"}</b><span>{u.email}</span></div>
                  </div>
                  <p className="acct-status">{acct.syncing ? "Saving your progress…" : "✓ Your progress is saved to your account and syncs to every device you sign in on."}</p>
                  <button type="button" className="btn" onClick={() => run(acct.signOut)} disabled={busy}>Sign out</button>
                  <p className="note">Signing out keeps a copy of your progress on this device.</p>
                </>
              ) : (
                <>
                  <p>Save your “I can do this” ticks and generator scores, and pick up where you left off on any phone or computer.</p>
                  {mode !== "reset" && (
                    <>
                      <button type="button" className="acct-google" onClick={() => run(acct.signInGoogle)} disabled={busy}>
                        <GoogleLogo /> Continue with Google
                      </button>
                      <div className="acct-or"><span>or use email</span></div>
                    </>
                  )}
                  <form className="acct-form" onSubmit={submit}>
                    {mode === "signup" && (
                      <label>Name<input id="acct-name" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" /></label>
                    )}
                    <label>Email<input id="acct-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" /></label>
                    {mode !== "reset" && (
                      <label>Password<input id="acct-password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)}
                        autoComplete={mode === "signup" ? "new-password" : "current-password"} /></label>
                    )}
                    <button type="submit" className="cta" disabled={busy}>
                      {busy ? "One moment…" : mode === "signup" ? "Create account" : mode === "reset" ? "Send reset link" : "Sign in"}
                    </button>
                  </form>
                  <div className="acct-links">
                    {mode === "signin" && <><button type="button" onClick={() => { setMode("signup"); setMsg(null); }}>New here? Create an account</button>
                      <button type="button" onClick={() => { setMode("reset"); setMsg(null); }}>Forgot password?</button></>}
                    {mode !== "signin" && <button type="button" onClick={() => { setMode("signin"); setMsg(null); }}>Back to sign in</button>}
                  </div>
                </>
              )}
              {msg && <p className={"gen-verdict " + (msg.kind === "error" ? "wrong" : "right")} role="alert">{msg.text}</p>}
            </div>
          </div>
        </div>,
        document.body,
      )}
    </>
  );
}
