# Redesign asset notes

Generated with the built-in imagegen tool, then resized and encoded to WebP with Sharp. Original assets were preserved. All runtime images are local; no external image service is needed.

## Hero

- Runtime file: `public/hero-training-v2.webp`
- Also used in the Class A program card.
- Generated illustration, not a photograph of the business's actual fleet. The hero includes a visible illustrative-image caption.
- Final prompt:

> Use case: photorealistic-natural. Asset type: premium CDL driving school website hero, wide panoramic 2:1 landscape photograph. Scene: quiet paved commercial driver training yard in the Hudson Valley, New York, soft tree-covered hills behind, pale hazy warm ivory morning sky. Subject: one modern American white aerodynamic semi tractor with long white box trailer, elegant single deep burgundy accent stripe on cab, no text or logos. Full truck three-quarter front view, cab pointing toward viewer-left, parked safely. Composition: entire truck contained in RIGHT 60 percent of image, wheels and trailer visible, no cropping of truck nose. LEFT 40 percent intentionally spacious, light softly blurred pale cream sky and distant landscape and empty pavement, suitable for overlay of dark website headline. Very subtle orange training cones near right edge. Lighting: luminous soft early morning sunlight, authentic editorial commercial photography, restrained natural colors, calm confident premium mood, realistic metal rubber and pavement textures. Shot on full frame 50mm lens, no extreme wide angle, horizon around upper third. Constraints: no people, no words, no brand logos, no watermarks, no UI, no graphic overlays, no sunset, no overly dramatic sky. Make the truck photorealistic and geometrically accurate.

## Class B program

- Runtime file: `public/class-b-training-v2.webp`
- Replaces the previous card's tractor-trailer image with an appropriate rigid straight truck illustration.
- Final prompt:

> Use case: photorealistic-natural. Asset type: commercial driving school website program card photo, landscape 3:2. Primary request: authentic editorial commercial photography of a clean white Class B straight box truck parked in an open paved driver training yard, soft wooded Hudson Valley hills in the background. Subject must be a medium-heavy duty SINGLE RIGID VEHICLE with box body fixed directly to chassis behind cab, two axles, NOT a semi-trailer or tractor trailer. White cab and white cargo box, tiny tasteful burgundy stripe on cab. Three-quarter front driver side view. Entire truck comfortably framed centered, a pair of small orange cones in yard away from vehicle. Soft natural warm morning lighting, muted ivory and green surroundings, realistic truck proportions, crisp details, subtle texture. No people, no logos, no words, no watermark. Premium but realistic photography, eye level 50mm lens.

## Other assets

- `public/behind-wheel-v2.webp`: optimized copy of the existing `behind-wheel.jpg`, unchanged composition.
- Existing school logo and bus image retained.
- `public/social-preview.png` (source: `docs/design/social-image.tsx`): static social-sharing artwork rendered from code, using the brand palette, headline, and updated phone number.
