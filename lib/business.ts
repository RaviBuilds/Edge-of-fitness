import type { Business } from "./types";

/**
 * Master business data. Public business information only — never put API
 * keys, tokens, or server credentials here.
 *
 * EDGE OF FITNESS (Banjara Hills, Hyderabad) — populated from
 * docs/Gym-research.md. VERIFIED_OFFICIAL: name, phone, address line,
 * locality, city, state, postal code, landmark. PUBLICLY_REPORTED (owner
 * verification required before final-client production): description, hours.
 *
 * TAGLINE: the research found no official tagline (BUSINESS.tagline
 * NOT_FOUND). The type requires a string and the footer, final CTA and
 * kinetic strip render it, so a plain factual descriptor built from the
 * verified category + locality is used instead of an invented slogan.
 *
 * HOURS — DOCUMENTED SOURCE CONFLICT (not silently resolved):
 *   - Monday–Saturday 5:30 AM – 9:30 PM is reported by LyfSkills and Justdial
 *     (the Google Business Profile screenshot also shows a 5:30 AM Monday
 *     opening). No split shifts reported.
 *   - Sunday is CONFLICTING_SOURCES: LyfSkills / Justdial list 8:00 AM –
 *     1:00 PM, while the Google Business Profile screenshot reads
 *     "Closed · Opens 5:30 am Mon". The directory window is applied below as a
 *     PROVISIONAL entry (it is the only Sunday window in the research).
 *     OWNER MUST CONFIRM Sunday hours and holiday hours before launch.
 *
 * WHATSAPP: the research has no confirmed direct WhatsApp number
 * (CONTACT.whatsapp NOT_FOUND / INFERRED — Justdial exposes a WhatsApp
 * enquiry bridge only). `whatsapp.number` is required by the data contract,
 * so it falls back to the verified Google Business Profile phone number.
 * OWNER MUST CONFIRM that WhatsApp is active on this number.
 *
 * EMAIL / WEBSITE: not found. `email` is omitted. No domain is linked.
 *
 * mapUrl: no verified Google Maps / Place URL was found in research. This is
 * a standard Google Maps search-by-name-and-address URL built from the
 * VERIFIED_OFFICIAL address text. No latitude, longitude or Place ID has been
 * invented. The Road No. 12 / MLA Colony trademark-correspondence address is
 * NOT a second branch and is deliberately never used.
 */
export const business: Business = {
  name: "Edge Of Fitness",
  tagline: "Gym and personal training in Banjara Hills.",
  description:
    "Edge Of Fitness is a unisex gym on the first floor above SBI Bank on Road No. 14, Banjara Hills, Hyderabad, with strength and cardio equipment, personal training and group fitness options including yoga, Zumba and kickboxing.",
  phone: "+919100037010",
  whatsapp: {
    number: "+919100037010",
    message: "Hi, I'd like to know more about membership and training at Edge Of Fitness, Banjara Hills.",
  },
  email: undefined,
  address: {
    // Research LOCATION.locality is "GS Nagar / Nandi Nagar, Banjara Hills".
    // The micro-localities stay in the address line; the public-facing
    // locality (hero chip, kinetic strip, structured data) is "Banjara Hills"
    // so the short locality slots stay short.
    addressLine: "A, 1st Floor, 8-2-316, Road No. 14, above SBI Bank, GS Nagar, Nandi Nagar",
    locality: "Banjara Hills",
    city: "Hyderabad",
    state: "Telangana",
    postalCode: "500034",
    landmark: "Above SBI Bank (State Bank of India), Road No. 14",
  },
  hours: [
    { day: "Monday", open: "05:30 AM", close: "09:30 PM" },
    { day: "Tuesday", open: "05:30 AM", close: "09:30 PM" },
    { day: "Wednesday", open: "05:30 AM", close: "09:30 PM" },
    { day: "Thursday", open: "05:30 AM", close: "09:30 PM" },
    { day: "Friday", open: "05:30 AM", close: "09:30 PM" },
    { day: "Saturday", open: "05:30 AM", close: "09:30 PM" },
    // PROVISIONAL — conflicting sources (see header note).
    { day: "Sunday", open: "08:00 AM", close: "01:00 PM" },
  ],
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Edge+Of+Fitness+A+1st+Floor+8-2-316+Road+No+14+above+SBI+Bank+Banjara+Hills+Hyderabad+500034",
  // Prompt A — PRIMARY brand colour "Power Red" #F20D18 (action / energy /
  // major brand signal). The authentic hex is entered here exactly once and
  // is never altered; app/globals.css derives a slightly deeper UI fill
  // (--brand-primary-ui) for filled buttons, and white text on that fill
  // still clears WCAG AA (~4.7:1).
  accentColor: "#F20D18",
  // Prompt A — SECONDARY brand colour "Athletic Orange" #FF6A00 (structure /
  // support / depth: eyebrows, metadata, technical marks, focus). Bright on
  // the near-black base, so it is safe as small text there; fills carry dark
  // text (--brand-secondary-foreground); light surfaces use the derived ink
  // variant — never this value raw.
  secondaryColor: "#FF6A00",
};
