# Setting up sign-in (email + Google)

Sign-in uses Firebase (free Spark plan). Until `lib/firebase-config.ts` has a config, the Sign in button stays hidden and progress is kept in the browser only.

## 1. Create the Firebase project
1. Go to https://console.firebase.google.com and sign in with your Google account.
2. **Create a project** → name it `calculus-study-site` → Google Analytics: off → **Create project**.

## 2. Register the website
1. On the project overview, click the **Web** icon (`</>`).
2. App nickname: `Derivatives Field Guide`. Leave "Firebase Hosting" unchecked → **Register app**.
3. Copy the `firebaseConfig = { ... }` block it shows. Send it to Claude, or paste it into `lib/firebase-config.ts`.

## 3. Turn on sign-in methods
**Build → Authentication → Get started → Sign-in method**
- **Email/Password** → Enable (leave "Email link" off) → Save.
- **Google** → Enable → choose your support email → Save.

## 4. Allow the website's address
**Authentication → Settings → Authorized domains → Add domain** → `normanlinn.github.io`
(`localhost` is already listed, for testing.)

## 5. Create the database
1. **Build → Firestore Database → Create database**.
2. Location: one near you (for example `nam5 (United States)`). This can't be changed later.
3. Start in **production mode** → Create.
4. Open the **Rules** tab, replace everything with the contents of `firestore.rules` in this repo → **Publish**.

## 6. Publish
With the config in `lib/firebase-config.ts`, run `npm run deploy`. The Sign in button appears in the top bar.

## What gets stored
One document per student at `users/{uid}`: the "I can do this" ticks, Generate-page scores, and an update time. The rules above let each student read and write only their own document.

## Adding Apple later
Needs a paid Apple Developer account. In short: create an App ID and a Services ID with "Sign in with Apple", add the return URL `https://<project-id>.firebaseapp.com/__/auth/handler`, create a Sign in with Apple key (.p8), then enable **Apple** in Firebase → Authentication with the Services ID, Team ID, Key ID and key. Then add the Apple button in `components/AccountButton.tsx`.
