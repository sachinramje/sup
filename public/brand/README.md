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
