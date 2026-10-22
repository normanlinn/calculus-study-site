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
        "html": "<p>The tangent slope is \\(f'(3)\\). \\(f'(x)=2x-4\\) (by the definition, or the power rule).</p>\n<p class=\"ans\">\\(f'(3)=6-4=2\\)</p><p class=\"why\">Slope or full line? See <a href=\"/3-1/#slope-vs-line\">slope of the tangent vs. the tangent line</a> on the 3.1 page.</p>"
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
        "html": "<p>Point: \\(y(1)=1-2=-1\\), so \\((1,-1)\\).</p>\n<p>Slope: \\(y'=3x^2-2\\), so \\(y'(1)=1\\).</p>\n<p>\\(y-(-1)=1(x-1)\\)</p>\n<p class=\"ans\">\\(y=x-2\\)</p><p class=\"why\">Slope or full line? See <a href=\"/3-1/#slope-vs-line\">slope of the tangent vs. the tangent line</a> on the 3.1 page.</p>"
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
        "label": "Hint",
        "html": "<p>It's a fraction with \\(x\\) on top and bottom, so use the Quotient Rule: \\(\\left(\\frac{f}{g}\\right)'=\\frac{g\\,f'-f\\,g'}{g^2}\\). Write down the four pieces before plugging in.</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Spot the rule.</strong> The function is one expression divided by another, and both contain \\(x\\). You can't split it into simple powers, because the bottom has two terms. So this is a Quotient Rule problem.</p>\n<p><strong>Step 2. Name the four pieces.</strong> Call the top “high” and the bottom “low”:</p>\n<div>\\[ \\text{high}=x^2+3 \\qquad \\text{d-high}=2x \\qquad \\text{low}=x-1 \\qquad \\text{d-low}=1 \\]</div>\n<p class=\"why\">The 3 in \\(x^2+3\\) is a constant, so its derivative is 0. That is why d-high is just \\(2x\\).</p>\n<p><strong>Step 3. Say the rule, then fill it in.</strong> “Low d-high minus high d-low, over low squared”:</p>\n<div>\\[ y'=\\frac{\\text{low}\\cdot\\text{d-high}-\\text{high}\\cdot\\text{d-low}}{\\text{low}^2}=\\frac{(x-1)(2x)-(x^2+3)(1)}{(x-1)^2} \\]</div>\n<p class=\"why\">Low goes first. The minus sign makes order matter: swapping the two terms gives the negative of the right answer.</p>\n<p><strong>Step 4. Multiply out the first product.</strong> \\((x-1)(2x)=2x^2-2x\\).</p>\n<p><strong>Step 5. Subtract the second product, all of it.</strong> \\((x^2+3)(1)=x^2+3\\). Put it in brackets so the minus hits both terms:</p>\n<div>\\[ 2x^2-2x-(x^2+3)=2x^2-2x-x^2-3 \\]</div>\n<p class=\"why\">The most common mistake here is writing \\(-x^2+3\\). The minus applies to the 3 too, so it becomes \\(-3\\).</p>\n<p><strong>Step 6. Combine like terms.</strong> \\(2x^2-x^2=x^2\\), so the numerator is \\(x^2-2x-3\\). Leave the bottom as \\((x-1)^2\\). Don't expand it; the factored form is simpler.</p>\n<div>\\[ y'=\\frac{x^2-2x-3}{(x-1)^2} \\]</div>\n<p><strong>Step 7. Factor the top (optional, but useful).</strong> Find two numbers that multiply to \\(-3\\) and add to \\(-2\\): that's \\(-3\\) and \\(+1\\).</p>\n<div>\\[ y'=\\frac{(x-3)(x+1)}{(x-1)^2} \\]</div>\n<p class=\"why\">Nothing cancels with the bottom, since \\((x-1)\\) is not a factor of the top. The factored form shows right away that \\(y'=0\\) at \\(x=3\\) and \\(x=-1\\), where the tangent lines are horizontal.</p>\n<p><strong>Step 8. Check it another way.</strong> Long division gives \\(\\dfrac{x^2+3}{x-1}=x+1+\\dfrac{4}{x-1}\\). Differentiate each part:</p>\n<div>\\[ y'=1-\\frac{4}{(x-1)^2}=\\frac{(x-1)^2-4}{(x-1)^2}=\\frac{x^2-2x-3}{(x-1)^2}\\ \\checkmark \\]</div>\n<p class=\"ans\">Answer: \\(y'=\\dfrac{x^2-2x-3}{(x-1)^2}=\\dfrac{(x-3)(x+1)}{(x-1)^2}\\), for \\(x\\ne1\\). The original function isn't defined at \\(x=1\\), so neither is its derivative.</p>\n<p class=\"why\">Memory aid: “low d-high minus high d-low, over the square of what's below.” See <a href=\"/3-2/\">§3.2</a> for more quotient-rule practice.</p>"
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
        "label": "Hint",
        "html": "<p>Something is <em>inside</em> the sin. That's a chain rule problem. Differentiate the sin (keep the inside the same), then multiply by the derivative of the inside.</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Recognize it's a chain rule problem.</strong> This isn't \\(\\sin x\\). It's \\(\\sin\\) of a <em>more complicated expression</em>. Whenever a function has another expression plugged into it, you need the chain rule.</p>\n<p><strong>Step 2. Find the outside and the inside.</strong> Imagine plugging in \\(x=1\\). What do you compute first, and what last?</p>\n<ul class=\"steps\"><li>First: \\(x^3+2x=1+2=3\\). That's the <strong>inside</strong>.</li><li>Last: \\(\\sin(3)\\). That's the <strong>outside</strong>.</li></ul>\n<p>Give the inside a name, \\(u\\):</p>\n<div>\\[ u=x^3+2x \\qquad y=\\sin u \\]</div>\n<p><strong>Step 3. Differentiate each piece separately.</strong></p>\n<ul class=\"steps\"><li>Outside: \\(\\dfrac{dy}{du}=\\cos u\\) (derivative of sin is cos).</li><li>Inside: \\(\\dfrac{du}{dx}=3x^2+2\\) (power rule on each term).</li></ul>\n<p><strong>Step 4. Multiply them.</strong> The chain rule says the rates multiply:</p>\n<div>\\[ \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}=\\cos u\\cdot(3x^2+2) \\]</div>\n<p><strong>Step 5. Put the inside back.</strong> Replace \\(u\\) with \\(x^3+2x\\). The inside goes back in <em>unchanged</em>:</p>\n<div>\\[ \\frac{dy}{dx}=\\cos(x^3+2x)\\cdot(3x^2+2) \\]</div>\n<p><strong>Step 6. Write it neatly.</strong> Put the polynomial in front, so nobody reads it as cos of a product:</p>\n<div>\\[ y'=(3x^2+2)\\cos(x^3+2x) \\]</div>\n<p><strong>Step 7. The pattern to remember.</strong> For any inside \\(\\square\\):</p>\n<div>\\[ \\frac{d}{dx}\\sin(\\square)=\\cos(\\square)\\cdot\\square' \\]</div>\n<p class=\"why\">“Derivative of the outside, leave the inside alone, times the derivative of the inside.”</p>\n<p><strong>Step 8. Check that the answer makes sense.</strong> At \\(x=0\\): \\(y'(0)=(0+2)\\cos(0)=2\\). Near 0, \\(x^3\\) is tiny, so \\(y\\approx\\sin(2x)\\approx 2x\\), a line with slope 2. ✓</p>\n<p class=\"ans\">Answer: \\(y'=(3x^2+2)\\cos(x^3+2x)\\)</p>\n<p><strong>Three mistakes to avoid:</strong></p>\n<ul class=\"steps\"><li><strong>\\(\\cos(3x^2+2)\\).</strong> Wrong: you differentiated the inside <em>inside</em> the cos. The inside stays \\(x^3+2x\\) inside the cos; its derivative goes <em>outside</em>, multiplied.</li><li><strong>\\(\\cos(x^3+2x)\\) with nothing in front.</strong> Wrong: forgetting the inside derivative. Every layer gives a factor.</li><li><strong>\\(\\cos(x^3+2x)\\cdot3x^2+2\\).</strong> Missing parentheses: that means only \\(3x^2\\) is multiplied. Write \\((3x^2+2)\\).</li></ul>\n<p class=\"why\">To see why rates multiply, try Lab 6 on the <a href=\"/3-4/\">§3.4 page</a>: a small nudge in \\(x\\) gets stretched by the inside, then again by the outside.</p>"
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
        "label": "Hint",
        "html": "<p>The exponent isn't just \\(x\\), it's a whole expression. So it's \\(e^{u}\\) with an inside \\(u\\): copy the exponential exactly, then multiply by the derivative of the exponent.</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Recognize it's a chain rule problem.</strong> If it were \\(e^x\\), the derivative would just be \\(e^x\\). But here the exponent is a whole expression, \\(4x^2-3x\\). An expression plugged into another function means the chain rule.</p>\n<p><strong>Step 2. Find the outside and the inside.</strong> Imagine plugging in \\(x=1\\):</p>\n<ul class=\"steps\"><li>First: \\(4(1)^2-3(1)=1\\). The exponent is the <strong>inside</strong>.</li><li>Last: \\(e^{1}\\). The exponential is the <strong>outside</strong>.</li></ul>\n<div>\\[ u=4x^2-3x \\qquad y=e^{u} \\]</div>\n<p><strong>Step 3. Differentiate each piece separately.</strong></p>\n<ul class=\"steps\"><li>Outside: \\(\\dfrac{dy}{du}=e^{u}\\). (“e is lazy”: \\(e^u\\) differentiates to itself.)</li><li>Inside: \\(\\dfrac{du}{dx}=8x-3\\). (Power rule: \\(4\\cdot2x=8x\\), and \\(-3x\\to-3\\).)</li></ul>\n<p><strong>Step 4. Multiply them.</strong></p>\n<div>\\[ \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}=e^{u}\\cdot(8x-3) \\]</div>\n<p><strong>Step 5. Put the inside back, unchanged.</strong> The exponent stays exactly \\(4x^2-3x\\):</p>\n<div>\\[ \\frac{dy}{dx}=e^{4x^2-3x}\\cdot(8x-3) \\]</div>\n<p><strong>Step 6. Write it neatly.</strong> Put the polynomial in front:</p>\n<div>\\[ y'=(8x-3)\\,e^{4x^2-3x} \\]</div>\n<p><strong>Step 7. The pattern to remember.</strong> For any exponent \\(\\square\\):</p>\n<div>\\[ \\frac{d}{dx}e^{\\square}=e^{\\square}\\cdot\\square' \\]</div>\n<p class=\"why\">“Copy the whole exponential exactly, then multiply by the derivative of the exponent.” Notice \\(e^{x}\\) is the special case where \\(\\square'=1\\).</p>\n<p><strong>Step 8. Check that it makes sense.</strong> At \\(x=0\\): \\(y'(0)=(0-3)e^{0}=-3\\). Near 0, the \\(4x^2\\) term is tiny, so \\(y\\approx e^{-3x}\\approx1-3x\\), a line with slope \\(-3\\). ✓</p>\n<p class=\"ans\">Answer: \\(y'=(8x-3)\\,e^{4x^2-3x}\\)</p>\n<p><strong>Bonus: where is the tangent horizontal?</strong> Set \\(y'=0\\). Since \\(e^{\\text{anything}}\\) is never 0, only \\(8x-3=0\\) can be, so \\(x=\\tfrac38\\). This trick (the exponential factor is never zero) comes up a lot.</p>\n<p><strong>Three mistakes to avoid:</strong></p>\n<ul class=\"steps\"><li><strong>\\((4x^2-3x)\\,e^{4x^2-3x-1}\\).</strong> Wrong: that's the power rule. The power rule is for \\(x^n\\) (variable in the base), not \\(e^{\\text{stuff}}\\) (variable in the exponent).</li><li><strong>\\(e^{8x-3}\\).</strong> Wrong: you differentiated the exponent in place. The exponent stays the same; its derivative goes in front as a multiplier.</li><li><strong>\\(e^{4x^2-3x}\\) with nothing in front.</strong> Wrong: forgetting the inside derivative. Only plain \\(e^x\\) gets away with that.</li></ul>\n<p class=\"why\">Compare with Q14: \\(\\sin(\\square)\\to\\cos(\\square)\\cdot\\square'\\) and \\(e^{\\square}\\to e^{\\square}\\cdot\\square'\\). Same chain rule, different outside function.</p>"
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
        "label": "Hint",
        "html": "<p>Differentiate both sides with respect to \\(x\\). Treat \\(y\\) as a function of \\(x\\), so \\(y^2\\) needs the chain rule: it gives \\(2y\\cdot y'\\).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Why implicit differentiation?</strong> \\(x^2+y^2=25\\) is a circle of radius 5. It isn't a single function \\(y=f(x)\\): for \\(x=3\\) there are two points, \\((3,4)\\) and \\((3,-4)\\). Solving gives \\(y=\\pm\\sqrt{25-x^2}\\), which is messy. Implicit differentiation lets you skip solving for \\(y\\).</p>\n<p><strong>Step 2. The key idea.</strong> Think of \\(y\\) as some unknown function of \\(x\\), like \\(y(x)\\). Then \\(y^2\\) is really \\(\\big(y(x)\\big)^2\\): a square (outside) of \\(y(x)\\) (inside). That's a chain rule, so a \\(y'\\) appears.</p>\n<p><strong>Step 3. Differentiate every term with respect to \\(x\\).</strong></p>\n<ul class=\"steps\"><li>\\(\\dfrac{d}{dx}(x^2)=2x\\). Ordinary power rule, no \\(y'\\) because it's \\(x\\).</li><li>\\(\\dfrac{d}{dx}(y^2)=2y\\cdot y'\\). Power rule on the outside, times the derivative of the inside (\\(y'\\)).</li><li>\\(\\dfrac{d}{dx}(25)=0\\). A constant.</li></ul>\n<div>\\[ 2x+2y\\,y'=0 \\]</div>\n<p><strong>Step 4. Solve for \\(y'\\).</strong> Move \\(2x\\) to the other side, then divide by \\(2y\\):</p>\n<div>\\[ 2y\\,y'=-2x \\quad\\Longrightarrow\\quad y'=\\frac{-2x}{2y}=-\\frac{x}{y} \\]</div>\n<p><strong>Step 5. Why does the answer have \\(y\\) in it?</strong> Because the slope depends on <em>which</em> point you're at, and \\(x\\) alone doesn't say. At \\((3,4)\\) the slope is \\(-\\tfrac34\\) (going down). At \\((3,-4)\\) it's \\(+\\tfrac34\\) (going up). Same \\(x\\), different slopes.</p>\n<p><strong>Step 6. Why “\\(y\\ne0\\)”?</strong> At \\((5,0)\\) and \\((-5,0)\\) we'd divide by zero. Those are the far left and right edges of the circle, where the tangent line is <strong>vertical</strong>.</p>\n<p><strong>Step 7. Check with geometry.</strong> A tangent to a circle is perpendicular to the radius. The radius to \\((3,4)\\) has slope \\(\\tfrac43\\). Perpendicular slope: \\(-\\tfrac34\\). Our formula gives \\(-\\tfrac34\\). ✓</p>\n<p><strong>Step 8. Check by solving for \\(y\\).</strong> On the top half, \\(y=\\sqrt{25-x^2}\\), so \\(y'=\\dfrac{-2x}{2\\sqrt{25-x^2}}=\\dfrac{-x}{\\sqrt{25-x^2}}=-\\dfrac{x}{y}\\). Same answer, more work. ✓</p>\n<p class=\"ans\">Answer: \\(\\dfrac{dy}{dx}=-\\dfrac{x}{y}\\), for \\(y\\ne0\\).</p>\n<p><strong>Mistakes to avoid:</strong></p>\n<ul class=\"steps\"><li><strong>\\(\\frac{d}{dx}(y^2)=2y\\).</strong> Missing the \\(y'\\). Every \\(y\\)-term gets a \\(y'\\).</li><li><strong>Writing \\(-\\frac{y}{x}\\).</strong> Flipped. Check: the \\(2x\\) came from the \\(x^2\\) term, and it ends up on top.</li></ul>\n<p class=\"why\">Drag the point around the circle in Lab 7 on the <a href=\"/3-5/\">§3.5 page</a> to watch the slope \\(-x/y\\) change.</p>"
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
        "html": "<p>Go term by term. \\(x^2y\\) is a <em>product</em> of \\(x^2\\) and \\(y\\), so it needs the product rule. \\(y^3\\) needs the chain rule (\\(3y^2y'\\)).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Why implicit?</strong> Solving \\(x^2y+y^3=7\\) for \\(y\\) means solving a cubic in \\(y\\). Not happening. Differentiate the equation as it is.</p>\n<p><strong>Step 2. Differentiate term by term.</strong></p>\n<ul class=\"steps\"><li><strong>\\(x^2y\\) is a product</strong> of \\(x^2\\) and \\(y\\). Product rule (first d-second + second d-first):<br>\\(\\dfrac{d}{dx}(x^2y)=x^2\\cdot y'+y\\cdot2x=2xy+x^2y'\\)</li><li><strong>\\(y^3\\)</strong>: chain rule, \\(3y^2\\cdot y'\\).</li><li><strong>\\(7\\)</strong>: a constant, so \\(0\\).</li></ul>\n<div>\\[ 2xy+x^2y'+3y^2y'=0 \\]</div>\n<p><strong>Step 3. Separate the \\(y'\\) terms from the rest.</strong> Keep the \\(y'\\) terms on the left and move \\(2xy\\) to the right:</p>\n<div>\\[ x^2y'+3y^2y'=-2xy \\]</div>\n<p><strong>Step 4. Factor out \\(y'\\).</strong></p>\n<div>\\[ y'\\,(x^2+3y^2)=-2xy \\]</div>\n<p><strong>Step 5. Divide.</strong></p>\n<div>\\[ y'=-\\frac{2xy}{x^2+3y^2} \\]</div>\n<p class=\"why\">This 3-move ending (collect \\(y'\\) terms, factor out \\(y'\\), divide) is the same in almost every implicit problem.</p>\n<p><strong>Step 6. Does it make sense?</strong> \\(x\\) only appears as \\(x^2\\), so the curve is symmetric about the \\(y\\)-axis. That means the tangent must be flat where the curve crosses \\(x=0\\). Our formula gives \\(y'=0\\) when \\(x=0\\). ✓</p>\n<p class=\"ans\">Answer: \\(\\dfrac{dy}{dx}=-\\dfrac{2xy}{x^2+3y^2}\\)</p>\n<p><strong>Mistakes to avoid:</strong></p>\n<ul class=\"steps\"><li><strong>\\(\\frac{d}{dx}(x^2y)=2x\\,y'\\).</strong> Wrong: it's a product, so you need <em>both</em> terms, \\(2xy+x^2y'\\).</li><li><strong>\\(\\frac{d}{dx}(y^3)=3y^2\\).</strong> Missing the \\(y'\\).</li><li><strong>Moving \\(x^2y'\\) to the right.</strong> Every term with \\(y'\\) stays on the same side, or you can't factor \\(y'\\) out.</li></ul>"
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
        "label": "Hint",
        "html": "<p>Differentiate both sides (the \\(xy\\) term needs the product rule), then plug in \\(x=1,\\ y=2\\). You can plug in before or after solving for \\(y'\\).</p>"
       },
       {
        "label": "Step-by-step solution",
        "html": "<p><strong>Step 1. Check the point is on the curve.</strong> \\(1^2+(1)(2)+2^2=1+2+4=7\\). ✓ Always worth 5 seconds: if it's not on the curve, something's wrong.</p>\n<p><strong>Step 2. Differentiate term by term.</strong></p>\n<ul class=\"steps\"><li>\\(\\dfrac{d}{dx}(x^2)=2x\\)</li><li>\\(\\dfrac{d}{dx}(xy)=1\\cdot y+x\\cdot y'=y+xy'\\) (product rule: \\(x\\) times \\(y\\))</li><li>\\(\\dfrac{d}{dx}(y^2)=2y\\,y'\\)</li><li>\\(\\dfrac{d}{dx}(7)=0\\)</li></ul>\n<div>\\[ 2x+y+xy'+2yy'=0 \\]</div>\n<p><strong>Step 3. Collect and factor \\(y'\\).</strong></p>\n<div>\\[ y'(x+2y)=-(2x+y) \\quad\\Longrightarrow\\quad y'=-\\frac{2x+y}{x+2y} \\]</div>\n<p><strong>Step 4. Plug in the point \\((1,2)\\).</strong></p>\n<div>\\[ y'=-\\frac{2(1)+2}{1+2(2)}=-\\frac{4}{5} \\]</div>\n<p><strong>Faster exam shortcut.</strong> If you only need the number, plug in \\(x=1,\\ y=2\\) right after Step 2, then solve a simple equation:</p>\n<div>\\[ 2+2+y'+4y'=0 \\;\\Longrightarrow\\; 4+5y'=0 \\;\\Longrightarrow\\; y'=-\\tfrac45 \\]</div>\n<p class=\"why\">Same answer, less algebra. Use the full formula only when the question asks for \\(dy/dx\\) in general.</p>\n<p><strong>Step 5. (If asked) the tangent line.</strong> Point \\((1,2)\\), slope \\(-\\tfrac45\\):</p>\n<div>\\[ y-2=-\\tfrac45(x-1) \\quad\\Longrightarrow\\quad y=-\\tfrac45x+\\tfrac{14}{5} \\]</div>\n<p><strong>Step 6. Does it make sense?</strong> The curve \\(x^2+xy+y^2=7\\) is a tilted ellipse. At \\((1,2)\\), on its upper right, the curve is heading down as \\(x\\) increases, so a negative slope fits.</p>\n<p class=\"ans\">Answer: slope \\(=-\\dfrac45\\) at \\((1,2)\\). (General formula: \\(y'=-\\dfrac{2x+y}{x+2y}\\).)</p>\n<p><strong>Mistakes to avoid:</strong></p>\n<ul class=\"steps\"><li><strong>\\(\\frac{d}{dx}(xy)=y'\\) or \\(=1\\).</strong> It's a product: \\(y+xy'\\).</li><li><strong>Plugging the point into the original equation and stopping.</strong> That only checks the point. You need the <em>differentiated</em> equation.</li><li><strong>Slope vs. line.</strong> This question asks for the slope (a number). If it said “tangent line”, finish with \\(y=\\dots\\). See <a href=\"/3-1/#slope-vs-line\">slope vs. tangent line</a>.</li></ul>"
       }
      ]
     }
    ]
   }
  ],
  "unit": "q3"
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
  ],
  "unit": "q3"
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
    "id": "slope-vs-line",
    "text": "Slope of the tangent vs. the tangent line"
   },
   {
    "type": "prose",
    "html": "<p>These sound alike but ask for different things. The <strong>slope</strong> is one number. The <strong>tangent line</strong> is a whole equation, and the slope is just one of its two ingredients.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">“Slope of the tangent line” → a number</span><p>One step: plug \\(a\\) into the <strong>derivative</strong>.</p><div>\\[ m = f'(a) \\]</div><p class=\"note\">Same answer for “rate of change at \\(a\\)” or “find \\(f'(a)\\)”.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">“Tangent line” → an equation</span><p>Three steps: a point, a slope, then point-slope form.</p><div>\\[ y - f(a) = f'(a)\\,(x - a) \\]</div><p class=\"note\">The point comes from \\(f\\). The slope comes from \\(f'\\).</p>"
     }
    ]
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Slope only · practice quiz Q2",
      "html": "<p>Find the <strong>slope</strong> of the tangent line to \\(f(x)=x^2-4x\\) at \\(x=3\\).</p><ol class=\"steps\"><li>Differentiate: \\(f'(x)=2x-4\\).</li><li>Plug in 3: \\(f'(3)=6-4=2\\).</li><li>Answer: <strong>2</strong>. It's a number, so you're done.</li></ol>"
     },
     {
      "label": "Full line · practice quiz Q6",
      "html": "<p>Find the <strong>tangent line</strong> to \\(y=x^3-2x\\) at \\(x=1\\).</p><ol class=\"steps\"><li><strong>Point</strong> (use \\(y\\)): \\(y(1)=1-2=-1\\), so \\((1,-1)\\).</li><li><strong>Slope</strong> (use \\(y'\\)): \\(y'=3x^2-2\\), so \\(y'(1)=1\\).</li><li><strong>Equation</strong>: \\(y-(-1)=1(x-1)\\), so <strong>\\(y=x-2\\)</strong>.</li></ol>"
     },
     {
      "label": "Same function, both questions",
      "html": "<p>Turn Q2 into a tangent-line question: find the tangent line to \\(f(x)=x^2-4x\\) at \\(x=3\\).</p><ol class=\"steps\"><li>Point: \\(f(3)=9-12=-3\\), so \\((3,-3)\\).</li><li>Slope: \\(f'(3)=2\\) (the Q2 answer).</li><li>Line: \\(y-(-3)=2(x-3)\\), so \\(y=2x-9\\).</li><li class=\"why\">Q2's answer (2) is the slope of this line.</li></ol>"
     }
    ]
   },
   {
    "type": "prose",
    "html": "<div class=\"compare\"><table><thead><tr><th></th><th>Slope of the tangent</th><th>Tangent line</th></tr></thead><tbody><tr><th>Answer is</th><td>a number</td><td>an equation \\(y=\\dots\\)</td></tr><tr><th>Uses \\(f(a)\\)?</th><td>No</td><td>Yes, for the point</td></tr><tr><th>Uses \\(f'(a)\\)?</th><td>Yes</td><td>Yes, for the slope</td></tr><tr><th>Q2 / Q6 answer</th><td>\\(2\\)</td><td>\\(y=x-2\\)</td></tr></tbody></table></div><p><strong>Read the wording:</strong> “slope”, “rate of change” or “\\(f'(a)\\)” → give a number. “Tangent line” or “equation of the tangent line” → give \\(y=\\dots\\). “Normal line” → same point, slope \\(-\\dfrac{1}{f'(a)}\\).</p>"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Getting the point from f′",
      "html": "<p>The y-coordinate of the point is \\(f(a)\\), never \\(f'(a)\\). In Q6, \\(y(1)=-1\\) is the point and \\(y'(1)=1\\) is the slope.</p>"
     },
     {
      "title": "Stopping at the slope",
      "html": "<p>If the question says “tangent line”, the number \\(f'(a)\\) alone gets partial credit at best. Finish with \\(y=\\dots\\).</p>"
     },
     {
      "title": "Writing a line for a slope question",
      "html": "<p>If it only asks for the slope, give the number. An equation answers a different question.</p>"
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
  ],
  "unit": "q3"
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
  ],
  "unit": "q3"
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
    "type": "prose",
    "html": "<p class=\"callout\">Trouble remembering these six? See <a href=\"/memory-tricks/\">Memory tricks</a>: learn 3, get the other 3 with the “co” rule, then drill them with flashcards.</p>"
   },
   {
    "type": "lab",
    "id": "lab-sin",
    "html": "<div class=\"lab-head\"><h4>The slope of sin x is cos x</h4><span class=\"tag\">Lab 5a · drag on the graph</span></div>\n<canvas aria-label=\"Graph of sin x with a tangent line\" class=\"short\" id=\"sin-top\"></canvas>\n<canvas aria-label=\"Slopes of sin x traced, compared with cos x\" class=\"short\" id=\"sin-bot\"></canvas>\n<div class=\"controls\">\n<label for=\"sin-x\">x <input id=\"sin-x\" max=\"6.28\" min=\"-6.28\" step=\"0.01\" type=\"range\" value=\"-5\"/></label>\n<label for=\"sin-cos\"><input id=\"sin-cos\" type=\"checkbox\"/> overlay cos x</label>\n<button id=\"sin-anim\" type=\"button\">Sweep</button>\n</div>\n<div class=\"readout\">\n<div>x (radians)<b id=\"sin-xv\">–</b></div>\n<div>slope of sin at x<b class=\"c-d\" id=\"sin-m\">–</b></div>\n<div>cos x<b id=\"sin-c\">–</b></div>\n</div>"
   },
   {
    "type": "heading",
    "text": "Proving the trig derivatives",
    "id": "proofs"
   },
   {
    "type": "prose",
    "html": "<p>Quizzes often ask you to <strong>show</strong> a formula, like \\(\\frac{d}{dx}\\cot x=-\\csc^2x\\). Every one of these proofs uses the same four moves:</p><ol class=\"steps\"><li><strong>Rewrite</strong> the function using only \\(\\sin\\) and \\(\\cos\\): \\(\\cot x=\\frac{\\cos x}{\\sin x}\\), \\(\\sec x=\\frac1{\\cos x}\\), \\(\\csc x=\\frac1{\\sin x}\\), \\(\\tan x=\\frac{\\sin x}{\\cos x}\\).</li><li><strong>Quotient rule</strong> (low d-high minus high d-low, over low squared).</li><li><strong>Simplify the top</strong> with \\(\\sin^2x+\\cos^2x=1\\).</li><li><strong>Rewrite back</strong> into the target form, splitting a fraction if needed: \\(\\frac{\\sin x}{\\cos^2x}=\\frac1{\\cos x}\\cdot\\frac{\\sin x}{\\cos x}\\).</li></ol><p class=\"callout\">Write it as a chain of equals signs starting from \\(\\frac{d}{dx}(\\dots)\\) and ending at the formula. Never start from the answer and work backward.</p>"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Prove (cot x)′ = −csc²x (§3.3 #25)",
      "html": "<ol class=\"steps\"><li><strong>Rewrite:</strong> \\(\\dfrac{d}{dx}\\cot x=\\dfrac{d}{dx}\\left(\\dfrac{\\cos x}{\\sin x}\\right)\\).</li><li><strong>Quotient rule:</strong> high \\(=\\cos x\\), d-high \\(=-\\sin x\\); low \\(=\\sin x\\), d-low \\(=\\cos x\\).<br>\\(=\\dfrac{\\sin x\\cdot(-\\sin x)-\\cos x\\cdot\\cos x}{\\sin^2x}\\)</li><li><strong>Simplify the top:</strong> \\(=\\dfrac{-\\sin^2x-\\cos^2x}{\\sin^2x}=\\dfrac{-(\\sin^2x+\\cos^2x)}{\\sin^2x}=\\dfrac{-1}{\\sin^2x}\\).</li><li><strong>Rewrite:</strong> \\(\\dfrac{1}{\\sin x}=\\csc x\\), so \\(\\dfrac{-1}{\\sin^2x}=-\\csc^2x\\). ✓</li></ol><p class='ans'>\\(\\dfrac{d}{dx}\\cot x=-\\csc^2x\\)</p>"
     },
     {
      "label": "Prove (sec x)′ = sec x tan x (§3.3 #24)",
      "html": "<ol class=\"steps\"><li>\\(\\dfrac{d}{dx}\\sec x=\\dfrac{d}{dx}\\left(\\dfrac{1}{\\cos x}\\right)=\\dfrac{\\cos x\\cdot0-1\\cdot(-\\sin x)}{\\cos^2x}=\\dfrac{\\sin x}{\\cos^2x}\\)</li><li><strong>Split:</strong> \\(\\dfrac{\\sin x}{\\cos^2x}=\\dfrac{1}{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}=\\sec x\\tan x\\). ✓</li></ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Proof practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p33p-23",
      "source": "§3.3 #23",
      "href": null,
      "question": "Show that \\(\\dfrac{d}{dx}\\csc x=-\\csc x\\cot x\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Write \\(\\csc x=\\frac{1}{\\sin x}\\) and use the quotient rule; the derivative of the constant 1 is 0.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}\\left(\\dfrac1{\\sin x}\\right)=\\dfrac{\\sin x\\cdot0-1\\cdot\\cos x}{\\sin^2x}=\\dfrac{-\\cos x}{\\sin^2x}\\).</p><p>Split: \\(-\\dfrac{1}{\\sin x}\\cdot\\dfrac{\\cos x}{\\sin x}=-\\csc x\\cot x\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\csc x=-\\csc x\\cot x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p33p-24",
      "source": "§3.3 #24",
      "href": null,
      "question": "Show that \\(\\dfrac{d}{dx}\\sec x=\\sec x\\tan x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}\\left(\\dfrac1{\\cos x}\\right)=\\dfrac{0-1\\cdot(-\\sin x)}{\\cos^2x}=\\dfrac{\\sin x}{\\cos^2x}\\).</p><p>Split: \\(\\dfrac{1}{\\cos x}\\cdot\\dfrac{\\sin x}{\\cos x}=\\sec x\\tan x\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\sec x=\\sec x\\tan x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p33p-25",
      "source": "§3.3 #25",
      "href": null,
      "question": "Show that \\(\\dfrac{d}{dx}\\cot x=-\\csc^2x\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>\\(\\cot x=\\frac{\\cos x}{\\sin x}\\). After the quotient rule, factor out a minus and use \\(\\sin^2x+\\cos^2x=1\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}\\left(\\dfrac{\\cos x}{\\sin x}\\right)=\\dfrac{\\sin x(-\\sin x)-\\cos x\\cos x}{\\sin^2x}\\).</p><p>Top: \\(-(\\sin^2x+\\cos^2x)=-1\\). So it equals \\(\\dfrac{-1}{\\sin^2x}=-\\csc^2x\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\cot x=-\\csc^2x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p33p-tan",
      "source": "Proof",
      "href": null,
      "question": "Show that \\(\\dfrac{d}{dx}\\tan x=\\sec^2x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}\\left(\\dfrac{\\sin x}{\\cos x}\\right)=\\dfrac{\\cos x\\cos x-\\sin x(-\\sin x)}{\\cos^2x}=\\dfrac{\\cos^2x+\\sin^2x}{\\cos^2x}\\).</p><p>Top \\(=1\\): \\(\\dfrac{1}{\\cos^2x}=\\sec^2x\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\tan x=\\sec^2x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p33p-26",
      "source": "§3.3 #26",
      "href": null,
      "question": "Prove, using the definition of a derivative, that if \\(f(x)=\\cos x\\) then \\(f'(x)=-\\sin x\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Expand \\(\\cos(x+h)\\) with the addition formula, then group the terms with \\(\\cos x\\) and with \\(\\sin x\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=\\displaystyle\\lim_{h\\to0}\\frac{\\cos(x+h)-\\cos x}{h}\\).</p><p>Addition formula: \\(\\cos(x+h)=\\cos x\\cos h-\\sin x\\sin h\\).</p><p>Regroup: \\(\\displaystyle\\lim_{h\\to0}\\left[\\cos x\\cdot\\frac{\\cos h-1}{h}-\\sin x\\cdot\\frac{\\sin h}{h}\\right]\\).</p><p>Use the special limits \\(\\frac{\\cos h-1}{h}\\to0\\) and \\(\\frac{\\sin h}{h}\\to1\\): \\(\\cos x\\cdot0-\\sin x\\cdot1\\).</p><p class=\"ans\">\\(f'(x)=-\\sin x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p33p-identity",
      "source": "§3.3 #37 style",
      "href": null,
      "question": "Differentiate \\(f(x)=\\dfrac{\\tan x-1}{\\sec x}\\) two ways and show the answers agree.",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<strong>Simplify first:</strong> \\(f=\\dfrac{\\frac{\\sin x}{\\cos x}-1}{\\frac1{\\cos x}}=\\sin x-\\cos x\\), so \\(f'=\\cos x+\\sin x\\).<strong>Quotient rule:</strong> \\(f'=\\dfrac{\\sec x\\cdot\\sec^2x-(\\tan x-1)\\sec x\\tan x}{\\sec^2x}=\\dfrac{\\sec^2x-\\tan^2x+\\tan x}{\\sec x}\\).<p>Use \\(\\sec^2x-\\tan^2x=1\\): \\(f'=\\dfrac{1+\\tan x}{\\sec x}=\\cos x+\\sin x\\). Same answer.</p><p class=\"ans\">\\(f'(x)=\\cos x+\\sin x\\) both ways ✓</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Starting from the answer",
      "html": "<p>A proof starts at \\(\\frac{d}{dx}\\cot x\\) and ends at \\(-\\csc^2x\\). Don't write \\(-\\csc^2x=\\dots\\) and work backward.</p>"
     },
     {
      "title": "Losing the minus",
      "html": "<p>In the cot proof both terms are negative: \\(-\\sin^2x-\\cos^2x=-(\\sin^2x+\\cos^2x)\\).</p>"
     },
     {
      "title": "Derivative of 1",
      "html": "<p>In \\(\\frac{1}{\\cos x}\\), d-high is \\(0\\), not 1.</p>"
     }
    ]
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
  ],
  "unit": "q3"
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
  ],
  "unit": "q3"
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
  ],
  "unit": "q3"
 },
 {
  "id": "q4",
  "slug": "quiz-4",
  "num": "Quiz 4 · Tue, Oct 27",
  "title": "Quiz 4 study plan",
  "lede": "Sections 3.6, 3.9, 3.10, 3.11 and 4.1: what's assigned, what's solved here, and a day-by-day plan.",
  "blocks": [
   {
    "type": "countdown",
    "target": "2026-10-27",
    "label": "Quiz 4"
   },
   {
    "type": "heading",
    "text": "Your assigned problems"
   },
   {
    "type": "prose",
    "html": "<p>Every problem number below is solved step by step on its section page. Tap one to jump straight to it. Try it on paper first, then open the solution.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">§3.6 · assigned 1–59 odd</span><p><strong><a href=\"/3-6/\">Derivatives of Logarithmic and Inverse Trig Functions</a></strong></p><p class=\"note\">Solved step by step on the site: <a href=\"/3-6/#p36-5\">#5</a>, <a href=\"/3-6/#p36-9\">#9</a>, <a href=\"/3-6/#p36-13\">#13</a>, <a href=\"/3-6/#p36-15\">#15</a>, <a href=\"/3-6/#p36-17\">#17</a>, <a href=\"/3-6/#p36-19\">#19</a>, <a href=\"/3-6/#p36-21\">#21</a>, <a href=\"/3-6/#p36-29\">#29</a>, <a href=\"/3-6/#p36-35\">#35</a>, <a href=\"/3-6/#p36-39\">#39</a>, <a href=\"/3-6/#p36-43\">#43</a>, <a href=\"/3-6/#p36-45\">#45</a>, <a href=\"/3-6/#p36-51\">#51</a>, <a href=\"/3-6/#p36-55\">#55</a>, <a href=\"/3-6/#p36-57\">#57</a>, <a href=\"/3-6/#p36-59\">#59</a></p><p class=\"note\"><a href=\"/3-6/#inverse-trig\">Inverse trig + chain rule, like tan⁻¹(eˣ)</a>: 20 solved problems and a step-builder.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§3.9 · assigned 1–33 odd</span><p><strong><a href=\"/3-9/\">Related Rates</a></strong></p><p class=\"note\">Solved step by step on the site: <a href=\"/3-9/#p39-1\">#1</a>, <a href=\"/3-9/#p39-3\">#3</a>, <a href=\"/3-9/#p39-5\">#5</a>, <a href=\"/3-9/#p39-7\">#7</a>, <a href=\"/3-9/#p39-9\">#9</a>, <a href=\"/3-9/#p39-13\">#13</a>, <a href=\"/3-9/#p39-15\">#15</a>, <a href=\"/3-9/#p39-17\">#17</a>, <a href=\"/3-9/#p39-21\">#21</a>, <a href=\"/3-9/#p39-23\">#23</a>, <a href=\"/3-9/#p39-25\">#25</a>, <a href=\"/3-9/#p39-29\">#29</a>, <a href=\"/3-9/#p39-31\">#31</a>, <a href=\"/3-9/#p39-33\">#33</a></p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§3.10 · assigned 1–37 odd</span><p><strong><a href=\"/3-10/\">Linear Approximations and Differentials</a></strong></p><p class=\"note\">Solved step by step on the site: <a href=\"/3-10/#p310-1\">#1</a>, <a href=\"/3-10/#p310-3\">#3</a>, <a href=\"/3-10/#p310-5\">#5</a>, <a href=\"/3-10/#p310-7\">#7</a>, <a href=\"/3-10/#p310-11\">#11</a>, <a href=\"/3-10/#p310-13\">#13</a>, <a href=\"/3-10/#p310-17\">#17</a>, <a href=\"/3-10/#p310-19\">#19</a>, <a href=\"/3-10/#p310-21\">#21</a>, <a href=\"/3-10/#p310-23\">#23</a>, <a href=\"/3-10/#p310-25\">#25</a>, <a href=\"/3-10/#p310-31\">#31</a>, <a href=\"/3-10/#p310-33\">#33</a>, <a href=\"/3-10/#p310-35\">#35</a>, <a href=\"/3-10/#p310-37\">#37</a></p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§3.11 · assigned 1–45 odd</span><p><strong><a href=\"/3-11/\">Hyperbolic Functions</a></strong></p><p class=\"note\">Solved step by step on the site: <a href=\"/3-11/#p311-1\">#1</a>, <a href=\"/3-11/#p311-3\">#3</a>, <a href=\"/3-11/#p311-5\">#5</a>, <a href=\"/3-11/#p311-7\">#7</a>, <a href=\"/3-11/#p311-9\">#9</a>, <a href=\"/3-11/#p311-13\">#13</a>, <a href=\"/3-11/#p311-19\">#19</a>, <a href=\"/3-11/#p311-25\">#25</a>, <a href=\"/3-11/#p311-27\">#27</a>, <a href=\"/3-11/#p311-35\">#35</a>, <a href=\"/3-11/#p311-37\">#37</a>, <a href=\"/3-11/#p311-39\">#39</a>, <a href=\"/3-11/#p311-43\">#43</a>, <a href=\"/3-11/#p311-45\">#45</a></p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§4.1 · assigned 13–65 odd</span><p><strong><a href=\"/4-1/\">Maximum and Minimum Values</a></strong></p><p class=\"note\">Solved step by step on the site: <a href=\"/4-1/#p41-19\">#19</a>, <a href=\"/4-1/#p41-23\">#23</a>, <a href=\"/4-1/#p41-29\">#29</a>, <a href=\"/4-1/#p41-31\">#31</a>, <a href=\"/4-1/#p41-33\">#33</a>, <a href=\"/4-1/#p41-35\">#35</a>, <a href=\"/4-1/#p41-37\">#37</a>, <a href=\"/4-1/#p41-39\">#39</a>, <a href=\"/4-1/#p41-41\">#41</a>, <a href=\"/4-1/#p41-43\">#43</a>, <a href=\"/4-1/#p41-45\">#45</a>, <a href=\"/4-1/#p41-47\">#47</a>, <a href=\"/4-1/#p41-51\">#51</a>, <a href=\"/4-1/#p41-53\">#53</a>, <a href=\"/4-1/#p41-55\">#55</a>, <a href=\"/4-1/#p41-57\">#57</a>, <a href=\"/4-1/#p41-59\">#59</a>, <a href=\"/4-1/#p41-61\">#61</a>, <a href=\"/4-1/#p41-63\">#63</a>, <a href=\"/4-1/#p41-65\">#65</a></p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Day-by-day plan"
   },
   {
    "type": "prose",
    "html": "<div class=\"compare\"><table><thead><tr><th>Day</th><th>Focus</th><th>Do this</th></tr></thead><tbody>\n<tr><th>Thu Oct 22</th><td>§3.6 logs</td><td>Lesson + lab, then #5–21 odd. Drill the ln and log<sub>b</sub> flashcards.</td></tr>\n<tr><th>Fri Oct 23</th><td>§3.6 log diff + §3.11</td><td>#45–59 odd (log differentiation), then hyperbolic #1–27 odd and #35–45 odd.</td></tr>\n<tr><th>Sat Oct 24</th><td>§3.9 related rates</td><td>The biggest topic. Learn the recipe, play with the ladder lab, do #1–33 odd. Draw a picture every time.</td></tr>\n<tr><th>Sun Oct 25</th><td>§3.10 + §4.1</td><td>Linearization #1–37 odd. Then critical numbers #29–47 odd.</td></tr>\n<tr><th>Mon Oct 26</th><td>§4.1 + review</td><td>Closed Interval Method #51–65 odd. Then 20 mixed problems on the Generate page, set to the Quiz 4 sections.</td></tr>\n<tr><th>Tue Oct 27</th><td>Quiz day</td><td>Light review only: cheat sheet and a round of flashcards.</td></tr>\n</tbody></table></div>"
   },
   {
    "type": "heading",
    "text": "Skills the quiz will test"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">§3.6</span><p>Differentiate \\(\\ln u\\), \\(\\log_b u\\), \\(b^u\\); simplify with log laws first; logarithmic differentiation for \\(x^x\\)-type functions.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">§3.9</span><p>Set up the equation, differentiate with respect to \\(t\\), <em>then</em> plug in. Pythagoras, similar triangles, cones, spheres.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§3.10</span><p>\\(L(x)=f(a)+f'(a)(x-a)\\); estimate numbers; \\(dy=f'(x)dx\\) vs \\(\\Delta y\\); error estimates.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">§3.11</span><p>Definitions with \\(e^x\\); \\(\\cosh^2-\\sinh^2=1\\); derivatives (cosh′ has no minus).</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">§4.1</span><p>Critical numbers (\\(f'=0\\) or undefined, in the domain); Closed Interval Method with a table of candidates.</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "s36",
  "slug": "3-6",
  "num": "§3.6",
  "title": "Derivatives of Logarithmic and Inverse Trig Functions",
  "lede": "ln, other logs, logarithmic differentiation, and inverse trig with the chain rule (like tan⁻¹(eˣ)).",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>Two new families: <strong>logarithms</strong> and <strong>inverse trig functions</strong>. Every formula comes from implicit differentiation: if \\(y=\\ln x\\) then \\(e^y=x\\), so \\(e^y\\,y'=1\\) and \\(y'=\\frac{1}{e^y}=\\frac1x\\).</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Natural log</span>\\[\\frac{d}{dx}\\ln x=\\frac1x\\qquad \\frac{d}{dx}\\ln|x|=\\frac1x\\]"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Chain rule version</span>\\[\\frac{d}{dx}\\ln u=\\frac{u'}{u}\\]<p class=\"note\">“Derivative of the inside over the inside.”</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Other bases</span>\\[\\frac{d}{dx}\\log_b x=\\frac{1}{x\\ln b}\\qquad \\frac{d}{dx}b^x=b^x\\ln b\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Log laws (use first!)</span><p>\\(\\ln(ab)=\\ln a+\\ln b\\), \\(\\ln\\frac ab=\\ln a-\\ln b\\), \\(\\ln a^n=n\\ln a\\). Splitting first turns one hard quotient rule into easy pieces.</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-ln",
    "html": "<div class=\"lab-head\"><h4>The slope of ln x is 1/x</h4><span class=\"tag\">Lab · drag on the graph</span></div>\n<canvas class=\"tall\" id=\"ln-cv\" aria-label=\"Graph of ln x with a tangent line; its slope is traced against 1/x\"></canvas>\n<div class=\"controls\">\n  <label for=\"ln-x\">x <input id=\"ln-x\" type=\"range\" min=\"0.25\" max=\"6\" step=\"0.01\" value=\"2\"></label>\n  <label for=\"ln-base\">curve\n    <select id=\"ln-base\">\n      <option value=\"e\">ln x</option>\n      <option value=\"2\">log₂ x</option>\n      <option value=\"10\">log₁₀ x</option>\n    </select>\n  </label>\n  <button type=\"button\" id=\"ln-anim\">Sweep</button>\n</div>\n<div class=\"readout\">\n  <div>x<b id=\"ln-xv\">–</b></div>\n  <div>slope of the tangent<b class=\"c-t\" id=\"ln-m\">–</b></div>\n  <div>formula 1 / (x ln b)<b class=\"c-d\" id=\"ln-f\">–</b></div>\n</div>\n<p class=\"note\">The pink dashed curve is 1/(x ln b). Its height always equals the slope of the blue curve. For ln x the base is e and ln e = 1, so the slope is simply 1/x. Other bases pick up the extra factor 1/ln b.</p>"
   },
   {
    "type": "heading",
    "text": "Logarithmic differentiation"
   },
   {
    "type": "prose",
    "html": "<p>For messy products/quotients/powers, and for <strong>variable to a variable power</strong> like \\(x^x\\), take \\(\\ln\\) of both sides first:</p><ol class=\"steps\"><li>Take \\(\\ln\\) of both sides: \\(\\ln y=\\ln(\\dots)\\).</li><li>Use the log laws to break it into sums.</li><li>Differentiate implicitly: the left side becomes \\(\\dfrac{y'}{y}\\).</li><li>Multiply by \\(y\\) and substitute the original function back in.</li></ol><p class=\"callout\">Neither the power rule nor the exponential rule works for \\(x^x\\): the power rule needs a constant exponent, and \\(b^x\\) needs a constant base. Logarithmic differentiation is the way.</p>"
   },
   {
    "type": "heading",
    "text": "Inverse trig derivatives"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">sin⁻¹ and cos⁻¹</span>\\[\\frac{d}{dx}\\sin^{-1}x=\\frac{1}{\\sqrt{1-x^2}}\\qquad\\frac{d}{dx}\\cos^{-1}x=-\\frac{1}{\\sqrt{1-x^2}}\\]"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">tan⁻¹ and cot⁻¹</span>\\[\\frac{d}{dx}\\tan^{-1}x=\\frac{1}{1+x^2}\\qquad\\frac{d}{dx}\\cot^{-1}x=-\\frac{1}{1+x^2}\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">sec⁻¹ and csc⁻¹</span>\\[\\frac{d}{dx}\\sec^{-1}x=\\frac{1}{x\\sqrt{x^2-1}}\\qquad\\frac{d}{dx}\\csc^{-1}x=-\\frac{1}{x\\sqrt{x^2-1}}\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Pattern</span><p>Same “co gets a minus” rule as in §3.3. With an inside \\(u\\), multiply by \\(u'\\): \\(\\frac{d}{dx}\\tan^{-1}(x^2)=\\frac{2x}{1+x^4}\\).</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Inverse trig + chain rule, step by step",
    "id": "inverse-trig"
   },
   {
    "type": "prose",
    "html": "<p>Almost every inverse trig problem on a quiz has an <em>inside</em> function, like \\(\\tan^{-1}(e^x)\\) or \\(\\sin^{-1}(x^2)\\). The rule is the plain formula with \\(u\\) in place of \\(x\\), times \\(u'\\):</p>\n<div>\\[\\frac{d}{dx}\\tan^{-1}u=\\frac{u'}{1+u^2}\\qquad\\frac{d}{dx}\\sin^{-1}u=\\frac{u'}{\\sqrt{1-u^2}}\\qquad\\frac{d}{dx}\\cos^{-1}u=-\\frac{u'}{\\sqrt{1-u^2}}\\]</div>\n<p><strong>The 5-step recipe</strong> (works every time):</p><ol class=\"steps\"><li><strong>Name the inside</strong> \\(u\\). In \\(\\tan^{-1}(e^x)\\), \\(u=e^x\\).</li><li><strong>Find \\(u'\\)</strong>. Here \\(u'=e^x\\).</li><li><strong>Find \\(u^2\\)</strong>. Square the <em>whole</em> inside: \\((e^x)^2=e^{2x}\\).</li><li><strong>Plug into the pattern</strong> \\(\\dfrac{u'}{1+u^2}\\) (or \\(\\dfrac{u'}{\\sqrt{1-u^2}}\\) for \\(\\sin^{-1}\\)).</li><li><strong>Simplify</strong> if you can.</li></ol>"
   },
   {
    "type": "invtrig"
   },
   {
    "type": "prose",
    "html": "<p><strong>The insides you'll see most</strong>, already worked out:</p><div class=\"compare\"><table><thead><tr><th>Inside \\(u\\)</th><th>\\(u'\\)</th><th>\\(u^2\\)</th><th>\\(\\frac{d}{dx}\\tan^{-1}u=\\frac{u'}{1+u^2}\\)</th></tr></thead><tbody>\n<tr><th>\\(e^x\\)</th><td>\\(e^x\\)</td><td>\\(e^{2x}\\)</td><td>\\(\\dfrac{e^x}{1+e^{2x}}\\)</td></tr>\n<tr><th>\\(x^2\\)</th><td>\\(2x\\)</td><td>\\(x^4\\)</td><td>\\(\\dfrac{2x}{1+x^4}\\)</td></tr>\n<tr><th>\\(3x\\)</th><td>\\(3\\)</td><td>\\(9x^2\\)</td><td>\\(\\dfrac{3}{1+9x^2}\\)</td></tr>\n<tr><th>\\(\\sqrt x\\)</th><td>\\(\\frac{1}{2\\sqrt x}\\)</td><td>\\(x\\)</td><td>\\(\\dfrac{1}{2\\sqrt x\\,(1+x)}\\)</td></tr>\n<tr><th>\\(\\ln x\\)</th><td>\\(\\frac1x\\)</td><td>\\((\\ln x)^2\\)</td><td>\\(\\dfrac{1}{x\\,(1+(\\ln x)^2)}\\)</td></tr>\n<tr><th>\\(\\frac1x\\)</th><td>\\(-\\frac{1}{x^2}\\)</td><td>\\(\\frac{1}{x^2}\\)</td><td>\\(-\\dfrac{1}{1+x^2}\\)</td></tr>\n</tbody></table></div>"
   },
   {
    "type": "heading",
    "text": "Where does 1/(1 + x²) come from?"
   },
   {
    "type": "prose",
    "html": "<p>If you understand this once, you never have to memorize it blindly. Let \\(y=\\tan^{-1}x\\). That means \\(\\tan y=x\\). Differentiate both sides (implicit differentiation, §3.5):</p>\n<div>\\[\\sec^2y\\cdot y'=1\\quad\\Longrightarrow\\quad y'=\\frac{1}{\\sec^2y}=\\frac{1}{1+\\tan^2y}=\\frac{1}{1+x^2}\\]</div>\n<p class=\"why\">We used \\(\\sec^2y=1+\\tan^2y\\) and \\(\\tan y=x\\). The same trick with \\(\\sin y=x\\) gives \\(\\frac{1}{\\sqrt{1-x^2}}\\).</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "The one from your quiz: tan⁻¹(eˣ)",
      "html": "<p>Find \\(y'\\) if \\(y=\\tan^{-1}(e^x)\\).</p><ol class=\"steps\"><li><strong>Inside:</strong> \\(u=e^x\\).</li><li><strong>Its derivative:</strong> \\(u'=e^x\\) (e is lazy).</li><li><strong>Square the inside:</strong> \\(u^2=(e^x)^2=e^{2x}\\). <span class='why'>Not \\(e^{x^2}\\). Squaring \\(e^x\\) doubles the exponent: \\((e^x)^2=e^x\\cdot e^x=e^{2x}\\).</span></li><li><strong>Plug in:</strong> \\(y'=\\dfrac{u'}{1+u^2}=\\dfrac{e^x}{1+e^{2x}}\\).</li><li><strong>Check at \\(x=0\\):</strong> \\(y'(0)=\\frac{1}{1+1}=\\frac12\\). The graph of \\(\\tan^{-1}(e^x)\\) passes through \\((0,\\frac\\pi4)\\) with slope \\(\\frac12\\). ✓</li></ol><p class='ans'>\\(y'=\\dfrac{e^x}{1+e^{2x}}\\)</p>"
     },
     {
      "label": "sin⁻¹ with an inside",
      "html": "<p>Differentiate \\(y=\\sin^{-1}(x^2)\\).</p><ol class=\"steps\"><li>\\(u=x^2\\), \\(u'=2x\\), \\(u^2=x^4\\).</li><li>\\(y'=\\dfrac{u'}{\\sqrt{1-u^2}}=\\dfrac{2x}{\\sqrt{1-x^4}}\\).</li></ol>"
     },
     {
      "label": "Careful: the inverse trig is on the inside",
      "html": "<p>Differentiate \\(y=(\\tan^{-1}x)^2\\).</p><ol class=\"steps\"><li>The <strong>last</strong> thing computed is squaring, so the outside is \\(u^2\\) and the inside is \\(u=\\tan^{-1}x\\).</li><li>Power rule + chain rule: \\(y'=2\\tan^{-1}x\\cdot\\dfrac{1}{1+x^2}\\).</li></ol><p class='ans'>\\(y'=\\dfrac{2\\tan^{-1}x}{1+x^2}\\)</p>"
     },
     {
      "label": "Product with inverse trig",
      "html": "<p>Differentiate \\(y=x\\tan^{-1}x\\).</p><ol class=\"steps\"><li>Product rule: first · d(second) + second · d(first).</li><li>\\(y'=x\\cdot\\dfrac{1}{1+x^2}+\\tan^{-1}x\\cdot1\\).</li></ol><p class='ans'>\\(y'=\\tan^{-1}x+\\dfrac{x}{1+x^2}\\)</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Inverse trig practice"
   },
   {
    "type": "practice",
    "items": [
     {
      "id": "p36i-1",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\tan^{-1}(e^x)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Square the inside: \\((e^x)^2=e^{2x}\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(u=e^x\\), \\(u'=e^x\\), \\(u^2=e^{2x}\\).</p><p class=\"ans\">\\(y'=\\dfrac{e^x}{1+e^{2x}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-2",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(f'(x)\\) if \\(f(x)=\\tan^{-1}(3x)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Don't forget to square the 3 as well.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(u=3x\\), \\(u'=3\\), \\(u^2=9x^2\\).</p><p class=\"ans\">\\(f'(x)=\\dfrac{3}{1+9x^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-3",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\tan^{-1}(\\sqrt x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=\\sqrt x\\), \\(u'=\\frac{1}{2\\sqrt x}\\), \\(u^2=x\\).</p><p>\\(y'=\\dfrac{\\frac{1}{2\\sqrt x}}{1+x}\\).</p><p class=\"ans\">\\(y'=\\dfrac{1}{2\\sqrt x\\,(1+x)}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-4",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\tan^{-1}(\\ln x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=\\ln x\\), \\(u'=\\frac1x\\), \\(u^2=(\\ln x)^2\\).</p><p class=\"ans\">\\(y'=\\dfrac{1}{x\\,\\big(1+(\\ln x)^2\\big)}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-5",
      "source": "§3.6 #66",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\tan^{-1}(x^2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=x^2\\), \\(u'=2x\\), \\(u^2=x^4\\).</p><p class=\"ans\">\\(y'=\\dfrac{2x}{1+x^4}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-6",
      "source": "§3.6 #67",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=(\\tan^{-1}x)^2\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>What's computed last? Here it's the square, not the arctan.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Outside is squaring; inside is \\(\\tan^{-1}x\\).</p><p>\\(y'=2\\tan^{-1}x\\cdot\\frac{1}{1+x^2}\\).</p><p class=\"ans\">\\(y'=\\dfrac{2\\tan^{-1}x}{1+x^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-7",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=x\\tan^{-1}x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule: \\(x\\cdot\\frac{1}{1+x^2}+\\tan^{-1}x\\cdot1\\).</p><p class=\"ans\">\\(y'=\\tan^{-1}x+\\dfrac{x}{1+x^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-8",
      "source": "Quiz-style",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\tan^{-1}\\!\\left(\\dfrac1x\\right)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>After plugging in, clear the small fractions by multiplying top and bottom by \\(x^2\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(u=\\frac1x\\), \\(u'=-\\frac1{x^2}\\), \\(u^2=\\frac{1}{x^2}\\).</p><p>\\(y'=\\dfrac{-1/x^2}{1+1/x^2}\\). Multiply top and bottom by \\(x^2\\): \\(\\dfrac{-1}{x^2+1}\\).</p><p class=\"ans\">\\(y'=-\\dfrac{1}{1+x^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-9",
      "source": "§3.6 #63",
      "href": null,
      "question": "Find \\(f'(x)\\) if \\(f(x)=\\sin^{-1}(5x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=5x\\), \\(u'=5\\), \\(u^2=25x^2\\).</p><p class=\"ans\">\\(f'(x)=\\dfrac{5}{\\sqrt{1-25x^2}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-10",
      "source": "§3.6 #68",
      "href": null,
      "question": "Find \\(g'(x)\\) if \\(g(x)=\\cos^{-1}\\sqrt x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=\\sqrt x\\), \\(u'=\\frac1{2\\sqrt x}\\), \\(u^2=x\\).</p><p>\\(\\cos^{-1}\\) has a minus: \\(g'=-\\dfrac{u'}{\\sqrt{1-u^2}}\\).</p><p class=\"ans\">\\(g'(x)=-\\dfrac{1}{2\\sqrt x\\,\\sqrt{1-x}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-11",
      "source": "§3.6 #69",
      "href": null,
      "question": "Find \\(h'(x)\\) if \\(h(x)=(\\sin^{-1}x)\\ln x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule: \\(\\frac{1}{\\sqrt{1-x^2}}\\cdot\\ln x+\\sin^{-1}x\\cdot\\frac1x\\).</p><p class=\"ans\">\\(h'(x)=\\dfrac{\\ln x}{\\sqrt{1-x^2}}+\\dfrac{\\sin^{-1}x}{x}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-12",
      "source": "§3.6 #70",
      "href": null,
      "question": "Find \\(g'(t)\\) if \\(g(t)=\\ln\\big(\\tan^{-1}(t^4)\\big)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Three layers: \\(\\ln\\) → \\(\\tan^{-1}\\) → \\(t^4\\).</p><p>\\(\\ln w\\to\\frac{w'}{w}\\) with \\(w=\\tan^{-1}(t^4)\\), and \\(w'=\\dfrac{4t^3}{1+t^8}\\).</p><p class=\"ans\">\\(g'(t)=\\dfrac{4t^3}{(1+t^8)\\tan^{-1}(t^4)}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-13",
      "source": "§3.6 #71",
      "href": null,
      "question": "Find \\(f'(z)\\) if \\(f(z)=e^{\\sin^{-1}(z^2)}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\((e^w)'=e^w\\cdot w'\\) with \\(w=\\sin^{-1}(z^2)\\).</p><p>\\(w'=\\dfrac{2z}{\\sqrt{1-z^4}}\\).</p><p class=\"ans\">\\(f'(z)=\\dfrac{2z\\,e^{\\sin^{-1}(z^2)}}{\\sqrt{1-z^4}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-14",
      "source": "§3.6 #74",
      "href": null,
      "question": "Find \\(R'(t)\\) if \\(R(t)=\\sin^{-1}\\!\\left(\\dfrac1t\\right)\\), for \\(t>1\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=\\frac1t\\), \\(u'=-\\frac1{t^2}\\), \\(1-u^2=1-\\frac1{t^2}=\\frac{t^2-1}{t^2}\\).</p><p>\\(\\sqrt{1-u^2}=\\frac{\\sqrt{t^2-1}}{t}\\) (for \\(t>0\\)). So \\(R'=\\dfrac{-1/t^2}{\\sqrt{t^2-1}/t}\\).</p><p class=\"ans\">\\(R'(t)=-\\dfrac{1}{t\\sqrt{t^2-1}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-15",
      "source": "§3.6 #75",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=x\\sin^{-1}x+\\sqrt{1-x^2}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule on the first term: \\(\\sin^{-1}x+\\dfrac{x}{\\sqrt{1-x^2}}\\).</p><p>Chain rule on the second: \\(\\dfrac{-2x}{2\\sqrt{1-x^2}}=-\\dfrac{x}{\\sqrt{1-x^2}}\\).</p><p>They cancel.</p><p class=\"ans\">\\(y'=\\sin^{-1}x\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-16",
      "source": "§3.6 #73",
      "href": null,
      "question": "Find \\(h'(t)\\) if \\(h(t)=\\cot^{-1}(t)+\\cot^{-1}(1/t)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\((\\cot^{-1}u)'=-\\dfrac{u'}{1+u^2}\\).</p><p>First term: \\(-\\dfrac{1}{1+t^2}\\). Second: \\(-\\dfrac{-1/t^2}{1+1/t^2}=\\dfrac{1}{t^2+1}\\).</p><p class=\"ans\">\\(h'(t)=0\\) (so \\(h\\) is constant on each side of 0)</p>"
       }
      ]
     },
     {
      "id": "p36i-17",
      "source": "Tangent line",
      "href": null,
      "question": "Find the tangent line to \\(y=\\tan^{-1}x\\) at \\(x=1\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Point: \\(\\tan^{-1}1=\\frac\\pi4\\).</p><p>Slope: \\(\\frac{1}{1+1^2}=\\frac12\\).</p><p class=\"ans\">\\(y=\\frac12(x-1)+\\frac\\pi4\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-18",
      "source": "Slope at a point",
      "href": null,
      "question": "Find the slope of \\(y=\\tan^{-1}(e^{2x})\\) at \\(x=0\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(u=e^{2x}\\), \\(u'=2e^{2x}\\), \\(u^2=e^{4x}\\). So \\(y'=\\dfrac{2e^{2x}}{1+e^{4x}}\\).</p><p>At \\(x=0\\): \\(\\frac{2}{1+1}\\).</p><p class=\"ans\">Slope \\(=1\\)</p>"
       }
      ]
     },
     {
      "id": "p36i-19",
      "source": "Proof",
      "href": null,
      "question": "Prove that \\(\\dfrac{d}{dx}\\sin^{-1}x=\\dfrac{1}{\\sqrt{1-x^2}}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Rewrite \\(y=\\sin^{-1}x\\) as \\(\\sin y=x\\), then differentiate implicitly.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Let \\(y=\\sin^{-1}x\\), so \\(\\sin y=x\\) with \\(-\\frac\\pi2\\le y\\le\\frac\\pi2\\).</p><p>Differentiate implicitly: \\(\\cos y\\cdot y'=1\\Rightarrow y'=\\dfrac{1}{\\cos y}\\).</p><p>On \\([-\\frac\\pi2,\\frac\\pi2]\\), \\(\\cos y\\ge0\\), so \\(\\cos y=\\sqrt{1-\\sin^2y}=\\sqrt{1-x^2}\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\sin^{-1}x=\\dfrac{1}{\\sqrt{1-x^2}}\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p36i-20",
      "source": "§3.6 #81 (proof)",
      "href": null,
      "question": "Prove that \\(\\dfrac{d}{dx}\\cos^{-1}x=-\\dfrac{1}{\\sqrt{1-x^2}}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Let \\(y=\\cos^{-1}x\\), so \\(\\cos y=x\\) with \\(0\\le y\\le\\pi\\).</p><p>Differentiate: \\(-\\sin y\\cdot y'=1\\Rightarrow y'=-\\dfrac{1}{\\sin y}\\).</p><p>On \\([0,\\pi]\\), \\(\\sin y\\ge0\\), so \\(\\sin y=\\sqrt{1-\\cos^2y}=\\sqrt{1-x^2}\\).</p><p class=\"ans\">\\(\\dfrac{d}{dx}\\cos^{-1}x=-\\dfrac{1}{\\sqrt{1-x^2}}\\) ✓</p>"
       }
      ]
     }
    ]
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "(eˣ)² written as e^(x²)",
      "html": "<p>\\((e^x)^2=e^{2x}\\). Squaring doubles the exponent; it doesn't square it.</p>"
     },
     {
      "title": "Forgetting u′",
      "html": "<p>\\(\\frac{d}{dx}\\tan^{-1}(3x)\\) is \\(\\frac{3}{1+9x^2}\\), not \\(\\frac{1}{1+9x^2}\\).</p>"
     },
     {
      "title": "Squaring only part of u",
      "html": "<p>For \\(u=3x\\), \\(u^2=9x^2\\), not \\(3x^2\\).</p>"
     },
     {
      "title": "tan⁻¹ is not 1/tan",
      "html": "<p>\\(\\tan^{-1}x\\) means arctan, the inverse function, not \\(\\cot x\\).</p>"
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
      "label": "ln of a polynomial (§3.6 #3)",
      "html": "<p>Differentiate \\(f(x)=\\ln(x^2+3x+5)\\).</p><ol class=\"steps\"><li>Inside \\(u=x^2+3x+5\\), \\(u'=2x+3\\).</li><li>\\(\\dfrac{u'}{u}\\): \\(f'(x)=\\dfrac{2x+3}{x^2+3x+5}\\).</li></ol>"
     },
     {
      "label": "Log laws first (§3.6 #24 style)",
      "html": "<p>Differentiate \\(y=\\ln\\sqrt{\\dfrac{1+2x}{1-2x}}\\).</p><ol class=\"steps\"><li>Rewrite: \\(y=\\tfrac12\\big[\\ln(1+2x)-\\ln(1-2x)\\big]\\).</li><li>Differentiate each piece: \\(y'=\\tfrac12\\Big[\\dfrac{2}{1+2x}-\\dfrac{-2}{1-2x}\\Big]=\\dfrac{1}{1+2x}+\\dfrac{1}{1-2x}\\).</li><li>Combine: \\(y'=\\dfrac{(1-2x)+(1+2x)}{(1+2x)(1-2x)}=\\dfrac{2}{1-4x^2}\\).</li></ol>"
     },
     {
      "label": "Variable to a variable power (§3.6 #49)",
      "html": "<p>Differentiate \\(y=x^x\\).</p><ol class=\"steps\"><li>\\(\\ln y=x\\ln x\\)</li><li>Differentiate: \\(\\dfrac{y'}{y}=1\\cdot\\ln x+x\\cdot\\dfrac1x=\\ln x+1\\)</li><li>Multiply by \\(y\\): \\(y'=x^x(\\ln x+1)\\).</li></ol>"
     },
     {
      "label": "Inverse trig with chain rule",
      "html": "<p>Differentiate \\(y=\\tan^{-1}(x^2)\\).</p><ol class=\"steps\"><li>Outside: \\(\\tan^{-1}u\\to\\dfrac{1}{1+u^2}\\). Inside \\(u=x^2\\), \\(u'=2x\\).</li><li>\\(y'=\\dfrac{1}{1+(x^2)^2}\\cdot 2x=\\dfrac{2x}{1+x^4}\\).</li></ol>"
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
      "id": "p36-5",
      "source": "§3.6 #5",
      "href": null,
      "question": "Differentiate \\(f(x)=\\sin(\\ln x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Outside \\(\\sin u\\), inside \\(u=\\ln x\\), \\(u'=\\tfrac1x\\).</p><p class=\"ans\">\\(f'(x)=\\dfrac{\\cos(\\ln x)}{x}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-9",
      "source": "§3.6 #9",
      "href": null,
      "question": "Differentiate \\(g(x)=\\ln\\big(xe^{-2x}\\big)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Split the product with \\(\\ln(ab)=\\ln a+\\ln b\\), and remember \\(\\ln e^{k}=k\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Log laws first: \\(g(x)=\\ln x+\\ln e^{-2x}=\\ln x-2x\\).</p><p class=\"ans\">\\(g'(x)=\\dfrac1x-2\\)</p>"
       }
      ]
     },
     {
      "id": "p36-13",
      "source": "§3.6 #13",
      "href": null,
      "question": "Differentiate \\(y=\\log_8(x^2+3x)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\dfrac{d}{dx}\\log_b u=\\dfrac{u'}{u\\ln b}\\), with \\(u=x^2+3x\\), \\(u'=2x+3\\).</p><p class=\"ans\">\\(y'=\\dfrac{2x+3}{(x^2+3x)\\ln 8}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-15",
      "source": "§3.6 #15",
      "href": null,
      "question": "Differentiate \\(F(s)=\\ln(\\ln s)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Inside \\(u=\\ln s\\), \\(u'=\\tfrac1s\\). So \\(F'=\\dfrac{1/s}{\\ln s}\\).</p><p class=\"ans\">\\(F'(s)=\\dfrac{1}{s\\ln s}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-17",
      "source": "§3.6 #17",
      "href": null,
      "question": "Differentiate \\(T(z)=2^z\\log_2 z\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule with \\((2^z)'=2^z\\ln2\\) and \\((\\log_2 z)'=\\dfrac{1}{z\\ln 2}\\).</p><p class=\"ans\">\\(T'(z)=2^z\\ln 2\\,\\log_2 z+\\dfrac{2^z}{z\\ln 2}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-19",
      "source": "§3.6 #19",
      "href": null,
      "question": "Differentiate \\(y=\\ln|3-2x^5|\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\ln|u|\\) has the same derivative \\(\\dfrac{u'}{u}\\). Here \\(u'=-10x^4\\).</p><p class=\"ans\">\\(y'=\\dfrac{-10x^4}{3-2x^5}=\\dfrac{10x^4}{2x^5-3}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-21",
      "source": "§3.6 #21",
      "href": null,
      "question": "Differentiate \\(y=\\ln\\big(e^{-x}+xe^{-x}\\big)\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Factor \\(e^{-x}\\) out of the inside, then use log laws.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Factor inside: \\(e^{-x}(1+x)\\). Then \\(y=\\ln e^{-x}+\\ln(1+x)=-x+\\ln(1+x)\\).</p><p>\\(y'=-1+\\dfrac{1}{1+x}=\\dfrac{-(1+x)+1}{1+x}\\).</p><p class=\"ans\">\\(y'=-\\dfrac{x}{1+x}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-29",
      "source": "§3.6 #29",
      "href": null,
      "question": "Find \\(y'\\) and \\(y''\\) for \\(y=\\sqrt{x}\\,\\ln x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{1}{2\\sqrt x}\\ln x+\\sqrt x\\cdot\\dfrac1x=\\dfrac{\\ln x+2}{2\\sqrt x}\\).</p><p>Quotient rule: \\(y''=\\dfrac{\\frac1x\\cdot2\\sqrt x-(\\ln x+2)\\cdot\\frac{1}{\\sqrt x}}{4x}=\\dfrac{2-\\ln x-2}{4x\\sqrt x}\\).</p><p class=\"ans\">\\(y'=\\dfrac{\\ln x+2}{2\\sqrt x}\\), \\(y''=-\\dfrac{\\ln x}{4x^{3/2}}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-35",
      "source": "§3.6 #35",
      "href": null,
      "question": "Differentiate \\(f(x)=\\ln(x^2-2x)\\) and find the domain of \\(f\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=\\dfrac{2x-2}{x^2-2x}\\).</p><p>Domain: need \\(x^2-2x=x(x-2)>0\\), which happens when \\(x<0\\) or \\(x>2\\).</p><p class=\"ans\">\\(f'(x)=\\dfrac{2(x-1)}{x(x-2)}\\); domain \\((-\\infty,0)\\cup(2,\\infty)\\)</p>"
       }
      ]
     },
     {
      "id": "p36-39",
      "source": "§3.6 #39",
      "href": null,
      "question": "Find the tangent line to \\(y=\\ln(x^2-3x+1)\\) at \\((3,0)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\dfrac{2x-3}{x^2-3x+1}\\). At \\(x=3\\): \\(\\dfrac{3}{1}=3\\).</p><p>\\(y-0=3(x-3)\\).</p><p class=\"ans\">\\(y=3x-9\\)</p>"
       }
      ]
     },
     {
      "id": "p36-43",
      "source": "§3.6 #43",
      "href": null,
      "question": "Let \\(f(x)=cx+\\ln(\\cos x)\\). For what \\(c\\) is \\(f'(\\pi/4)=6\\)?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=c+\\dfrac{-\\sin x}{\\cos x}=c-\\tan x\\).</p><p>\\(f'(\\pi/4)=c-1=6\\).</p><p class=\"ans\">\\(c=7\\)</p>"
       }
      ]
     },
     {
      "id": "p36-45",
      "source": "§3.6 #45",
      "href": null,
      "question": "Use logarithmic differentiation: \\(y=(x^2+2)^2(x^4+4)^4\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\ln y=2\\ln(x^2+2)+4\\ln(x^4+4)\\)</p><p>\\(\\dfrac{y'}{y}=\\dfrac{4x}{x^2+2}+\\dfrac{16x^3}{x^4+4}\\)</p><p class=\"ans\">\\(y'=(x^2+2)^2(x^4+4)^4\\left(\\dfrac{4x}{x^2+2}+\\dfrac{16x^3}{x^4+4}\\right)\\)</p>"
       }
      ]
     },
     {
      "id": "p36-51",
      "source": "§3.6 #51",
      "href": null,
      "question": "Differentiate \\(y=x^{\\sin x}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Variable base and variable exponent: take ln of both sides.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\ln y=\\sin x\\,\\ln x\\).</p><p>\\(\\dfrac{y'}{y}=\\cos x\\ln x+\\dfrac{\\sin x}{x}\\) (product rule).</p><p class=\"ans\">\\(y'=x^{\\sin x}\\left(\\cos x\\ln x+\\dfrac{\\sin x}{x}\\right)\\)</p>"
       }
      ]
     },
     {
      "id": "p36-55",
      "source": "§3.6 #55",
      "href": null,
      "question": "Differentiate \\(y=x^{\\ln x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\ln y=\\ln x\\cdot\\ln x=(\\ln x)^2\\).</p><p>\\(\\dfrac{y'}{y}=\\dfrac{2\\ln x}{x}\\).</p><p class=\"ans\">\\(y'=\\dfrac{2\\ln x}{x}\\,x^{\\ln x}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-57",
      "source": "§3.6 #57",
      "href": null,
      "question": "Find \\(y'\\) if \\(y=\\ln(x^2+y^2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Implicit: \\(y'=\\dfrac{2x+2yy'}{x^2+y^2}\\).</p><p>Multiply out: \\(y'(x^2+y^2)=2x+2yy'\\Rightarrow y'(x^2+y^2-2y)=2x\\).</p><p class=\"ans\">\\(y'=\\dfrac{2x}{x^2+y^2-2y}\\)</p>"
       }
      ]
     },
     {
      "id": "p36-59",
      "source": "§3.6 #59",
      "href": null,
      "question": "Find a formula for \\(f^{(n)}(x)\\) if \\(f(x)=\\ln(x-1)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=(x-1)^{-1}\\), \\(f''=-(x-1)^{-2}\\), \\(f'''=2(x-1)^{-3}\\), \\(f^{(4)}=-6(x-1)^{-4}\\).</p><p>Signs alternate and the constants are \\(0!,1!,2!,3!,\\dots\\)</p><p class=\"ans\">\\(f^{(n)}(x)=\\dfrac{(-1)^{n-1}(n-1)!}{(x-1)^n}\\)</p>"
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
      "title": "Forgetting u′",
      "html": "<p>\\(\\frac{d}{dx}\\ln(x^2+1)=\\frac{2x}{x^2+1}\\), not \\(\\frac{1}{x^2+1}\\).</p>"
     },
     {
      "title": "ln of a sum",
      "html": "<p>\\(\\ln(a+b)\\neq\\ln a+\\ln b\\). Log laws only split products, quotients and powers.</p>"
     },
     {
      "title": "Power rule on x^x",
      "html": "<p>\\((x^x)'\\neq x\\cdot x^{x-1}\\). Use logarithmic differentiation.</p>"
     },
     {
      "title": "Missing ln b",
      "html": "<p>\\((\\log_2 x)'=\\frac{1}{x\\ln 2}\\) and \\((2^x)'=2^x\\ln 2\\). Only base \\(e\\) has no extra factor.</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "s39",
  "slug": "3-9",
  "num": "§3.9",
  "title": "Related Rates",
  "lede": "When several quantities change together, the chain rule links their rates.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>In a related-rates problem, several quantities change with time \\(t\\). You know how fast some are changing and want the rate of another. The idea: find an equation linking the quantities, then <strong>differentiate both sides with respect to \\(t\\)</strong>. Every variable picks up its own rate by the chain rule: \\(\\frac{d}{dt}(x^2)=2x\\,\\frac{dx}{dt}\\).</p>"
   },
   {
    "type": "heading",
    "text": "The recipe"
   },
   {
    "type": "prose",
    "html": "<ol class=\"steps\"><li><strong>Draw and label</strong> a picture at a general time \\(t\\). Use letters for anything that changes. Only fixed numbers get numbers.</li><li><strong>Write what you know and what you want</strong> as rates: e.g. given \\(\\frac{dx}{dt}=1\\), find \\(\\frac{dy}{dt}\\) when \\(x=3\\).</li><li><strong>Find an equation</strong> relating the quantities: Pythagoras, similar triangles, area or volume formulas, trig.</li><li><strong>Differentiate with respect to \\(t\\)</strong> (implicitly).</li><li><strong>Now plug in</strong> the numbers for that instant and solve for the unknown rate.</li><li><strong>Answer with units</strong>. A negative rate means that quantity is decreasing.</li></ol><p class=\"callout\">The #1 mistake: plugging in the numbers <em>before</em> differentiating. If you set \\(x=3\\) first, \\(x\\) becomes a constant and its rate disappears.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">Pythagoras</span>\\[x^2+y^2=z^2\\Rightarrow x\\dot x+y\\dot y=z\\dot z\\]<p class='note'>Ladders, planes, cars at right angles.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Spheres & circles</span>\\[V=\\tfrac43\\pi r^3,\\ S=4\\pi r^2,\\ A=\\pi r^2\\]"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Cones</span>\\[V=\\tfrac13\\pi r^2h\\]<p class='note'>Use similar triangles to replace \\(r\\) with a multiple of \\(h\\) <em>before</em> differentiating.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Similar triangles</span><p>Shadows and tanks: matching ratios like \\(\\frac{r}{h}=\\frac{2}{4}\\) or \\(\\frac{s-x}{2}=\\frac{s}{6}\\).</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-ladder",
    "html": "<div class=\"lab-head\"><h4>A sliding ladder</h4><span class=\"tag\">Lab · press Play or drag the slider</span></div>\n<canvas class=\"tall\" id=\"ld-cv\" aria-label=\"A 5 meter ladder sliding down a wall as its foot is pulled away\"></canvas>\n<div class=\"controls\">\n  <label for=\"ld-x\">foot distance x <input id=\"ld-x\" type=\"range\" min=\"0.3\" max=\"4.95\" step=\"0.01\" value=\"3\"></label>\n  <label for=\"ld-v\">pull speed dx/dt <input id=\"ld-v\" type=\"range\" min=\"0.2\" max=\"2\" step=\"0.1\" value=\"1\"></label>\n  <button type=\"button\" id=\"ld-play\">Play</button>\n</div>\n<div class=\"readout\">\n  <div>x (foot) and y (top)<b id=\"ld-xy\">–</b></div>\n  <div>x² + y² (always 25)<b id=\"ld-sum\">–</b></div>\n  <div>dy/dt = −(x / y)·dx/dt<b class=\"c-d\" id=\"ld-dy\">–</b></div>\n</div>\n<p class=\"note\">The foot moves at a steady speed, but the top does not. Near the floor (small y), x/y gets huge and the top falls faster and faster. That's why you differentiate first and plug in numbers last: the rate depends on where you are.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Balloon (Stewart Example 1)",
      "html": "<p>Air is pumped into a spherical balloon at \\(100\\text{ cm}^3/\\text{s}\\). How fast is the radius increasing when the diameter is 50 cm?</p><ol class=\"steps\"><li>Given \\(\\frac{dV}{dt}=100\\). Want \\(\\frac{dr}{dt}\\) when \\(r=25\\).</li><li>\\(V=\\tfrac43\\pi r^3\\). Differentiate: \\(\\frac{dV}{dt}=4\\pi r^2\\frac{dr}{dt}\\).</li><li>Plug in: \\(100=4\\pi(25)^2\\frac{dr}{dt}\\Rightarrow\\frac{dr}{dt}=\\frac{100}{2500\\pi}=\\frac{1}{25\\pi}\\approx0.0127\\text{ cm/s}\\).</li></ol>"
     },
     {
      "label": "Ladder",
      "html": "<p>A 5 m ladder leans on a wall. The foot slides away at 1 m/s. How fast is the top sliding down when the foot is 3 m from the wall?</p><ol class=\"steps\"><li>\\(x^2+y^2=25\\). Given \\(\\frac{dx}{dt}=1\\); want \\(\\frac{dy}{dt}\\) when \\(x=3\\).</li><li>Differentiate: \\(2x\\frac{dx}{dt}+2y\\frac{dy}{dt}=0\\Rightarrow\\frac{dy}{dt}=-\\frac{x}{y}\\frac{dx}{dt}\\).</li><li>When \\(x=3\\), \\(y=\\sqrt{25-9}=4\\): \\(\\frac{dy}{dt}=-\\frac34(1)=-\\frac34\\text{ m/s}\\).</li><li>The top slides <strong>down</strong> at \\(0.75\\) m/s (negative = decreasing).</li></ol>"
     },
     {
      "label": "Cone tank (Stewart Example 3)",
      "html": "<p>A tank is an inverted cone, radius 2 m at the top and 4 m tall. Water flows in at 2 m³/min. How fast is the water rising when it's 3 m deep?</p><ol class=\"steps\"><li>Similar triangles: \\(\\frac rh=\\frac24\\Rightarrow r=\\frac h2\\).</li><li>Volume in terms of \\(h\\) only: \\(V=\\frac13\\pi\\left(\\frac h2\\right)^2h=\\frac{\\pi h^3}{12}\\).</li><li>Differentiate: \\(\\frac{dV}{dt}=\\frac{\\pi h^2}{4}\\frac{dh}{dt}\\).</li><li>Plug in \\(h=3\\), \\(\\frac{dV}{dt}=2\\): \\(\\frac{dh}{dt}=\\frac{8}{9\\pi}\\approx0.28\\text{ m/min}\\).</li></ol>"
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
      "id": "p39-1",
      "source": "§3.9 #1",
      "href": null,
      "question": "(a) \\(V\\) is the volume of a cube with edge \\(x\\). Find \\(\\frac{dV}{dt}\\) in terms of \\(\\frac{dx}{dt}\\). (b) If the edge grows at 4 cm/s, how fast is the volume growing when the edge is 15 cm?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(V=x^3\\Rightarrow\\frac{dV}{dt}=3x^2\\frac{dx}{dt}\\).</p><p>(b) \\(3(15)^2(4)=2700\\).</p><p class=\"ans\">(a) \\(\\frac{dV}{dt}=3x^2\\frac{dx}{dt}\\) (b) \\(2700\\text{ cm}^3/\\text{s}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-3",
      "source": "§3.9 #3",
      "href": null,
      "question": "Each side of a square grows at 6 cm/s. How fast is the area growing when the area is 16 cm²?",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Convert the area into a side length first.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(A=s^2\\Rightarrow\\frac{dA}{dt}=2s\\frac{ds}{dt}\\).</p><p>Area 16 means \\(s=4\\): \\(2(4)(6)=48\\).</p><p class=\"ans\">\\(48\\text{ cm}^2/\\text{s}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-5",
      "source": "§3.9 #5",
      "href": null,
      "question": "A ball's radius grows at 2 cm/min. How fast is its surface area growing when \\(r=8\\) cm?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(S=4\\pi r^2\\Rightarrow\\frac{dS}{dt}=8\\pi r\\frac{dr}{dt}=8\\pi(8)(2)\\).</p><p class=\"ans\">\\(128\\pi\\approx402\\text{ cm}^2/\\text{min}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-7",
      "source": "§3.9 #7",
      "href": null,
      "question": "A cylindrical tank of radius 5 m fills at 3 m³/min. How fast is the water height rising?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(V=\\pi r^2h=25\\pi h\\) (radius fixed).</p><p>\\(\\frac{dV}{dt}=25\\pi\\frac{dh}{dt}\\Rightarrow3=25\\pi\\frac{dh}{dt}\\).</p><p class=\"ans\">\\(\\frac{dh}{dt}=\\frac{3}{25\\pi}\\approx0.038\\text{ m/min}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-9",
      "source": "§3.9 #9",
      "href": null,
      "question": "\\(4x^2+9y^2=25\\), with \\(x,y\\) functions of \\(t\\). (a) If \\(\\frac{dy}{dt}=\\frac13\\), find \\(\\frac{dx}{dt}\\) at \\((2,1)\\). (b) If \\(\\frac{dx}{dt}=3\\), find \\(\\frac{dy}{dt}\\) at \\((-2,1)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Differentiate: \\(8x\\frac{dx}{dt}+18y\\frac{dy}{dt}=0\\).</p><p>(a) \\(16\\frac{dx}{dt}+18(1)\\left(\\frac13\\right)=0\\Rightarrow\\frac{dx}{dt}=-\\frac{6}{16}\\).</p><p>(b) \\(8(-2)(3)+18(1)\\frac{dy}{dt}=0\\Rightarrow\\frac{dy}{dt}=\\frac{48}{18}\\).</p><p class=\"ans\">(a) \\(-\\frac38\\) (b) \\(\\frac83\\)</p>"
       }
      ]
     },
     {
      "id": "p39-13",
      "source": "§3.9 #13",
      "href": null,
      "question": "A plane at altitude 2 km flies at 800 km/h and passes directly over a radar station. How fast is its distance from the station growing when that distance is 3 km?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Horizontal distance \\(x\\), straight-line distance \\(s\\): \\(x^2+2^2=s^2\\).</p><p>\\(2x\\dot x=2s\\dot s\\Rightarrow\\dot s=\\frac{x}{s}\\dot x\\).</p><p>When \\(s=3\\): \\(x=\\sqrt{9-4}=\\sqrt5\\). \\(\\dot s=\\frac{\\sqrt5}{3}(800)\\).</p><p class=\"ans\">\\(\\frac{800\\sqrt5}{3}\\approx596\\text{ km/h}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-15",
      "source": "§3.9 #15",
      "href": null,
      "question": "A street light is on a 6 m pole. A 2 m tall man walks away at 1.5 m/s. How fast is the tip of his shadow moving when he is 10 m from the pole?",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Draw the big triangle (pole) and the small one (man). They share the angle at the shadow tip.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>Man at distance \\(x\\), shadow tip at \\(s\\). Similar triangles: \\(\\frac{s}{6}=\\frac{s-x}{2}\\Rightarrow 2s=6s-6x\\Rightarrow s=\\frac32x\\).</p><p>\\(\\frac{ds}{dt}=\\frac32\\frac{dx}{dt}=\\frac32(1.5)\\).</p><p class=\"ans\">\\(2.25\\text{ m/s}\\) (the same at every distance, so the “10 m” isn't needed)</p>"
       }
      ]
     },
     {
      "id": "p39-17",
      "source": "§3.9 #17",
      "href": null,
      "question": "Two cars leave the same point. One drives south at 30 km/h, the other west at 72 km/h. How fast is the distance between them growing 2 hours later?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>After 2 h: \\(x=144\\), \\(y=60\\), \\(z=\\sqrt{144^2+60^2}=156\\).</p><p>\\(z\\dot z=x\\dot x+y\\dot y\\Rightarrow\\dot z=\\frac{144(72)+60(30)}{156}=\\frac{12168}{156}\\).</p><p class=\"ans\">\\(78\\text{ km/h}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-21",
      "source": "§3.9 #21",
      "href": null,
      "question": "A triangle's altitude grows at 1 cm/min and its area at 2 cm²/min. How fast is the base changing when the altitude is 10 cm and the area is 100 cm²?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(A=\\frac12bh\\). At that moment \\(b=\\frac{2A}{h}=20\\).</p><p>Product rule: \\(\\frac{dA}{dt}=\\frac12\\left(\\frac{db}{dt}h+b\\frac{dh}{dt}\\right)\\Rightarrow2=\\frac12\\left(10\\frac{db}{dt}+20\\right)\\).</p><p>\\(4=10\\frac{db}{dt}+20\\Rightarrow\\frac{db}{dt}=-1.6\\).</p><p class=\"ans\">\\(-1.6\\text{ cm/min}\\) (the base is shrinking)</p>"
       }
      ]
     },
     {
      "id": "p39-23",
      "source": "§3.9 #23",
      "href": null,
      "question": "Using \\(d=4.9t^2\\): a woman drops a stone off a cliff, then drops a second one exactly 1 s later. One second after that, how fast is the distance between the stones changing?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>First stone has fallen \\(4.9t^2\\), second \\(4.9(t-1)^2\\). Gap \\(D=4.9t^2-4.9(t-1)^2\\).</p><p>\\(\\frac{dD}{dt}=9.8t-9.8(t-1)=9.8\\).</p><p class=\"ans\">\\(9.8\\text{ m/s}\\), constant at every moment</p>"
       }
      ]
     },
     {
      "id": "p39-25",
      "source": "§3.9 #25",
      "href": null,
      "question": "An inverted cone (height 6 m, top diameter 4 m) leaks 10,000 cm³/min while water is pumped in at a constant rate. The level rises 20 cm/min when the water is 2 m deep. Find the pumping rate.",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Work in cm: \\(\\frac rh=\\frac{200}{600}\\Rightarrow r=\\frac h3\\), so \\(V=\\frac13\\pi\\frac{h^2}{9}h=\\frac{\\pi h^3}{27}\\).</p><p>\\(\\frac{dV}{dt}=\\frac{\\pi h^2}{9}\\frac{dh}{dt}=\\frac{\\pi(200)^2}{9}(20)\\approx279{,}253\\text{ cm}^3/\\text{min}\\).</p><p>Net rate = pumped in − leaking out: \\(C-10{,}000=279{,}253\\).</p><p class=\"ans\">\\(C\\approx289{,}253\\text{ cm}^3/\\text{min}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-29",
      "source": "§3.9 #29",
      "href": null,
      "question": "Gravel falls onto a conical pile at 3 m³/min. The base diameter always equals the height. How fast is the height growing when the pile is 3 m high?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Diameter = \\(h\\), so \\(r=\\frac h2\\) and \\(V=\\frac13\\pi\\frac{h^2}{4}h=\\frac{\\pi h^3}{12}\\).</p><p>\\(\\frac{dV}{dt}=\\frac{\\pi h^2}{4}\\frac{dh}{dt}\\Rightarrow3=\\frac{9\\pi}{4}\\frac{dh}{dt}\\).</p><p class=\"ans\">\\(\\frac{dh}{dt}=\\frac{4}{3\\pi}\\approx0.42\\text{ m/min}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-31",
      "source": "§3.9 #31",
      "href": null,
      "question": "The sides of an equilateral triangle grow at 10 cm/min. How fast is the area growing when the sides are 30 cm?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(A=\\frac{\\sqrt3}{4}s^2\\Rightarrow\\frac{dA}{dt}=\\frac{\\sqrt3}{2}s\\frac{ds}{dt}=\\frac{\\sqrt3}{2}(30)(10)\\).</p><p class=\"ans\">\\(150\\sqrt3\\approx259.8\\text{ cm}^2/\\text{min}\\)</p>"
       }
      ]
     },
     {
      "id": "p39-33",
      "source": "§3.9 #33",
      "href": null,
      "question": "A car drives north at 20 m/s. A drone flies east at 6 m/s, 25 m up, and passes directly over the car. How fast is the distance between them changing 5 s later?",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Three directions at right angles: \\(D^2=x^2+y^2+z^2\\), and the height \\(z=25\\) stays fixed.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>After 5 s: car 100 m north, drone 30 m east and 25 m up. \\(D^2=x^2+y^2+25^2\\).</p><p>\\(D=\\sqrt{30^2+100^2+25^2}=\\sqrt{11525}\\approx107.35\\).</p><p>\\(D\\dot D=x\\dot x+y\\dot y\\Rightarrow\\dot D=\\frac{30(6)+100(20)}{107.35}\\).</p><p class=\"ans\">\\(\\approx20.3\\text{ m/s}\\)</p>"
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
      "title": "Plugging in too early",
      "html": "<p>Substitute the instant's values only <em>after</em> differentiating. Otherwise changing quantities turn into constants.</p>"
     },
     {
      "title": "Wrong sign",
      "html": "<p>“Decreasing at 3 cm/s” means a rate of \\(-3\\). A negative answer means that quantity is shrinking.</p>"
     },
     {
      "title": "Cone with two variables",
      "html": "<p>Use similar triangles to write \\(V\\) in terms of \\(h\\) alone before differentiating.</p>"
     },
     {
      "title": "Missing units",
      "html": "<p>Rates have units like m/s or cm³/min. Include them in your answer.</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "s310",
  "slug": "3-10",
  "num": "§3.10",
  "title": "Linear Approximations and Differentials",
  "lede": "Use the tangent line to estimate values and measurement errors.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>Zoom in on a smooth curve and it looks like its tangent line. So near \\(x=a\\) we can use the tangent line, which is easy to compute, in place of the function, which may be hard to compute.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Linearization</span>\\[L(x)=f(a)+f'(a)(x-a)\\]<p class='note'>It's the tangent line at \\(a\\), written as a function.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Linear approximation</span>\\[f(x)\\approx f(a)+f'(a)(x-a)\\quad\\text{for }x\\text{ near }a\\]"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Differentials</span>\\[dy=f'(x)\\,dx\\]<p class='note'>\\(dx=\\Delta x\\) is the change in \\(x\\). \\(dy\\) is the change along the tangent; \\(\\Delta y=f(x+dx)-f(x)\\) is the real change. \\(dy\\approx\\Delta y\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Errors</span><p>Max error \\(\\approx dV\\). Relative error \\(=\\frac{dV}{V}\\). Percentage error \\(=100\\%\\times\\frac{dV}{V}\\).</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-linear",
    "html": "<div class=\"lab-head\"><h4>The tangent line as an approximation</h4><span class=\"tag\">Lab · move x away from a</span></div>\n<canvas class=\"tall\" id=\"lin-cv\" aria-label=\"A curve, its tangent line at a, and the gap between them at x\"></canvas>\n<div class=\"controls\">\n  <label for=\"lin-fn\">function\n    <select id=\"lin-fn\">\n      <option value=\"sqrt\">√x at a = 4</option>\n      <option value=\"exp\">eˣ at a = 0</option>\n      <option value=\"ln\">ln x at a = 1</option>\n      <option value=\"sin\">sin x at a = 0</option>\n      <option value=\"cbrt\">∛x at a = 8</option>\n    </select>\n  </label>\n  <label for=\"lin-dx\">dx = x − a <input id=\"lin-dx\" type=\"range\" min=\"-2\" max=\"2\" step=\"0.01\" value=\"1\"></label>\n</div>\n<div class=\"readout\">\n  <div>f(x), the true value<b class=\"c-f\" id=\"lin-f\">–</b></div>\n  <div>L(x), the tangent line<b class=\"c-t\" id=\"lin-L\">–</b></div>\n  <div>error f(x) − L(x)<b class=\"c-d\" id=\"lin-e\">–</b></div>\n  <div>Δy (curve) vs dy (tangent)<b id=\"lin-dy\">–</b></div>\n</div>\n<p class=\"note\">Near a, the tangent line hugs the curve, so L(x) is a great estimate. Move x farther away and the gap grows. On the graph, dy is the rise along the tangent and Δy is the real rise along the curve.</p>"
   },
   {
    "type": "heading",
    "text": "Handy approximations near 0"
   },
   {
    "type": "prose",
    "html": "<div class=\"compare\"><table><thead><tr><th></th><th>Approximation</th><th>Why</th></tr></thead><tbody>\n<tr><th>\\(\\sin x\\)</th><td>\\(\\approx x\\)</td><td>\\(\\sin0=0\\), \\(\\cos0=1\\)</td></tr>\n<tr><th>\\(e^x\\)</th><td>\\(\\approx1+x\\)</td><td>\\(e^0=1\\), slope 1</td></tr>\n<tr><th>\\(\\ln(1+x)\\)</th><td>\\(\\approx x\\)</td><td>\\(\\ln1=0\\), slope 1</td></tr>\n<tr><th>\\(\\sqrt{1+x}\\)</th><td>\\(\\approx1+\\frac x2\\)</td><td>slope \\(\\frac{1}{2\\sqrt1}=\\frac12\\)</td></tr>\n<tr><th>\\((1+x)^k\\)</th><td>\\(\\approx1+kx\\)</td><td>slope \\(k\\)</td></tr>\n</tbody></table></div>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Linearize, then estimate (Stewart Example 1)",
      "html": "<p>Find \\(L(x)\\) for \\(f(x)=\\sqrt{x+3}\\) at \\(a=1\\), and use it to estimate \\(\\sqrt{3.98}\\) and \\(\\sqrt{4.05}\\).</p><ol class=\"steps\"><li>\\(f(1)=2\\). \\(f'(x)=\\frac{1}{2\\sqrt{x+3}}\\Rightarrow f'(1)=\\frac14\\).</li><li>\\(L(x)=2+\\frac14(x-1)=\\frac74+\\frac x4\\).</li><li>\\(\\sqrt{3.98}=f(0.98)\\approx L(0.98)=1.995\\). \\(\\sqrt{4.05}=f(1.05)\\approx L(1.05)=2.0125\\).</li><li><span class='why'>Pick \\(a\\) so that \\(f(a)\\) is easy (here \\(\\sqrt4=2\\)) and close to the number you want.</span></li></ol>"
     },
     {
      "label": "Error with differentials (Stewart Example 4)",
      "html": "<p>A sphere's radius is measured as 21 cm, with a possible error of 0.05 cm. Estimate the maximum error in the volume.</p><ol class=\"steps\"><li>\\(V=\\frac43\\pi r^3\\Rightarrow dV=4\\pi r^2\\,dr\\).</li><li>\\(dV=4\\pi(21)^2(0.05)\\approx277\\text{ cm}^3\\).</li><li>Relative error: \\(\\frac{dV}{V}=\\frac{4\\pi r^2dr}{\\frac43\\pi r^3}=3\\frac{dr}{r}=3\\cdot\\frac{0.05}{21}\\approx0.0071\\), about \\(0.7\\%\\).</li></ol>"
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
      "id": "p310-1",
      "source": "§3.10 #1",
      "href": null,
      "question": "Find the linearization of \\(f(x)=x^3-x^2+3\\) at \\(a=-2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(-2)=-8-4+3=-9\\).</p><p>\\(f'(x)=3x^2-2x\\Rightarrow f'(-2)=12+4=16\\).</p><p>\\(L(x)=-9+16(x+2)\\).</p><p class=\"ans\">\\(L(x)=16x+23\\)</p>"
       }
      ]
     },
     {
      "id": "p310-3",
      "source": "§3.10 #3",
      "href": null,
      "question": "Find the linearization of \\(f(x)=\\sqrt[3]{x}\\) at \\(a=8\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(8)=2\\). \\(f'(x)=\\frac13x^{-2/3}\\Rightarrow f'(8)=\\frac13\\cdot\\frac14=\\frac1{12}\\).</p><p class=\"ans\">\\(L(x)=2+\\frac{1}{12}(x-8)\\)</p>"
       }
      ]
     },
     {
      "id": "p310-5",
      "source": "§3.10 #5",
      "href": null,
      "question": "Find the linear approximation of \\(f(x)=\\sqrt{1-x}\\) at \\(a=0\\) and use it to approximate \\(\\sqrt{0.9}\\) and \\(\\sqrt{0.99}\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Which \\(x\\) makes \\(\\sqrt{1-x}=\\sqrt{0.9}\\)?</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f(0)=1\\). \\(f'(x)=-\\frac{1}{2\\sqrt{1-x}}\\Rightarrow f'(0)=-\\frac12\\). So \\(L(x)=1-\\frac x2\\).</p><p>\\(\\sqrt{0.9}=f(0.1)\\approx1-0.05\\). \\(\\sqrt{0.99}=f(0.01)\\approx1-0.005\\).</p><p class=\"ans\">\\(L(x)=1-\\frac x2\\); \\(\\sqrt{0.9}\\approx0.95\\), \\(\\sqrt{0.99}\\approx0.995\\)</p>"
       }
      ]
     },
     {
      "id": "p310-7",
      "source": "§3.10 #7",
      "href": null,
      "question": "Verify \\(\\tan^{-1}x\\approx x\\) at \\(a=0\\). For which \\(x\\) is it accurate to within 0.1?",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(0)=0\\), \\(f'(x)=\\frac1{1+x^2}\\Rightarrow f'(0)=1\\). So \\(L(x)=x\\). ✓</p><p>We need \\(|x-\\tan^{-1}x|<0.1\\). Graphing (or solving numerically) gives about \\(|x|<0.73\\).</p><p class=\"ans\">Accurate to within 0.1 for about \\(-0.73<x<0.73\\)</p>"
       }
      ]
     },
     {
      "id": "p310-11",
      "source": "§3.10 #11",
      "href": null,
      "question": "Find the differential of \\(y=e^{5x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(dy=y'\\,dx\\) with \\(y'=5e^{5x}\\).</p><p class=\"ans\">\\(dy=5e^{5x}\\,dx\\)</p>"
       }
      ]
     },
     {
      "id": "p310-13",
      "source": "§3.10 #13",
      "href": null,
      "question": "Find the differential of \\(y=\\dfrac{1+2u}{1+3u}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Quotient rule: \\(y'=\\frac{2(1+3u)-3(1+2u)}{(1+3u)^2}=\\frac{-1}{(1+3u)^2}\\).</p><p class=\"ans\">\\(dy=-\\dfrac{du}{(1+3u)^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p310-17",
      "source": "§3.10 #17",
      "href": null,
      "question": "Find the differential of \\(y=\\ln(\\sin\\theta)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(y'=\\frac{\\cos\\theta}{\\sin\\theta}=\\cot\\theta\\).</p><p class=\"ans\">\\(dy=\\cot\\theta\\,d\\theta\\)</p>"
       }
      ]
     },
     {
      "id": "p310-19",
      "source": "§3.10 #19",
      "href": null,
      "question": "(a) Find \\(dy\\) for \\(y=e^{x/10}\\). (b) Evaluate it at \\(x=0\\), \\(dx=0.1\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(dy=\\frac1{10}e^{x/10}dx\\).</p><p>(b) \\(\\frac1{10}(1)(0.1)\\).</p><p class=\"ans\">(a) \\(dy=\\frac{1}{10}e^{x/10}dx\\) (b) \\(dy=0.01\\)</p>"
       }
      ]
     },
     {
      "id": "p310-21",
      "source": "§3.10 #21",
      "href": null,
      "question": "(a) Find \\(dy\\) for \\(y=\\sqrt{3+x^2}\\). (b) Evaluate at \\(x=1\\), \\(dx=-0.1\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(dy=\\frac{x}{\\sqrt{3+x^2}}dx\\).</p><p>(b) \\(\\frac{1}{2}(-0.1)\\).</p><p class=\"ans\">(a) \\(dy=\\dfrac{x\\,dx}{\\sqrt{3+x^2}}\\) (b) \\(dy=-0.05\\)</p>"
       }
      ]
     },
     {
      "id": "p310-23",
      "source": "§3.10 #23",
      "href": null,
      "question": "Compute \\(\\Delta y\\) and \\(dy\\) for \\(y=x^2-4x\\), \\(x=3\\), \\(\\Delta x=0.5\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\Delta y=f(3.5)-f(3)=(12.25-14)-(9-12)=-1.75+3=1.25\\).</p><p>\\(dy=(2x-4)dx=(2)(0.5)=1\\).</p><p class=\"ans\">\\(\\Delta y=1.25\\), \\(dy=1\\)</p>"
       }
      ]
     },
     {
      "id": "p310-25",
      "source": "§3.10 #25",
      "href": null,
      "question": "Compute \\(\\Delta y\\) and \\(dy\\) for \\(y=\\sqrt{x-2}\\), \\(x=3\\), \\(\\Delta x=0.8\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\Delta y=\\sqrt{1.8}-\\sqrt1\\approx0.342\\).</p><p>\\(dy=\\frac{1}{2\\sqrt{x-2}}dx=\\frac12(0.8)=0.4\\).</p><p class=\"ans\">\\(\\Delta y\\approx0.342\\), \\(dy=0.4\\)</p>"
       }
      ]
     },
     {
      "id": "p310-31",
      "source": "§3.10 #31",
      "href": null,
      "question": "Use a linear approximation to estimate \\((1.999)^4\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(x)=x^4\\), \\(a=2\\): \\(f(2)=16\\), \\(f'(2)=4(8)=32\\).</p><p>\\(L(1.999)=16+32(-0.001)\\).</p><p class=\"ans\">\\((1.999)^4\\approx15.968\\)</p>"
       }
      ]
     },
     {
      "id": "p310-33",
      "source": "§3.10 #33",
      "href": null,
      "question": "Use a linear approximation to estimate \\(\\sqrt[3]{1001}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(x)=\\sqrt[3]{x}\\), \\(a=1000\\): \\(f(1000)=10\\), \\(f'(1000)=\\frac{1}{3(1000)^{2/3}}=\\frac1{300}\\).</p><p>\\(L(1001)=10+\\frac{1}{300}(1)\\).</p><p class=\"ans\">\\(\\sqrt[3]{1001}\\approx10.0033\\)</p>"
       }
      ]
     },
     {
      "id": "p310-35",
      "source": "§3.10 #35",
      "href": null,
      "question": "Use a linear approximation to estimate \\(e^{0.1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f(x)=e^x\\) at \\(a=0\\): \\(L(x)=1+x\\).</p><p class=\"ans\">\\(e^{0.1}\\approx1.1\\) (the true value is 1.10517…)</p>"
       }
      ]
     },
     {
      "id": "p310-37",
      "source": "§3.10 #37",
      "href": null,
      "question": "Explain why \\(\\ln1.04\\approx0.04\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Linearize \\(f(x)=\\ln x\\) at \\(a=1\\): \\(f(1)=0\\), \\(f'(1)=1\\), so \\(L(x)=x-1\\).</p><p>\\(\\ln1.04\\approx L(1.04)=0.04\\).</p><p class=\"ans\">Because near \\(x=1\\), \\(\\ln x\\approx x-1\\)</p>"
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
      "title": "Using x instead of a",
      "html": "<p>In \\(L(x)=f(a)+f'(a)(x-a)\\), evaluate \\(f\\) and \\(f'\\) at \\(a\\), the easy point.</p>"
     },
     {
      "title": "Δy vs dy",
      "html": "<p>\\(\\Delta y\\) is the exact change \\(f(x+\\Delta x)-f(x)\\). \\(dy=f'(x)dx\\) is the tangent-line estimate.</p>"
     },
     {
      "title": "Degrees",
      "html": "<p>For trig, convert to radians first: \\(1^\\circ=\\frac{\\pi}{180}\\) rad.</p>"
     },
     {
      "title": "Relative vs absolute error",
      "html": "<p>Absolute: \\(dV\\). Relative: \\(dV/V\\). Percentage: relative × 100%.</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "s311",
  "slug": "3-11",
  "num": "§3.11",
  "title": "Hyperbolic Functions",
  "lede": "sinh, cosh and tanh: the e-based cousins of sin, cos and tan.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>Hyperbolic functions are built from \\(e^x\\) and \\(e^{-x}\\). They behave a lot like trig functions, with a few sign flips.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">Definitions</span>\\[\\sinh x=\\frac{e^x-e^{-x}}{2}\\qquad\\cosh x=\\frac{e^x+e^{-x}}{2}\\]<p>\\(\\tanh x=\\frac{\\sinh x}{\\cosh x}\\), \\(\\operatorname{sech}x=\\frac{1}{\\cosh x}\\), \\(\\operatorname{csch}x=\\frac1{\\sinh x}\\), \\(\\coth x=\\frac{\\cosh x}{\\sinh x}\\)</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Key identity</span>\\[\\cosh^2x-\\sinh^2x=1\\]<p class='note'>Minus, unlike \\(\\cos^2+\\sin^2=1\\). Divide by \\(\\cosh^2\\): \\(1-\\tanh^2x=\\operatorname{sech}^2x\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Symmetry & values</span><p>\\(\\sinh\\) is odd, \\(\\cosh\\) is even. \\(\\sinh0=0\\), \\(\\cosh0=1\\). \\(\\cosh x+\\sinh x=e^x\\).</p>"
     }
    ]
   },
   {
    "type": "lab",
    "id": "lab-hyper",
    "html": "<div class=\"lab-head\"><h4>cosh and sinh live on a hyperbola</h4><span class=\"tag\">Lab · slide t</span></div>\n<div class=\"lab-pair\"><canvas id=\"hy-left\" aria-label=\"The hyperbola x squared minus y squared equals 1 with the point (cosh t, sinh t)\"></canvas><canvas id=\"hy-right\" aria-label=\"Graphs of cosh, sinh and tanh with the current t marked\"></canvas></div>\n<div class=\"controls\">\n  <label for=\"hy-t\">t <input id=\"hy-t\" type=\"range\" min=\"-2.2\" max=\"2.2\" step=\"0.01\" value=\"1\"></label>\n  <button type=\"button\" id=\"hy-anim\">Sweep</button>\n</div>\n<div class=\"readout\">\n  <div class=\"c-f\">cosh t = (eᵗ + e⁻ᵗ)/2<b id=\"hy-c\">–</b></div>\n  <div class=\"c-d\">sinh t = (eᵗ − e⁻ᵗ)/2<b id=\"hy-s\">–</b></div>\n  <div>cosh² t − sinh² t<b id=\"hy-id\">–</b></div>\n</div>\n<p class=\"note\">Just as (cos t, sin t) is always on the circle x² + y² = 1, the point (cosh t, sinh t) is always on the hyperbola x² − y² = 1. That's where the name comes from, and why the identity has a minus sign.</p>"
   },
   {
    "type": "heading",
    "text": "Derivatives"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">sinh and cosh</span>\\[(\\sinh x)'=\\cosh x\\qquad(\\cosh x)'=\\sinh x\\]<p class='note'><strong>No minus sign</strong> on cosh, unlike \\((\\cos x)'=-\\sin x\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">tanh and coth</span>\\[(\\tanh x)'=\\operatorname{sech}^2x\\qquad(\\coth x)'=-\\operatorname{csch}^2x\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">sech and csch</span>\\[(\\operatorname{sech}x)'=-\\operatorname{sech}x\\tanh x\\qquad(\\operatorname{csch}x)'=-\\operatorname{csch}x\\coth x\\]"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Inverses</span>\\[(\\sinh^{-1}x)'=\\frac{1}{\\sqrt{1+x^2}},\\ (\\cosh^{-1}x)'=\\frac{1}{\\sqrt{x^2-1}},\\ (\\tanh^{-1}x)'=\\frac{1}{1-x^2}\\]"
     }
    ]
   },
   {
    "type": "prose",
    "html": "<p class=\"callout\"><strong>Memory trick:</strong> it's the trig table with one change: cosh's derivative has no minus. sech, csch and coth keep their minus signs, just like sec, csc and cot.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Evaluate with the definition (§3.11 #3a)",
      "html": "<p>Find \\(\\cosh(\\ln5)\\).</p><ol class=\"steps\"><li>\\(\\cosh(\\ln5)=\\frac{e^{\\ln5}+e^{-\\ln5}}{2}\\).</li><li>\\(e^{\\ln5}=5\\) and \\(e^{-\\ln5}=\\frac15\\).</li><li>\\(\\frac{5+\\frac15}{2}=\\frac{26/5}{2}=\\frac{13}{5}\\).</li></ol>"
     },
     {
      "label": "Prove the identity",
      "html": "<p>Show \\(\\cosh^2x-\\sinh^2x=1\\).</p><ol class=\"steps\"><li>\\(\\cosh^2x=\\frac{e^{2x}+2+e^{-2x}}{4}\\) and \\(\\sinh^2x=\\frac{e^{2x}-2+e^{-2x}}{4}\\).</li><li>Subtract: \\(\\frac{(2)-(-2)}{4}=\\frac44=1\\). ✓</li></ol>"
     },
     {
      "label": "Chain rule (§3.11 #41)",
      "html": "<p>Differentiate \\(f(x)=\\tanh\\sqrt x\\).</p><ol class=\"steps\"><li>Outside \\(\\tanh u\\to\\operatorname{sech}^2u\\); inside \\(u=\\sqrt x\\), \\(u'=\\frac{1}{2\\sqrt x}\\).</li><li>\\(f'(x)=\\dfrac{\\operatorname{sech}^2\\sqrt x}{2\\sqrt x}\\).</li></ol>"
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
      "id": "p311-1",
      "source": "§3.11 #1",
      "href": null,
      "question": "Find (a) \\(\\sinh0\\) (b) \\(\\cosh0\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(\\frac{1-1}{2}=0\\). (b) \\(\\frac{1+1}{2}=1\\).</p><p class=\"ans\">(a) 0 (b) 1</p>"
       }
      ]
     },
     {
      "id": "p311-3",
      "source": "§3.11 #3",
      "href": null,
      "question": "Find (a) \\(\\cosh(\\ln5)\\) (b) \\(\\cosh5\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(\\frac{5+1/5}{2}=\\frac{13}{5}\\).</p><p>(b) \\(\\frac{e^5+e^{-5}}{2}\\approx74.21\\).</p><p class=\"ans\">(a) \\(\\frac{13}{5}\\) (b) \\(\\approx74.21\\)</p>"
       }
      ]
     },
     {
      "id": "p311-5",
      "source": "§3.11 #5",
      "href": null,
      "question": "Find (a) \\(\\operatorname{sech}0\\) (b) \\(\\cosh^{-1}1\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>(a) \\(\\frac{1}{\\cosh0}=1\\).</p><p>(b) \\(\\cosh y=1\\) only when \\(y=0\\).</p><p class=\"ans\">(a) 1 (b) 0</p>"
       }
      ]
     },
     {
      "id": "p311-7",
      "source": "§3.11 #7",
      "href": null,
      "question": "Write \\(8\\sinh x+5\\cosh x\\) in terms of \\(e^x\\) and \\(e^{-x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(8\\cdot\\frac{e^x-e^{-x}}{2}+5\\cdot\\frac{e^x+e^{-x}}{2}=4e^x-4e^{-x}+\\frac52e^x+\\frac52e^{-x}\\).</p><p class=\"ans\">\\(\\frac{13}{2}e^x-\\frac32e^{-x}\\)</p>"
       }
      ]
     },
     {
      "id": "p311-9",
      "source": "§3.11 #9",
      "href": null,
      "question": "Write \\(\\sinh(\\ln x)\\) as a rational function of \\(x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\frac{e^{\\ln x}-e^{-\\ln x}}{2}=\\frac{x-\\frac1x}{2}\\).</p><p class=\"ans\">\\(\\dfrac{x^2-1}{2x}\\)</p>"
       }
      ]
     },
     {
      "id": "p311-13",
      "source": "§3.11 #13",
      "href": null,
      "question": "Prove \\(\\cosh x+\\sinh x=e^x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\frac{e^x+e^{-x}}{2}+\\frac{e^x-e^{-x}}{2}=\\frac{2e^x}{2}\\).</p><p class=\"ans\">\\(=e^x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p311-19",
      "source": "§3.11 #19",
      "href": null,
      "question": "Prove \\(\\sinh2x=2\\sinh x\\cosh x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Right side: \\(2\\cdot\\frac{e^x-e^{-x}}{2}\\cdot\\frac{e^x+e^{-x}}{2}=\\frac{e^{2x}-e^{-2x}}{2}\\) (difference of squares).</p><p class=\"ans\">\\(=\\sinh2x\\) ✓</p>"
       }
      ]
     },
     {
      "id": "p311-25",
      "source": "§3.11 #25",
      "href": null,
      "question": "If \\(\\cosh x=\\frac53\\) and \\(x>0\\), find the other hyperbolic functions at \\(x\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Use \\(\\cosh^2x-\\sinh^2x=1\\). For \\(x>0\\), \\(\\sinh x\\) is positive.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(\\sinh^2x=\\cosh^2x-1=\\frac{25}{9}-1=\\frac{16}{9}\\). Since \\(x>0\\), \\(\\sinh x=\\frac43\\).</p><p>\\(\\tanh x=\\frac{4/3}{5/3}=\\frac45\\), then take reciprocals.</p><p class=\"ans\">\\(\\sinh x=\\frac43\\), \\(\\tanh x=\\frac45\\), \\(\\operatorname{sech}x=\\frac35\\), \\(\\operatorname{csch}x=\\frac34\\), \\(\\coth x=\\frac54\\)</p>"
       }
      ]
     },
     {
      "id": "p311-27",
      "source": "§3.11 #27",
      "href": null,
      "question": "Find \\(\\lim_{x\\to\\infty}\\tanh x\\), \\(\\lim_{x\\to-\\infty}\\tanh x\\), \\(\\lim_{x\\to\\infty}\\operatorname{sech}x\\) and \\(\\lim_{x\\to\\infty}\\frac{\\sinh x}{e^x}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\tanh x=\\frac{e^x-e^{-x}}{e^x+e^{-x}}\\). As \\(x\\to\\infty\\), \\(e^{-x}\\to0\\) so it \\(\\to\\frac{e^x}{e^x}=1\\). As \\(x\\to-\\infty\\), \\(e^x\\to0\\) so it \\(\\to\\frac{-e^{-x}}{e^{-x}}=-1\\).</p><p>\\(\\operatorname{sech}x=\\frac{2}{e^x+e^{-x}}\\to0\\).</p><p>\\(\\frac{\\sinh x}{e^x}=\\frac{1-e^{-2x}}{2}\\to\\frac12\\).</p><p class=\"ans\">\\(1\\), \\(-1\\), \\(0\\), \\(\\frac12\\)</p>"
       }
      ]
     },
     {
      "id": "p311-35",
      "source": "§3.11 #35",
      "href": null,
      "question": "Differentiate \\(f(x)=\\cosh3x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Chain rule, no minus sign.</p><p class=\"ans\">\\(f'(x)=3\\sinh3x\\)</p>"
       }
      ]
     },
     {
      "id": "p311-37",
      "source": "§3.11 #37",
      "href": null,
      "question": "Differentiate \\(h(x)=\\sinh(x^2)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Outside \\(\\sinh u\\to\\cosh u\\), inside \\(x^2\\to2x\\).</p><p class=\"ans\">\\(h'(x)=2x\\cosh(x^2)\\)</p>"
       }
      ]
     },
     {
      "id": "p311-39",
      "source": "§3.11 #39",
      "href": null,
      "question": "Differentiate \\(G(t)=\\sinh(\\ln t)\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(G'(t)=\\cosh(\\ln t)\\cdot\\frac1t\\).</p><p>Simplify: \\(\\cosh(\\ln t)=\\frac{t+1/t}{2}=\\frac{t^2+1}{2t}\\).</p><p class=\"ans\">\\(G'(t)=\\dfrac{\\cosh(\\ln t)}{t}=\\dfrac{t^2+1}{2t^2}\\)</p>"
       }
      ]
     },
     {
      "id": "p311-43",
      "source": "§3.11 #43",
      "href": null,
      "question": "Differentiate \\(y=\\operatorname{sech}x\\tanh x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule: \\((-\\operatorname{sech}x\\tanh x)\\tanh x+\\operatorname{sech}x\\cdot\\operatorname{sech}^2x\\).</p><p class=\"ans\">\\(y'=\\operatorname{sech}x\\,(\\operatorname{sech}^2x-\\tanh^2x)\\)</p>"
       }
      ]
     },
     {
      "id": "p311-45",
      "source": "§3.11 #45",
      "href": null,
      "question": "Differentiate \\(g(t)=t\\coth\\sqrt{t^2+1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Product rule. Derivative of \\(\\coth u\\) is \\(-\\operatorname{csch}^2u\\cdot u'\\) with \\(u=\\sqrt{t^2+1}\\), \\(u'=\\frac{t}{\\sqrt{t^2+1}}\\).</p><p>\\(g'=\\coth\\sqrt{t^2+1}+t\\cdot\\left(-\\operatorname{csch}^2\\sqrt{t^2+1}\\right)\\frac{t}{\\sqrt{t^2+1}}\\).</p><p class=\"ans\">\\(g'(t)=\\coth\\sqrt{t^2+1}-\\dfrac{t^2\\operatorname{csch}^2\\sqrt{t^2+1}}{\\sqrt{t^2+1}}\\)</p>"
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
      "title": "A minus on cosh′",
      "html": "<p>\\((\\cosh x)'=\\sinh x\\), with no minus. That's the opposite of cos.</p>"
     },
     {
      "title": "Wrong identity sign",
      "html": "<p>\\(\\cosh^2x-\\sinh^2x=1\\). The trig version has a plus.</p>"
     },
     {
      "title": "Treating sinh as sin",
      "html": "<p>\\(\\sinh x\\) is not periodic and not bounded: \\(\\sinh x\\to\\infty\\) as \\(x\\to\\infty\\).</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "s41",
  "slug": "4-1",
  "num": "§4.1",
  "title": "Maximum and Minimum Values",
  "lede": "Critical numbers, and the Closed Interval Method for absolute extremes.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>This section is about finding the highest and lowest values of a function. It starts the “applications of derivatives” chapter, and every optimization problem later builds on it.</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": false,
      "html": "<span class=\"tag\">Absolute vs local</span><p><strong>Absolute</strong> max/min: the highest/lowest value on the whole domain or interval. <strong>Local</strong>: highest/lowest compared with nearby points only.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Extreme Value Theorem</span><p>If \\(f\\) is <strong>continuous</strong> on a <strong>closed</strong> interval \\([a,b]\\), it has an absolute max and an absolute min there.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Fermat's Theorem</span><p>If \\(f\\) has a local max or min at \\(c\\) and \\(f'(c)\\) exists, then \\(f'(c)=0\\).</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Critical number</span><p>A number \\(c\\) <strong>in the domain</strong> of \\(f\\) where \\(f'(c)=0\\) <strong>or</strong> \\(f'(c)\\) does not exist.</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "The Closed Interval Method"
   },
   {
    "type": "prose",
    "html": "<p>To find the absolute max and min of a continuous \\(f\\) on \\([a,b]\\):</p><ol class=\"steps\"><li>Find the <strong>critical numbers</strong> of \\(f\\) that lie <strong>inside</strong> \\((a,b)\\).</li><li>Evaluate \\(f\\) at each of those critical numbers.</li><li>Evaluate \\(f\\) at the <strong>endpoints</strong> \\(a\\) and \\(b\\).</li><li>The largest value is the absolute max; the smallest is the absolute min.</li></ol><p class=\"callout\">A table of candidates (\\(x\\) and \\(f(x)\\)) is the cleanest way to show your work on the quiz.</p>"
   },
   {
    "type": "lab",
    "id": "lab-extrema",
    "html": "<div class=\"lab-head\"><h4>The closed interval method, live</h4><span class=\"tag\">Lab · move the endpoints</span></div>\n<canvas class=\"tall\" id=\"ex-cv\" aria-label=\"Graph of f on an interval with critical points and endpoints marked, and the absolute max and min highlighted\"></canvas>\n<div class=\"controls\">\n  <label for=\"ex-fn\">f(x)\n    <select id=\"ex-fn\">\n      <option value=\"cubic\">x³ − 3x² + 1</option>\n      <option value=\"quartic\">3x⁴ − 4x³ − 12x² + 1</option>\n      <option value=\"frac\">x + 1/x</option>\n    </select>\n  </label>\n  <label for=\"ex-a\">a <input id=\"ex-a\" type=\"range\" min=\"-2\" max=\"4\" step=\"0.05\" value=\"-0.5\"></label>\n  <label for=\"ex-b\">b <input id=\"ex-b\" type=\"range\" min=\"-2\" max=\"4\" step=\"0.05\" value=\"4\"></label>\n</div>\n<div class=\"readout\" id=\"ex-table\"></div>\n<p class=\"note\" id=\"ex-note\">Candidates are the critical numbers inside [a, b] (orange) and the two endpoints (gray). The biggest value is the absolute max (green), the smallest the absolute min (red). Shrink the interval and watch the winner change, sometimes to an endpoint.</p>"
   },
   {
    "type": "heading",
    "text": "Worked examples"
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Closed interval method (Stewart Example 8)",
      "html": "<p>Find the absolute max and min of \\(f(x)=x^3-3x^2+1\\) on \\([-\\tfrac12,4]\\).</p><ol class=\"steps\"><li>\\(f'(x)=3x^2-6x=3x(x-2)\\Rightarrow\\) critical numbers \\(0\\) and \\(2\\), both inside the interval.</li><li>\\(f(0)=1\\), \\(f(2)=8-12+1=-3\\).</li><li>Endpoints: \\(f(-\\tfrac12)=-\\tfrac18-\\tfrac34+1=\\tfrac18\\), \\(f(4)=64-48+1=17\\).</li><li>Largest \\(17\\) (at \\(x=4\\)); smallest \\(-3\\) (at \\(x=2\\)).</li></ol><p class='ans'>Absolute max \\(f(4)=17\\); absolute min \\(f(2)=-3\\)</p>"
     },
     {
      "label": "Critical numbers where f′ doesn't exist (Stewart Example 6)",
      "html": "<p>Find the critical numbers of \\(f(x)=x^{3/5}(4-x)\\).</p><ol class=\"steps\"><li>Product rule: \\(f'(x)=\\tfrac35x^{-2/5}(4-x)-x^{3/5}\\).</li><li>Common denominator \\(5x^{2/5}\\): \\(f'(x)=\\dfrac{3(4-x)-5x}{5x^{2/5}}=\\dfrac{12-8x}{5x^{2/5}}\\).</li><li>\\(f'=0\\) when \\(12-8x=0\\Rightarrow x=\\tfrac32\\). \\(f'\\) is undefined at \\(x=0\\), and 0 is in the domain.</li><li>Critical numbers: \\(0\\) and \\(\\tfrac32\\).</li></ol>"
     },
     {
      "label": "f′(c) = 0 isn't always an extreme",
      "html": "<p>\\(f(x)=x^3\\) has \\(f'(0)=0\\), but 0 is neither a max nor a min: the graph keeps rising through it. Critical numbers are only <em>candidates</em>.</p>"
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
      "id": "p41-19",
      "source": "§4.1 #19",
      "href": null,
      "question": "Sketch \\(f(x)=\\sin x\\) on \\(0\\le x<\\pi/2\\) and find its absolute and local max and min values.",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Is the right endpoint included? The interval isn't closed, so the Extreme Value Theorem doesn't apply.</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>On this interval \\(\\sin x\\) increases from \\(\\sin0=0\\) toward 1, but \\(x=\\pi/2\\) is <em>not included</em>, so it never reaches 1.</p><p class=\"ans\">Absolute min \\(f(0)=0\\); no absolute max; no local max or min</p>"
       }
      ]
     },
     {
      "id": "p41-23",
      "source": "§4.1 #23",
      "href": null,
      "question": "Sketch \\(f(x)=\\ln x\\) on \\(0<x\\le2\\) and find its absolute and local extreme values.",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(\\ln x\\) increases. It reaches \\(\\ln2\\) at the included endpoint 2, but drops toward \\(-\\infty\\) as \\(x\\to0^+\\).</p><p class=\"ans\">Absolute max \\(f(2)=\\ln2\\); no absolute min; no local extremes</p>"
       }
      ]
     },
     {
      "id": "p41-29",
      "source": "§4.1 #29",
      "href": null,
      "question": "Find the critical numbers of \\(f(x)=3x^2+x-2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=6x+1=0\\).</p><p class=\"ans\">\\(x=-\\frac16\\)</p>"
       }
      ]
     },
     {
      "id": "p41-31",
      "source": "§4.1 #31",
      "href": null,
      "question": "Find the critical numbers of \\(f(x)=3x^4+8x^3-48x^2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(x)=12x^3+24x^2-96x=12x(x^2+2x-8)=12x(x+4)(x-2)\\).</p><p class=\"ans\">\\(x=-4,\\ 0,\\ 2\\)</p>"
       }
      ]
     },
     {
      "id": "p41-33",
      "source": "§4.1 #33",
      "href": null,
      "question": "Find the critical numbers of \\(g(t)=t^5+5t^3+50t\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(g'(t)=5t^4+15t^2+50\\). Every term is \\(\\ge0\\) and the constant is 50, so \\(g'(t)\\ge50>0\\). It's never 0 and always defined.</p><p class=\"ans\">No critical numbers</p>"
       }
      ]
     },
     {
      "id": "p41-35",
      "source": "§4.1 #35",
      "href": null,
      "question": "Find the critical numbers of \\(g(y)=\\dfrac{y-1}{y^2-y+1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Quotient rule numerator: \\((y^2-y+1)-(y-1)(2y-1)=y^2-y+1-(2y^2-3y+1)=-y^2+2y\\).</p><p>\\(g'(y)=\\dfrac{-y(y-2)}{(y^2-y+1)^2}\\). The denominator is never 0 (its discriminant is negative).</p><p class=\"ans\">\\(y=0\\) and \\(y=2\\)</p>"
       }
      ]
     },
     {
      "id": "p41-37",
      "source": "§4.1 #37",
      "href": null,
      "question": "Find the critical numbers of \\(p(x)=\\dfrac{x^2+2}{2x-1}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(p'(x)=\\dfrac{2x(2x-1)-2(x^2+2)}{(2x-1)^2}=\\dfrac{2x^2-2x-4}{(2x-1)^2}=\\dfrac{2(x-2)(x+1)}{(2x-1)^2}\\).</p><p>\\(p'\\) is undefined at \\(x=\\frac12\\), but \\(\\frac12\\) is <strong>not in the domain</strong> of \\(p\\), so it isn't a critical number.</p><p class=\"ans\">\\(x=-1\\) and \\(x=2\\)</p>"
       }
      ]
     },
     {
      "id": "p41-39",
      "source": "§4.1 #39",
      "href": null,
      "question": "Find the critical numbers of \\(h(t)=t^{3/4}-2t^{1/4}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(h'(t)=\\frac34t^{-1/4}-\\frac12t^{-3/4}=\\dfrac{3t^{1/2}-2}{4t^{3/4}}\\).</p><p>Zero when \\(\\sqrt t=\\frac23\\Rightarrow t=\\frac49\\). Undefined at \\(t=0\\), which is in the domain (\\(t\\ge0\\)).</p><p class=\"ans\">\\(t=0\\) and \\(t=\\frac49\\)</p>"
       }
      ]
     },
     {
      "id": "p41-41",
      "source": "§4.1 #41",
      "href": null,
      "question": "Find the critical numbers of \\(F(x)=x^{4/5}(x-4)^2\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(F'=\\frac45x^{-1/5}(x-4)^2+2x^{4/5}(x-4)=x^{-1/5}(x-4)\\left[\\frac45(x-4)+2x\\right]\\).</p><p>Bracket: \\(\\frac{14x-16}{5}\\). So \\(F'(x)=\\dfrac{2(x-4)(7x-8)}{5x^{1/5}}\\).</p><p class=\"ans\">\\(x=0,\\ \\frac87,\\ 4\\)</p>"
       }
      ]
     },
     {
      "id": "p41-43",
      "source": "§4.1 #43",
      "href": null,
      "question": "Find the critical numbers of \\(f(x)=x^{1/3}(4-x)^{2/3}\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=\\frac13x^{-2/3}(4-x)^{2/3}-\\frac23x^{1/3}(4-x)^{-1/3}=\\dfrac{(4-x)-2x}{3x^{2/3}(4-x)^{1/3}}\\).</p><p>\\(f'=0\\) at \\(x=\\frac43\\); undefined at \\(x=0\\) and \\(x=4\\) (both in the domain).</p><p class=\"ans\">\\(x=0,\\ \\frac43,\\ 4\\)</p>"
       }
      ]
     },
     {
      "id": "p41-45",
      "source": "§4.1 #45",
      "href": null,
      "question": "Find the critical numbers of \\(f(\\theta)=2\\cos\\theta+\\sin^2\\theta\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'(\\theta)=-2\\sin\\theta+2\\sin\\theta\\cos\\theta=2\\sin\\theta(\\cos\\theta-1)\\).</p><p>Zero when \\(\\sin\\theta=0\\) or \\(\\cos\\theta=1\\). Both happen exactly at multiples of \\(\\pi\\).</p><p class=\"ans\">\\(\\theta=n\\pi\\), \\(n\\) any integer</p>"
       }
      ]
     },
     {
      "id": "p41-47",
      "source": "§4.1 #47",
      "href": null,
      "question": "Find the critical numbers of \\(g(x)=x^2\\ln x\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>Domain \\(x>0\\). \\(g'(x)=2x\\ln x+x=x(2\\ln x+1)\\).</p><p>\\(x\\neq0\\), so \\(2\\ln x+1=0\\Rightarrow\\ln x=-\\frac12\\).</p><p class=\"ans\">\\(x=e^{-1/2}=\\frac{1}{\\sqrt e}\\)</p>"
       }
      ]
     },
     {
      "id": "p41-51",
      "source": "§4.1 #51",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=12+4x-x^2\\) on \\([0,5]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=4-2x=0\\Rightarrow x=2\\).</p><p>\\(f(0)=12\\), \\(f(2)=16\\), \\(f(5)=7\\).</p><p class=\"ans\">Max \\(f(2)=16\\); min \\(f(5)=7\\)</p>"
       }
      ]
     },
     {
      "id": "p41-53",
      "source": "§4.1 #53",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=2x^3-3x^2-12x+1\\) on \\([-2,3]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=6x^2-6x-12=6(x-2)(x+1)\\Rightarrow x=-1,2\\).</p><p>\\(f(-2)=-3\\), \\(f(-1)=8\\), \\(f(2)=-19\\), \\(f(3)=-8\\).</p><p class=\"ans\">Max \\(f(-1)=8\\); min \\(f(2)=-19\\)</p>"
       }
      ]
     },
     {
      "id": "p41-55",
      "source": "§4.1 #55",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=3x^4-4x^3-12x^2+1\\) on \\([-2,3]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=12x^3-12x^2-24x=12x(x-2)(x+1)\\Rightarrow x=-1,0,2\\).</p><p>\\(f(-2)=33\\), \\(f(-1)=-4\\), \\(f(0)=1\\), \\(f(2)=-31\\), \\(f(3)=28\\).</p><p class=\"ans\">Max \\(f(-2)=33\\) (an endpoint!); min \\(f(2)=-31\\)</p>"
       }
      ]
     },
     {
      "id": "p41-57",
      "source": "§4.1 #57",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=x+\\frac1x\\) on \\([0.2,4]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=1-\\frac1{x^2}=0\\Rightarrow x=\\pm1\\); only \\(x=1\\) is in the interval.</p><p>\\(f(0.2)=5.2\\), \\(f(1)=2\\), \\(f(4)=4.25\\).</p><p class=\"ans\">Max \\(f(0.2)=5.2\\); min \\(f(1)=2\\)</p>"
       }
      ]
     },
     {
      "id": "p41-59",
      "source": "§4.1 #59",
      "href": null,
      "question": "Find the absolute max and min of \\(f(t)=t-\\sqrt[3]{t}\\) on \\([-1,4]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=1-\\frac13t^{-2/3}\\). Zero when \\(t^{2/3}=\\frac13\\Rightarrow t=\\pm\\frac{1}{3\\sqrt3}\\approx\\pm0.192\\). Undefined at \\(t=0\\).</p><p>\\(f(-1)=0\\), \\(f(-0.192)\\approx0.385\\), \\(f(0)=0\\), \\(f(0.192)\\approx-0.385\\), \\(f(4)=4-\\sqrt[3]4\\approx2.413\\).</p><p class=\"ans\">Max \\(f(4)=4-\\sqrt[3]{4}\\approx2.41\\); min \\(f\\!\\left(\\tfrac{\\sqrt3}{9}\\right)=-\\tfrac{2\\sqrt3}{9}\\approx-0.385\\)</p>"
       }
      ]
     },
     {
      "id": "p41-61",
      "source": "§4.1 #61",
      "href": null,
      "question": "Find the absolute max and min of \\(f(t)=2\\cos t+\\sin2t\\) on \\([0,\\pi/2]\\).",
      "reveals": [
       {
        "label": "Hint",
        "html": "<p>Write \\(\\cos2t=1-2\\sin^2t\\) to get a quadratic in \\(\\sin t\\).</p>"
       },
       {
        "label": "Full solution",
        "html": "<p>\\(f'=-2\\sin t+2\\cos2t=-2\\sin t+2(1-2\\sin^2t)=-2(2\\sin t-1)(\\sin t+1)\\).</p><p>In \\([0,\\pi/2]\\): \\(\\sin t=\\frac12\\Rightarrow t=\\frac\\pi6\\).</p><p>\\(f(0)=2\\), \\(f(\\frac\\pi6)=\\sqrt3+\\frac{\\sqrt3}{2}=\\frac{3\\sqrt3}{2}\\approx2.60\\), \\(f(\\frac\\pi2)=0\\).</p><p class=\"ans\">Max \\(f(\\frac\\pi6)=\\frac{3\\sqrt3}{2}\\); min \\(f(\\frac\\pi2)=0\\)</p>"
       }
      ]
     },
     {
      "id": "p41-63",
      "source": "§4.1 #63",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=x^{-2}\\ln x\\) on \\([\\frac12,4]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=-2x^{-3}\\ln x+x^{-3}=\\dfrac{1-2\\ln x}{x^3}\\Rightarrow x=\\sqrt e\\approx1.65\\).</p><p>\\(f(\\frac12)=4\\ln\\frac12\\approx-2.77\\), \\(f(\\sqrt e)=\\frac{1/2}{e}\\approx0.184\\), \\(f(4)=\\frac{\\ln4}{16}\\approx0.087\\).</p><p class=\"ans\">Max \\(f(\\sqrt e)=\\frac{1}{2e}\\); min \\(f(\\frac12)=-4\\ln2\\)</p>"
       }
      ]
     },
     {
      "id": "p41-65",
      "source": "§4.1 #65",
      "href": null,
      "question": "Find the absolute max and min of \\(f(x)=\\ln(x^2+x+1)\\) on \\([-1,1]\\).",
      "reveals": [
       {
        "label": "Full solution",
        "html": "<p>\\(f'=\\frac{2x+1}{x^2+x+1}=0\\Rightarrow x=-\\frac12\\).</p><p>\\(f(-1)=\\ln1=0\\), \\(f(-\\frac12)=\\ln\\frac34\\approx-0.288\\), \\(f(1)=\\ln3\\approx1.10\\).</p><p class=\"ans\">Max \\(f(1)=\\ln3\\); min \\(f(-\\frac12)=\\ln\\frac34\\)</p>"
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
      "title": "Forgetting the endpoints",
      "html": "<p>On a closed interval, the absolute max or min is often at an endpoint (#55: the max is at \\(x=-2\\)).</p>"
     },
     {
      "title": "Critical numbers outside the interval",
      "html": "<p>Only test critical numbers that lie inside \\([a,b]\\).</p>"
     },
     {
      "title": "Points not in the domain",
      "html": "<p>Where \\(f'\\) is undefined only counts if \\(f\\) itself is defined there (#37: \\(x=\\frac12\\) doesn't count).</p>"
     },
     {
      "title": "f′ = 0 means extreme",
      "html": "<p>Not always: \\(x^3\\) has \\(f'(0)=0\\) and no extreme there.</p>"
     }
    ]
   }
  ],
  "unit": "q4"
 },
 {
  "id": "mt2",
  "slug": "midterm-2",
  "num": "Midterm 2 · Thu, Oct 29",
  "title": "Midterm 2 study plan",
  "lede": "Everything since Midterm 1, a day-by-day plan that also covers Quiz 4, and a timed mock midterm.",
  "blocks": [
   {
    "type": "countdown",
    "target": "2026-10-29",
    "label": "Midterm 2"
   },
   {
    "type": "heading",
    "text": "What's likely on it"
   },
   {
    "type": "prose",
    "html": "<p>Midterm 1 was on Sep 29, so Midterm 2 most likely covers everything taught since then: the end of Chapter 2 through §4.1. The syllabus skips §3.7 and §3.8. Your instructor holds a review the class meeting before each exam (Tue, Oct 27, the same day as Quiz 4), so confirm the exact list there.</p><div class=\"cover-grid\"><a href=\"/2-8/\"><b>§2.8</b><span>The derivative as a function</span></a><a href=\"/3-1/\"><b>§3.1</b><span>Power rule, eˣ</span></a><a href=\"/3-2/\"><b>§3.2</b><span>Product & quotient rules</span></a><a href=\"/3-3/\"><b>§3.3</b><span>Trig derivatives & limits</span></a><a href=\"/3-4/\"><b>§3.4</b><span>Chain rule</span></a><a href=\"/3-5/\"><b>§3.5</b><span>Implicit differentiation</span></a><a href=\"/3-6/\"><b>§3.6</b><span>Logs & inverse trig</span></a><a href=\"/3-9/\"><b>§3.9</b><span>Related rates</span></a><a href=\"/3-10/\"><b>§3.10</b><span>Linear approximation</span></a><a href=\"/3-11/\"><b>§3.11</b><span>Hyperbolic functions</span></a><a href=\"/4-1/\"><b>§4.1</b><span>Max & min values</span></a></div><p class='callout'><strong>Closed book, closed notes, no calculator.</strong> You have to know every formula by heart and do the arithmetic by hand. That's what the Memorize page and the mock midterm below are for.</p>"
   },
   {
    "type": "heading",
    "text": "Day-by-day plan"
   },
   {
    "type": "prose",
    "html": "<div class=\"compare\"><table><thead><tr><th>Day</th><th>Focus</th><th>Do this</th></tr></thead><tbody>\n<tr><th>Thu Oct 22</th><td>§3.6</td><td>Logs and log differentiation. Assigned #1–59 odd.</td></tr>\n<tr><th>Fri Oct 23</th><td>§3.11 + §3.10</td><td>Hyperbolic definitions and derivatives; linearization and differentials.</td></tr>\n<tr><th>Sat Oct 24</th><td>§3.9</td><td>Related rates: draw every problem. Then a <strong>short mock midterm</strong> to see where you stand.</td></tr>\n<tr><th>Sun Oct 25</th><td>§4.1 + Quiz 3 refresh</td><td>Critical numbers and the Closed Interval Method. Then redo the 18-question practice quiz (2.8–3.5), timed.</td></tr>\n<tr><th>Mon Oct 26</th><td>Quiz 4 review</td><td>Generate → Quiz 4 Mix, 20 problems. Memorize → Quiz 4 flashcards until you finish a round with no misses.</td></tr>\n<tr><th>Tue Oct 27</th><td>Quiz 4 + review class</td><td>Take the quiz. Write down anything the instructor emphasizes in the review. That evening: a <strong>full mock midterm</strong>.</td></tr>\n<tr><th>Wed Oct 28</th><td>Fix weak spots</td><td>Redo every problem you missed on the mocks, using the “Review” links. Then Generate → Quiz 3 Mix, 15 problems.</td></tr>\n<tr><th>Thu Oct 29</th><td>Midterm 2</td><td>Morning: one round of all flashcards and a read of the cheat sheet. Nothing new.</td></tr>\n</tbody></table></div>"
   },
   {
    "type": "heading",
    "text": "Exam-day strategy"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">First pass</span><p>Do every problem you're sure of first. Mark the rest and come back. Don't spend 15 minutes stuck on one.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Show the setup</span><p>Write the rule you're using (“chain rule: outside′·inside′”). Partial credit lives in the setup.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Related rates</span><p>Picture → equation → differentiate in \\(t\\) → plug in. Units in the answer.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Max/min</span><p>Always make the table: critical numbers inside the interval plus both endpoints.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Check</span><p>Plug a simple \\(x\\) into your derivative and see if the slope makes sense. Check every sign when you distribute a minus.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">No calculator</span><p>Leave answers exact (\\(\\frac{8}{9\\pi}\\), \\(\\sqrt5\\), \\(\\ln3\\)) unless asked for a decimal.</p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Mock midterm",
    "id": "mock"
   },
   {
    "type": "mock"
   }
  ]
 },
 {
  "id": "grades",
  "slug": "grades",
  "num": "Grades",
  "title": "Grade calculator",
  "lede": "Enter your scores to see your grade so far, and what you need on the rest for an A or B.",
  "blocks": [
   {
    "type": "prose",
    "html": "<p>This uses the grading rules from the Math 190 syllabus (Martinez, Fall 2026):</p>\n<ul class=\"steps\"><li><strong>Quizzes 10%</strong> (lowest quiz dropped), <strong>midterms 50%</strong> (three tests), <strong>final 40%</strong>,</li><li><strong>or the final exam alone</strong>, whichever is better,</li><li>A 90%+, B 80%+, C 70%+, D 60%+. No curve.</li></ul>\n<p class=\"callout\">The “final alone” rule is your safety net: <strong>90% on the comprehensive final is an A</strong>, and 80% is a B, no matter how the midterms went.</p>"
   },
   {
    "type": "gradecalc"
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
  "id": "gen",
  "slug": "generate",
  "num": "Practice",
  "title": "Problem generator",
  "lede": "Unlimited new practice problems with step-by-step solutions, plus a checker for any derivative you make up yourself.",
  "blocks": [
   {
    "type": "heading",
    "text": "Generate a new problem"
   },
   {
    "type": "prose",
    "html": "<p>Pick a section, or <strong>Mixed</strong> for exam-style variety. Every problem is new: the numbers are random, but the steps are the same ones you'll use on the quiz. Number answers are checked for you. For the others, open the solution and mark whether you got it.</p>"
   },
   {
    "type": "generator"
   },
   {
    "type": "heading",
    "text": "Make your own problem"
   },
   {
    "type": "prose",
    "html": "<p>Type any function, work out its derivative on paper, and type your answer. The page compares your answer with the real slope of the function at many points, and graphs both so you can see where they differ.</p>"
   },
   {
    "type": "checker"
   }
  ]
 },
 {
  "id": "mem",
  "slug": "memory-tricks",
  "num": "Memorize",
  "title": "Memory tricks",
  "lede": "How to remember every derivative and rule for the exam, plus a flashcard drill to practice them.",
  "blocks": [
   {
    "type": "heading",
    "text": "Trig derivatives: learn 3, get 6"
   },
   {
    "type": "prose",
    "html": "<p>Don't memorize six separate facts. Learn the three “plain” ones, then use one rule to get the other three for free.</p><p><strong>Step 1. Learn these three:</strong></p><div class=\"compare\"><table><thead><tr><th>Function</th><th>Derivative</th></tr></thead><tbody><tr><th>\\(\\sin x\\)</th><td>\\(\\cos x\\)</td></tr><tr><th>\\(\\tan x\\)</th><td>\\(\\sec^2 x\\)</td></tr><tr><th>\\(\\sec x\\)</th><td>\\(\\sec x\\tan x\\)</td></tr></tbody></table></div>"
   },
   {
    "type": "prose",
    "html": "<p><strong>Step 2. The “co-” rule:</strong> put <strong>co</strong> in front of every function, then add a <strong>minus sign</strong>.</p><div class=\"compare\"><table><thead><tr><th>Plain</th><th>Add “co” + minus</th></tr></thead><tbody><tr><th>\\((\\sin x)'=\\cos x\\)</th><td>\\((\\cos x)'=-\\sin x\\)</td></tr><tr><th>\\((\\tan x)'=\\sec^2x\\)</th><td>\\((\\cot x)'=-\\csc^2x\\)</td></tr><tr><th>\\((\\sec x)'=\\sec x\\tan x\\)</th><td>\\((\\csc x)'=-\\csc x\\cot x\\)</td></tr></tbody></table></div><p class=\"note\">Adding “co” to cos gives “co-cos”, which is just sin. So in the first row, “cos x” becomes “sin x” and picks up the minus: \\((\\cos x)'=-\\sin x\\).</p>"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">The one sentence</span><p><strong>“Co” functions get a minus.</strong> cos, cot and csc have negative derivatives. sin, tan and sec don't.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Partners</span><p><strong>tan goes with sec, cot goes with csc.</strong> \\(\\tan\\to\\sec^2\\), \\(\\sec\\to\\sec\\tan\\). \\(\\cot\\to-\\csc^2\\), \\(\\csc\\to-\\csc\\cot\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Keep yourself</span><p>sec and csc keep themselves: \\(\\sec\\to\\boldsymbol{\\sec}\\cdot\\tan\\), \\(\\csc\\to-\\boldsymbol{\\csc}\\cdot\\cot\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">The circle</span><p>sin and cos cycle every 4 derivatives: \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\). One quarter turn per derivative.</p>"
     }
    ]
   },
   {
    "type": "examples",
    "items": [
     {
      "label": "Blanked on the exam? Rebuild tan in 20 seconds",
      "html": "<p>You only need sin, cos and the quotient rule. Write \\(\\tan x=\\dfrac{\\sin x}{\\cos x}\\):</p><ol class=\"steps\"><li>Low d-high minus high d-low: \\(\\dfrac{\\cos x\\cdot\\cos x-\\sin x\\cdot(-\\sin x)}{\\cos^2x}\\)</li><li>Top: \\(\\cos^2x+\\sin^2x=1\\).</li><li>So \\((\\tan x)'=\\dfrac{1}{\\cos^2x}=\\sec^2x\\).</li><li class=\"why\">Same idea for sec: \\(\\sec x=\\dfrac1{\\cos x}\\) gives \\(\\dfrac{\\sin x}{\\cos^2x}=\\sec x\\tan x\\).</li></ol>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Quiz 4 formulas: the shortcuts",
    "id": "quiz-4-tricks"
   },
   {
    "type": "rules",
    "items": [
     {
      "key": true,
      "html": "<span class=\"tag\">ln</span><p><strong>“Derivative of the inside over the inside.”</strong> \\((\\ln u)'=\\frac{u'}{u}\\). Other bases: divide by \\(\\ln b\\). Exponentials \\(b^x\\): multiply by \\(\\ln b\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Inverse trig</span><p>\\(\\tan^{-1}\\): “one over one plus x squared.” \\(\\sin^{-1}\\): “one over root of one minus x squared.” The “co” versions (\\(\\cos^{-1}\\), \\(\\cot^{-1}\\), \\(\\csc^{-1}\\)) get a minus.</p>"
     },
     {
      "key": true,
      "html": "<span class=\"tag\">Hyperbolic</span><p>Same table as trig, with <strong>one change</strong>: \\((\\cosh x)'=\\sinh x\\), no minus. The identity flips too: \\(\\cosh^2-\\sinh^2=1\\).</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Related rates</span><p><strong>Draw → Equation → Differentiate → Plug in.</strong> Plug in numbers <em>last</em>.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Linear approx</span><p>“It's just the tangent line”: \\(L(x)=f(a)+f'(a)(x-a)\\). Choose \\(a\\) where \\(f(a)\\) is easy.</p>"
     },
     {
      "key": false,
      "html": "<span class=\"tag\">Max/min</span><p><strong>Critical numbers inside + both endpoints → table → biggest and smallest.</strong></p>"
     }
    ]
   },
   {
    "type": "heading",
    "text": "Every rule as a phrase you can say"
   },
   {
    "type": "prose",
    "html": "<div class=\"compare\"><table><thead><tr><th>Rule</th><th>Formula</th><th>Say it as</th></tr></thead><tbody><tr><th>Power</th><td>\\((x^n)'=nx^{n-1}\\)</td><td>“Bring the power down, subtract one.”</td></tr><tr><th>Constant</th><td>\\((c)'=0\\)</td><td>“Flat line, zero slope.”</td></tr><tr><th>\\(e^x\\)</th><td>\\((e^x)'=e^x\\)</td><td>“e to the x is lazy: it stays the same.”</td></tr><tr><th>\\(a^x\\)</th><td>\\((a^x)'=a^x\\ln a\\)</td><td>“Same as e to the x, times ln a.”</td></tr><tr><th>Product</th><td>\\((fg)'=fg'+gf'\\)</td><td>“First d-second, plus second d-first.”</td></tr><tr><th>Quotient</th><td>\\(\\left(\\frac fg\\right)'=\\frac{gf'-fg'}{g^2}\\)</td><td>“Low d-high minus high d-low, over the square of what's below.”</td></tr><tr><th>Chain</th><td>\\(f'(g(x))\\,g'(x)\\)</td><td>“Outside derivative, inside left alone, times inside derivative.” Peel the onion.</td></tr><tr><th>Implicit</th><td>\\((y^n)'=ny^{n-1}y'\\)</td><td>“Every y gets a y′.”</td></tr></tbody></table></div><p class=\"note\">Why “low” goes first in the quotient rule: the minus sign makes order matter. Start with the bottom and you'll get the sign right.</p>"
   },
   {
    "type": "heading",
    "text": "Flashcard drill"
   },
   {
    "type": "prose",
    "html": "<p>Tap a card to flip it. Mark <strong>Got it</strong> or <strong>Again</strong>. Cards you miss come back at the end of the round. Switch the direction to practice going from the answer back to the question.</p>"
   },
   {
    "type": "flashcards",
    "items": [
     {
      "front": "\\(\\dfrac{d}{dx}\\sin x\\)",
      "back": "\\(\\cos x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\cos x\\)",
      "back": "\\(-\\sin x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\tan x\\)",
      "back": "\\(\\sec^2 x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\cot x\\)",
      "back": "\\(-\\csc^2 x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sec x\\)",
      "back": "\\(\\sec x\\tan x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\csc x\\)",
      "back": "\\(-\\csc x\\cot x\\)",
      "tag": "Trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sin(kx)\\)",
      "back": "\\(k\\cos(kx)\\)",
      "tag": "Trig + chain"
     },
     {
      "front": "\\(\\displaystyle\\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}\\)",
      "back": "\\(1\\)",
      "tag": "Trig limit"
     },
     {
      "front": "\\(\\displaystyle\\lim_{\\theta\\to0}\\frac{\\cos\\theta-1}{\\theta}\\)",
      "back": "\\(0\\)",
      "tag": "Trig limit"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\,c\\) (a constant)",
      "back": "\\(0\\)",
      "tag": "Basic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}x^n\\)",
      "back": "\\(n\\,x^{n-1}\\)",
      "tag": "Basic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}e^x\\)",
      "back": "\\(e^x\\)",
      "tag": "Basic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}a^x\\)",
      "back": "\\(a^x\\ln a\\)",
      "tag": "Basic"
     },
     {
      "front": "Product rule: \\((fg)'\\)",
      "back": "\\(f\\,g'+g\\,f'\\)",
      "tag": "Rule"
     },
     {
      "front": "Quotient rule: \\(\\left(\\dfrac fg\\right)'\\)",
      "back": "\\(\\dfrac{g\\,f'-f\\,g'}{g^2}\\)",
      "tag": "Rule"
     },
     {
      "front": "Chain rule: \\(\\big(f(g(x))\\big)'\\)",
      "back": "\\(f'(g(x))\\cdot g'(x)\\)",
      "tag": "Rule"
     },
     {
      "front": "\\(\\dfrac{d}{dx}[g(x)]^n\\)",
      "back": "\\(n[g(x)]^{n-1}\\,g'(x)\\)",
      "tag": "Rule"
     },
     {
      "front": "\\(\\dfrac{d}{dx}e^{g(x)}\\)",
      "back": "\\(e^{g(x)}\\,g'(x)\\)",
      "tag": "Rule"
     },
     {
      "front": "Implicit: \\(\\dfrac{d}{dx}\\,y^n\\)",
      "back": "\\(n\\,y^{n-1}\\,y'\\)",
      "tag": "Implicit"
     },
     {
      "front": "Implicit: \\(\\dfrac{d}{dx}(xy)\\)",
      "back": "\\(y+x\\,y'\\)",
      "tag": "Implicit"
     },
     {
      "front": "Definition: \\(f'(x)=\\)",
      "back": "\\(\\displaystyle\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\)",
      "tag": "Definition"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\ln x\\)",
      "back": "\\(\\dfrac1x\\)",
      "tag": "Q4 · logs"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\ln u\\)",
      "back": "\\(\\dfrac{u'}{u}\\)",
      "tag": "Q4 · logs"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\log_b x\\)",
      "back": "\\(\\dfrac{1}{x\\ln b}\\)",
      "tag": "Q4 · logs"
     },
     {
      "front": "\\(\\dfrac{d}{dx}b^x\\)",
      "back": "\\(b^x\\ln b\\)",
      "tag": "Q4 · logs"
     },
     {
      "front": "Derivative of \\(x^x\\)",
      "back": "\\(x^x(\\ln x+1)\\) (take ln first)",
      "tag": "Q4 · logs"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sin^{-1}x\\)",
      "back": "\\(\\dfrac{1}{\\sqrt{1-x^2}}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\cos^{-1}x\\)",
      "back": "\\(-\\dfrac{1}{\\sqrt{1-x^2}}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\tan^{-1}x\\)",
      "back": "\\(\\dfrac{1}{1+x^2}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sec^{-1}x\\)",
      "back": "\\(\\dfrac{1}{x\\sqrt{x^2-1}}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\sinh x=\\)",
      "back": "\\(\\dfrac{e^x-e^{-x}}{2}\\)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "\\(\\cosh x=\\)",
      "back": "\\(\\dfrac{e^x+e^{-x}}{2}\\)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "\\(\\cosh^2x-\\sinh^2x=\\)",
      "back": "\\(1\\)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sinh x\\)",
      "back": "\\(\\cosh x\\)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\cosh x\\)",
      "back": "\\(\\sinh x\\) (no minus!)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\tanh x\\)",
      "back": "\\(\\operatorname{sech}^2x\\)",
      "tag": "Q4 · hyperbolic"
     },
     {
      "front": "Linearization \\(L(x)=\\)",
      "back": "\\(f(a)+f'(a)(x-a)\\)",
      "tag": "Q4 · approximation"
     },
     {
      "front": "Differential \\(dy=\\)",
      "back": "\\(f'(x)\\,dx\\)",
      "tag": "Q4 · approximation"
     },
     {
      "front": "Related rates: when do you plug in numbers?",
      "back": "After differentiating with respect to \\(t\\)",
      "tag": "Q4 · related rates"
     },
     {
      "front": "Cone volume",
      "back": "\\(V=\\tfrac13\\pi r^2h\\)",
      "tag": "Q4 · related rates"
     },
     {
      "front": "Critical number",
      "back": "\\(c\\) in the domain with \\(f'(c)=0\\) or \\(f'(c)\\) undefined",
      "tag": "Q4 · max/min"
     },
     {
      "front": "Closed Interval Method",
      "back": "Compare \\(f\\) at critical numbers inside \\([a,b]\\) and at both endpoints",
      "tag": "Q4 · max/min"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\tan^{-1}u\\)",
      "back": "\\(\\dfrac{u'}{1+u^2}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\sin^{-1}u\\)",
      "back": "\\(\\dfrac{u'}{\\sqrt{1-u^2}}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\(\\dfrac{d}{dx}\\tan^{-1}(e^x)\\)",
      "back": "\\(\\dfrac{e^x}{1+e^{2x}}\\)",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "\\((e^x)^2=\\)",
      "back": "\\(e^{2x}\\) (not \\(e^{x^2}\\))",
      "tag": "Q4 · inverse trig"
     },
     {
      "front": "How do you prove \\((\\cot x)'=-\\csc^2x\\)?",
      "back": "Write \\(\\frac{\\cos x}{\\sin x}\\), quotient rule, \\(\\sin^2+\\cos^2=1\\), rewrite as \\(-\\csc^2x\\)",
      "tag": "Trig proof"
     }
    ]
   },
   {
    "type": "heading",
    "text": "How to make it stick"
   },
   {
    "type": "prose",
    "html": "<ol class=\"steps\"><li><strong>Blank-page recall.</strong> Once a day, write every formula from memory on an empty sheet. Then check it against the <a href=\"/cheat-sheet/\">cheat sheet</a>. Recalling works much better than rereading.</li><li><strong>Say the phrases out loud.</strong> They're written to be spoken. Rhythm helps memory.</li><li><strong>Drill both directions.</strong> Use the flashcards above both ways: “\\(\\tan x\\to\\) ?” and “\\(\\sec^2x\\) is the derivative of ?”.</li><li><strong>Short and spread out.</strong> Ten minutes a day for several days beats one long night. Mix in a few problems from <a href=\"/3-3/\">§3.3</a> and the <a href=\"/quick-quiz/\">Quick quiz</a>.</li><li><strong>When stuck, derive it.</strong> Rebuilding tan from sin/cos also practices the quotient rule.</li></ol>"
   },
   {
    "type": "traps",
    "items": [
     {
      "title": "Mixing up sec² and sec tan",
      "html": "<p>tan's derivative is \\(\\sec^2x\\). sec's derivative is \\(\\sec x\\tan x\\). Remember: sec keeps itself.</p>"
     },
     {
      "title": "Dropping the minus on cos",
      "html": "<p>\\((\\cos x)'=-\\sin x\\). “Co” gets a minus, every time.</p>"
     },
     {
      "title": "Power rule on aˣ or eˣ",
      "html": "<p>\\((2^x)'\\ne x\\,2^{x-1}\\). The power rule needs the variable in the base, not the exponent.</p>"
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
  "lede": "Everything you need to memorize for Quiz 3 and Quiz 4, in one place. Tap a card to open the full explanation with examples.",
  "blocks": [
   {
    "type": "sheet",
    "items": [
     {
      "title": "Definition (2.8)",
      "html": "\\[f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h}\\]<p class=\"note\">Tangent line: \\(y-f(a)=f'(a)(x-a)\\). Normal slope: \\(-1/f'(a)\\).</p>",
      "details": "<p><strong>What it means.</strong> \\(f'(x)\\) is the slope of the tangent line at \\(x\\). The fraction \\(\\frac{f(x+h)-f(x)}{h}\\) is the slope of a secant line through two points a distance \\(h\\) apart. As \\(h\\to0\\) the secant turns into the tangent.</p>\n<div>\\[ f'(x)=\\lim_{h\\to0}\\frac{f(x+h)-f(x)}{h} \\]</div>\n<p><strong>How to use it, every time:</strong></p>\n<ol class=\"steps\"><li>Write \\(f(x+h)\\) and expand it.</li><li>Subtract \\(f(x)\\). Everything without an \\(h\\) cancels.</li><li>Factor out \\(h\\) and cancel it with the denominator.</li><li>Only now set \\(h=0\\).</li></ol>\n<p><strong>Example.</strong> \\(f(x)=x^2\\): \\(\\dfrac{(x+h)^2-x^2}{h}=\\dfrac{2xh+h^2}{h}=2x+h\\to 2x\\).</p>\n<p><strong>Tricks:</strong> square roots → multiply by the conjugate. Fractions → combine over a common denominator.</p>\n<p><strong>Tangent line</strong> at \\(a\\): \\(y-f(a)=f'(a)(x-a)\\). <strong>Normal line</strong>: same point, slope \\(-\\dfrac{1}{f'(a)}\\).</p>\n<p><strong>Not differentiable</strong> at a corner (like \\(|x|\\) at 0), a jump or hole, or a vertical tangent (like \\(\\sqrt[3]{x}\\) at 0). Differentiable ⇒ continuous, but not the other way around.</p>",
      "href": "/2-8/",
      "linkLabel": "Open §2.8"
     },
     {
      "title": "Basic rules (3.1)",
      "html": "\\[(x^n)'=nx^{n-1},\\ \\ (e^x)'=e^x,\\ \\ (c)'=0\\]<p class=\"note\">\\((cf)'=cf'\\), \\((f\\pm g)'=f'\\pm g'\\)</p>",
      "details": "<div>\\[ (c)'=0 \\qquad (x^n)'=n\\,x^{n-1} \\qquad (cf)'=c\\,f' \\qquad (f\\pm g)'=f'\\pm g' \\]</div>\n<p><strong>Power rule works for any exponent</strong>, including negatives and fractions. Rewrite first:</p>\n<ul class=\"steps\"><li>\\(\\sqrt{x}=x^{1/2}\\to\\tfrac12x^{-1/2}=\\dfrac{1}{2\\sqrt x}\\)</li><li>\\(\\dfrac{1}{x^3}=x^{-3}\\to-3x^{-4}\\)</li><li>\\(\\dfrac{4}{\\sqrt[3]{x}}=4x^{-1/3}\\to-\\tfrac43x^{-4/3}\\)</li></ul>\n<p><strong>Exponentials:</strong></p>\n<div>\\[ (e^x)'=e^x \\qquad (a^x)'=a^x\\ln a \\]</div>\n<p class=\"why\">\\(e\\) is the one base whose slope at \\(x=0\\) is exactly 1. Any other base picks up the factor \\(\\ln a\\).</p>\n<p><strong>Fraction with one term on the bottom?</strong> Split it instead of using the quotient rule: \\(\\dfrac{3x^2+x^3}{x}=3x+x^2\\).</p>\n<p><strong>Watch out:</strong> \\((e^x)'\\ne x e^{x-1}\\) and \\((2^x)'\\ne x2^{x-1}\\). The power rule needs the variable in the base. Constants like \\(e^2\\) or \\(\\pi^3\\) have derivative 0.</p>",
      "href": "/3-1/",
      "linkLabel": "Open §3.1"
     },
     {
      "title": "Product / Quotient (3.2)",
      "html": "\\[(fg)'=fg'+gf'\\]\\[\\left(\\tfrac fg\\right)'=\\tfrac{gf'-fg'}{g^2}\\]",
      "details": "<p><strong>Product rule:</strong> “first d-second plus second d-first”.</p>\n<div>\\[ (fg)'=f\\,g'+g\\,f' \\]</div>\n<p><strong>Example.</strong> \\((x^2e^x)'=x^2e^x+e^x\\cdot2x=e^x(x^2+2x)\\).</p>\n<p><strong>Quotient rule:</strong> “low d-high minus high d-low, over the square of what's below”.</p>\n<div>\\[ \\left(\\frac fg\\right)'=\\frac{g\\,f'-f\\,g'}{g^2} \\]</div>\n<p><strong>Example.</strong> \\(\\left(\\dfrac{x^2+3}{x-1}\\right)'=\\dfrac{(x-1)(2x)-(x^2+3)(1)}{(x-1)^2}=\\dfrac{x^2-2x-3}{(x-1)^2}\\).</p>\n<ul class=\"steps\"><li><strong>Order matters</strong> in the quotient rule because of the minus. Start with the bottom (“low”).</li><li><strong>Distribute the minus</strong> over the whole second product.</li><li><strong>Leave the bottom squared.</strong> Don't expand it.</li><li><strong>\\((fg)'\\ne f'g'\\).</strong> Check with \\(x\\cdot x\\).</li></ul>\n<p><strong>Table questions:</strong> plug the given values straight into the formula, e.g. \\((fg)'(5)=f(5)g'(5)+g(5)f'(5)\\).</p>",
      "href": "/3-2/",
      "linkLabel": "Open §3.2"
     },
     {
      "title": "Trig (3.3)",
      "html": "\\[\\begin{aligned}(\\sin x)'&amp;=\\cos x &amp; (\\cos x)'&amp;=-\\sin x\\\\(\\tan x)'&amp;=\\sec^2x &amp; (\\cot x)'&amp;=-\\csc^2x\\\\(\\sec x)'&amp;=\\sec x\\tan x &amp; (\\csc x)'&amp;=-\\csc x\\cot x\\end{aligned}\\]<p class=\"note\">\\(\\lim\\frac{\\sin\\theta}{\\theta}=1\\), \\(\\lim\\frac{\\cos\\theta-1}{\\theta}=0\\)</p>",
      "details": "<div>\\[ \\begin{aligned}(\\sin x)'&=\\cos x & (\\cos x)'&=-\\sin x\\\\(\\tan x)'&=\\sec^2x & (\\cot x)'&=-\\csc^2x\\\\(\\sec x)'&=\\sec x\\tan x & (\\csc x)'&=-\\csc x\\cot x\\end{aligned} \\]</div>\n<p><strong>Learn 3, get 6.</strong> Learn sin, tan, sec. For the “co” versions, add “co” to every function and add a minus sign.</p>\n<p><strong>Special limits</strong> (θ in radians):</p>\n<div>\\[ \\lim_{\\theta\\to0}\\frac{\\sin\\theta}{\\theta}=1 \\qquad \\lim_{\\theta\\to0}\\frac{\\cos\\theta-1}{\\theta}=0 \\]</div>\n<p>Make the denominator match the angle: \\(\\dfrac{\\sin7x}{4x}=\\dfrac74\\cdot\\dfrac{\\sin7x}{7x}\\to\\dfrac74\\).</p>\n<p><strong>The 4-cycle:</strong> \\(\\sin\\to\\cos\\to-\\sin\\to-\\cos\\to\\sin\\). For the \\(n\\)-th derivative, divide \\(n\\) by 4 and use the remainder. Example: \\(\\frac{d^{99}}{dx^{99}}\\sin x=-\\cos x\\) since \\(99=4\\cdot24+3\\).</p>\n<p><strong>Simplify with</strong> \\(\\sin^2x+\\cos^2x=1\\) after the quotient rule: \\(\\left(\\dfrac{\\sin x}{1+\\cos x}\\right)'=\\dfrac{1}{1+\\cos x}\\).</p>\n<p class=\"why\">Drill these with flashcards on the <a href=\"/memory-tricks/\">Memorize</a> page.</p>",
      "href": "/3-3/",
      "linkLabel": "Open §3.3"
     },
     {
      "title": "Chain (3.4)",
      "html": "\\[\\big(f(g(x))\\big)'=f'(g(x))\\,g'(x)\\]<p class=\"note\">\\((g^n)'=ng^{n-1}g'\\), \\((e^{g})'=e^{g}g'\\), \\((a^x)'=a^x\\ln a\\)</p>",
      "details": "<div>\\[ \\big(f(g(x))\\big)'=f'(g(x))\\cdot g'(x) \\qquad \\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx} \\]</div>\n<p>“Derivative of the outside, leave the inside alone, times the derivative of the inside.”</p>\n<p><strong>Find inside vs. outside:</strong> imagine plugging in a number. What you compute <em>last</em> is the outside.</p>\n<p><strong>Patterns</strong> (□ is the inside):</p>\n<ul class=\"steps\"><li>\\((\\square^n)'=n\\,\\square^{n-1}\\cdot\\square'\\). Example: \\(((3x^2-1)^5)'=30x(3x^2-1)^4\\).</li><li>\\((e^{\\square})'=e^{\\square}\\cdot\\square'\\). Example: \\((e^{4x^2-3x})'=(8x-3)e^{4x^2-3x}\\).</li><li>\\((\\sin\\square)'=\\cos\\square\\cdot\\square'\\). Example: \\((\\sin(x^3+2x))'=(3x^2+2)\\cos(x^3+2x)\\).</li><li>\\((\\sqrt{\\square})'=\\dfrac{\\square'}{2\\sqrt{\\square}}\\). Example: \\((\\sqrt{1+x^3})'=\\dfrac{3x^2}{2\\sqrt{1+x^3}}\\).</li><li>\\((a^{\\square})'=a^{\\square}\\ln a\\cdot\\square'\\).</li></ul>\n<p><strong>Layers multiply:</strong> \\(\\sin^2(x^2+1)\\to2\\sin(x^2+1)\\cdot\\cos(x^2+1)\\cdot2x\\).</p>\n<p><strong>Watch out:</strong> keep the inside unchanged inside the outer function, \\(\\cos(x^2)\\to-\\sin(x^2)\\cdot2x\\), not \\(-\\sin(2x)\\). In table problems, evaluate \\(f'\\) at \\(g(a)\\).</p>",
      "href": "/3-4/",
      "linkLabel": "Open §3.4"
     },
     {
      "title": "Implicit (3.5)",
      "html": "<p>Differentiate both sides; every \\(y\\)-term gets a \\(y'\\); collect, factor, solve.</p><p class=\"note\">\\((y^n)'=ny^{n-1}y'\\), \\((xy)'=y+xy'\\)</p>",
      "details": "<p><strong>When:</strong> the equation mixes \\(x\\) and \\(y\\) and is hard to solve for \\(y\\), like \\(x^2+y^2=25\\) or \\(x^3+y^3=6xy\\).</p>\n<p><strong>Recipe:</strong></p>\n<ol class=\"steps\"><li>Differentiate both sides with respect to \\(x\\). <strong>Every \\(y\\)-term gets a \\(y'\\)</strong> (chain rule).</li><li>Move all \\(y'\\) terms to one side, everything else to the other.</li><li>Factor out \\(y'\\) and divide.</li></ol>\n<p><strong>Building blocks:</strong></p>\n<ul class=\"steps\"><li>\\((y^n)'=n\\,y^{n-1}\\,y'\\)</li><li>\\((xy)'=y+x\\,y'\\) (product rule)</li><li>\\((x^2y)'=2xy+x^2y'\\)</li><li>\\((\\sin y)'=\\cos y\\cdot y'\\), \\((e^y)'=e^y\\,y'\\)</li><li>A constant on either side → 0.</li></ul>\n<p><strong>Example.</strong> \\(x^2+y^2=25\\): \\(2x+2yy'=0\\Rightarrow y'=-\\dfrac{x}{y}\\). At \\((3,4)\\) the slope is \\(-\\tfrac34\\).</p>\n<p><strong>Slope at a point, fast:</strong> plug in \\(x\\) and \\(y\\) right after differentiating, then solve for \\(y'\\). For \\(x^2+xy+y^2=7\\) at \\((1,2)\\): \\(2+2+y'+4y'=0\\Rightarrow y'=-\\tfrac45\\).</p>\n<p><strong>Horizontal tangent:</strong> numerator of \\(y'\\) is 0. <strong>Vertical tangent:</strong> denominator is 0.</p>",
      "href": "/3-5/",
      "linkLabel": "Open §3.5"
     },
     {
      "title": "Logs & inverse trig (3.6)",
      "html": "\\[(\\ln u)'=\\frac{u'}{u},\\quad(\\log_bx)'=\\frac{1}{x\\ln b},\\quad(b^x)'=b^x\\ln b\\]<p class='note'>\\((\\tan^{-1}x)'=\\frac1{1+x^2}\\), \\((\\sin^{-1}x)'=\\frac{1}{\\sqrt{1-x^2}}\\)</p>",
      "details": "<p><strong>Logs.</strong> \\((\\ln x)'=\\frac1x\\), and with an inside \\((\\ln u)'=\\frac{u'}{u}\\). Also \\((\\ln|x|)'=\\frac1x\\).</p><p><strong>Simplify first</strong> with log laws: \\(\\ln(ab)=\\ln a+\\ln b\\), \\(\\ln\\frac ab=\\ln a-\\ln b\\), \\(\\ln a^n=n\\ln a\\).</p><p><strong>Logarithmic differentiation</strong> for \\(x^x\\), \\(x^{\\sin x}\\), or messy products: take \\(\\ln\\) of both sides, differentiate (left side becomes \\(\\frac{y'}{y}\\)), multiply by \\(y\\).</p><div>\\[\\frac{d}{dx}x^x=x^x(\\ln x+1)\\]</div><p><strong>Inverse trig:</strong></p><div>\\[(\\sin^{-1}x)'=\\frac{1}{\\sqrt{1-x^2}},\\ (\\cos^{-1}x)'=-\\frac{1}{\\sqrt{1-x^2}},\\ (\\tan^{-1}x)'=\\frac{1}{1+x^2},\\ (\\sec^{-1}x)'=\\frac{1}{x\\sqrt{x^2-1}}\\]</div>",
      "href": "/3-6/",
      "linkLabel": "Open §3.6"
     },
     {
      "title": "Related rates (3.9)",
      "html": "<p>Draw → equation → differentiate in \\(t\\) → <strong>then</strong> plug in.</p><p class='note'>\\(x^2+y^2=z^2\\), \\(V=\\frac13\\pi r^2h\\), \\(V=\\frac43\\pi r^3\\)</p>",
      "details": "<ol class='steps'><li>Draw a picture at a general time; label changing quantities with letters.</li><li>Write the given rates and the unknown rate.</li><li>Find an equation linking the quantities (Pythagoras, similar triangles, volume/area, trig).</li><li>Differentiate both sides with respect to \\(t\\).</li><li>Plug in the values at that instant and solve.</li><li>Give units; negative means decreasing.</li></ol><p><strong>Cones:</strong> use similar triangles to replace \\(r\\) with a multiple of \\(h\\) <em>before</em> differentiating.</p><p><strong>Ladder:</strong> \\(x^2+y^2=L^2\\Rightarrow\\dot y=-\\frac xy\\dot x\\).</p>",
      "href": "/3-9/",
      "linkLabel": "Open §3.9"
     },
     {
      "title": "Linear approximation (3.10)",
      "html": "\\[L(x)=f(a)+f'(a)(x-a)\\]<p class='note'>\\(dy=f'(x)\\,dx\\approx\\Delta y\\)</p>",
      "details": "<p>The linearization is the tangent line at \\(a\\). Near \\(a\\), \\(f(x)\\approx L(x)\\).</p><p><strong>Estimating a number:</strong> pick \\(a\\) near it where \\(f(a)\\) is easy. \\(\\sqrt{4.05}\\): use \\(f=\\sqrt x\\), \\(a=4\\): \\(2+\\frac14(0.05)=2.0125\\).</p><p><strong>Differentials:</strong> \\(dy=f'(x)\\,dx\\) (tangent change), \\(\\Delta y=f(x+dx)-f(x)\\) (true change).</p><p><strong>Errors:</strong> max error \\(\\approx dV\\); relative \\(\\frac{dV}{V}\\); percentage = relative × 100%.</p><p><strong>Near 0:</strong> \\(\\sin x\\approx x\\), \\(e^x\\approx1+x\\), \\(\\ln(1+x)\\approx x\\), \\(\\sqrt{1+x}\\approx1+\\frac x2\\).</p>",
      "href": "/3-10/",
      "linkLabel": "Open §3.10"
     },
     {
      "title": "Hyperbolic (3.11)",
      "html": "\\[\\sinh x=\\tfrac{e^x-e^{-x}}{2},\\ \\cosh x=\\tfrac{e^x+e^{-x}}{2}\\]<p class='note'>\\(\\cosh^2-\\sinh^2=1\\); \\((\\cosh)'=\\sinh\\), no minus</p>",
      "details": "<p><strong>Definitions:</strong> \\(\\sinh x=\\frac{e^x-e^{-x}}{2}\\), \\(\\cosh x=\\frac{e^x+e^{-x}}{2}\\), \\(\\tanh x=\\frac{\\sinh x}{\\cosh x}\\).</p><p><strong>Identities:</strong> \\(\\cosh^2x-\\sinh^2x=1\\), \\(1-\\tanh^2x=\\operatorname{sech}^2x\\), \\(\\cosh x+\\sinh x=e^x\\), \\(\\sinh2x=2\\sinh x\\cosh x\\).</p><div>\\[(\\sinh x)'=\\cosh x,\\ (\\cosh x)'=\\sinh x,\\ (\\tanh x)'=\\operatorname{sech}^2x\\]</div><div>\\[(\\operatorname{sech}x)'=-\\operatorname{sech}x\\tanh x,\\ (\\operatorname{csch}x)'=-\\operatorname{csch}x\\coth x,\\ (\\coth x)'=-\\operatorname{csch}^2x\\]</div><p><strong>Inverses:</strong> \\((\\sinh^{-1}x)'=\\frac{1}{\\sqrt{1+x^2}}\\), \\((\\cosh^{-1}x)'=\\frac{1}{\\sqrt{x^2-1}}\\), \\((\\tanh^{-1}x)'=\\frac{1}{1-x^2}\\).</p>",
      "href": "/3-11/",
      "linkLabel": "Open §3.11"
     },
     {
      "title": "Max & min (4.1)",
      "html": "<p>Critical number: \\(f'(c)=0\\) or undefined, \\(c\\) in the domain.</p><p class='note'>Closed interval: check critical numbers inside + endpoints.</p>",
      "details": "<p><strong>Extreme Value Theorem:</strong> continuous on a closed \\([a,b]\\) ⇒ an absolute max and min exist.</p><p><strong>Fermat:</strong> a local extreme at \\(c\\) with \\(f'(c)\\) existing ⇒ \\(f'(c)=0\\). But \\(f'(c)=0\\) alone doesn't guarantee an extreme (\\(x^3\\) at 0).</p><p><strong>Closed Interval Method:</strong></p><ol class='steps'><li>Find critical numbers in \\((a,b)\\).</li><li>Evaluate \\(f\\) there and at \\(a\\) and \\(b\\).</li><li>Largest = absolute max, smallest = absolute min.</li></ol><p><strong>Watch:</strong> points where \\(f'\\) is undefined only count if \\(f\\) is defined there; skip critical numbers outside the interval.</p>",
      "href": "/4-1/",
      "linkLabel": "Open §4.1"
     }
    ]
   }
  ]
 }
];
