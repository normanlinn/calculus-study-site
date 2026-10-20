import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { sections } from "@/content/sections";
import { plain, problemIds, renderSection } from "@/lib/tex";
import SectionView from "@/components/SectionView";
import { SectionProgress } from "@/components/Progress";
import { HeroFade } from "@/components/HeroTitle";

export const dynamicParams = false;
export const generateStaticParams = () => sections.map((s) => ({ slug: s.slug }));

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const s = sections.find((x) => x.slug === slug);
  return s ? { title: s.num.startsWith("§") ? `${s.num} ${s.title}` : s.title, description: plain(s.lede) } : {};
}

export default async function SectionPage({ params }: Props) {
  const { slug } = await params;
  const i = sections.findIndex((s) => s.slug === slug);
  if (i < 0) notFound();
  const s = renderSection(sections[i]);
  const prev = sections[i - 1], next = sections[i + 1];
  const big = s.num.startsWith("§") ? s.num.slice(1) : null;
  return (
    <article>
      <header className="sec-hero">
        <HeroFade delay={0}>{big ? <div className="big" aria-hidden>{big}</div> : <span className="eyebrow">{s.num}</span>}</HeroFade>
        <HeroFade delay={0.08}><h1>{s.title}</h1></HeroFade>
        <HeroFade delay={0.16}><p dangerouslySetInnerHTML={{ __html: s.lede }} /></HeroFade>
        <HeroFade delay={0.24}><SectionProgress ids={problemIds(s)} /></HeroFade>
      </header>
      <SectionView blocks={s.blocks} />
      <nav className="pager" aria-label="Previous and next section">
        {prev && <Link href={`/${prev.slug}/`}><small>← Previous</small><b>{prev.num} {prev.title}</b></Link>}
        {next && <Link className="next" href={`/${next.slug}/`}><small>Next →</small><b>{next.num} {next.title}</b></Link>}
      </nav>
    </article>
  );
}
