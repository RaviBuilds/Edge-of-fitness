import type { FaqItem } from "./types";

/**
 * Master FAQ data. Generated only from real, known business information.
 * If the answer to a potential question isn't actually known, don't create
 * that FAQ entry.
 *
 * EDGE OF FITNESS — from docs/Gym-research.md (FAQ.*). The location answer is
 * VERIFIED_OFFICIAL; hours (Sunday conflict), programs, parking,
 * accessibility, steam and sauna, and pricing are PUBLICLY_REPORTED or
 * CONFLICTING_SOURCES, so the answers are worded as "listed" and point the
 * visitor to the gym for confirmation. Owner verification is required before
 * final-client production.
 *
 * Not created: the research's "official website" entry (an internal audit
 * finding, not a visitor question). No cancellation / freeze / trial /
 * joining-fee / guest / refund FAQ is added because the research supports
 * none of them (joining fee NOT_FOUND).
 */
export const faq: FaqItem[] = [
  {
    id: "01",
    question: "Where is Edge Of Fitness located?",
    answer:
      "On the first floor at A, 8-2-316, Road No. 14, above SBI Bank, GS Nagar / Nandi Nagar, Banjara Hills, Hyderabad, Telangana 500034.",
  },
  {
    id: "02",
    question: "What are the opening hours?",
    answer:
      "Monday to Saturday, 5:30 AM to 9:30 PM. Sunday is listed as 8:00 AM to 1:00 PM in public directories, but Sunday hours are not confirmed — check with the gym before you visit.",
  },
  {
    id: "03",
    question: "What programs are listed?",
    answer:
      "General gym access, personal training, strength and cardio training, kickboxing / combat fitness, Yoga, Vinyasa Yoga, Aerial Yoga, Zumba and group fitness. Confirm the current class schedule and availability with the gym.",
  },
  {
    id: "04",
    question: "Is parking available?",
    answer: "Parking is listed as available. The type and capacity are not specified.",
  },
  {
    id: "05",
    question: "Is the gym wheelchair accessible?",
    answer:
      "A wheelchair-accessible entrance and exit are listed. Because the gym is on the first floor, confirm ramp or lift access with the gym.",
  },
  {
    id: "06",
    question: "Does the gym have steam and sauna?",
    answer:
      "Steam and sauna are listed as amenities. Current availability, access rules and any additional fee are not stated — confirm with the gym.",
  },
  {
    id: "07",
    question: "What are the current membership prices?",
    answer:
      "Public directories show different rates for some plans. Confirm the current rate card, taxes, joining fee and plan inclusions with the team on WhatsApp or by phone.",
  },
];
