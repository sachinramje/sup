# HyperVisual — mark exploration

Five directions on the three-stroke mark. Each pushes exactly **one** variable, so they can
be evaluated independently and combined later.

| File | Direction | Variable | Notes |
| --- | --- | --- | --- |
| `hv-01-cadence.svg` | Cadence | Weight | Strokes graduate thin → heavy. Reads as a build, not a speed line. |
| `hv-02-aperture.svg` | Aperture | Subtraction | One horizontal band cut through all three strokes. Most ownable, best at small sizes. |
| `hv-03-chamfer.svg` | Chamfer | Corner | Opposing 45° bevels. Closest to the reference sheet's vocabulary. |
| `hv-04-stack.svg` | Stack | Overlap | Strokes overlap; overlaps knock out via `fill-rule="evenodd"`. Reads as layering. |
| `hv-05-prism.svg` | Prism | Angle | Bases aligned, tops fan at −6° / 0° / +6°. One source, divergent outputs. |
| `hv-wordmark-slash.svg` | — | — | The slash that substitutes for a letter (`V/SUAL`) and separates sub-brands (`HYPER/POD`). |

## Constants

- **Shear angle:** 18°. This is the one number to lock. It governs every mark, every letter
  substitution, and every divider across all sub-brands.
- **Stroke height:** 100 units in all files. Every other dimension is expressed against it, so
  the marks rebuild at any size without pixel values.
- **Aperture cut:** y 45 → 55 (10% of mark height), horizontal. Because `skewX` preserves y,
  the cut stays perfectly level while the strokes lean — that tension is the mark.
- **Stack overlap:** 6 units on a 32-unit stroke (~19%). Widen toward 8% of total mark width
  for a small-size variant, or the knockout lines fill in.

## Colour

Marks are authored with `fill="currentColor"` — set colour on the parent. Reference pairing is
black on volt (`#CCFF00`), with a black-ground knockout as the secondary lockup.

## Before committing to one

1. Trademark search on the mark alone, in classes covering media production and software.
2. Rebuild on a strict grid with all dimensions as ratios of mark height.
3. Test naked: 512px podcast tile with no wordmark, monochrome embroidery file, 16px favicon.

---

# Round 02 — marks for wisdom

Round 01 all leaned. A lean reads as speed, which fights the wisdom/intelligence
positioning. These three drop the shear and build on dimension, order, and accumulation.

| File | Direction | Variable | Argument |
| --- | --- | --- | --- |
| `hv-a-tesseract.svg` | Tesseract | Dimension | A hypercube is the literal meaning of "hyper" + "visual" — a projection from a dimension you can't stand in. |
| `hv-b-nine.svg` | Nine | Order | The HP-9 grid itself. Every deliverable becomes a logo impression. **Recommended.** |
| `hv-c-strata.svg` | Strata | Accumulation | Six layers thickening with depth, cut by a seam that drifts left as it descends. |

`wisdom-marks.html` is the live presentation — every mark is drawn from parameters
with sliders, a construction-line overlay, and a 20/28/44/72px legibility strip.

## Constants at the defaults exported here

- **Tesseract** — stroke 9, inner square 44/100, centred, four struts. Perspective
  offset is the ownability lever: pushed off-centre it stops being a symmetric diagram.
- **Nine** — cell 28, gutter 8, stroke ramp 4 → 14. The whole grid is one parameter:
  a square's stroke growing until it reaches half the cell, at which point the outline
  has closed into a solid. Empty to full is a single continuous number.
- **Strata** — 6 layers, growth ratio 1.38, gutter 5, seam width 11, drift 4 per layer.
  Set drift to 0 and the mark dies — that offset is load-bearing, not decorative.

All three use `fill="currentColor"` and are authored in a 100-unit box.

---

# Round 03 — count-agnostic marks

**Correction:** the format count is variable (HP-3 → HP-10), so any mark whose meaning
depends on "nine" breaks the first time a different format ships. `hv-b-nine.svg` is
**retired as a logo** and kept only as a pattern system, where a shifting count is a feature.

