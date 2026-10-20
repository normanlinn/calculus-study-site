import type { Metadata, Viewport } from "next";
import "katex/dist/katex.min.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Providers from "@/components/Providers";
import UpdateNotice from "@/components/UpdateNotice";

// Fonts load in the browser from Google Fonts, so the build never needs to download them.
const FONTS =
  "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Source+Serif+4:ital,opsz,wght@0,8..60,400;0,8..60,600;1,8..60,400&family=JetBrains+Mono:wght@400;600&display=swap";

const DESCRIPTION = "Interactive study guide for Stewart Calculus §2.8 and §3.1–3.5: visual labs, worked examples and practice problems with full solutions.";

const BASE = process.env.PAGES_BASE_PATH ?? "";

export const metadata: Metadata = {
  metadataBase: new URL("https://normanlinn.github.io"),
  icons: { icon: { url: `${BASE}/icon.svg`, type: "image/svg+xml" }, apple: `${BASE}/apple-touch-icon.png` },
  title: { default: "Derivatives Field Guide", template: "%s · Derivatives Field Guide" },
  description: DESCRIPTION,
  applicationName: "Derivatives Field Guide",
  openGraph: {
    type: "website",
    siteName: "Derivatives Field Guide",
    title: "Derivatives Field Guide",
    description: DESCRIPTION,
    url: `${BASE}/`,
    images: [{ url: `${BASE}/og-image.png`, width: 1200, height: 630, alt: "Derivatives Field Guide: Stewart Calculus 2.8 and 3.1–3.5" }],
  },
  twitter: { card: "summary_large_image", title: "Derivatives Field Guide", description: DESCRIPTION, images: [`${BASE}/og-image.png`] },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover", themeColor: "#18212e" };

// Apply a saved light/dark choice before first paint.
const themeScript = `try{var t=localStorage.getItem("deriv-guide-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link rel="stylesheet" href={FONTS} />
      </head>
      <body>
        <Providers>
          <Nav />
          <main className="wrap">{children}</main>
          <footer className="wrap">
            Practice problems follow the exercise numbering in Stewart, Clegg &amp; Watson, <em>Calculus: Early Transcendentals</em>, 9th ed.
            Your “I can do this” ticks are saved in this browser only.
            <br />
            Last updated{" "}
            {new Date(process.env.NEXT_PUBLIC_BUILD_TIME ?? Date.now()).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric", timeZone: "America/Los_Angeles" })}.
            This page tells you when a newer version is published.
          </footer>
          <UpdateNotice />
        </Providers>
      </body>
    </html>
  );
}
