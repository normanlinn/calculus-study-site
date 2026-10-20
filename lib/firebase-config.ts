import type { FirebaseOptions } from "firebase/app";

// Web app config from Firebase console → Project settings → Your apps.
// These values identify the project; they are meant to be public. Access is protected by the
// Firestore security rules (each signed-in user can only read and write their own progress).
// Set this to null to hide sign-in and keep progress in the browser only.
export const firebaseConfig: FirebaseOptions | null = {
  apiKey: "AIzaSyAzVRyZIF-WuIapvXyufoztwR8t84OXA8w",
  authDomain: "calculus-study-site.firebaseapp.com",
  projectId: "calculus-study-site",
  storageBucket: "calculus-study-site.firebasestorage.app",
  messagingSenderId: "200135747429",
  appId: "1:200135747429:web:ee2a04017e1e72d02d638c",
};
