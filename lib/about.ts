import type { AboutConfiguration, BusinessHours } from "./types";

/**
 * Section 01 — facility / training-floor story content.
 *
 * Customizable per gym (labels, image, attributes, headline). The narrative
 * paragraph is deliberately NOT duplicated here: Section 01 renders
 * `business.description`, so the facility description has exactly one source
 * of truth.
 *
 * Source-First rules that apply to this file:
 * - A zone or attribute with `verified: false` does not render. Leave it in
 *   the file as documentation of what was checked and found absent.
 * - Never add a claim, statistic, equipment count, award or superlative here
 *   to make the section look fuller. The composition carries the density.
 *
 * EDGE OF FITNESS — populated from docs/Gym-research.md (ABOUT.zones,
 * ABOUT.attributes). Everything below is PUBLICLY_REPORTED (Justdial /
 * LyfSkills / Magicpin) except the first-floor / above-SBI-Bank location,
 * which is VERIFIED_OFFICIAL (Google Business Profile address). Owner
 * verification is required before final-client production.
 *
 * The research supplies NO equipment counts, so no `metric` is set on any
 * zone or attribute — none is invented.
 *
 * Not rendered (checked, not verifiable): showers, lockers, drinking water
 * and air-conditioning status are NOT_FOUND in the research (and review
 * sentiment on air conditioning is mixed), so they are kept below with
 * `verified: false`. The wheelchair listing is directory-reported and the
 * first-floor ramp / lift access is not physically verified, so it is worded
 * as "listed". Class schedules, trainer names and credentials are not
 * published (NOT_FOUND) and are intentionally absent.
 */
export const aboutConfiguration: AboutConfiguration = {
  index: "01",
  eyebrow: "About the gym",
  headlineLines: ["The floor behind", "the brand."],
  accentLastLine: true,
  image: {
    src: "/assets/about/edge-of-fitness-banjara-hills-about-gym-interior.jpg",
    alt: "Edge Of Fitness training floor in Banjara Hills, Hyderabad",
  },
  imageLabel: "Training floor",
  frameLabel: "Facility",
  zonesLabel: "Training environment",
  attributesLabel: "Floor & support",
  scheduleLabel: "Opening schedule",
  zones: [
    {
      id: "strength",
      label: "Strength / resistance training",
      detail: "Strength equipment, resistance machines and free weights.",
      icon: "strength",
      verified: true,
    },
    {
      id: "cardio",
      label: "Cardio area",
      detail: "Cardio equipment on the training floor.",
      icon: "cardio",
      verified: true,
    },
    {
      id: "group-fitness",
      label: "Group fitness",
      detail: "Group classes including Yoga, Vinyasa Yoga, Aerial Yoga, Zumba and Kickboxing.",
      icon: "floor",
      verified: true,
    },
    {
      id: "steam-sauna",
      label: "Steam and sauna",
      detail: "Steam and sauna amenities are listed.",
      icon: "floor",
      verified: true,
    },
  ],
  attributes: [
    { id: "first-floor", label: "First floor, above SBI Bank on Road No. 14", verified: true },
    { id: "unisex", label: "Unisex facility", verified: true },
    { id: "personal-training", label: "One-on-one personal training", verified: true },
    { id: "parking", label: "Parking listed", verified: true },
    { id: "accessibility", label: "Wheelchair accessibility listed", verified: true },
    { id: "wifi", label: "Wi-Fi", verified: true },
    { id: "music-video", label: "Music and video ambience", verified: true },
    // NOT_FOUND in the research — kept as the record of what was checked,
    // never rendered.
    { id: "showers", label: "Showers", verified: false },
    { id: "lockers", label: "Lockers", verified: false },
    { id: "air-conditioning", label: "Air-conditioned training environment", verified: false },
  ],
  showSchedule: true,
};

/** One grouped opening window, e.g. `Mon–Fri / 05:00 AM – 11:00 PM`. */
export interface ScheduleWindow {
  label: string;
  value: string;
}

/**
 * Beyond this many distinct windows the readout stops being a compact
 * technical module and starts being a timetable, so Section 01 renders
 * nothing and the full hours stay with the location section instead.
 */
const MAX_SCHEDULE_GROUPS = 3;

function shortDay(day: string): string {
  return day.trim().slice(0, 3);
}

/**
 * Collapse a week of opening hours into consecutive day ranges that share the
 * same open/close window. Derived, never authored: the caller passes
 * `business.hours`, so Section 01 can only ever show hours that already exist
 * in lib/business.ts (and therefore in the LocalBusiness structured data) —
 * it cannot invent a schedule. Hours are taken as an explicit argument rather
 * than imported here so this module stays pure and directly testable.
 */
export function scheduleWindows(hours: BusinessHours[]): ScheduleWindow[] {
  if (hours.length === 0) return [];

  const groups: { days: string[]; open: string; close: string }[] = [];

  for (const entry of hours) {
    if (!entry.day || !entry.open || !entry.close) return [];
    const current = groups[groups.length - 1];
    if (current && current.open === entry.open && current.close === entry.close) {
      current.days.push(entry.day);
    } else {
      groups.push({ days: [entry.day], open: entry.open, close: entry.close });
    }
  }

  if (groups.length > MAX_SCHEDULE_GROUPS) return [];

  return groups.map((group) => ({
    label:
      group.days.length === 1
        ? shortDay(group.days[0])
        : `${shortDay(group.days[0])}\u2013${shortDay(group.days[group.days.length - 1])}`,
    value: `${group.open} \u2013 ${group.close}`,
  }));
}