Tesseract and Strata were never counting anything and carry forward unchanged.

| File | Direction | Variable | Status |
| --- | --- | --- | --- |
| `hv-d-cut.svg` | The Cut | Partition | New. **Recommended.** |
| `hv-e-threshold.svg` | Threshold | Depth | New |
| `hv-f-hgate.svg` | H-Gate | Letterform | New |
| `hv-a-tesseract.svg` | Tesseract | Dimension | Carried forward |
| `hv-c-strata.svg` | Strata | Accumulation | Carried forward |
| `hv-b-nine.svg` | Nine | Order | Retired — pattern use only |

`count-agnostic-marks.html` presents all five parametrically, plus a strip showing
The Cut at 2 → 6 pieces.

## Constants at the defaults exported here

- **The Cut** — kerf 5, first cut at x 40, second at y 56. Identity lives in the kerf,
  not the piece count: the mark holds from 2 pieces to 6. The cuts are deliberately
  *unequal* — an even grid requires no judgement, and judgement is the product.
- **Threshold** — opening 40, inset 14 from top and right, two solid planes (floor +
  left wall). Filled planes rather than outline, so it reads as mass, not diagram.
- **H-Gate** — pier 22, lintel height 24, taper 14. The far pier narrows to 0.83× and
  the lintel converges. Set taper to 0 and it collapses to a plain H — that is the test
  that the perspective is load-bearing.

## Shortlist

The Cut against H-Gate. Trademark-search both, print at 12mm black on white, and lock
the winner's single number (kerf width or lintel taper) as the system constant.

---

# Round 04 — the H as master mark

"Hyper" is the constant across HyperPod, HyperLibrary and HyperBrand, so the letter is
the mark. A symbol has to be taught once per brand; a letter is read on sight, and this
one is already in every product name. It also can't be broken by a format count, a new
product line, or a change in what gets made — it's tied to the name.

| File | Direction | Variable | Role |
| --- | --- | --- | --- |
| `hv-h1-cut.svg` | Cut H | The kerf | **The mark.** Crossbar cut free of the piers. |
| `hv-h2-monolith.svg` | Monolith H | The taper | Reserve / small-size variant |
| `hv-h3-gate.svg` | Gate H | Perspective | Alternative if motion is wanted |
| `hv-h4-rule.svg` | Rule H | The overshoot | Layout rule, not the logo |

`h-monogram.html` presents all four parametrically, plus the sub-brand family
(HYPER/POD, HYPER/LIBRARY, HYPER/BRAND) and icon tiles at 96/56/32/18px.

## Constants at the defaults exported here

- **Cut H** — pier 26, crossbar 22, kerf 4, crossbar centre at y 52. The crossbar
  touches nothing; closure happens in the eye. Same kerf device as `hv-d-cut.svg`, so
  the logo's construction and the product's construction are one idea. Past kerf ~6 the
  letter stops resolving.
- **Monolith H** — pier 36 at top tapering to 30 at the base, crossbar 20 set low at
  y 56. Counters widen downward, which places the viewer below the mark. Strongest of
  the four at very small sizes because it is almost entirely mass.
- **Gate H** — near pier 22, far pier 0.83×, lintel 24, taper 14. Below taper 12 it
  reads as a printing error rather than a decision.
- **Rule H** — pier 24, rule height 16, overshoot 20 per side. Never square; falls back
  to Cut H in square tiles.

## Recommendation

**Cut H as the mark, Rule H's overshoot as the layout device** — the same crossbar,
extended, doing dividers, underlines and lower-thirds. One mark, one rule.

## Next

1. Trademark search first — single letters are heavily registered, and this is the step
   most likely to force a change.
2. Lock the kerf as a ratio of pier width, not an absolute. That ratio is the system.
3. Draw a small-size variant with the kerf widened, the way a typeface ships an optical
   size; switch to it below roughly 24px.
4. Derive clear space from pier width and wordmark cap height from crossbar height, so
   every lockup comes from the mark rather than being eyeballed.

---

# Round 05 — edge grammar

