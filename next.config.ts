import type { NextConfig } from "next";
import path from "node:path";
import fs from "node:fs";

// GitHub Pages serves the site from /calculus-study-site, so the deploy workflow sets this.
const basePath = process.env.PAGES_BASE_PATH ?? "";

// Each build gets an id. Open pages poll public/version.json and offer a refresh when the id changes.
const buildId = Date.now().toString(36);
const buildTime = new Date().toISOString();
const updates: { date: string; text: string }[] = JSON.parse(fs.readFileSync(path.join(__dirname, "content/updates.json"), "utf8"));
fs.mkdirSync(path.join(__dirname, "public"), { recursive: true });
fs.writeFileSync(path.join(__dirname, "public/version.json"), JSON.stringify({ id: buildId, time: buildTime, note: updates[0]?.text ?? "" }));

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath, NEXT_PUBLIC_BUILD_ID: buildId, NEXT_PUBLIC_BUILD_TIME: buildTime },
  images: { unoptimized: true },
  outputFileTracingRoot: path.join(__dirname),
};

export default nextConfig;
