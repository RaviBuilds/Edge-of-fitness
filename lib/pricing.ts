import type { PricingConfiguration } from "./types";

/**
 * Master pricing/membership data — the single source of truth for Section 06.
 *
 * PURE FRONTEND: there is no CMS, database, API or backend pricing source.
 * Everything the pricing register renders is authored here; the component in
 * components/sections/Membership.tsx consumes this verbatim and never hardcodes
 * a price, name, duration, label or CTA. To re-price the site for a real gym,
 * edit ONLY this file.
 *
 * Do not add discounts, savings, "best value" / "most popular" tags, urgency,
 * scarcity or guarantees — none of those exist in this contract by design.
 *
 * PRICE STATUS
 *   "exact"   -> render the numeric `price`, INR-formatted.
 *   "contact" -> render `contactLabel` ("Consult management") instead of an
 *                amount; `price` may be omitted.
 *   "hidden"  -> the entry does not render publicly at all.
 * Change a single plan's `priceStatus` to move it between these states without
 * touching the component.
 */
/**
 * EDGE OF FITNESS pricing/membership data — Section 06.
 *
 * MIXED PRICING (prospect-demo rules, Cases A/B/D/E/F):
 *
 * docs/Gym-research.md PRICING: third-party Justdial listings are the only
 * source; they are PUBLICLY_REPORTED, not owner-confirmed, and the research
 * says they must not be treated as current final-client rates until the owner
 * confirms them. OWNER VERIFICATION REQUIRED for every researched amount.
 *
 *  - RESEARCHED single-value prices APPLIED (Justdial service catalog,
 *    "onwards" base prices, not contradicted by a second rate card):
 *      6 Months (`half-year`)  = INR 24,000  (general membership)
 *      1 Year   (`annual`)     = INR 40,000  (general membership)
 *      Personal Coaching (`special`) = INR 4,999 / month (1-month package)
 *  - Plans with CONFLICTING researched rates KEEP THE EXISTING TEMPLATE DEMO
 *    PRICE, because the research refuses to pick one (daily 500 vs 100,
 *    monthly 6,000 vs 4,720, quarterly 14,000 vs 11,210) or has nothing
 *    (weekly: NOT_FOUND). Demo amounts: Daily 300, Weekly 1,000, 1 Month
 *    2,500, 3 Months 6,000. None of these four is an Edge Of Fitness price.
 *  - The mix is therefore NOT a coherent rate card (e.g. 3 Months demo 6,000
 *    vs 6 Months researched 24,000). It is a prospect-demo state only.
 *  - The research's personal-training 3/6/12-month packages (11,999 /
 *    21,999 / 41,999) have no row in this template and are not used.
 *
 * No "Consult management" state was introduced; all plans stay
 * `priceStatus: "exact"`. The festival offer engine
 * (lib/festival-offers.ts) references the `half-year` and `annual` plan IDs
 * below — do not rename those IDs. No second pricing or offer calculation
 * exists; the engine derives every discounted amount from these prices.
 */
export const pricing: PricingConfiguration = {
  enabled: true,
  currency: "INR",
  locale: "en-IN",
  eyebrow: "Membership / Pricing",
  index: "06",
  headlineLines: ["Train on", "your terms."],
  accentLastLine: true,
  deck: "Flexible day passes and memberships for every commitment level. Reach out on WhatsApp or by phone and the team will get you started.",
  contactLabel: "Consult management",
  specialLabel: "Special training",
  plans: [
    {
      id: "daily",
      name: "Daily Pass",
      duration: "1 Day",
      term: "One day",
      price: 300,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "weekly",
      name: "Weekly Pass",
      duration: "1 Week",
      term: "One week",
      price: 1000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "monthly",
      name: "1 Month",
      duration: "1 Month",
      term: "Per month",
      price: 2500,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "quarterly",
      name: "3 Months",
      duration: "3 Months",
      term: "Billed once",
      price: 6000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "half-year",
      name: "6 Months",
      duration: "6 Months",
      term: "Billed once",
      price: 24000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
    {
      id: "annual",
      name: "1 Year",
      duration: "12 Months",
      term: "Billed once",
      price: 40000,
      priceStatus: "exact",
      ctaLabel: "Enquire",
    },
  ],
  special: {
    id: "special-training",
    name: "Personal Coaching",
    duration: "1 Month",
    term: "Per month",
    price: 4999,
    priceStatus: "exact",
    description:
      "One-on-one personal training and dedicated trainer guidance, programmed around your goals.",
    ctaLabel: "Enquire",
  },
};
