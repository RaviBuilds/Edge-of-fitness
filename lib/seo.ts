import type { SEOConfiguration } from "./types";

/**
 * Master SEO configuration. Consumed once, centrally, by app/layout.tsx's
 * Metadata API. Never duplicate these values inside page/section
 * components.
 *
 * EDGE OF FITNESS SEO configuration, from docs/Gym-research.md
 * (SEO.title_candidate / description_candidate — INFERRED from verified
 * business data). The title is the research candidate. The description is the
 * research candidate with its "confirm directly with the gym" instruction
 * removed (that belongs on the page, not in a snippet) and no superlatives,
 * ranking or outcome claims.
 *
 * canonical is a placeholder domain pending the client's real production
 * URL: the research found NO official website for the business, and no
 * unrelated "Edge of Fitness" domain (the Singapore gym or D Edge Fitness)
 * may be used here.
 */
export const seo: SEOConfiguration = {
  title: "Edge Of Fitness | Gym & Personal Training in Banjara Hills, Hyderabad",
  description:
    "Edge Of Fitness in Banjara Hills, Hyderabad, on Road No. 14. Strength and cardio equipment, personal training, and group options including yoga, Zumba and kickboxing.",
  canonical: "https://example.com",
  ogImage: undefined,
  robots: "index, follow",
};
