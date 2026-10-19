import type { GalleryItem } from "./types";

/**
 * Master gallery data. This array is authoritative for display order —
 * filename order is not a data dependency. Every item requires alt text
 * describing the actual image.
 *
 * EDGE OF FITNESS — REAL photographs supplied by the operator in
 * public/assets/gallery/ (edge-of-fitness-banjara-hills-gallery-<subject>.jpg).
 * Alt text describes only what is visible in each frame: equipment and
 * floor areas, no brand claims, counts or superlatives.
 *
 * RIGHTS / CLEANUP (owner check before final-client production): the photos
 * appear to come from the gym's third-party directory listing (some carry a
 * small directory watermark; `dumbbells-power-racks` carries a camera-app
 * stamp and shows people in a mirror). docs/Gym-research.md ASSET_MANIFEST
 * notes third-party photos are not licensed for reuse and need owner approval
 * and consent for identifiable people. `cross-trainers` and
 * `cross-trainers-alt` are near-duplicates of the same frame.
 *
 * ORDER is editorial: wide floor views first, then free weights, machines,
 * cardio, then combat and class space.
 */
const GALLERY = "/assets/gallery/edge-of-fitness-banjara-hills-gallery";

export const galleryItems: GalleryItem[] = [
  {
    src: `${GALLERY}-training-floor-turf.jpg`,
    alt: "Edge Of Fitness training floor with a green turf lane, punching bag, treadmills and plate-loaded machines",
  },
  {
    src: `${GALLERY}-power-rack-area.jpg`,
    alt: "Power rack, benches and dumbbell rack on the Edge Of Fitness training floor with treadmills beyond",
  },
  {
    src: `${GALLERY}-dumbbell-rack.jpg`,
    alt: "Three-tier rack of rubber-coated dumbbells with small coloured dumbbells below, at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-kettlebells.jpg`,
    alt: "Row of black kettlebells on the Edge Of Fitness rubber floor",
  },
  {
    src: `${GALLERY}-leg-press.jpg`,
    alt: "Plate-loaded leg press with weight plates, medicine balls and a battle rope at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-leg-extension.jpg`,
    alt: "Plate-loaded leg extension machine on a red floor at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-plate-loaded-machines.jpg`,
    alt: "Plate-loaded strength machines in the Edge Of Fitness training room",
  },
  {
    src: `${GALLERY}-lat-pulldown.jpg`,
    alt: "Lat pulldown station with weight-stack machines and stacked mats at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-functional-trainer.jpg`,
    alt: "Dual-column functional trainer with cable handles and lifting belts at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-machine-area.jpg`,
    alt: "Weight-stack strength machines and a bench on the Edge Of Fitness training floor",
  },
  {
    src: `${GALLERY}-strength-machine.jpg`,
    alt: "Weight-stack strength machine with a seat and handles at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-cardio-area.jpg`,
    alt: "Treadmills and cross-trainers along the glass wall at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-treadmills.jpg`,
    alt: "Row of treadmills beside a cross-trainer at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-cross-trainers.jpg`,
    alt: "Two cross-trainer machines in front of the glass wall at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-cross-trainers-alt.jpg`,
    alt: "Two cross-trainer machines on the Edge Of Fitness cardio floor",
  },
  {
    src: `${GALLERY}-punching-bag.jpg`,
    alt: "Hanging punching bag with treadmills and turf behind it at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-group-studio.jpg`,
    alt: "Mirrored group class room with a colourful floor at Edge Of Fitness",
  },
  {
    src: `${GALLERY}-dumbbells-power-racks.jpg`,
    alt: "Dumbbell rack and power racks on the Edge Of Fitness training floor",
  },
];
