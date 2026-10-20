import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, JetBrains_Mono, Source_Serif_4 } from "next/font/google";
import "katex/dist/katex.min.css";
import "./globals.css";
import Nav from "@/components/Nav";
import Providers from "@/components/Providers";

const display = Bricolage_Grotesque({ subsets: ["latin"], weight: ["500", "700", "800"], variable: "--ff-display" });
const body = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], style: ["normal", "italic"], variable: "--ff-body" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "600"], variable: "--ff-mono" });

export const metadata: Metadata = {
  title: { default: "Derivatives Field Guide", template: "%s · Derivatives Field Guide" },
  description: "Interactive study guide for Stewart Calculus §2.8 and §3.1–3.5: visual labs, worked examples and practice problems with full solutions.",
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, viewportFit: "cover" };

// Apply a saved light/dark choice before first paint.
const themeScript = `try{var t=localStorage.getItem("deriv-guide-theme");if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>
        <Providers>
          <Nav />
          <main className="wrap">{children}</main>
          <footer className="wrap">
            Practice problems follow the exercise numbering in Stewart, Clegg &amp; Watson, <em>Calculus: Early Transcendentals</em>, 9th ed.
            Your “I can do this” ticks are saved in this browser only.
          </footer>
        </Providers>
      </body>
    </html>
  );
}
