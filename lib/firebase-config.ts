import type { FirebaseOptions } from "firebase/app";

// Paste the web app config from Firebase console → Project settings → Your apps.
// These values identify the project; they are meant to be public. Access is protected by the
// Firestore security rules (each signed-in user can only read and write their own progress).
// While this is null, sign-in stays hidden and progress is kept in the browser only.
export const firebaseConfig: FirebaseOptions | null = null;