**Correction:** every earlier mark met at 90°. That reads as drafted, not cut. A monogram
is a letter shape *plus a terminal grammar* — one consistent rule for how every stroke
ends. Without it you get correct proportions and dead edges.

| File | Grammar | Rule | Ages |
| --- | --- | --- | --- |
| `hv-n1-nib.svg` | Nib | Every terminal cut at one constant angle | Already has, for centuries. **Recommended.** |
| `hv-n2-chamfer.svg` | Chamfer | Selected corners removed at 45° | Peaks with the trend |
| `hv-n3-radius.svg` | Radius | Outer corners soft, inner corners sharp | Safe, forgettable |

`h-edge-grammar.html` presents all three parametrically with corner-detail zooms
(top-left terminal, top-right terminal, crossbar join) so the edge itself is inspectable.

## Constants at the defaults exported here

- **Nib** — angle 28°, pier 24, contrast relief 0.22, kerf 4. Crossbar height is
  *derived*, not chosen: a blade held at 28° removes less material travelling sideways,
  so the horizontal comes out at 15.2 against the pier's 24. Change the angle and the
  contrast changes with it. The contrast slider blends back toward even weight purely
  for small-size legibility — keep it low.
- **Chamfer** — 9 units, diagonal mode (top-left and bottom-right only). Chamfering
  everything reads as a bevel filter; the selective modes are the design. Diagonal puts
  rotation into a mark that never leans; Counters keeps the outside square and sharpens
  only where the eye lingers.
- **Radius** — outer 14, inner 3, roughly 4.7:1. The two radii must never match; equal
  radii collapse it into an app icon.

## Recommendation

**Nib.** It is the only grammar whose logic predates the trend cycle — a constant cutting
angle produced the Roman capital and every serif descended from it. Cut with flat planes
and no curves it does not read as historical; it reads as made by someone who knew what
they were doing. It also yields a single number the whole identity can inherit.

## Next

1. Trademark search before anything else — single letters are the most heavily
   registered class there is.
2. Lock the nib angle, then draw HYPER in the same grammar: every terminal in the
   wordmark cut at that identical angle.
3. Ship a small-size optical variant — angle held, contrast raised so the crossbar
   survives 16px — and switch below ~24px.
4. Optical correction at final scale: slanted terminals read heavier than flat ones, so
   the piers want to be a hair narrower than the maths says.

---

# Round 06 — the 45° grammar (final direction)

Built to the reference sheet the client selected: heavy bars, hexagonal counters, and
**interlocking joints** — where two strokes meet, one carries a 45° point and the other a
matching notch, separated by a constant diagonal gap. Nothing meets at 90° except the
outer silhouette.

This is the same kerf idea from rounds 03–05, cut on the diagonal instead of the square.

| File | Mark | Role |
| --- | --- | --- |
| `hv-v1-hex.svg` | Hex H | **The mark.** Pointed crossbar, notched piers, constant diagonal gap. |
| `hv-v2-facet.svg` | Facet H | Small-size cut. Same silhouette, joints closed. |
| `hv-v3-blade.svg` | Blade H | Motion only. Rotational chamfers. |

`h-volt.html` presents all three parametrically on volt, with joint zooms, the sub-brand
family on both grounds, and tiles at 96/56/32/18px.

## Constants at the defaults exported here

- **Hex H** — pier 27, crossbar 22, diagonal gap 5, terminal chamfer 10, both terminals
  chamfered. Point depth and notch depth are both `crossbar / 2`, so the 45° angle is
  exact and the counters come out hexagonal as a consequence rather than a styling pass.
  Change the crossbar and point, notch and counter all move together.
- **Facet H** — pier 27, crossbar 22, chamfer 11, all eight outer corners. No gaps, so
  nothing to lose at small size, in embroidery, or in single-colour print.
- **Blade H** — pier 27, crossbar 22, chamfer 14 on rotationally paired corners
  (0/4/6/10). Reads as rotation rather than stillness — kept for motion, not for the
  static mark.

## Colourway

Black `#0C0E10` on volt `#CCFF00` as the signature; volt on black as the workhorse
inverse. Marks use `fill="currentColor"`.

