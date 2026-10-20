# Derivatives Field Guide

An interactive study site for Stewart, *Calculus: Early Transcendentals* (9th ed.), sections 2.8 and 3.1–3.5, made for Math 190 quiz prep.

**Live site:** https://normanlinn.github.io/calculus-study-site/

- The 18-question Math 190 practice quiz with step-by-step solutions
- A page for each section with rules, worked examples and common mistakes
- 8 interactive graphs (secant to tangent, tracing f′, why e is special, product rule area, sin/cos slopes, chain rule, implicit tangent lines)
- 77 practice problems with hints and solutions, a 10-question mixed quiz and a cheat sheet
- Page transitions, scroll reveals, animated solutions and progress tracking (saved in your browser)

## Built with

Next.js 15 (App Router, static export), TypeScript, React 19, Motion for animations, and KaTeX (math is rendered at build time).

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Deploy

```bash
npm run deploy
```

This builds the static site into `out/` and pushes it to the `gh-pages` branch, which GitHub Pages serves.

Before deploying, add a line at the top of `content/updates.json` describing the change. Anyone who has the site open sees an "updated" banner within about a minute, showing that line, with a Refresh button.

## Where things are

- `content/sections.ts` – all lesson text, problems and solutions (TeX inside `\( \)` and `\[ \]`)
- `lib/labs.ts` – the interactive canvas graphs
- `components/` – navigation, problem cards, quiz, animations
- `app/` – the home page and one page per section
- `legacy/index.html` – the original single-file version
