import type { GoogleReviews } from "./types";

/**
 * Master Google Reviews data. Manually curated, never scraped at runtime.
 * Do not invent review content, reviewer names, ratings, or counts.
 *
 * EDGE OF FITNESS — rating / reviewCount are VERIFIED_OFFICIAL (Google
 * Business Profile screenshot and OnePass live sync in docs/Gym-research.md
 * REVIEWS: 3.7 / 193 reviews, read 2026-10-18). Other platforms show
 * different figures (Justdial 4.0/222 or 3.8/221, LyfSkills 3.7/191,
 * Magicpin 3.7/69); none of those is the Google figure and none is used here.
 *
 * The two reviews below are REVIEWS.selected_reviews, PUBLICLY_REPORTED, and
 * both come from the gym's JUSTDIAL listing — not from Google. They are
 * reproduced exactly as supplied (the trailing "..." is part of the
 * research's excerpt). The review card UI carries Google styling, so:
 *   - OWNER / PLATFORM ATTRIBUTION CHECK REQUIRED before final-client
 *     production (source platform and republication permission);
 *   - one excerpt names a person as "owner" (Mr. Aslam Gir) — the research
 *     flags that relationship as unconfirmed, so confirm with the owner;
 *   - no star rating is set on either review (the research gives a Justdial
 *     5.0 for each, which is not a Google rating).
 *
 * The research's sentiment summary also records negative themes (air
 * conditioning / thermal comfort, some impolite staff conduct). The 3.7
 * aggregate is shown unaltered, and `tagline` below deliberately avoids
 * selective praise: it only states what the excerpts are.
 *
 * REVIEWS.google_profile_url is NOT_FOUND — no direct Google Business
 * Profile URL exists. Never invent one and never substitute a Justdial URL
 * for the Google review CTA. googleBusinessProfileUrl uses a Google Maps
 * search-by-name-and-address query (the same safe fallback pattern as
 * lib/business.ts mapUrl), with the verified address. No Place ID or profile
 * slug is invented.
 */
export const googleReviews: GoogleReviews = {
  rating: 3.7,
  reviewCount: 193,
  tagline: "Selected excerpts from public member reviews.",
  googleBusinessProfileUrl:
    "https://www.google.com/maps/search/?api=1&query=Edge+Of+Fitness+A+1st+Floor+8-2-316+Road+No+14+above+SBI+Bank+Banjara+Hills+Hyderabad+500034",
  // Fill these two once the owner supplies the Google "write a review" link
  // (Google Business Profile -> Get more reviews -> share link). The footer
  // trust card then adds a "Write a review" link and, if reviewQrSrc points at
  // a QR image of that link, the scan-to-review QR. Left unset = not rendered.
  reviewUrl: undefined,
  reviewQrSrc: undefined,
  reviews: [
    {
      name: "Koushik Raju",
      text: "Great gym with a supportive community! The equipment is top-notch and the space is always kept clean. A special shout-out to my trainer, Mr. Ramakrishna Sir. He is incredibly knowledgeable and takes the time to correct my form and explain the 'why' behind every exercise. Since training with him, I have seen significant improvements in my strength and technique. He strikes the perfect balance between being encouraging and pushing me to hit my goals.",
    },
    {
      name: "ANNU",
      text: "The gym is equipped with latest and all kind of fitness equipment. It is clean, equipment are in great shape and the staff is amazing. The trainers...",
    },
    {
      name: "Nisha Singh",
      text: "Had a very nice experience with Edge of Fitness. Trainers are very nice, helpful and experienced. Place is well maintained. Safe for ladies too.",
    },
    {
      name: "Anupa Yadav",
      text: "Edge of Fitness is an excellent gym with a clean, positive, and motivating atmosphere. Instructor Rama Krishna is highly professional, supportive, and knowledgeable. His training is well structured and focused on individual goals. Overall, a great gym and a great trainer. Highly recommended! 💪👍✋",
    },
  ],
};
