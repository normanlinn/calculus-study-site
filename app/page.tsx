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
  const q5own = sections.filter((s) => s.unit === "q5");
  const q5 = [...q5own.slice(0, 1), ...sections.filter((s) => s.unit !== "q5" && s.also?.includes("q5")), ...q5own.slice(1)];
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
            Quiz 5 covers §4.1–4.9: shape of a graph, l&apos;Hospital&apos;s Rule, curve sketching, optimization, Newton&apos;s method and antiderivatives.
            Every section has a short lesson and practice problems you can step through line by line.
          </p>
        </HeroFade>
        <HeroFade delay={0.45}>
          <div className="countdowns">
            <Link href="/quiz-5/"><Countdown target="2026-11-12" label="Quiz 5" /></Link>
          </div>
        </HeroFade>
        <HeroGraph />
        <HeroFade delay={0.5}>
          <div className="cta-row">
            <Link className="cta" href="/quiz-5/">Quiz 5 plan →</Link>
            <Link className="cta ghost" href="/4-3/">Start with §4.3</Link>
            <Link className="cta ghost" href="/quick-quiz/">Quick quiz</Link>
            <Ring ids={unitProblemIds("q5")} />
          </div>
        </HeroFade>
      </section>
      <h2 className="unit-head">Quiz 5 · §4.1–4.9 <span>Thu, Nov 12</span></h2>
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