## Recommendation

**Hex H as the mark, Facet H as its small-size sibling** — shipped the way a typeface
ships an optical size. Below ~24px, and on anything woven, etched or single-colour
printed, swap the file; the diagonal gap is a liability there and nobody will notice.

## Next

1. Trademark search on Hex H, classes covering media production and software. Still
   outstanding, still the step most likely to force a change.
2. Lock the gap as a ratio of crossbar height, not an absolute.
3. Draw HYPER in the same grammar — every terminal at 45°, the same gap at every joint.
4. Optical pass at final size: 45° cuts read lighter than square ones, so the piers will
   want to be a touch wider than the maths says.

---

# Round 07 — the H, carrying a knowledge idea

**Two corrections.**

1. Round 06 was faithful to the selected reference sheet, and faithful was the mistake.
   That chunky 45° facet language is gaming/esports — it reads fast and loud, which is the
   opposite of the positioning. Kept: the precision of the 45° cut. Dropped: the squat,
   square proportions.
2. Every earlier H was two posts and a bar with a different edge treatment. None of them
   said anything. These three each carry a knowledge idea in the letter's own anatomy.

**Proportion change:** all marks are now drawn at **76 wide × 100 tall**, a real capital's
proportion. Everything before was square, which is why it read as an icon rather than a
letter. That single change does most of the work.

| File | Mark | Idea | Role |
| --- | --- | --- | --- |
| `hv-k1-codex.svg` | Codex H | Archive — column, pages, lines of text | **The mark.** |
| `hv-k1-codex-solid.svg` | Codex H solid | — | Small-size cut, flutes closed |
| `hv-k2-span.svg` | Span H | Two unlike things, connected | Most rigorous idea |
| `hv-k3-ruled.svg` | Ruled H | The line you read along | Layout device |

`h-knowledge.html` presents all three parametrically, with a quiet colourway toggle,
the sub-brand family, and tiles at 96/56/32/18px.

## Symbol vs wordmark

Not a choice — a master-brand structure needs both:

- **H (symbol)** — avatars, app icons, favicons, merchandise, the stamp on every visual.
  This is what rolls every Hyper brand into one asset.
- **HyperVisuals (wordmark)** — anywhere you're being introduced: site header, deck cover,
  invoice, contract.
- **H + Hyper/Pod (lockup)** — what a sub-brand actually uses day to day.

Rule: the symbol never appears alone until the wordmark has earned it. Lock them together
almost everywhere for the first year or two.

## Constants at the defaults exported here

- **Codex H** — 76×100, pier 23, crossbar 17, 3 flutes per pier, channel 2.4, chamfer 8.
  Channels must stay fine: at 2–3 units they read as incision, wider and the pier becomes a
  fence. The flute rhythm extends into the pattern system — dividers, cover edges, grid
  gutters. Flutes close below ~32px; use the solid sibling there.
- **Span H** — pier 25 against 15 (1.67:1), crossbar 17 set slightly high at y 46,
  overshooting the light pier by 11. Unequal piers read as two *different* things held;
  equal piers read as decoration.
- **Ruled H** — pier 23, two rules of 8 with a 7 slot. The slot must stay narrower than the
  rules are thick or it reads as an equals sign.

## Recommendation

**Codex H.** Fluting is genuinely absent from contemporary identity — the field has spent a
decade choosing between solid slabs and monoline strokes. It's the visual language of
libraries and books, which is the territory being claimed, and it reads as knowledge before
anyone thinks about why. Span is the more rigorous idea but needs a sentence of explanation;
for a symbol carrying four brands, the one that needs none wins.

Take Ruled's doubled bar as the layout device regardless of which mark wins.

## Next

1. Draw HYPERVISUALS as the wordmark in this grammar — 45° terminals, same proportion —
   and lock the two together with fixed spacing.
2. Cut the solid small-size sibling into the build pipeline; switch below 32px.
3. Extend the flute rhythm into the pattern system.
4. Test the H alone against three competitors' avatars at 40px, side by side.
