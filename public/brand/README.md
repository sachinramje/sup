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
