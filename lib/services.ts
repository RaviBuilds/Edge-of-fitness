import type { Service } from "./types";

/**
 * Master services data. Only services with verified:true render on the live
 * site. A service can exist here and remain disabled — this is the direct
 * mechanism that prevents an unverified/discontinued program from silently
 * appearing on a gym website.
 *
 * EDGE OF FITNESS — programs from docs/Gym-research.md (PROGRAMS.*). Every
 * entry is PUBLICLY_REPORTED (Justdial / LyfSkills / Magicpin); owner
 * verification of current availability and class schedules is required before
 * final-client production. Descriptions are the research descriptions,
 * shortened; no schedule, trainer, outcome or health claim is added.
 *
 * STABLE IDs: `strength-training`, `conditioning` and `personal-training`
 * are cross-referenced by id from the frozen educational module
 * lib/training-intelligence.ts (`programId`, see
 * components/sections/trainingLoadout.ts). These three ids must not be
 * renamed. Here `conditioning` is carried by "Cardio Training" (the
 * research's `cardio-training`, conditioning-category program); its text
 * must keep the word "cardio" (components/sections/startCheckLogic.ts reads
 * it to decide whether cardio copy is documented).
 *
 * NOT RENDERED (`verified: false`): `weight-loss`. The research only shows a
 * Justdial "Weight Loss Centres" category — no specific weight-loss program,
 * method or result is verified, and the research forbids outcome claims. It
 * stays in the file as the record of what was checked. Flip to true only
 * after the owner confirms an actual service, and add an image then.
 *
 * Images are placeholders occupying their final filenames
 * (docs/MASTER-GYM-ASSET-CONTRACT.md); the operator replaces the files
 * in place with real Edge Of Fitness photography — no code change.
 */
const ASSET = "/assets/programs/edge-of-fitness-banjara-hills-program";

export const services: Service[] = [
  {
    id: "strength-training",
    name: "Strength Training",
    description: "Resistance training on machines and free weights.",
    icon: "strength",
    image: `${ASSET}-strength-training.jpg`,
    verified: true,
    ctaLabel: "Ask about strength training",
    ctaHref: undefined,
  },
  {
    id: "personal-training",
    name: "Personal Training",
    description: "One-on-one coaching with customized workout supervision.",
    icon: "coaching",
    image: `${ASSET}-personal-training.jpg`,
    verified: true,
    ctaLabel: "Ask about personal training",
    ctaHref: undefined,
  },
  {
    id: "conditioning",
    name: "Cardio Training",
    description: "Cardiovascular training on the gym's cardio equipment.",
    icon: "cardio",
    image: `${ASSET}-cardio-training.jpg`,
    verified: true,
    ctaLabel: "Ask about cardio training",
    ctaHref: undefined,
  },
  {
    id: "kickboxing-combat",
    name: "Kickboxing",
    description: "Kickboxing and combat-fitness classes.",
    icon: "equipment",
    image: `${ASSET}-kickboxing-combat.jpg`,
    verified: true,
    ctaLabel: "Ask about kickboxing",
    ctaHref: undefined,
  },
  {
    id: "yoga",
    name: "Yoga",
    description: "Yoga classes. Confirm the current schedule with the gym.",
    icon: "floor",
    image: `${ASSET}-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about yoga",
    ctaHref: undefined,
  },
  {
    id: "vinyasa-yoga",
    name: "Vinyasa Yoga",
    description: "Vinyasa Yoga is listed among the gym's yoga options.",
    icon: "floor",
    image: `${ASSET}-vinyasa-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about Vinyasa yoga",
    ctaHref: undefined,
  },
  {
    id: "aerial-yoga",
    name: "Aerial Yoga",
    description: "Aerial Yoga is listed among the gym's yoga options. Confirm current availability.",
    icon: "floor",
    image: `${ASSET}-aerial-yoga.jpg`,
    verified: true,
    ctaLabel: "Ask about aerial yoga",
    ctaHref: undefined,
  },
  {
    id: "zumba",
    name: "Zumba",
    description: "Zumba dance-fitness group classes.",
    icon: "cardio",
    image: `${ASSET}-zumba.jpg`,
    verified: true,
    ctaLabel: "Ask about Zumba",
    ctaHref: undefined,
  },
  {
    id: "group-fitness",
    name: "Group Fitness Classes",
    description: "Group classes alongside floor training. Confirm the current class mix and schedule.",
    icon: "floor",
    image: `${ASSET}-group-fitness.jpg`,
    verified: true,
    ctaLabel: "Ask about group classes",
    ctaHref: undefined,
  },
  {
    id: "general-gym",
    name: "Gym / General Fitness",
    description: "General gym access with resistance machines, free weights and cardio equipment.",
    icon: "equipment",
    image: `${ASSET}-general-gym.jpg`,
    verified: true,
    ctaLabel: "Ask about gym access",
    ctaHref: undefined,
  },
  {
    id: "steam-sauna",
    name: "Steam and Sauna",
    description: "Steam and sauna amenities are listed. Confirm access rules with the gym.",
    icon: "floor",
    image: `${ASSET}-steam-sauna.jpg`,
    verified: true,
    ctaLabel: "Ask about steam and sauna",
    ctaHref: undefined,
  },
  // Checked, NOT verified — see header note. Never rendered.
  {
    id: "weight-loss",
    name: "Weight Loss",
    description: "Listed under a weight-loss centre category; no specific program is verified.",
    icon: "cardio",
    image: undefined,
    verified: false,
    ctaLabel: undefined,
    ctaHref: undefined,
  },
];
