import Link from "next/link";
import { sections } from "@/content/sections";
import { allProblemIds } from "@/content/nav";
import { plain, problemIds } from "@/lib/tex";
import HeroGraph from "@/components/HeroGraph";
import { CardBar, Ring } from "@/components/Progress";
import { Stagger } from "@/components/Reveal";
import { HeroTitle, HeroFade } from "@/components/HeroTitle";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <HeroFade delay={0}><span className="eyebrow">Stewart · Calculus: Early Transcendentals 9e · Math 190 exam prep</span></HeroFade>
        <HeroTitle />
        <HeroFade delay={0.35}>
          <p className="lede">
            Sections 2.8, 3.1, 3.2, 3.3, 3.4 and 3.5. Each section explains the idea, gives you a graph you can drag, works examples step by step,
            then gives you practice problems with hints and full solutions.
          </p>
        </HeroFade>
        <HeroGraph />
        <HeroFade delay={0.5}>
          <div className="cta-row">
            <Link className="cta" href="/practice-quiz/">Start the practice quiz →</Link>
            <Link className="cta ghost" href="/2-8/">Learn from §2.8</Link>
            <Ring ids={allProblemIds} />
          </div>
        </HeroFade>
      </section>
      <Stagger className="cards">
        {sections.map((s) => (
          <Link key={s.slug} href={`/${s.slug}/`} className="card">
            <span className="num">{s.num}</span>
            <h3>{s.title}</h3>
            <p>{plain(s.lede)}</p>
            <CardBar ids={problemIds(s)} />
            <span className="go" aria-hidden>→</span>
          </Link>
        ))}
      </Stagger>
    </>
  );
}
