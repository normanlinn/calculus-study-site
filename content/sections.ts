// Generated from the original single-page guide. Lesson text, problems and solutions.
import type { Section } from "./types";

export const sections: Section[] = [
 {
  "id": "mq",
  "slug": "practice-quiz",
  "num": "Math 190 · your packet",
  "title": "Practice quiz, solved step by step",
  "lede": "All 18 questions from your study packet. Time target: 50–60 minutes. Try each one on paper first, then open the steps. The tag on each question links to the lesson below that teaches it.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">2.8 priority</span><p>1, 3, 7, 11, 21, 25, 29, 31</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">3.1 priority</span><p>3, 9, 15, 23, 31, 39, 59, 65, 71</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">3.2 priority</span><p>3, 9, 15, 21, 29, 37, 43</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">3.3 priority</span><p>1, 7, 13, 19, 27, 35, 45, 53, 59</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">3.4 priority</span><p>1, 9, 17, 25, 33, 41, 49, 57, 61</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">3.5 priority</span><p>1, 5, 11, 17, 23, 29, 35, 53, 55</p>"
     }
    ]
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "mq-1",
      "source": "Q1 · §2.8",
      "href": "2-8",
      "question": "Use the limit definition to find \\(f'(x)\\) for \\(f(x)=x^2+3x\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Expand \\(f(x+h)=(x+h)^2+3(x+h)\\). After subtracting \\(f(x)\\), every term left has an \\(h\\).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p>\\(f(x+h)=x^2+2xh+h^2+3x+3h\\)</p>\n<p>\\(f(x+h)-f(x)=2xh+h^2+3h=h(2x+h+3)\\)</p>\n<p>\\(\\dfrac{f(x+h)-f(x)}{h}=2x+h+3\\xrightarrow{h\\to0}2x+3\\)</p>\n<p class=\"ans\">\\(f'(x)=2x+3\\)</p>"
       }
      ]
     },
     {
      "id": "mq-2",
      "source": "Q2 · §2.8",
      "href": "2-8",
      "question": "Find the slope of the tangent line to \\(f(x)=x^2-4x\\) at \\(x=3\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>The tangent slope is \\(f'(3)\\). \\(f'(x)=2x-4\\) (by the definition, or the power rule).</p>\n<p class=\"ans\">\\(f'(3)=6-4=2\\)</p>"
       }
      ]
     },
     {
      "id": "mq-3",
      "source": "Q3 · §2.8",
      "href": "2-8",
      "question": "At what value is \\(f(x)=|x-2|\\) not differentiable? Explain.",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Split \\(|x-2|\\) into two cases: \\(x\\ge2\\) and \\(x\\lt2\\). Find the slope of each piece. Do they agree where the pieces meet?</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Rewrite the absolute value as two pieces.</strong> \\(|x-2|\\) means “the distance from \\(x\\) to 2”, so it is never negative. When \\(x\\lt 2\\), \\(x-2\\) is negative, so we flip its sign: \\(-(x-2)=2-x\\).</p>\n<div>\\[ f(x)=|x-2|=\\begin{cases} x-2, & x\\ge 2\\\\ 2-x, & x\\lt 2 \\end{cases} \\]</div>\n<p><strong>Step 2. Picture it.</strong> Each piece is a straight line, so the graph is a V with its point (vertex) at \\((2,0)\\).</p>\n<svg class=\"mini-graph\" viewBox=\"0 0 320 190\" role=\"img\" aria-label=\"Graph of y = |x - 2|: a V shape with its corner at (2, 0). Slope -1 on the left, +1 on the right.\">\n<line x1=\"10\" y1=\"160\" x2=\"310\" y2=\"160\" stroke=\"var(--axis)\"/>\n<line x1=\"70\" y1=\"10\" x2=\"70\" y2=\"180\" stroke=\"var(--axis)\"/>\n<polyline points=\"10,40 170,160 310,55\" fill=\"none\" stroke=\"var(--accent)\" stroke-width=\"3.5\" stroke-linejoin=\"miter\"/>\n<line x1=\"90\" y1=\"70\" x2=\"150\" y2=\"115\" stroke=\"var(--deriv)\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<line x1=\"190\" y1=\"115\" x2=\"250\" y2=\"70\" stroke=\"var(--tangent)\" stroke-width=\"2\" stroke-dasharray=\"5 4\"/>\n<circle cx=\"170\" cy=\"160\" r=\"6\" fill=\"var(--ink)\"/>\n<text x=\"176\" y=\"182\" fill=\"var(--ink)\" font-family=\"var(--font-mono)\" font-size=\"12\">(2, 0) corner</text>\n<text x=\"40\" y=\"100\" fill=\"var(--deriv)\" font-family=\"var(--font-mono)\" font-size=\"12\" font-weight=\"600\">slope −1</text>\n<text x=\"236\" y=\"100\" fill=\"var(--tangent)\" font-family=\"var(--font-mono)\" font-size=\"12\" font-weight=\"600\">slope +1</text>\n<text x=\"74\" y=\"22\" fill=\"var(--muted)\" font-family=\"var(--font-mono)\" font-size=\"11\">y</text>\n<text x=\"300\" y=\"176\" fill=\"var(--muted)\" font-family=\"var(--font-mono)\" font-size=\"11\">x</text>\n</svg>\n<p><strong>Step 3. Find the slope on each side.</strong> Right of 2, \\(f(x)=x-2\\) has slope \\(+1\\). Left of 2, \\(f(x)=2-x\\) has slope \\(-1\\). So \\(f'(x)=1\\) for \\(x\\gt 2\\) and \\(f'(x)=-1\\) for \\(x\\lt 2\\).</p>\n<p><strong>Step 4. Test \\(x=2\\) with the limit definition.</strong> Since \\(f(2)=0\\):</p>\n<div>\\[ f'(2)=\\lim_{h\\to0}\\frac{f(2+h)-f(2)}{h}=\\lim_{h\\to0}\\frac{|h|-0}{h}=\\lim_{h\\to0}\\frac{|h|}{h} \\]</div>\n<p><strong>Step 5. Check each side separately.</strong> When \\(h\\gt 0\\), \\(|h|=h\\), so \\(\\frac{|h|}{h}=1\\). When \\(h\\lt 0\\), \\(|h|=-h\\), so \\(\\frac{|h|}{h}=-1\\).</p>\n<div>\\[ \\lim_{h\\to0^+}\\frac{|h|}{h}=1 \\qquad \\lim_{h\\to0^-}\\frac{|h|}{h}=-1 \\]</div>\n<p><strong>Step 6. Conclude.</strong> The two one-sided limits are different, so the limit does not exist, so \\(f'(2)\\) does not exist. In picture terms, at a sharp corner there is no single tangent line: the curve comes in with slope −1 and leaves with slope +1.</p>\n<p><strong>Step 7. Why it is still continuous.</strong> As \\(x\\to2\\) from either side, \\(|x-2|\\to0=f(2)\\). There is no hole or jump, just a sharp point. This is the key lesson: <em>continuous does not guarantee differentiable</em>. (The reverse is true: differentiable always means continuous.)</p>\n<p class=\"ans\">Answer: \\(f\\) is not differentiable at \\(x=2\\). The left-hand slope is \\(-1\\) and the right-hand slope is \\(+1\\), so \\(\\lim_{h\\to0}\\frac{f(2+h)-f(2)}{h}\\) does not exist (the graph has a corner). \\(f\\) is continuous at 2. Everywhere else \\(f'(x)=\\pm1\\).</p>\n<p class=\"why\">How to spot these on a test: for \\(|g(x)|\\), set the inside equal to zero (\\(x-2=0\\)). That is where the corner is. Try “|x| (corner)” in Lab 2 on the 2.8 page to watch f′ jump from −1 to +1.</p>"
       }
      ]
     },
     {
      "id": "mq-4",
      "source": "Q4 · §3.1",
      "href": "3-1",
      "question": "Differentiate \\(y=7x^5-4x^3+6x-9\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Power rule term by term: \\(7\\cdot5x^4\\), \\(-4\\cdot3x^2\\), \\(6\\cdot1\\), and the constant \\(-9\\) becomes 0.</p>\n<p class=\"ans\">\\(y'=35x^4-12x^2+6\\)</p>"
       }
      ]
     },
     {
      "id": "mq-5",
      "source": "Q5 · §3.1",
      "href": "3-1",
      "question": "Differentiate \\(y=5e^x+3(2^x)-\\dfrac{8}{x^2}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Three different rules: \\(e^x\\to e^x\\); \\(2^x\\to2^x\\ln2\\); rewrite \\(\\frac8{x^2}=8x^{-2}\\).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p>\\((5e^x)'=5e^x\\)</p>\n<p>\\((3\\cdot2^x)'=3\\cdot2^x\\ln2\\)</p>\n<p>\\((-8x^{-2})'=-8\\cdot(-2)x^{-3}=16x^{-3}\\)</p>\n<p class=\"ans\">\\(y'=5e^x+3\\cdot2^x\\ln2+\\dfrac{16}{x^3}\\)</p>"
       }
      ]
     },
     {
      "id": "mq-6",
      "source": "Q6 · §3.1",
      "href": "3-1",
      "question": "Find the tangent line to \\(y=x^3-2x\\) at \\(x=1\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Point: \\(y(1)=1-2=-1\\), so \\((1,-1)\\).</p>\n<p>Slope: \\(y'=3x^2-2\\), so \\(y'(1)=1\\).</p>\n<p>\\(y-(-1)=1(x-1)\\)</p>\n<p class=\"ans\">\\(y=x-2\\)</p>"
       }
      ]
     },
     {
      "id": "mq-7",
      "source": "Q7 · §3.2",
      "href": "3-2",
      "question": "Differentiate \\(y=(x^2+1)(x^3-2x)\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Product rule: first \\(=x^2+1\\) (derivative \\(2x\\)), second \\(=x^3-2x\\) (derivative \\(3x^2-2\\)).</p>\n<p>\\(y'=2x(x^3-2x)+(x^2+1)(3x^2-2)\\)</p>\n<p>Simplified: \\(2x^4-4x^2+3x^4-2x^2+3x^2-2\\)</p>\n<p class=\"ans\">\\(y'=2x(x^3-2x)+(x^2+1)(3x^2-2)=5x^4-3x^2-2\\)</p>\n<p class=\"why\">Check by expanding first: \\(y=x^5-x^3-2x\\), so \\(y'=5x^4-3x^2-2\\). ✓</p>"
       }
      ]
     },
     {
      "id": "mq-8",
      "source": "Q8 · §3.2",
      "href": "3-2",
      "question": "Differentiate \\(y=\\dfrac{x^2+3}{x-1}\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>High \\(=x^2+3\\), d-high \\(=2x\\). Low \\(=x-1\\), d-low \\(=1\\).</p>\n<p>\\(y'=\\dfrac{(x-1)(2x)-(x^2+3)(1)}{(x-1)^2}=\\dfrac{2x^2-2x-x^2-3}{(x-1)^2}\\)</p>\n<p class=\"ans\">\\(y'=\\dfrac{x^2-2x-3}{(x-1)^2}=\\dfrac{(x-3)(x+1)}{(x-1)^2}\\)</p>"
       }
      ]
     },
     {
      "id": "mq-9",
      "source": "Q9 · §3.2",
      "href": "3-2",
      "question": "Differentiate \\(y=x^2e^x\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>\\(y'=2x\\cdot e^x+x^2\\cdot e^x\\)</p>\n<p class=\"ans\">\\(y'=e^x(x^2+2x)=xe^x(x+2)\\)</p>"
       }
      ]
     },
     {
      "id": "mq-10",
      "source": "Q10 · §3.3",
      "href": "3-3",
      "question": "Differentiate \\(y=3\\sin x-2\\cos x+\\tan x\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>\\((3\\sin x)'=3\\cos x\\); \\((-2\\cos x)'=-2(-\\sin x)=2\\sin x\\); \\((\\tan x)'=\\sec^2x\\).</p>\n<p class=\"ans\">\\(y'=3\\cos x+2\\sin x+\\sec^2x\\)</p>"
       }
      ]
     },
     {
      "id": "mq-11",
      "source": "Q11 · §3.3",
      "href": "3-3",
      "question": "Differentiate \\(y=x\\sin x\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Product rule: \\(1\\cdot\\sin x+x\\cdot\\cos x\\).</p>\n<p class=\"ans\">\\(y'=\\sin x+x\\cos x\\)</p>"
       }
      ]
     },
     {
      "id": "mq-12",
      "source": "Q12 · §3.3",
      "href": "3-3",
      "question": "Find \\(y'(0)\\) if \\(y=\\dfrac{\\sin x}{1+\\cos x}\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>\\(y'=\\dfrac{(1+\\cos x)\\cos x-\\sin x(-\\sin x)}{(1+\\cos x)^2}=\\dfrac{\\cos x+\\cos^2x+\\sin^2x}{(1+\\cos x)^2}\\)</p>\n<p>Since \\(\\sin^2x+\\cos^2x=1\\), the top is \\(1+\\cos x\\), so \\(y'=\\dfrac{1}{1+\\cos x}\\).</p>\n<p class=\"ans\">\\(y'(0)=\\dfrac{1}{1+1}=\\dfrac12\\)</p>"
       }
      ]
     },
     {
      "id": "mq-13",
      "source": "Q13 · §3.4",
      "href": "3-4",
      "question": "Differentiate \\(y=(3x^2-1)^5\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Outer \\(u^5\\), inner \\(u=3x^2-1\\) with \\(u'=6x\\).</p>\n<p>\\(y'=5(3x^2-1)^4\\cdot6x\\)</p>\n<p class=\"ans\">\\(y'=30x(3x^2-1)^4\\)</p>"
       }
      ]
     },
     {
      "id": "mq-14",
      "source": "Q14 · §3.4",
      "href": "3-4",
      "question": "Differentiate \\(y=\\sin(x^3+2x)\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Outer \\(\\sin u\\), inner \\(u=x^3+2x\\). Keep the inside unchanged in the cos.</p>\n<p class=\"ans\">\\(y'=(3x^2+2)\\cos(x^3+2x)\\)</p>"
       }
      ]
     },
     {
      "id": "mq-15",
      "source": "Q15 · §3.4",
      "href": "3-4",
      "question": "Differentiate \\(y=e^{4x^2-3x}\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>\\((e^u)'=e^u\\cdot u'\\) with \\(u=4x^2-3x\\), \\(u'=8x-3\\).</p>\n<p class=\"ans\">\\(y'=(8x-3)e^{4x^2-3x}\\)</p>"
       }
      ]
     },
     {
      "id": "mq-16",
      "source": "Q16 · §3.5",
      "href": "3-5",
      "question": "Find \\(dy/dx\\) if \\(x^2+y^2=25\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>\\(2x+2y\\,y'=0\\)</p>\n<p class=\"ans\">\\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\), for \\(y\\ne0\\). (Drag the point in Lab 7 to see it.)</p>"
       }
      ]
     },
     {
      "id": "mq-17",
      "source": "Q17 · §3.5",
      "href": "3-5",
      "question": "Find \\(dy/dx\\) if \\(x^2y+y^3=7\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(x^2y\\) is a product: \\((x^2y)'=2xy+x^2y'\\).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p>\\(2xy+x^2y'+3y^2y'=0\\)</p>\n<p>\\(y'(x^2+3y^2)=-2xy\\)</p>\n<p class=\"ans\">\\(\\dfrac{dy}{dx}=-\\dfrac{2xy}{x^2+3y^2}\\)</p>"
       }
      ]
     },
     {
      "id": "mq-18",
      "source": "Q18 · §3.5",
      "href": "3-5",
      "question": "Find the slope of the tangent line to \\(x^2+xy+y^2=7\\) at \\((1,2)\\).",
      "reveals": [
       {
        "label": "Step-by-step solution",
        "html": "<p>Check the point: \\(1+2+4=7\\). ✓</p>\n<p>\\(2x+(y+xy')+2yy'=0\\Rightarrow y'(x+2y)=-(2x+y)\\Rightarrow y'=-\\dfrac{2x+y}{x+2y}\\)</p>\n<p>At \\((1,2)\\): \\(-\\dfrac{2+2}{1+4}\\).</p>\n<p class=\"ans\">Slope \\(=-\\dfrac45\\). Tangent line: \\(y-2=-\\tfrac45(x-1)\\).</p>"
       }
      ]
     }
    ]
   }
  ]
 },
 {
  "id": "s28",
  "slug": "2-8",
  "num": "§2.8",
  "title": "The Derivative as a Function",
  "lede": "The slope of the tangent line at every point, collected into a brand-new function.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>In §2.7 you found the slope at <em>one</em> point \\(a\\). Now let the point move. For every \\(x\\), the slope of the tangent line to \\(y=f(x)\\) is a number, so the slopes themselves form a function, written \\(f'\\):</p>\n    \\[ f'(x) = \\lim_{h\\to 0} \\frac{f(x+h)-f(x)}{h} \\]\n    <p>The fraction is the slope of a <strong>secant line</strong> through two points on the curve, a horizontal distance \\(h\\) apart. As \\(h\\to 0\\), the second point slides into the first and the secant becomes the <strong>tangent</strong>. Try it in the first lab.</p>"
   },
   {
    "type": "lab",
    "id": "lab-secant",
    "html": "<div class=\"lab-head\"><h4>Secant → tangent</h4><span class=\"tag\">Lab 1 · drag the sliders</span></div>\n<canvas aria-label=\"Graph of f(x) = 0.25x³ − x + 1 with a secant line and the tangent line\" class=\"tall\"></canvas>\n<div class=\"controls\">\n<label for=\"sec-a\">point a <input id=\"sec-a\" max=\"3\" min=\"-3\" step=\"0.01\" type=\"range\" value=\"1\"/></label>\n<label for=\"sec-h\">gap h <input id=\"sec-h\" max=\"2\" min=\"-2\" step=\"0.01\" type=\"range\" value=\"1.5\"/></label>\n<button id=\"sec-anim\" type=\"button\">Animate h → 0</button>\n</div>\n<div class=\"readout\">\n<div>f(x) = 0.25x³ − x + 1<b class=\"c-f\" id=\"sec-pt\">a = 1</b></div>\n<div>secant slope [f(a+h) − f(a)] / h<b class=\"c-t\" id=\"sec-m\">–</b></div>\n<div>true slope f′(a) = 0.75a² − 1<b class=\"c-d\" id=\"sec-d\">–</b></div>\n</div>\n<p class=\"note\">Watch the secant slope approach f′(a) as h shrinks, from either side (h &gt; 0 or h &lt; 0). That limit is the derivative.</p>"
   },
   {
    "type": "heading",
    "text": "Reading f′ off the graph of f"
   },
   {
    "type": "prose",
    "html": "<p>Exercises 1–14 ask you to sketch \\(f'\\) from a picture of \\(f\\). You never need a formula. Just ask, at each \\(x\\): <em>how steep is \\(f\\), and is it going up or down?</em></p>\n<ul class=\"steps\">\n<li>Where \\(f\\) has a <strong>peak or valley</strong> (horizontal tangent), \\(f'=0\\): the \\(f'\\) graph crosses the x-axis.</li>\n<li>Where \\(f\\) is <strong>increasing</strong>, \\(f'&gt;0\\) (above the axis). Where \\(f\\) is <strong>decreasing</strong>, \\(f'\\lt 0\\) (below).</li>\n<li>Where \\(f\\) is <strong>steepest</strong>, \\(|f'|\\) is largest.</li>\n<li>Where \\(f\\) is a straight line, \\(f'\\) is a constant (a flat segment).</li>\n</ul>"
   },
   {
    "type": "lab",
    "id": "lab-trace",
    "html": "<div class=\"lab-head\"><h4>Build f′ point by point</h4><span class=\"tag\">Lab 2 · drag on the top graph</span></div>\n<div class=\"controls\">\n<label for=\"tr-fn\">function\n        <select id=\"tr-fn\">\n<option value=\"cubic\">x³ − 3x</option>\n<option value=\"sin\">sin x</option>\n<option value=\"abs\">|x| (corner)</option>\n<option value=\"cbrt\">∛x (vertical tangent)</option>\n<option value=\"jump\">jump (discontinuous)</option>\n</select>\n</label>\n<label for=\"tr-x\">x <input id=\"tr-x\" max=\"3\" min=\"-3\" step=\"0.01\" type=\"range\" value=\"-2\"/></label>\n<button id=\"tr-anim\" type=\"button\">Sweep</button>\n</div>\n<canvas aria-label=\"Graph of f with tangent line at x\" class=\"short\" id=\"tr-top\"></canvas>\n<canvas aria-label=\"Graph of f prime traced up to x\" class=\"short\" id=\"tr-bot\"></canvas>\n<div class=\"readout\">\n<div>x<b id=\"tr-xv\">–</b></div>\n<div>slope of tangent = f′(x)<b class=\"c-d\" id=\"tr-m\">–</b></div>\n<div>differentiable here?<b id=\"tr-ok\">–</b></div>\n</div>\n<p class=\"note\" id=\"tr-note\"></p>"
   },
   {
    "type": "heading",
    "text": "When is f not differentiable?"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">Corner</span><p>Left slope ≠ right slope. Example: \\(|x|\\) at 0 (slopes −1 and +1).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Discontinuity</span><p>A jump or hole. <strong>Theorem 4:</strong> differentiable ⇒ continuous, so not continuous ⇒ not differentiable.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Vertical tangent</span><p>The slope blows up: \\(|f'(x)|\\to\\infty\\). Example: \\(\\sqrt[3]{x}\\) at 0.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Careful</span><p>Continuous does <strong>not</strong> imply differentiable. \\(|x|\\) is continuous at 0 but has a corner.</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Notation and higher derivatives"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">Same thing, many names</span><p>\\(f'(x) = y' = \\dfrac{dy}{dx} = \\dfrac{df}{dx} = \\dfrac{d}{dx}f(x) = Df(x)\\)</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Second derivative</span><p>\\(f''=(f')'\\), \\(\\dfrac{d^2y}{dx^2}\\). If \\(s(t)\\) is position: \\(v=s'\\), \\(a=v'=s''\\), jerk \\(j=s'''\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Domain of f′</span><p>\\(f'\\) can have a <em>smaller</em> domain than \\(f\\). \\(\\sqrt{x}\\): domain \\([0,\\infty)\\), but \\(f'(x)=\\frac1{2\\sqrt x}\\) only on \\((0,\\infty)\\).</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · definition with a square root (Stewart Ex. 3 style)",
      "html": "<p>Find \\(f'(x)\\) for \\(f(x)=\\sqrt{x}\\) using the definition. State the domain of \\(f'\\).</p>\n<ol class=\"steps\">\n<li>Write the difference quotient: \\(\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}\\).</li>\n<li>Plugging in \\(h=0\\) gives \\(\\frac00\\). <span class=\"why\">For square roots, multiply by the conjugate.</span><br/>\\(\\dfrac{\\sqrt{x+h}-\\sqrt{x}}{h}\\cdot\\dfrac{\\sqrt{x+h}+\\sqrt{x}}{\\sqrt{x+h}+\\sqrt{x}} = \\dfrac{(x+h)-x}{h(\\sqrt{x+h}+\\sqrt{x})}\\)</li>\n<li>The \\(x\\)'s cancel, leaving \\(\\dfrac{h}{h(\\sqrt{x+h}+\\sqrt x)} = \\dfrac{1}{\\sqrt{x+h}+\\sqrt x}\\). The \\(h\\) cancels.</li>\n<li>Now let \\(h\\to0\\): \\(f'(x)=\\dfrac{1}{2\\sqrt x}\\).</li>\n<li>Domain of \\(f'\\): \\((0,\\infty)\\). At \\(x=0\\) we would divide by zero (vertical tangent).</li>\n</ol>"
     },
     {
      "label": "Example · definition with a fraction (Stewart Ex. 4 style)",
      "html": "<p>Find \\(f'(x)\\) for \\(f(x)=\\dfrac{1-x}{2+x}\\).</p>\n<ol class=\"steps\">\n<li>\\(\\dfrac{f(x+h)-f(x)}{h} = \\dfrac{1}{h}\\left[\\dfrac{1-x-h}{2+x+h}-\\dfrac{1-x}{2+x}\\right]\\)</li>\n<li><span class=\"why\">Fractions: combine over a common denominator.</span> Numerator: \\((1-x-h)(2+x)-(1-x)(2+x+h)\\).</li>\n<li>Expand: \\((2 - x - 2h - x^2 - xh) - (2 - x + h - x^2 - xh) = -3h\\).</li>\n<li>So the quotient is \\(\\dfrac{-3h}{h(2+x+h)(2+x)} = \\dfrac{-3}{(2+x+h)(2+x)}\\).</li>\n<li>Let \\(h\\to0\\): \\(f'(x) = \\dfrac{-3}{(2+x)^2}\\). Domain: \\(x\\neq-2\\).</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p28-1",
      "source": "§2.8 #21",
      "href": null,
      "question": "Use the definition to find \\(f'(x)\\) for \\(f(x)=3x-8\\). State the domains of \\(f\\) and \\(f'\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(f(x+h)=3(x+h)-8\\). Subtract \\(f(x)\\) and see what survives.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{[3(x+h)-8]-[3x-8]}{h}=\\dfrac{3h}{h}=3\\), so \\(f'(x)=3\\).</p><p class=\"ans\">\\(f'(x)=3\\); both domains are \\(\\mathbb{R}\\). A line has the same slope everywhere.</p>"
       }
      ]
     },
     {
      "id": "p28-2",
      "source": "§2.8 #23",
      "href": null,
      "question": "Use the definition to find \\(f'(t)\\) for \\(f(t)=2.5t^2+6t\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Expand \\((t+h)^2=t^2+2th+h^2\\). After subtracting, every surviving term has an \\(h\\) you can factor out.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f(t+h)=2.5(t^2+2th+h^2)+6t+6h = 2.5t^2+5th+2.5h^2+6t+6h\\)</p>\n<p>\\(f(t+h)-f(t)=5th+2.5h^2+6h = h(5t+2.5h+6)\\)</p>\n<p>Divide by \\(h\\): \\(5t+2.5h+6\\). Let \\(h\\to0\\).</p>\n<p class=\"ans\">\\(f'(t)=5t+6\\). Domains: all real numbers.</p>"
       }
      ]
     },
     {
      "id": "p28-3",
      "source": "§2.8 #28",
      "href": null,
      "question": "Use the definition to find \\(F'(v)\\) for \\(F(v)=\\dfrac{v}{v+2}\\). State domains.",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Common denominator \\((v+h+2)(v+2)\\). The numerator collapses to a multiple of \\(h\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{v+h}{v+h+2}-\\dfrac{v}{v+2} = \\dfrac{(v+h)(v+2)-v(v+h+2)}{(v+h+2)(v+2)}\\)</p>\n<p>Numerator: \\(v^2+2v+hv+2h - v^2-vh-2v = 2h\\).</p>\n<p>Quotient: \\(\\dfrac{2h}{h(v+h+2)(v+2)}=\\dfrac{2}{(v+h+2)(v+2)}\\xrightarrow{h\\to0}\\dfrac{2}{(v+2)^2}\\).</p>\n<p class=\"ans\">\\(F'(v)=\\dfrac{2}{(v+2)^2}\\). Domain of \\(F\\) and \\(F'\\): \\(v\\neq-2\\).</p>"
       }
      ]
     },
     {
      "id": "p28-4",
      "source": "§2.8 #29",
      "href": null,
      "question": "Use the definition to find \\(g'(u)\\) for \\(g(u)=\\dfrac{u+1}{4u-1}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Same fraction strategy. After expanding, \\(u^2\\) and \\(u\\) terms cancel and you get \\(-5h\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Numerator of the combined fraction: \\((u+h+1)(4u-1)-(u+1)(4u+4h-1)\\).</p>\n<p>\\(=(4u^2-u+4uh-h+4u-1)-(4u^2+4uh-u+4u+4h-1) = -5h\\).</p>\n<p>So \\(\\dfrac{g(u+h)-g(u)}{h}=\\dfrac{-5}{(4u+4h-1)(4u-1)}\\to\\dfrac{-5}{(4u-1)^2}\\).</p>\n<p class=\"ans\">\\(g'(u)=\\dfrac{-5}{(4u-1)^2}\\), domain \\(u\\neq\\tfrac14\\).</p>"
       }
      ]
     },
     {
      "id": "p28-5",
      "source": "§2.8 #31",
      "href": null,
      "question": "Use the definition to find \\(f'(x)\\) for \\(f(x)=\\dfrac{1}{\\sqrt{1+x}}\\). State domains.",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Combine the fractions first: \\(\\dfrac{\\sqrt{1+x}-\\sqrt{1+x+h}}{\\sqrt{1+x+h}\\,\\sqrt{1+x}}\\). Then multiply the top and bottom by the conjugate \\(\\sqrt{1+x}+\\sqrt{1+x+h}\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{f(x+h)-f(x)}{h}=\\dfrac{\\sqrt{1+x}-\\sqrt{1+x+h}}{h\\sqrt{1+x+h}\\sqrt{1+x}}\\)</p>\n<p>Multiply by the conjugate. The numerator becomes \\((1+x)-(1+x+h)=-h\\):</p>\n<p>\\(=\\dfrac{-h}{h\\sqrt{1+x+h}\\sqrt{1+x}\\,(\\sqrt{1+x}+\\sqrt{1+x+h})}\\)</p>\n<p>Cancel \\(h\\), let \\(h\\to0\\): \\(\\dfrac{-1}{\\sqrt{1+x}\\sqrt{1+x}\\cdot2\\sqrt{1+x}}=\\dfrac{-1}{2(1+x)^{3/2}}\\).</p>\n<p class=\"ans\">\\(f'(x)=-\\dfrac{1}{2(1+x)^{3/2}}\\). Domain of \\(f\\) and \\(f'\\): \\((-1,\\infty)\\).</p>"
       }
      ]
     },
     {
      "id": "p28-6",
      "source": "§2.8 #33(c)",
      "href": null,
      "question": "For \\(f(x)=1+\\sqrt{x+3}\\), use the definition to find \\(f'(x)\\). What are the domains of \\(f\\) and \\(f'\\)?",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>The 1 cancels immediately. What remains is the \\(\\sqrt{\\ }\\) conjugate trick.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{\\sqrt{x+h+3}-\\sqrt{x+3}}{h}\\cdot\\dfrac{\\sqrt{x+h+3}+\\sqrt{x+3}}{\\sqrt{x+h+3}+\\sqrt{x+3}}=\\dfrac{1}{\\sqrt{x+h+3}+\\sqrt{x+3}}\\)</p>\n<p class=\"ans\">\\(f'(x)=\\dfrac{1}{2\\sqrt{x+3}}\\). Domain of \\(f\\): \\([-3,\\infty)\\). Domain of \\(f'\\): \\((-3,\\infty)\\).</p>"
       }
      ]
     },
     {
      "id": "p28-7",
      "source": "§2.8 #30",
      "href": null,
      "question": "Use the definition to show \\(\\dfrac{d}{dx}x^4=4x^3\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\((x+h)^4=x^4+4x^3h+6x^2h^2+4xh^3+h^4\\) (Pascal's row 1 4 6 4 1).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{(x+h)^4-x^4}{h}=\\dfrac{4x^3h+6x^2h^2+4xh^3+h^4}{h}=4x^3+6x^2h+4xh^2+h^3\\)</p>\n<p class=\"ans\">As \\(h\\to0\\), every term with \\(h\\) vanishes: \\(f'(x)=4x^3\\). This is the Power Rule you'll use in 3.1.</p>"
       }
      ]
     },
     {
      "id": "p28-8",
      "source": "Concept · §2.8 #41–46 style",
      "href": null,
      "question": "Where is \\(f(x)=|x-2|+\\begin{cases}0&amp;x\\lt 5\\\\ 1 &amp; x\\ge5\\end{cases}\\) not differentiable, and why?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>At \\(x=2\\): a <strong>corner</strong>. Slope is −1 on the left and +1 on the right.</p>\n<p>At \\(x=5\\): a <strong>jump</strong>, so it is not continuous, so it is not differentiable.</p>\n<p class=\"ans\">Not differentiable at \\(x=2\\) (corner) and \\(x=5\\) (discontinuity).</p>"
       }
      ]
     },
     {
      "id": "p28-9",
      "source": "§2.8 · higher derivatives",
      "href": null,
      "question": "If \\(f(x)=x^3-x\\), find \\(f'\\), \\(f''\\), \\(f'''\\), \\(f^{(4)}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(f'=3x^2-1\\), \\(f''=6x\\), \\(f'''=6\\), \\(f^{(4)}=0\\).</p><p>Each derivative of a polynomial lowers the degree by one, so a cubic hits 0 at the 4th derivative.</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Plugging in h = 0 too early",
      "html": "<p>You always get 0/0 at first. Simplify until the \\(h\\) in the denominator cancels, <em>then</em> set \\(h=0\\).</p>"
     },
     {
      "title": "Forgetting to distribute the minus",
      "html": "<p>\\(f(x+h)-f(x)\\): put \\(f(x)\\) in brackets. Most definition errors are sign errors here.</p>"
     },
     {
      "title": "Domain of f′ = domain of f",
      "html": "<p>Not always. Check for division by zero in \\(f'\\) (e.g. \\(\\sqrt{x}\\) at 0).</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "s31",
  "slug": "3-1",
  "num": "§3.1",
  "title": "Derivatives of Polynomials and Exponential Functions",
  "lede": "The shortcuts that replace the limit definition.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">Constant</span>\\[\\frac{d}{dx}(c)=0\\]<p class=\"note\">A horizontal line has slope 0.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Power Rule (any real n)</span>\\[\\frac{d}{dx}x^n = n\\,x^{n-1}\\]<p class=\"note\">Bring the power down, subtract one.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Constant multiple</span>\\[\\frac{d}{dx}[c\\,f]=c\\,f'\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Sum / Difference</span>\\[(f\\pm g)'=f'\\pm g'\\]"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Natural exponential</span>\\[\\frac{d}{dx}e^x=e^x\\]<p class=\"note\">e is the one base whose slope at 0 is exactly 1.</p>"
     }
    ]
   },
   {
    "type": "prose",
    "html": "<p><strong>Rewrite before you differentiate.</strong> The Power Rule needs the form \\(x^n\\). Convert roots and fractions first:</p>\n    \\[\\sqrt{x}=x^{1/2},\\quad \\sqrt[3]{x^2}=x^{2/3},\\quad \\frac{1}{x^3}=x^{-3},\\quad \\frac{4}{\\sqrt[3]{x}}=4x^{-1/3}\\]\n    <p>If a fraction has a single term on the bottom, split it: \\(\\dfrac{3x^2+x^3}{x}=3x+x^2\\). No quotient rule needed.</p>"
   },
   {
    "type": "lab",
    "id": "lab-exp",
    "html": "<div class=\"lab-head\"><h4>Why e is special</h4><span class=\"tag\">Lab 3 · slide the base</span></div>\n<canvas aria-label=\"Graph of a to the x and its derivative\" class=\"tall\"></canvas>\n<div class=\"controls\">\n<label for=\"exp-a\">base a <input id=\"exp-a\" max=\"4\" min=\"1.3\" step=\"0.001\" type=\"range\" value=\"2\"/></label>\n<button id=\"exp-e\" type=\"button\">Snap to e ≈ 2.718</button>\n</div>\n<div class=\"readout\">\n<div>f(x) = aˣ<b class=\"c-f\" id=\"exp-av\">a = 2</b></div>\n<div>slope at x = 0, lim (aʰ − 1)/h<b class=\"c-t\" id=\"exp-m\">–</b></div>\n<div>so f′(x) = (that slope) · aˣ<b class=\"c-d\" id=\"exp-k\">–</b></div>\n</div>\n<p class=\"note\">For any base, the derivative of aˣ is aˣ times a constant (its slope at 0). When a = e that constant is exactly 1, and the pink derivative curve lands right on top of the blue curve.</p>"
   },
   {
    "type": "heading",
    "text": "Tangent and normal lines"
   },
   {
    "type": "prose",
    "html": "<p>The tangent line at \\((a,f(a))\\) is \\(y-f(a)=f'(a)(x-a)\\). The <strong>normal line</strong> is perpendicular to the tangent, so its slope is \\(-\\dfrac{1}{f'(a)}\\).</p>\n<p>A <strong>horizontal tangent</strong> happens where \\(f'(x)=0\\). Set the derivative to zero and solve.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · rewrite, then differentiate",
      "html": "<p>Differentiate \\(y=\\dfrac{\\sqrt{x}+x}{x^2}\\).</p>\n<ol class=\"steps\">\n<li>Split: \\(y=\\dfrac{x^{1/2}}{x^2}+\\dfrac{x}{x^2}=x^{-3/2}+x^{-1}\\).</li>\n<li>Power rule on each: \\(y'=-\\tfrac32x^{-5/2}-x^{-2}\\).</li>\n<li>Optional cleanup: \\(y'=-\\dfrac{3}{2x^{5/2}}-\\dfrac1{x^2}\\).</li>\n</ol>"
     },
     {
      "label": "Example · horizontal tangents (Stewart Ex. 7)",
      "html": "<p>Find the points on \\(y=x^4-6x^2+4\\) where the tangent line is horizontal.</p>\n<ol class=\"steps\">\n<li>\\(y'=4x^3-12x=4x(x^2-3)\\).</li>\n<li>Set \\(y'=0\\): \\(x=0\\) or \\(x=\\pm\\sqrt3\\).</li>\n<li>Plug back into \\(y\\) (not \\(y'\\)): \\(y(0)=4\\), \\(y(\\pm\\sqrt3)=9-18+4=-5\\).</li>\n<li>Points: \\((0,4)\\), \\((\\sqrt3,-5)\\), \\((-\\sqrt3,-5)\\).</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p31-1",
      "source": "§3.1 #18",
      "href": null,
      "question": "Differentiate \\(W(t)=\\sqrt t-2e^t\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\sqrt t=t^{1/2}\\to\\tfrac12t^{-1/2}\\); \\(2e^t\\to2e^t\\).</p><p class=\"ans\">\\(W'(t)=\\dfrac{1}{2\\sqrt t}-2e^t\\)</p>"
       }
      ]
     },
     {
      "id": "p31-2",
      "source": "§3.1 #21",
      "href": null,
      "question": "Differentiate \\(y=3e^x+\\dfrac{4}{\\sqrt[3]{x}}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(\\dfrac4{\\sqrt[3]x}=4x^{-1/3}\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}4x^{-1/3}=4\\cdot(-\\tfrac13)x^{-4/3}\\).</p><p class=\"ans\">\\(y'=3e^x-\\dfrac43x^{-4/3}\\)</p>"
       }
      ]
     },
     {
      "id": "p31-3",
      "source": "§3.1 #23",
      "href": null,
      "question": "Differentiate \\(f(x)=\\dfrac{3x^2+x^3}{x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Simplify first: \\(f(x)=3x+x^2\\) (for \\(x\\ne0\\)).</p><p class=\"ans\">\\(f'(x)=3+2x\\)</p>"
       }
      ]
     },
     {
      "id": "p31-4",
      "source": "§3.1 #25",
      "href": null,
      "question": "Differentiate \\(G(r)=\\dfrac{3r^{3/2}+r^{5/2}}{r}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Divide each term by \\(r=r^1\\): \\(G=3r^{1/2}+r^{3/2}\\).</p><p class=\"ans\">\\(G'(r)=\\tfrac32r^{-1/2}+\\tfrac32r^{1/2}=\\dfrac{3}{2\\sqrt r}+\\dfrac32\\sqrt r\\)</p>"
       }
      ]
     },
     {
      "id": "p31-5",
      "source": "§3.1 #28",
      "href": null,
      "question": "Differentiate \\(k(r)=e^r+r^e\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(e^r\\): variable in the exponent → exponential rule. \\(r^e\\): variable in the base, constant power → power rule.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(k'(r)=e^r+e\\,r^{e-1}\\)</p>"
       }
      ]
     },
     {
      "id": "p31-6",
      "source": "§3.1 #30",
      "href": null,
      "question": "Differentiate \\(G(q)=(1+q^{-1})^2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Expand (no chain rule yet): \\(G=1+2q^{-1}+q^{-2}\\).</p><p class=\"ans\">\\(G'(q)=-2q^{-2}-2q^{-3}\\)</p>"
       }
      ]
     },
     {
      "id": "p31-7",
      "source": "§3.1 #37",
      "href": null,
      "question": "Find the tangent line to \\(y=2x^3-x^2+2\\) at \\((1,3)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=6x^2-2x\\), so the slope at 1 is \\(6-2=4\\).</p><p>\\(y-3=4(x-1)\\)</p><p class=\"ans\">\\(y=4x-1\\)</p>"
       }
      ]
     },
     {
      "id": "p31-8",
      "source": "§3.1 #41",
      "href": null,
      "question": "Find the tangent and normal lines to \\(y=x^4+2e^x\\) at \\((0,2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=4x^3+2e^x\\); at 0: \\(0+2=2\\).</p><p>Tangent: \\(y-2=2x\\Rightarrow y=2x+2\\).</p><p>Normal slope \\(=-\\tfrac12\\): \\(y=-\\tfrac12x+2\\).</p><p class=\"ans\">Tangent \\(y=2x+2\\); normal \\(y=-\\tfrac12x+2\\).</p>"
       }
      ]
     },
     {
      "id": "p31-9",
      "source": "§3.1 #49",
      "href": null,
      "question": "Find \\(f'\\) and \\(f''\\) for \\(f(x)=0.001x^5-0.02x^3\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(f'(x)=0.005x^4-0.06x^2\\), \\(f''(x)=0.02x^3-0.12x\\)</p>"
       }
      ]
     },
     {
      "id": "p31-10",
      "source": "§3.1 · motion",
      "href": null,
      "question": "A particle moves by \\(s=t^3-6t^2+9t\\) (meters, seconds). When is it at rest? What is its acceleration then?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(v=s'=3t^2-12t+9=3(t-1)(t-3)\\). At rest when \\(v=0\\): \\(t=1\\) and \\(t=3\\).</p><p>\\(a=v'=6t-12\\): \\(a(1)=-6\\), \\(a(3)=6\\) m/s².</p><p class=\"ans\">At rest at t = 1 s (a = −6 m/s²) and t = 3 s (a = 6 m/s²).</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Power rule on eˣ",
      "html": "<p>\\(\\frac{d}{dx}e^x\\neq xe^{x-1}\\). The power rule is for variable base, constant exponent.</p>"
     },
     {
      "title": "Derivative of a constant like e² or π³",
      "html": "<p>These are numbers. Their derivative is 0.</p>"
     },
     {
      "title": "Negative exponents",
      "html": "<p>\\(\\frac{d}{dx}x^{-3}=-3x^{-4}\\), not \\(-3x^{-2}\\). Subtracting 1 makes it more negative.</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "s32",
  "slug": "3-2",
  "num": "§3.2",
  "title": "The Product and Quotient Rules",
  "lede": "The derivative of a product is not the product of the derivatives.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Product Rule</span>\\[(fg)' = f\\,g' + g\\,f'\\]<p class=\"note\">“first · d(second) + second · d(first)”</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Quotient Rule</span>\\[\\left(\\frac fg\\right)' = \\frac{g\\,f' - f\\,g'}{g^2}\\]<p class=\"note\">“low d-high minus high d-low, over low squared”. The order matters because of the minus.</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-prod",
    "html": "<div class=\"lab-head\"><h4>The product rule is an area picture</h4><span class=\"tag\">Lab 4 · grow the rectangle</span></div>\n<canvas aria-label=\"Rectangle of width u and height v with growth strips\" class=\"tall\"></canvas>\n<div class=\"controls\">\n<label for=\"pr-x\">x <input id=\"pr-x\" max=\"2\" min=\"0.6\" step=\"0.01\" type=\"range\" value=\"1.4\"/></label>\n<label for=\"pr-dx\">Δx <input id=\"pr-dx\" max=\"0.6\" min=\"0\" step=\"0.005\" type=\"range\" value=\"0.35\"/></label>\n</div>\n<div class=\"readout\">\n<div>u = x (width), v = x² (height)<b id=\"pr-uv\">–</b></div>\n<div class=\"c-f\">u·Δv (top strip)<b id=\"pr-a\">–</b></div>\n<div class=\"c-d\">v·Δu (side strip)<b id=\"pr-b\">–</b></div>\n<div class=\"c-t\">Δu·Δv (corner)<b id=\"pr-c\">–</b></div>\n<div>Δ(uv) / Δx<b id=\"pr-q\">–</b></div>\n<div>u v′ + v u′ = x·2x + x²·1<b id=\"pr-d\">–</b></div>\n</div>\n<p class=\"note\">The area uv grows by two strips plus a tiny corner: Δ(uv) = u·Δv + v·Δu + Δu·Δv. Divide by Δx and let Δx → 0. The corner is a product of two small numbers, so it disappears, leaving (uv)′ = u v′ + v u′. Drag Δx toward 0 and watch the two bottom numbers meet.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · product rule with eˣ",
      "html": "<p>Differentiate \\(f(x)=xe^x\\), then find \\(f''\\).</p>\n<ol class=\"steps\">\n<li>First \\(=x\\), second \\(=e^x\\). \\(f'=x\\cdot e^x+e^x\\cdot1=(x+1)e^x\\).</li>\n<li>Again: \\(f''=(x+1)e^x+e^x\\cdot1=(x+2)e^x\\).</li>\n<li class=\"why\">Pattern: the n-th derivative is \\((x+n)e^x\\).</li>\n</ol>"
     },
     {
      "label": "Example · quotient rule",
      "html": "<p>Differentiate \\(y=\\dfrac{x^2+x-2}{x^3+6}\\).</p>\n<ol class=\"steps\">\n<li>High \\(=x^2+x-2\\), d-high \\(=2x+1\\). Low \\(=x^3+6\\), d-low \\(=3x^2\\).</li>\n<li>\\(y'=\\dfrac{(x^3+6)(2x+1)-(x^2+x-2)(3x^2)}{(x^3+6)^2}\\)</li>\n<li>Expand: \\((2x^4+x^3+12x+6)-(3x^4+3x^3-6x^2)\\)</li>\n<li>\\(y'=\\dfrac{-x^4-2x^3+6x^2+12x+6}{(x^3+6)^2}\\)</li>\n</ol>"
     },
     {
      "label": "Example · from a table (very common exam question)",
      "html": "<p>Given \\(f(5)=1,\\ f'(5)=6,\\ g(5)=-3,\\ g'(5)=2\\). Find \\((fg)'(5)\\), \\((f/g)'(5)\\), \\((g/f)'(5)\\).</p>\n<ol class=\"steps\">\n<li>\\((fg)'(5)=f(5)g'(5)+g(5)f'(5)=1(2)+(-3)(6)=-16\\).</li>\n<li>\\((f/g)'(5)=\\dfrac{g f'-f g'}{g^2}=\\dfrac{(-3)(6)-(1)(2)}{9}=-\\dfrac{20}{9}\\).</li>\n<li>\\((g/f)'(5)=\\dfrac{f g'-g f'}{f^2}=\\dfrac{(1)(2)-(-3)(6)}{1}=20\\).</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p32-1",
      "source": "§3.2 #1",
      "href": null,
      "question": "Differentiate \\(f(x)=(1+2x^2)(x-x^2)\\) two ways: Product Rule, and multiplying out first. Do they agree?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product: \\(4x(x-x^2)+(1+2x^2)(1-2x)=4x^2-4x^3+1-2x+2x^2-4x^3\\)</p>\n<p>Multiply first: \\(f=x-x^2+2x^3-2x^4\\Rightarrow f'=1-2x+6x^2-8x^3\\).</p>\n<p class=\"ans\">Both give \\(f'(x)=1-2x+6x^2-8x^3\\).</p>"
       }
      ]
     },
     {
      "id": "p32-2",
      "source": "§3.2 #5",
      "href": null,
      "question": "Differentiate \\(y=x^3e^x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(y'=x^3e^x+3x^2e^x=x^2e^x(x+3)\\)</p>"
       }
      ]
     },
     {
      "id": "p32-3",
      "source": "§3.2 #9",
      "href": null,
      "question": "Differentiate \\(y=\\dfrac{x}{e^x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{e^x\\cdot1-x\\cdot e^x}{(e^x)^2}=\\dfrac{e^x(1-x)}{e^{2x}}\\)</p><p class=\"ans\">\\(y'=\\dfrac{1-x}{e^x}\\)</p>"
       }
      ]
     },
     {
      "id": "p32-4",
      "source": "§3.2 #11",
      "href": null,
      "question": "Differentiate \\(g(t)=\\dfrac{3-2t}{5t+1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(g'=\\dfrac{(5t+1)(-2)-(3-2t)(5)}{(5t+1)^2}=\\dfrac{-10t-2-15+10t}{(5t+1)^2}\\)</p><p class=\"ans\">\\(g'(t)=\\dfrac{-17}{(5t+1)^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p32-5",
      "source": "§3.2 #13",
      "href": null,
      "question": "Differentiate \\(f(t)=\\dfrac{5t}{t^3-t-1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=\\dfrac{(t^3-t-1)(5)-5t(3t^2-1)}{(t^3-t-1)^2}=\\dfrac{5t^3-5t-5-15t^3+5t}{(t^3-t-1)^2}\\)</p><p class=\"ans\">\\(f'(t)=\\dfrac{-10t^3-5}{(t^3-t-1)^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p32-6",
      "source": "§3.2 #27",
      "href": null,
      "question": "Differentiate \\(f(x)=\\dfrac{x^2e^x}{x^2+e^x}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>The top \\(x^2e^x\\) needs the Product Rule inside the Quotient Rule: \\((x^2e^x)'=e^x(x^2+2x)\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f'=\\dfrac{(x^2+e^x)\\,e^x(x^2+2x)-x^2e^x(2x+e^x)}{(x^2+e^x)^2}\\)</p>\n<p>Factor \\(e^x\\) from the numerator: \\(e^x[x^4+2x^3+x^2e^x+2xe^x-2x^3-x^2e^x]=e^x(x^4+2xe^x)\\).</p>\n<p class=\"ans\">\\(f'(x)=\\dfrac{xe^x(x^3+2e^x)}{(x^2+e^x)^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p32-7",
      "source": "§3.2 #31",
      "href": null,
      "question": "Find \\(f'\\) and \\(f''\\) for \\(f(x)=x^2e^x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=e^x(x^2+2x)\\). Then \\(f''=e^x(x^2+2x)+e^x(2x+2)\\).</p><p class=\"ans\">\\(f'=e^x(x^2+2x)\\), \\(f''=e^x(x^2+4x+2)\\)</p>"
       }
      ]
     },
     {
      "id": "p32-8",
      "source": "§3.2 #35",
      "href": null,
      "question": "Find the tangent line to \\(y=\\dfrac{x^2}{1+x}\\) at \\(\\left(1,\\tfrac12\\right)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{(1+x)(2x)-x^2}{(1+x)^2}=\\dfrac{x^2+2x}{(1+x)^2}\\); at 1: \\(\\tfrac34\\).</p><p>\\(y-\\tfrac12=\\tfrac34(x-1)\\)</p><p class=\"ans\">\\(y=\\tfrac34x-\\tfrac14\\)</p>"
       }
      ]
     },
     {
      "id": "p32-9",
      "source": "§3.2 #39",
      "href": null,
      "question": "Find the tangent line to the witch of Agnesi \\(y=\\dfrac{1}{1+x^2}\\) at \\(\\left(-1,\\tfrac12\\right)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{(1+x^2)(0)-1(2x)}{(1+x^2)^2}=\\dfrac{-2x}{(1+x^2)^2}\\); at \\(-1\\): \\(\\dfrac{2}{4}=\\tfrac12\\).</p><p class=\"ans\">\\(y=\\tfrac12x+1\\)</p>"
       }
      ]
     },
     {
      "id": "p32-10",
      "source": "§3.2 · table style",
      "href": null,
      "question": "If \\(h(x)=\\dfrac{f(x)}{x}\\), \\(f(2)=-3\\), \\(f'(2)=4\\), find \\(h'(2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(h'=\\dfrac{x f'(x)-f(x)\\cdot1}{x^2}=\\dfrac{2(4)-(-3)}{4}\\)</p><p class=\"ans\">\\(h'(2)=\\dfrac{11}{4}\\)</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "(fg)′ = f′g′",
      "html": "<p>False. Check with \\(x\\cdot x=x^2\\): \\(f'g'=1\\), but \\((x^2)'=2x\\).</p>"
     },
     {
      "title": "Flipping the quotient numerator",
      "html": "<p>It's \\(g f' - f g'\\), bottom first. Swapping them flips the sign of your answer.</p>"
     },
     {
      "title": "Using quotient rule when you don't need to",
      "html": "<p>\\(\\dfrac{x^3+1}{x}\\) or \\(\\dfrac{\\sin x}{5}\\): simplify or pull out the constant instead.</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "s33",
  "slug": "3-3",
  "num": "§3.3",
  "title": "Derivatives of Trigonometric Functions",
  "lede": "Six formulas, two limits, and a cycle of four.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">sin and cos</span>\\[(\\sin x)'=\\cos x\\]\\[(\\cos x)'=-\\sin x\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">tan and cot</span>\\[(\\tan x)'=\\sec^2x\\]\\[(\\cot x)'=-\\csc^2x\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">sec and csc</span>\\[(\\sec x)'=\\sec x\\tan x\\]\\[(\\csc x)'=-\\csc x\\cot x\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Memory trick</span><p>Every “co-” function (cos, cot, csc) gets a <strong>minus sign</strong>. tan ↔ sec² and cot ↔ csc² pair up; sec and csc reproduce themselves.</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-sin",
    "html": "<div class=\"lab-head\"><h4>The slope of sin x is cos x</h4><span class=\"tag\">Lab 5a · drag on the graph</span></div>\n<canvas aria-label=\"Graph of sin x with a tangent line\" class=\"short\" id=\"sin-top\"></canvas>\n<canvas aria-label=\"Slopes of sin x traced, compared with cos x\" class=\"short\" id=\"sin-bot\"></canvas>\n<div class=\"controls\">\n<label for=\"sin-x\">x <input id=\"sin-x\" max=\"6.28\" min=\"-6.28\" step=\"0.01\" type=\"range\" value=\"-5\"/></label>\n<label for=\"sin-cos\"><input id=\"sin-cos\" type=\"checkbox\"/> overlay cos x</label>\n<button id=\"sin-anim\" type=\"button\">Sweep</button>\n</div>\n<div class=\"readout\">\n<div>x (radians)<b id=\"sin-xv\">–</b></div>\n<div>slope of sin at x<b class=\"c-d\" id=\"sin-m\">–</b></div>\n<div>cos x<b id=\"sin-c\">–</b></div>\n</div>"
   },
   {
    "type": "heading",
    "text": "The two special limits"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Limit 1</span>\\[\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1\\]<p class=\"note\">θ must be in radians. The argument of sin must match the denominator.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Limit 2</span>\\[\\lim_{\\theta\\to0}\\frac{\\cos\\theta-1}{\\theta}=0\\]"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-circ",
    "html": "<div class=\"lab-head\"><h4>Why sin θ / θ → 1</h4><span class=\"tag\">Lab 5b · shrink the angle</span></div>\n<canvas aria-label=\"Unit circle comparing arc length theta with sin theta\" class=\"square\"></canvas>\n<div class=\"controls\">\n<label for=\"circ-t\">θ <input id=\"circ-t\" max=\"1.5\" min=\"0.02\" step=\"0.005\" type=\"range\" value=\"1.1\"/></label>\n</div>\n<div class=\"readout\">\n<div class=\"c-f\">arc length θ<b id=\"circ-a\">–</b></div>\n<div class=\"c-d\">vertical side sin θ<b id=\"circ-s\">–</b></div>\n<div class=\"c-t\">sin θ / θ<b id=\"circ-r\">–</b></div>\n</div>\n<p class=\"note\">On a unit circle the arc has length θ and the pink segment has length sin θ. As θ shrinks, the arc straightens out and the two lengths become equal, so their ratio → 1.</p>"
   },
   {
    "type": "prose",
    "html": "<p><strong>Using the limit:</strong> make the denominator match the angle. Multiply and divide by what you need:</p>\n    \\[\\lim_{x\\to0}\\frac{\\sin 7x}{4x}=\\frac74\\lim_{x\\to0}\\frac{\\sin7x}{7x}=\\frac74\\cdot1=\\frac74\\]\n    <p><strong>Higher derivatives of sin cycle every 4:</strong> \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\). To find \\(\\frac{d^{n}}{dx^{n}}\\sin x\\), divide \\(n\\) by 4 and use the remainder.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · simplify after the quotient rule",
      "html": "<p>Differentiate \\(f(\\theta)=\\dfrac{\\sin\\theta}{1+\\cos\\theta}\\). <span class=\"mono\">§3.3 #13</span></p>\n<ol class=\"steps\">\n<li>\\(f'=\\dfrac{(1+\\cos\\theta)\\cos\\theta-\\sin\\theta(-\\sin\\theta)}{(1+\\cos\\theta)^2}=\\dfrac{\\cos\\theta+\\cos^2\\theta+\\sin^2\\theta}{(1+\\cos\\theta)^2}\\)</li>\n<li><span class=\"why\">Use \\(\\sin^2+\\cos^2=1\\).</span> Numerator \\(=\\cos\\theta+1\\).</li>\n<li>\\(f'(\\theta)=\\dfrac{1+\\cos\\theta}{(1+\\cos\\theta)^2}=\\dfrac{1}{1+\\cos\\theta}\\)</li>\n</ol>"
     },
     {
      "label": "Example · the 4-cycle",
      "html": "<p>Find \\(\\dfrac{d^{27}}{dx^{27}}\\cos x\\).</p>\n<ol class=\"steps\">\n<li>cos cycle: \\(\\cos\\to-\\sin\\to-\\cos\\to\\sin\\to\\cos\\) (period 4).</li>\n<li>\\(27=4\\cdot6+3\\), so it equals the 3rd derivative.</li>\n<li>Answer: \\(\\sin x\\).</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p33-1",
      "source": "§3.3 #1",
      "href": null,
      "question": "Differentiate \\(f(x)=3\\sin x-2\\cos x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(f'(x)=3\\cos x+2\\sin x\\)</p><p class=\"why\">The minus from \\(-2\\) and the minus from \\((\\cos x)'=-\\sin x\\) cancel.</p>"
       }
      ]
     },
     {
      "id": "p33-2",
      "source": "§3.3 #5",
      "href": null,
      "question": "Differentiate \\(h(\\theta)=\\theta^2\\sin\\theta\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(h'(\\theta)=2\\theta\\sin\\theta+\\theta^2\\cos\\theta\\)</p>"
       }
      ]
     },
     {
      "id": "p33-3",
      "source": "§3.3 #7",
      "href": null,
      "question": "Differentiate \\(y=\\sec\\theta\\tan\\theta\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\sec\\theta\\cdot\\sec^2\\theta+\\tan\\theta\\cdot\\sec\\theta\\tan\\theta\\)</p><p class=\"ans\">\\(y'=\\sec^3\\theta+\\sec\\theta\\tan^2\\theta=\\sec\\theta(\\sec^2\\theta+\\tan^2\\theta)\\)</p>"
       }
      ]
     },
     {
      "id": "p33-4",
      "source": "§3.3 #14",
      "href": null,
      "question": "Differentiate \\(y=\\dfrac{\\cos x}{1-\\sin x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{(1-\\sin x)(-\\sin x)-\\cos x(-\\cos x)}{(1-\\sin x)^2}=\\dfrac{-\\sin x+\\sin^2x+\\cos^2x}{(1-\\sin x)^2}\\)</p><p class=\"ans\">\\(y'=\\dfrac{1-\\sin x}{(1-\\sin x)^2}=\\dfrac{1}{1-\\sin x}\\)</p>"
       }
      ]
     },
     {
      "id": "p33-5",
      "source": "§3.3 #27",
      "href": null,
      "question": "Find the tangent line to \\(y=\\sin x+\\cos x\\) at \\((0,1)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\cos x-\\sin x\\); at 0: \\(1\\).</p><p class=\"ans\">\\(y=x+1\\)</p>"
       }
      ]
     },
     {
      "id": "p33-6",
      "source": "§3.3 #39",
      "href": null,
      "question": "For what \\(x\\) does \\(f(x)=x+2\\sin x\\) have a horizontal tangent?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=1+2\\cos x=0\\Rightarrow\\cos x=-\\tfrac12\\).</p><p class=\"ans\">\\(x=\\dfrac{2\\pi}{3}+2n\\pi\\) or \\(x=\\dfrac{4\\pi}{3}+2n\\pi\\), \\(n\\) any integer.</p>"
       }
      ]
     },
     {
      "id": "p33-7",
      "source": "§3.3 #41",
      "href": null,
      "question": "A mass on a spring has position \\(x(t)=8\\sin t\\) cm. Find velocity and acceleration, and the state at \\(t=2\\pi/3\\). Which way is it moving?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(v=8\\cos t\\), \\(a=-8\\sin t\\).</p><p>At \\(t=\\frac{2\\pi}3\\): \\(x=8\\cdot\\frac{\\sqrt3}2=4\\sqrt3\\), \\(v=8(-\\tfrac12)=-4\\), \\(a=-4\\sqrt3\\).</p><p class=\"ans\">\\(x=4\\sqrt3\\) cm, \\(v=-4\\) cm/s, \\(a=-4\\sqrt3\\) cm/s². Moving left (v &lt; 0).</p>"
       }
      ]
     },
     {
      "id": "p33-8",
      "source": "§3.3 · limits",
      "href": null,
      "question": "Find \\(\\displaystyle\\lim_{t\\to0}\\frac{\\tan6t}{\\sin2t}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(\\tan6t=\\dfrac{\\sin6t}{\\cos6t}\\). Then build \\(\\frac{\\sin6t}{6t}\\) and \\(\\frac{2t}{\\sin2t}\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{\\sin6t}{\\cos6t\\,\\sin2t}=\\dfrac{\\sin6t}{6t}\\cdot\\dfrac{2t}{\\sin2t}\\cdot\\dfrac{6t}{2t}\\cdot\\dfrac1{\\cos6t}\\to1\\cdot1\\cdot3\\cdot1\\)</p><p class=\"ans\">3</p>"
       }
      ]
     },
     {
      "id": "p33-9",
      "source": "§3.3 · limits",
      "href": null,
      "question": "Find \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin3x}{5x^3-4x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{\\sin3x}{x(5x^2-4)}=3\\cdot\\dfrac{\\sin3x}{3x}\\cdot\\dfrac{1}{5x^2-4}\\to3\\cdot1\\cdot\\left(-\\tfrac14\\right)\\)</p><p class=\"ans\">\\(-\\dfrac34\\)</p>"
       }
      ]
     },
     {
      "id": "p33-10",
      "source": "§3.3 · 4-cycle",
      "href": null,
      "question": "Find \\(\\dfrac{d^{99}}{dx^{99}}\\sin x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(99=4\\cdot24+3\\) → same as the 3rd derivative of sin.</p><p class=\"ans\">\\(-\\cos x\\)</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Degrees",
      "html": "<p>All these formulas need radians. In degrees, \\((\\sin x)'=\\frac{\\pi}{180}\\cos x\\).</p>"
     },
     {
      "title": "sin 7x / 4x → 7/4, not 1",
      "html": "<p>The limit is 1 only when the angle and the denominator are identical.</p>"
     },
     {
      "title": "Missing minus signs",
      "html": "<p>cos, cot, csc all give negatives. Say “co- means minus” as you write.</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "s34",
  "slug": "3-4",
  "num": "§3.4",
  "title": "The Chain Rule",
  "lede": "Derivatives of functions inside functions. Rates multiply.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Chain Rule</span>\\[\\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x)\\]<p class=\"note\">Derivative of the outside (leave the inside alone) × derivative of the inside.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Leibniz form</span>\\[\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}\\]<p class=\"note\">If u changes 3× as fast as x, and y changes 2× as fast as u, y changes 6× as fast as x.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Power + chain</span>\\[\\frac{d}{dx}[g(x)]^n=n[g(x)]^{n-1}g'(x)\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Exponential + chain</span>\\[\\frac{d}{dx}e^{g(x)}=e^{g(x)}g'(x)\\]\\[\\frac{d}{dx}a^x=a^x\\ln a\\]"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-chain",
    "html": "<div class=\"lab-head\"><h4>A nudge travels down the chain</h4><span class=\"tag\">Lab 6 · y = sin(x²)</span></div>\n<canvas aria-label=\"Three number lines x, u equals x squared, y equals sin u, showing how a small change is magnified\" class=\"tall\"></canvas>\n<div class=\"controls\">\n<label for=\"ch-x\">x <input id=\"ch-x\" max=\"2.2\" min=\"0.2\" step=\"0.01\" type=\"range\" value=\"1.1\"/></label>\n<label for=\"ch-dx\">Δx <input id=\"ch-dx\" max=\"0.3\" min=\"0.005\" step=\"0.005\" type=\"range\" value=\"0.15\"/></label>\n</div>\n<div class=\"readout\">\n<div>Δu / Δx ≈ du/dx = 2x<b class=\"c-f\" id=\"ch-1\">–</b></div>\n<div>Δy / Δu ≈ dy/du = cos u<b class=\"c-d\" id=\"ch-2\">–</b></div>\n<div>product of the two<b class=\"c-t\" id=\"ch-3\">–</b></div>\n<div>exact dy/dx = 2x·cos(x²)<b id=\"ch-4\">–</b></div>\n</div>\n<p class=\"note\">The inner function u = x² stretches the nudge by a factor of 2x. The outer function y = sin u stretches it again by cos u. Total stretch = the product. That is the chain rule.</p>"
   },
   {
    "type": "heading",
    "text": "How to spot inside vs. outside"
   },
   {
    "type": "prose",
    "html": "<p>Ask: <em>if I plugged in a number, what would I compute <strong>last</strong>?</em> That's the outer function.</p>\n<ul class=\"steps\">\n<li>\\(\\sqrt{x^3+1}\\): last step is the square root. Outer \\(\\sqrt u\\), inner \\(u=x^3+1\\).</li>\n<li>\\(\\sin^2x=(\\sin x)^2\\): last step is squaring. Outer \\(u^2\\), inner \\(\\sin x\\).</li>\n<li>\\(\\sin(x^2)\\): last step is sin. Outer \\(\\sin u\\), inner \\(x^2\\).</li>\n<li>Long chains peel like an onion: \\(\\big(f(g(h(x)))\\big)'=f'(g(h(x)))\\cdot g'(h(x))\\cdot h'(x)\\).</li>\n</ul>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · three layers",
      "html": "<p>Differentiate \\(y=e^{\\sec 3\\theta}\\).</p>\n<ol class=\"steps\">\n<li>Layers: \\(e^{(\\ )}\\) → \\(\\sec(\\ )\\) → \\(3\\theta\\).</li>\n<li>Peel: \\(e^{\\sec3\\theta}\\cdot\\sec3\\theta\\tan3\\theta\\cdot3\\).</li>\n<li>\\(y'=3e^{\\sec3\\theta}\\sec3\\theta\\tan3\\theta\\)</li>\n</ol>"
     },
     {
      "label": "Example · chain inside a product (§3.4 #21)",
      "html": "<p>Differentiate \\(F(x)=(4x+5)^3(x^2-2x+5)^4\\).</p>\n<ol class=\"steps\">\n<li>Product Rule, and each factor needs the Chain Rule:<br/>\\(F'=3(4x+5)^2(4)\\cdot(x^2-2x+5)^4+(4x+5)^3\\cdot4(x^2-2x+5)^3(2x-2)\\)</li>\n<li><span class=\"why\">Factor out the lowest powers:</span> \\(4(4x+5)^2(x^2-2x+5)^3\\big[3(x^2-2x+5)+(4x+5)(2x-2)\\big]\\)</li>\n<li>Bracket: \\(3x^2-6x+15+8x^2+2x-10=11x^2-4x+5\\).</li>\n<li>\\(F'(x)=4(4x+5)^2(x^2-2x+5)^3(11x^2-4x+5)\\)</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p34-1",
      "source": "§3.4 #1",
      "href": null,
      "question": "Write \\(y=(5-x^4)^3\\) as \\(f(g(x))\\) and find \\(dy/dx\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Inner \\(u=5-x^4\\), outer \\(y=u^3\\).</p><p class=\"ans\">\\(y'=3(5-x^4)^2(-4x^3)=-12x^3(5-x^4)^2\\)</p>"
       }
      ]
     },
     {
      "id": "p34-2",
      "source": "§3.4 #3",
      "href": null,
      "question": "Differentiate \\(y=\\sin(\\cos x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(y'=\\cos(\\cos x)\\cdot(-\\sin x)=-\\sin x\\cos(\\cos x)\\)</p>"
       }
      ]
     },
     {
      "id": "p34-3",
      "source": "§3.4 #13 & #14",
      "href": null,
      "question": "Differentiate \\(f(\\theta)=\\cos(\\theta^2)\\) and \\(g(\\theta)=\\cos^2\\theta\\). Why are they different?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\cos(\\theta^2)\\): outer cos, inner \\(\\theta^2\\) → \\(-\\sin(\\theta^2)\\cdot2\\theta\\).</p><p>\\(\\cos^2\\theta=(\\cos\\theta)^2\\): outer square, inner cos → \\(2\\cos\\theta(-\\sin\\theta)\\).</p><p class=\"ans\">\\(f'=-2\\theta\\sin(\\theta^2)\\); \\(g'=-2\\sin\\theta\\cos\\theta=-\\sin2\\theta\\)</p>"
       }
      ]
     },
     {
      "id": "p34-4",
      "source": "§3.4 #17",
      "href": null,
      "question": "Differentiate \\(y=x^2e^{-3x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule, with \\((e^{-3x})'=-3e^{-3x}\\).</p><p class=\"ans\">\\(y'=2xe^{-3x}-3x^2e^{-3x}=xe^{-3x}(2-3x)\\)</p>"
       }
      ]
     },
     {
      "id": "p34-5",
      "source": "§3.4 #19",
      "href": null,
      "question": "Differentiate \\(f(t)=e^{at}\\sin bt\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p class=\"ans\">\\(f'(t)=ae^{at}\\sin bt+be^{at}\\cos bt=e^{at}(a\\sin bt+b\\cos bt)\\)</p>"
       }
      ]
     },
     {
      "id": "p34-6",
      "source": "§3.4 #23",
      "href": null,
      "question": "Differentiate \\(y=\\sqrt{\\dfrac{x}{x+1}}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Outer \\(\\sqrt u\\), inner is a quotient: \\(\\left(\\frac{x}{x+1}\\right)'=\\frac{1}{(x+1)^2}\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac12\\left(\\dfrac{x}{x+1}\\right)^{-1/2}\\cdot\\dfrac{1}{(x+1)^2}=\\dfrac12\\cdot\\dfrac{\\sqrt{x+1}}{\\sqrt x}\\cdot\\dfrac1{(x+1)^2}\\)</p><p class=\"ans\">\\(y'=\\dfrac{1}{2\\sqrt x\\,(x+1)^{3/2}}\\)</p>"
       }
      ]
     },
     {
      "id": "p34-7",
      "source": "§3.4 #29",
      "href": null,
      "question": "Differentiate \\(r(t)=10^{2\\sqrt t}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dt}a^{u}=a^{u}\\ln a\\cdot u'\\), with \\(u=2\\sqrt t\\), \\(u'=\\dfrac1{\\sqrt t}\\).</p><p class=\"ans\">\\(r'(t)=\\dfrac{10^{2\\sqrt t}\\ln10}{\\sqrt t}\\)</p>"
       }
      ]
     },
     {
      "id": "p34-8",
      "source": "§3.4 #41",
      "href": null,
      "question": "Differentiate \\(y=\\sin^2(x^2+1)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Three layers: square → sin → \\(x^2+1\\).</p><p>\\(y'=2\\sin(x^2+1)\\cdot\\cos(x^2+1)\\cdot2x\\)</p><p class=\"ans\">\\(y'=4x\\sin(x^2+1)\\cos(x^2+1)=2x\\sin\\big(2(x^2+1)\\big)\\)</p>"
       }
      ]
     },
     {
      "id": "p34-9",
      "source": "§3.4 #58",
      "href": null,
      "question": "Find the tangent line to \\(y=\\sqrt{1+x^3}\\) at \\((2,3)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{3x^2}{2\\sqrt{1+x^3}}\\); at 2: \\(\\dfrac{12}{2\\cdot3}=2\\).</p><p class=\"ans\">\\(y=2x-1\\)</p>"
       }
      ]
     },
     {
      "id": "p34-10",
      "source": "§3.4 · table style",
      "href": null,
      "question": "\\(h(x)=f(g(x))\\). Given \\(g(1)=3\\), \\(g'(1)=4\\), \\(f(3)=7\\), \\(f'(3)=-2\\), \\(f'(1)=5\\). Find \\(h'(1)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(f'\\) is evaluated at \\(g(1)\\), not at 1. One of the given numbers is a decoy.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(h'(1)=f'(g(1))\\cdot g'(1)=f'(3)\\cdot4=(-2)(4)\\)</p><p class=\"ans\">\\(h'(1)=-8\\). (\\(f'(1)=5\\) is not used.)</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Forgetting the inside derivative",
      "html": "<p>\\((\\sin3x)'=3\\cos3x\\), not \\(\\cos3x\\). Every layer contributes a factor.</p>"
     },
     {
      "title": "Changing the inside",
      "html": "<p>\\((\\cos(x^2))'\\) is \\(-\\sin(x^2)\\cdot2x\\). The inside stays \\(x^2\\); don't write \\(-\\sin(2x)\\).</p>"
     },
     {
      "title": "f′(g(x)) vs f′(x)",
      "html": "<p>In table problems, evaluate the outer derivative at the inner value.</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "s35",
  "slug": "3-5",
  "num": "§3.5",
  "title": "Implicit Differentiation",
  "lede": "Finding slopes on curves you can't (or don't want to) solve for y.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>A curve like \\(x^3+y^3=6xy\\) isn't a function \\(y=f(x)\\), but near most points it <em>looks</em> like one. So treat \\(y\\) as an unknown function of \\(x\\) and differentiate both sides with respect to \\(x\\).</p>\n<p class=\"callout\"><strong>The one rule:</strong> every time you differentiate something with \\(y\\) in it, the chain rule attaches a factor of \\(y'\\). So \\(\\frac{d}{dx}(y^3)=3y^2\\,y'\\), \\(\\frac{d}{dx}(\\sin y)=\\cos y\\,y'\\), and \\(\\frac{d}{dx}(xy)=y+x\\,y'\\) (product rule).</p>\n<p><strong>Recipe:</strong></p>\n<ol class=\"steps\">\n<li>Differentiate both sides with respect to \\(x\\). Attach \\(y'\\) to every \\(y\\)-term.</li>\n<li>Move all \\(y'\\) terms to one side, everything else to the other.</li>\n<li>Factor out \\(y'\\) and divide.</li>\n</ol>"
   },
   {
    "type": "lab",
    "id": "lab-imp",
    "html": "<div class=\"lab-head\"><h4>Tangent lines on implicit curves</h4><span class=\"tag\">Lab 7 · drag the point along the curve</span></div>\n<div class=\"controls\">\n<label for=\"imp-c\">curve\n        <select id=\"imp-c\">\n<option value=\"circle\">circle x² + y² = 25</option>\n<option value=\"folium\">folium x³ + y³ = 6xy</option>\n<option value=\"ellipse\">ellipse x² − xy + y² = 3</option>\n<option value=\"kampyle\">kampyle y² = 5x⁴ − x²</option>\n<option value=\"wild\">sin(x + y) = y² cos x</option>\n</select>\n</label>\n</div>\n<canvas aria-label=\"Implicitly defined curve with draggable tangent line\" class=\"square\"></canvas>\n<div class=\"readout\">\n<div>point (x, y)<b class=\"c-f\" id=\"imp-p\">–</b></div>\n<div>dy/dx formula<b id=\"imp-f\" style=\"font-size:14px\">–</b></div>\n<div>slope here<b class=\"c-t\" id=\"imp-m\">–</b></div>\n</div>\n<p class=\"note\">When the denominator of dy/dx is 0, the tangent is vertical. When the numerator is 0, it is horizontal.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Example · folium of Descartes (Stewart Ex. 2)",
      "html": "<p>Find \\(y'\\) for \\(x^3+y^3=6xy\\) and the tangent line at \\((3,3)\\).</p>\n<ol class=\"steps\">\n<li>Differentiate: \\(3x^2+3y^2y'=6y+6xy'\\). <span class=\"why\">Right side used the product rule on \\(6xy\\).</span></li>\n<li>Collect \\(y'\\): \\(3y^2y'-6xy'=6y-3x^2\\).</li>\n<li>Factor and divide (and cancel 3): \\(y'=\\dfrac{2y-x^2}{y^2-2x}\\).</li>\n<li>At \\((3,3)\\): \\(y'=\\dfrac{6-9}{9-6}=-1\\). Tangent: \\(y-3=-(x-3)\\Rightarrow x+y=6\\).</li>\n</ol>"
     },
     {
      "label": "Example · second derivative (§3.5 #39)",
      "html": "<p>Find \\(y''\\) for \\(x^2+4y^2=4\\).</p>\n<ol class=\"steps\">\n<li>\\(2x+8yy'=0\\Rightarrow y'=-\\dfrac{x}{4y}\\).</li>\n<li>Quotient rule on \\(y'\\), remembering \\(y\\) is a function: \\(y''=-\\dfrac{4y\\cdot1-x\\cdot4y'}{16y^2}\\).</li>\n<li>Substitute \\(y'=-\\frac{x}{4y}\\): \\(y''=-\\dfrac{4y+\\frac{x^2}{y}}{16y^2}=-\\dfrac{4y^2+x^2}{16y^3}\\).</li>\n<li><span class=\"why\">Use the original equation: \\(x^2+4y^2=4\\).</span> \\(y''=-\\dfrac{4}{16y^3}=-\\dfrac{1}{4y^3}\\).</li>\n</ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p35-1",
      "source": "§3.5 #1",
      "href": null,
      "question": "Find \\(y'\\) for \\(5x^2-y^3=7\\) implicitly.",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(10x-3y^2y'=0\\)</p><p class=\"ans\">\\(y'=\\dfrac{10x}{3y^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-2",
      "source": "§3.5 #5",
      "href": null,
      "question": "Find \\(dy/dx\\) for \\(x^2-4xy+y^2=4\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(2x-4(y+xy')+2yy'=0\\)</p><p>\\(y'(2y-4x)=4y-2x\\)</p><p class=\"ans\">\\(y'=\\dfrac{2y-x}{y-2x}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-3",
      "source": "§3.5 #7",
      "href": null,
      "question": "Find \\(dy/dx\\) for \\(x^4+x^2y^2+y^3=5\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(4x^3+(2xy^2+x^2\\cdot2yy')+3y^2y'=0\\)</p><p class=\"ans\">\\(y'=-\\dfrac{4x^3+2xy^2}{2x^2y+3y^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-4",
      "source": "§3.5 #10",
      "href": null,
      "question": "Find \\(dy/dx\\) for \\(xe^y=x-y\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(e^y+xe^yy'=1-y'\\)</p><p>\\(y'(xe^y+1)=1-e^y\\)</p><p class=\"ans\">\\(y'=\\dfrac{1-e^y}{1+xe^y}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-5",
      "source": "§3.5 #11",
      "href": null,
      "question": "Find \\(dy/dx\\) for \\(\\sin x+\\cos y=2x-3y\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\cos x-\\sin y\\,y'=2-3y'\\)</p><p>\\(y'(3-\\sin y)=2-\\cos x\\)</p><p class=\"ans\">\\(y'=\\dfrac{2-\\cos x}{3-\\sin y}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-6",
      "source": "§3.5 #15",
      "href": null,
      "question": "Find \\(dy/dx\\) for \\(y\\cos x=x^2+y^2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'\\cos x-y\\sin x=2x+2yy'\\)</p><p>\\(y'(\\cos x-2y)=2x+y\\sin x\\)</p><p class=\"ans\">\\(y'=\\dfrac{2x+y\\sin x}{\\cos x-2y}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-7",
      "source": "§3.5 #23",
      "href": null,
      "question": "If \\(f(x)+x^2[f(x)]^3=10\\) and \\(f(1)=2\\), find \\(f'(1)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Differentiate, then plug in \\(x=1\\), \\(f(1)=2\\) <em>before</em> solving. It's just a linear equation in \\(f'(1)\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)+2x[f(x)]^3+3x^2[f(x)]^2f'(x)=0\\)</p><p>At \\(x=1\\): \\(f'(1)+2(8)+3(4)f'(1)=0\\Rightarrow13f'(1)=-16\\)</p><p class=\"ans\">\\(f'(1)=-\\dfrac{16}{13}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-8",
      "source": "§3.5 #37",
      "href": null,
      "question": "Find the tangent line to the kampyle \\(y^2=5x^4-x^2\\) at \\((1,2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(2yy'=20x^3-2x\\Rightarrow y'=\\dfrac{10x^3-x}{y}\\); at \\((1,2)\\): \\(\\dfrac{9}{2}\\).</p><p class=\"ans\">\\(y=\\tfrac92x-\\tfrac52\\)</p>"
       }
      ]
     },
     {
      "id": "p35-9",
      "source": "§3.5 · circle",
      "href": null,
      "question": "Find the tangent line to \\(x^2+y^2=25\\) at \\((3,4)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(2x+2yy'=0\\Rightarrow y'=-\\dfrac xy=-\\dfrac34\\).</p><p class=\"ans\">\\(y=-\\tfrac34x+\\tfrac{25}{4}\\)</p>"
       }
      ]
     },
     {
      "id": "p35-10",
      "source": "§3.5 · horizontal tangents",
      "href": null,
      "question": "Where does \\(x^2-xy+y^2=3\\) have horizontal tangents?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(2x-y-xy'+2yy'=0\\Rightarrow y'=\\dfrac{y-2x}{2y-x}\\).</p><p>Horizontal: numerator 0 → \\(y=2x\\). Substitute: \\(x^2-2x^2+4x^2=3\\Rightarrow x^2=1\\).</p><p class=\"ans\">\\((1,2)\\) and \\((-1,-2)\\). (Check the denominator \\(2y-x\\ne0\\) there: \\(3\\) and \\(-3\\). ✓)</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "heading",
    "text": "Traps"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Forgetting y′ on y-terms",
      "html": "<p>\\(\\frac{d}{dx}y^2=2y\\,y'\\), not \\(2y\\). This is the #1 mistake.</p>"
     },
     {
      "title": "xy is a product",
      "html": "<p>\\(\\frac{d}{dx}(xy)=y+xy'\\). Don't write just \\(y'\\) or \\(1\\cdot y'\\).</p>"
     },
     {
      "title": "Constant on the right",
      "html": "<p>The derivative of the 25 in \\(x^2+y^2=25\\) is 0. Don't drop the whole right side when it has variables.</p>"
     }
    ]
   }
  ]
 },
 {
  "id": "quiz",
  "slug": "quick-quiz",
  "num": "Mixed",
  "title": "Quick quiz",
  "lede": "Ten fast questions from all six sections. Pick an answer for instant feedback.",
  "blocks": [
   {
    "type": "quiz",
    "items": [
     {
      "question": "<b>1.</b> \\(\\dfrac{d}{dx}\\left(\\dfrac{1}{x^2}\\right)\\) =",
      "options": [
       {
        "html": "\\(\\frac{1}{2x}\\)",
        "correct": false
       },
       {
        "html": "\\(-\\frac{2}{x^3}\\)",
        "correct": true
       },
       {
        "html": "\\(-\\frac{2}{x}\\)",
        "correct": false
       },
       {
        "html": "\\(-\\frac{1}{x^3}\\)",
        "correct": false
       }
      ],
      "explain": "\\(x^{-2}\\to-2x^{-3}\\)."
     },
     {
      "question": "<b>2.</b> \\(f(x)=|x|\\) at \\(x=0\\) is…",
      "options": [
       {
        "html": "differentiable, f′(0) = 0",
        "correct": false
       },
       {
        "html": "continuous but not differentiable",
        "correct": true
       },
       {
        "html": "not continuous",
        "correct": false
       }
      ],
      "explain": "It has a corner: left slope −1, right slope +1."
     },
     {
      "question": "<b>3.</b> \\(\\dfrac{d}{dx}(e^x\\cos x)\\) =",
      "options": [
       {
        "html": "\\(-e^x\\sin x\\)",
        "correct": false
       },
       {
        "html": "\\(e^x(\\cos x-\\sin x)\\)",
        "correct": true
       },
       {
        "html": "\\(e^x(\\cos x+\\sin x)\\)",
        "correct": false
       }
      ],
      "explain": "Product rule: \\(e^x\\cos x+e^x(-\\sin x)\\)."
     },
     {
      "question": "<b>4.</b> \\(\\displaystyle\\lim_{x\\to0}\\frac{\\sin 5x}{x}\\) =",
      "options": [
       {
        "html": "1",
        "correct": false
       },
       {
        "html": "1/5",
        "correct": false
       },
       {
        "html": "5",
        "correct": true
       },
       {
        "html": "0",
        "correct": false
       }
      ],
      "explain": "\\(5\\cdot\\frac{\\sin5x}{5x}\\to5\\)."
     },
     {
      "question": "<b>5.</b> \\(\\dfrac{d}{dx}\\tan(4x)\\) =",
      "options": [
       {
        "html": "\\(\\sec^2(4x)\\)",
        "correct": false
       },
       {
        "html": "\\(4\\sec^2(4x)\\)",
        "correct": true
       },
       {
        "html": "\\(4\\sec(4x)\\tan(4x)\\)",
        "correct": false
       }
      ],
      "explain": "Chain rule: outer tan → sec², inner 4x → 4."
     },
     {
      "question": "<b>6.</b> \\(\\dfrac{d}{dx}\\left(\\dfrac{x}{x+1}\\right)\\) =",
      "options": [
       {
        "html": "\\(\\frac{1}{(x+1)^2}\\)",
        "correct": true
       },
       {
        "html": "\\(\\frac{-1}{(x+1)^2}\\)",
        "correct": false
       },
       {
        "html": "\\(1\\)",
        "correct": false
       }
      ],
      "explain": "\\(\\frac{(x+1)\\cdot1-x\\cdot1}{(x+1)^2}\\)."
     },
     {
      "question": "<b>7.</b> For \\(x^2+y^2=25\\), \\(dy/dx\\) =",
      "options": [
       {
        "html": "\\(-\\frac{y}{x}\\)",
        "correct": false
       },
       {
        "html": "\\(-\\frac{x}{y}\\)",
        "correct": true
       },
       {
        "html": "\\(2x+2y\\)",
        "correct": false
       }
      ],
      "explain": "\\(2x+2yy'=0\\)."
     },
     {
      "question": "<b>8.</b> \\(\\dfrac{d}{dx}\\,e^{x^2}\\) =",
      "options": [
       {
        "html": "\\(e^{x^2}\\)",
        "correct": false
       },
       {
        "html": "\\(x^2e^{x^2-1}\\)",
        "correct": false
       },
       {
        "html": "\\(2xe^{x^2}\\)",
        "correct": true
       }
      ],
      "explain": "\\(e^u\\cdot u'\\) with \\(u=x^2\\)."
     },
     {
      "question": "<b>9.</b> \\(\\dfrac{d}{dx}\\left(\\csc x\\right)\\) =",
      "options": [
       {
        "html": "\\(\\csc x\\cot x\\)",
        "correct": false
       },
       {
        "html": "\\(-\\csc x\\cot x\\)",
        "correct": true
       },
       {
        "html": "\\(-\\csc^2x\\)",
        "correct": false
       }
      ],
      "explain": "“co-” function → minus sign."
     },
     {
      "question": "<b>10.</b> \\(\\dfrac{d}{dx}\\,2^x\\) =",
      "options": [
       {
        "html": "\\(x\\,2^{x-1}\\)",
        "correct": false
       },
       {
        "html": "\\(2^x\\)",
        "correct": false
       },
       {
        "html": "\\(2^x\\ln2\\)",
        "correct": true
       }
      ],
      "explain": "\\((a^x)'=a^x\\ln a\\). Only base e has no extra factor."
     }
    ]
   }
  ]
 },
 {
  "id": "sheet",
  "slug": "cheat-sheet",
  "num": "Review",
  "title": "One-page cheat sheet",
  "lede": "Everything you need to memorize, in one place.",
  "blocks": [
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<h4>Definition (2.8)</h4>\\[f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\]<p class=\"note\">Tangent line: \\(y-f(a)=f'(a)(x-a)\\). Normal slope: \\(-1/f'(a)\\).</p>"
     },
     {
      "key": false,
      "html": "<h4>Basic rules (3.1)</h4>\\[(x^n)'=nx^{n-1},\\ \\ (e^x)'=e^x,\\ \\ (c)'=0\\]<p class=\"note\">\\((cf)'=cf'\\), \\((f\\pm g)'=f'\\pm g'\\)</p>"
     },
     {
      "key": false,
      "html": "<h4>Product / Quotient (3.2)</h4>\\[(fg)'=fg'+gf'\\]\\[\\left(\\tfrac fg\\right)'=\\tfrac{gf'-fg'}{g^2}\\]"
     },
     {
      "key": false,
      "html": "<h4>Trig (3.3)</h4>\\[\\begin{aligned}(\\sin x)'&amp;=\\cos x &amp; (\\cos x)'&amp;=-\\sin x\\\\(\\tan x)'&amp;=\\sec^2x &amp; (\\cot x)'&amp;=-\\csc^2x\\\\(\\sec x)'&amp;=\\sec x\\tan x &amp; (\\csc x)'&amp;=-\\csc x\\cot x\\end{aligned}\\]<p class=\"note\">\\(\\lim\\frac{\\sin\\theta}{\\theta}=1\\), \\(\\lim\\frac{\\cos\\theta-1}{\\theta}=0\\)</p>"
     },
     {
      "key": false,
      "html": "<h4>Chain (3.4)</h4>\\[\\big(f(g(x))\\big)'=f'(g(x))\\,g'(x)\\]<p class=\"note\">\\((g^n)'=ng^{n-1}g'\\), \\((e^{g})'=e^{g}g'\\), \\((a^x)'=a^x\\ln a\\)</p>"
     },
     {
      "key": false,
      "html": "<h4>Implicit (3.5)</h4><p>Differentiate both sides; every \\(y\\)-term gets a \\(y'\\); collect, factor, solve.</p><p class=\"note\">\\((y^n)'=ny^{n-1}y'\\), \\((xy)'=y+xy'\\)</p>"
     }
    ]
   }
  ]
 }
];
