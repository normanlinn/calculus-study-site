import Link from "next/link";
import { sections } from "@/content/sections";
import { unitProblemIds, UNITS } from "@/content/nav";
import type { Section } from "@/content/types";
import { plain, problemIds } from "@/lib/tex";
import HeroGraph from "@/components/HeroGraph";
import { CardBar, Ring } from "@/components/Progress";
import { Stagger } from "@/components/Reveal";
import { HeroTitle, HeroFade } from "@/components/HeroTitle";
import Countdown from "@/components/Countdown";

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
  const q4 = sections.filter((s) => s.unit === "q4");
  const q3 = sections.filter((s) => s.unit === "q3");
  const tools = sections.filter((s) => !s.unit);
  return (
    <>
      <section className="home-hero">
        <HeroFade delay={0}><span className="eyebrow">Stewart · Calculus: Early Transcendentals 9e · Math 190</span></HeroFade>
        <HeroTitle />
        <HeroFade delay={0.35}>
          <p className="lede">
            Quiz 4 covers sections 3.6, 3.9, 3.10, 3.11 and 4.1. Each section explains the idea, gives you a graph you can drag, works examples step by step,
            then gives you your assigned problems with hints and full solutions. Quiz 3 material (2.8–3.5) is still here for Midterm 2 review.
          </p>
        </HeroFade>
        <HeroFade delay={0.45}>
          <div className="countdowns">
            <Link href="/quiz-4/"><Countdown target={UNITS[0].date!} label="Quiz 4" /></Link>
            <Link href="/midterm-2/"><Countdown target="2026-10-29" label="Midterm 2" /></Link>
          </div>
        </HeroFade>
        <HeroGraph />
        <HeroFade delay={0.5}>
          <div className="cta-row">
            <Link className="cta" href="/quiz-4/">Open the Quiz 4 plan →</Link>
            <Link className="cta ghost" href="/3-6/">Start with §3.6</Link>
            <Ring ids={unitProblemIds("q4")} />
          </div>
        </HeroFade>
      </section>
      <h2 className="unit-head">Quiz 4 · §3.6–4.1 <span>Tue, Oct 27</span></h2>
      <Cards list={q4} />
      <h2 className="unit-head">Quiz 3 · §2.8–3.5 <span>Midterm 2 review</span></h2>
      <Cards list={q3} />
      <h2 className="unit-head">Study tools</h2>
      <Cards list={tools} />
    </>
  );
}
