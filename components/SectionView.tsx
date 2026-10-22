import type { Block } from "@/content/types";
import Lab from "./Lab";
import Problem from "./Problem";
import Quiz from "./Quiz";
import Flashcards from "./Flashcards";
import SheetCards from "./SheetCards";
import { LazyChecker, LazyGenerator, LazyGrades, LazyInvTrig, LazyMock } from "./GenerateTools";
import Countdown from "./Countdown";
import Reveal, { Stagger } from "./Reveal";

const H = ({ html, className }: { html: string; className?: string }) => <div className={className} dangerouslySetInnerHTML={{ __html: html }} />;

function BlockView({ b }: { b: Block }) {
  switch (b.type) {
    case "heading":
      return <Reveal><h3 id={b.id}>{b.text}</h3></Reveal>;
    case "prose":
      return <Reveal><H className="prose" html={b.html} /></Reveal>;
    case "lab":
      return <Reveal><Lab id={b.id} html={b.html} /></Reveal>;
    case "rules":
      return <Stagger className="rules">{b.items.map((r, i) => <H key={i} className={"rule" + (r.key ? " key" : "")} html={r.html} />)}</Stagger>;
    case "examples":
      return (
        <div className="examples">
          {b.items.map((e, i) => (
            <Reveal key={i}>
              <div className="ex"><span className="label">{e.label}</span><H html={e.html} /></div>
            </Reveal>
          ))}
        </div>
      );
    case "practice":
      return <Stagger className="practice">{b.items.map((p) => <Problem key={p.id} p={p} />)}</Stagger>;
    case "traps":
      return <Stagger className="traps">{b.items.map((t, i) => <div key={i} className="trap"><b>{t.title}</b><H html={t.html} /></div>)}</Stagger>;
    case "quiz":
      return <Quiz items={b.items} />;
    case "flashcards":
      return <Flashcards items={b.items} />;
    case "sheet":
      return <SheetCards items={b.items} />;
    case "generator":
      return <LazyGenerator />;
    case "checker":
      return <LazyChecker />;
    case "countdown":
      return <Countdown target={b.target} label={b.label} />;
    case "mock":
      return <LazyMock />;
    case "gradecalc":
      return <LazyGrades />;
    case "invtrig":
      return <LazyInvTrig />;
  }
}

export default function SectionView({ blocks }: { blocks: Block[] }) {
  return <div className="blocks">{blocks.map((b, i) => <BlockView key={i} b={b} />)}</div>;
}
