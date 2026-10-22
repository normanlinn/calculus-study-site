"use client";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

// Math 190 (Martinez, Fall 2026): quizzes 10% (lowest dropped), midterms 50%, final 40%,
// or the final alone if that is higher. A 90, B 80, C 70, D 60.
const KEY = "deriv-guide-grades";
const W = { quiz: 0.1, mid: 0.5 / 3, fin: 0.4 };
const LETTERS: [string, number][] = [["A", 90], ["B", 80], ["C", 70], ["D", 60]];

interface Score { got: string; out: string }
interface State { quizzes: Score[]; mids: Score[]; fin: Score; future: number }

const blank = (out = ""): Score => ({ got: "", out });
const INITIAL: State = { quizzes: [blank("10"), blank("10"), blank("10"), blank("10")], mids: [blank(), blank(), blank()], fin: blank(), future: 85 };

const pct = (s: Score) => {
  const g = parseFloat(s.got), o = parseFloat(s.out);
  return Number.isFinite(g) && Number.isFinite(o) && o > 0 ? (100 * g) / o : null;
};
const letter = (p: number) => LETTERS.find(([, min]) => p >= min)?.[0] ?? "F";
const r1 = (v: number) => (Math.round(v * 10) / 10).toFixed(1);

export default function GradeCalc() {
  const [s, setS] = useState<State>(INITIAL);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    try { const raw = localStorage.getItem(KEY); if (raw) setS({ ...INITIAL, ...JSON.parse(raw) }); } catch {}
    setLoaded(true);
  }, []);
  useEffect(() => { if (loaded) try { localStorage.setItem(KEY, JSON.stringify(s)); } catch {} }, [s, loaded]);

  const calc = useMemo(() => {
    const qs = s.quizzes.map(pct).filter((v): v is number => v !== null);
    const kept = qs.length >= 2 ? [...qs].sort((a, b) => a - b).slice(1) : qs;
    const quizAvg = kept.length ? kept.reduce((a, b) => a + b, 0) / kept.length : null;
    const mids = s.mids.map(pct);
    const fin = pct(s.fin);
    const known = mids.filter((v): v is number => v !== null);

    // grade so far, using only what has been graded
    let wSum = 0, pts = 0;
    if (quizAvg !== null) { wSum += W.quiz; pts += W.quiz * quizAvg; }
    known.forEach((m) => { wSum += W.mid; pts += W.mid * m; });
    if (fin !== null) { wSum += W.fin; pts += W.fin * fin; }
    const sofar = wSum ? pts / wSum : null;

    // what's needed on every remaining exam (same score x on each), quizzes staying at their average
    const q = quizAvg ?? s.future;
    const unknownMids = mids.filter((v) => v === null).length;
    const fixed = W.quiz * q + W.mid * known.reduce((a, b) => a + b, 0) + (fin !== null ? W.fin * fin : 0);
    const slope = W.mid * unknownMids + (fin === null ? W.fin : 0);
    const need = LETTERS.slice(0, 3).map(([L, T]) => ({ L, T, x: slope > 0 ? (T - fixed) / slope : null }));

    // projection: score `future` on everything left
    const weighted = fixed + slope * s.future;
    const finalScore = fin ?? s.future;
    const projected = Math.max(weighted, finalScore);
    return { quizAvg, dropped: qs.length >= 2, sofar, need, weighted, finalScore, projected, finTaken: fin !== null, remaining: unknownMids + (fin === null ? 1 : 0) };
  }, [s]);

  const upd = (fn: (d: State) => void) => setS((p) => { const d = structuredClone(p); fn(d); return d; });
  const field = (val: Score, set: (v: Score) => void, label: string, id: string) => (
    <div className="gc-score">
      <label htmlFor={id}>{label}</label>
      <span>
        <input id={id} inputMode="decimal" placeholder="score" value={val.got} onChange={(e) => set({ ...val, got: e.target.value })} />
        <i>/</i>
        <input id={id + "-out"} inputMode="decimal" placeholder="out of" aria-label={label + " out of"} value={val.out} onChange={(e) => set({ ...val, out: e.target.value })} />
        {pct(val) !== null && <em>{r1(pct(val)!)}%</em>}
      </span>
    </div>
  );

  return (
    <div className="gc">
      <div className="gc-inputs">
        <fieldset>
          <legend>Quizzes <small>10% · lowest dropped</small></legend>
          {s.quizzes.map((q, i) => field(q, (v) => upd((d) => { d.quizzes[i] = v; }), `Quiz ${i + 1}`, `gc-q${i}`))}
          <button type="button" className="btn" onClick={() => upd((d) => { d.quizzes.push(blank("10")); })}>+ Add a quiz</button>
        </fieldset>
        <fieldset>
          <legend>Midterms <small>50% · 3 tests</small></legend>
          {s.mids.map((m, i) => field(m, (v) => upd((d) => { d.mids[i] = v; }), `Midterm ${i + 1}`, `gc-m${i}`))}
        </fieldset>
        <fieldset>
          <legend>Final <small>40% · or 100% if higher</small></legend>
          {field(s.fin, (v) => upd((d) => { d.fin = v; }), "Final exam", "gc-f")}
        </fieldset>
      </div>

      <div className="gc-results">
        <div className="gc-now">
          <span className="eyebrow">Grade so far</span>
          {calc.sofar === null ? <b>–</b> : (
            <motion.b key={r1(calc.sofar)} initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>{r1(calc.sofar)}% <small>{letter(calc.sofar)}</small></motion.b>
          )}
          <span>{calc.sofar === null ? "Enter a score to start." : `From what's graded so far${calc.dropped ? ", with your lowest quiz dropped" : ""}.`}</span>
        </div>

        {calc.remaining > 0 && (
          <div className="gc-need">
            <span className="eyebrow">To finish with…</span>
            {calc.need.map(({ L, T, x }) => (
              <div key={L} className={"gc-row" + (x !== null && x <= 100 ? "" : " out")}>
                <b>{L}</b>
                <span>
                  {x === null ? "–" : x <= 0 ? "Already locked in, even with 0 on the rest" : x > 100 ? `Not through the weighting (needs ${r1(x)}%)` : <>average <strong>{r1(x)}%</strong> on the {calc.remaining} remaining exam{calc.remaining > 1 ? "s" : ""}</>}
                  {!calc.finTaken && <><br />or score <strong>{T}%</strong> on the final alone</>}
                </span>
              </div>
            ))}
            <p className="note">“Remaining exams” means the midterms you haven't entered plus the final, all at the same score.{calc.quizAvg === null ? ` Quizzes are assumed to average ${s.future}% until you enter some.` : ""}</p>
          </div>
        )}

        <div className="gc-proj">
          <label htmlFor="gc-future">If I score <b>{s.future}%</b> on everything left</label>
          <input id="gc-future" type="range" min="40" max="100" step="1" value={s.future} onChange={(e) => upd((d) => { d.future = +e.target.value; })} />
          <p>
            Weighted grade <b>{r1(calc.weighted)}%</b> · final-only <b>{r1(calc.finalScore)}%</b> → you'd get{" "}
            <motion.strong key={letter(calc.projected)} initial={{ scale: 1.4 }} animate={{ scale: 1 }} className={"gc-letter l-" + letter(calc.projected)}>{letter(calc.projected)}</motion.strong>{" "}
            ({r1(calc.projected)}%)
          </p>
        </div>
        <p className="note">Saved in this browser only. Nothing you type here is uploaded. <button type="button" className="linkish" onClick={() => setS(INITIAL)}>Clear everything</button></p>
      </div>
    </div>
  );
}
