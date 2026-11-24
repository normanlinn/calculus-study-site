import Link from "next/link";
import { sections } from "@/content/sections";
import { unitProblemIds } from "@/content/nav";
import type { Section } from "@/content/types";
import { plain, problemIds } from "@/lib/tex";
import HeroGraph from "@/components/HeroGraph";
import { CardBar, Ring } from "@/components/Progress";
import { Stagger } from "@/components/Reveal";
import { HeroTitle, HeroFade } from "@/components/HeroTitle";
import Countdown from "@/components/Countdown";
import MathGlyphs from "@/components/MathGlyphs";

function Cards({ list }: { list: Section[] }) {
  return (
    <Stagger className="cards">
      {list.map((s) => (
        <Link key={s.slug} href={`/${s.slug}/`} className="card">
          <span className="num">{s.num}</span>
          <h3>{s.title}</h3>
          <p>{plain(s.lede)}</p>
          <CardBar ids={problemIds(s)} />
          <span className="go" aria-hidden>→</span>
        </Link>
      ))}
    </Stagger>
  );
}

export default function Home() {
  const m3Own = sections.filter((s) => s.unit === "m3");
  const m3 = [m3Own[0], ...sections.filter((s) => s.also?.includes("m3")), ...m3Own.slice(1)];
  const q5 = sections.filter((s) => s.unit === "q5");
  const later = sections.filter((s) => s.unit === "later");
  const q4 = sections.filter((s) => s.unit === "q4");
  const q3 = sections.filter((s) => s.unit === "q3");
  const tools = sections.filter((s) => !s.unit);
  return (
    <>
      <section className="home-hero">
        <MathGlyphs />
        <HeroFade delay={0}><span className="eyebrow">Stewart · Calculus: Early Transcendentals 9e · Math 190</span></HeroFade>
        <HeroTitle />
        <HeroFade delay={0.35}>
          <p className="lede">
            Midterm 3 is Tue, Dec 1 (§4.3–5.5) and the final is Tue, Dec 8 (everything, Ch. 1–5).
            Every section has a short lesson and practice problems you can step through line by line, plus a practice exam for each test and a day-by-day plan.
          </p>
        </HeroFade>
        <HeroFade delay={0.45}>
          <div className="countdowns">
            <Link href="/midterm-3/"><Countdown target="2026-12-01" label="Midterm 3" /></Link>
            <Link href="/final/"><Countdown target="2026-12-08" label="Final" /></Link>
          </div>
        </HeroFade>
        <HeroGraph />
        <HeroFade delay={0.5}>
          <div className="cta-row">
            <Link className="cta" href="/midterm-3/">Midterm 3 plan →</Link>
            <Link className="cta ghost" href="/final/#checklist">Final checklist</Link>
            <Link className="cta ghost" href="/warmup/">Warm-up</Link>
            <Ring ids={unitProblemIds("m3")} />
          </div>
        </HeroFade>
      </section>
      <h2 className="unit-head">Midterm 3 · §4.3–5.5 <span>Tue, Dec 1</span></h2>
      <Cards list={m3} />
      <h2 className="unit-head">Final · Ch. 1–5, plus Midterm 1 material <span>Tue, Dec 8</span></h2>
      <Cards list={later} />
      <h2 className="unit-head">Quiz 5 · §4.3–4.5, 4.7 <span>Done · Nov 17</span></h2>
      <Cards list={q5} />
      <h2 className="unit-head">Quiz 4 · §3.6–4.1 <span>Midterm 2 review</span></h2>
      <Cards list={q4} />
      <h2 className="unit-head">Quiz 3 · §2.8–3.5 <span>Midterm 2 review</span></h2>
      <Cards list={q3} />
      <h2 className="unit-head">Study tools</h2>
      <Cards list={tools} />
    </>
  );
}
