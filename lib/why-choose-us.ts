import type { WhyChooseUsConfiguration, WhyChooseUsItem } from "./types";

/**
 * Why Choose Us reasons. Mandatory section — always present.
 *
 * CONTENT RULE: this file states REASONS — how the services connect and where
 * the gym is. It avoids facility metrics, opening hours and long program
 * lists. Those facts have an owner already:
 *   - Section 01 (lib/about.ts) owns zones, amenities and hours;
 *   - Section 02 (lib/services.ts) owns individual programs and classes.
 * Repeating them here would make three sections say the same thing.
 *
 * EDGE OF FITNESS — from docs/Gym-research.md (WHY_CHOOSE_US.*). Each reason
 * is PUBLICLY_REPORTED except the Road No. 14 location, which is
 * VERIFIED_OFFICIAL. Owner verification of current availability (classes,
 * steam and sauna) is required before final-client production. No superlative,
 * outcome or guarantee is claimed.
 *
 * Left out on purpose: "Early opening on most days" (hours live in Sections
 * 01 and 11, and Sunday hours are a documented source conflict).
 */
export const whyChooseUs: WhyChooseUsItem[] = [
  {
    title: "More than one way to train",
    description:
      "General gym access, personal training and group classes are all listed under one roof.",
  },
  {
    title: "One-on-one personal training",
    description:
      "Personal training packages are listed for members who want a coach alongside the floor.",
  },
  {
    title: "Steam and sauna",
    description:
      "Steam and sauna amenities are listed. Confirm access rules with the gym.",
  },
  {
    title: "Road No. 14, above SBI Bank",
    description:
      "First floor, in the GS Nagar and Nandi Nagar area of Banjara Hills.",
  },
];

/**
 * Section 03 composition data — "The Roof".
 *
 * A single accent-colour poster: the eyebrow, one headline, and the reasons
 * above as equal columns. The headline is built only from the listed reasons;
 * it is never a superlative. A clone edits this object and the array, never
 * the composition.
 */
export const whyChooseUsConfiguration: WhyChooseUsConfiguration = {
  eyebrow: "Why choose us",
  headline: "Floor training, coaching and classes. Under one roof.",
};
