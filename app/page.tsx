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
            Midterm 2 is tomorrow, Thu, Nov 5, and covers §2.8 through §4.1. Start with the crash course: 10 short lessons, one per section, each with
            examples you step through one line at a time. Then take the timed mock midterm and fix what you missed.
          </p>
        </HeroFade>
        <HeroFade delay={0.45}>
          <div className="countdowns">
            <Link href="/midterm-2/"><Countdown target="2026-11-05" label="Midterm 2" /></Link>
          </div>
        </HeroFade>
        <HeroGraph />
        <HeroFade delay={0.5}>
          <div className="cta-row">
            <Link className="cta" href="/crash-course/">Start the crash course →</Link>
            <Link className="cta ghost" href="/midterm-2/#tonight">Tonight's plan</Link>
            <Link className="cta ghost" href="/midterm-2/#mock">Take the mock midterm</Link>
            <Ring ids={unitProblemIds("q4")} />
          </div>
        </HeroFade>
      </section>
      <h2 className="unit-head">Quiz 4 · §3.6–4.1 <span>Midterm 2 review</span></h2>
      <Cards list={q4} />
      <h2 className="unit-head">Quiz 3 · §2.8–3.5 <span>Midterm 2 review</span></h2>
      <Cards list={q3} />
      <h2 className="unit-head">Study tools</h2>
      <Cards list={tools} />
    </>
  );
}
