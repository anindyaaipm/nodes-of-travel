/**
 * Handbook / PDF planner catalog for /guides.
 * Free vs paid is product-level (CTA on each card), not separate nav.
 */

export type GuideAccess = "free" | "paid";

export type GuideProduct = {
  slug: string;
  title: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  access: GuideAccess;
  /** Live handbook route, or null if placeholder */
  href: string | null;
  status: "live" | "coming_soon";
  /** Free PDF path when access is free and file exists */
  pdfHref?: string;
  pdfFileName?: string;
  /** Lemon Squeezy checkout when paid product is live */
  buyUrl?: string;
  destinationSlug?: string;
  storySlug?: string;
};

export const guideProducts: GuideProduct[] = [
  {
    slug: "andaman",
    title: "Andaman",
    subtitle: "Port Blair · Havelock · Neil — practical handbook from our self-planned week",
    image: "/images/andaman-guide/cover.jpeg",
    imageAlt: "Andaman Islands harbor",
    access: "free",
    href: "/guides/andaman",
    status: "live",
    pdfHref: "/downloads/andaman-practical-guide.pdf",
    pdfFileName: "Nodes_of_Travel_Andaman_Practical_Guide.pdf",
    destinationSlug: "andaman",
    storySlug: "week-in-andaman",
  },
  {
    slug: "rajasthan",
    title: "Rajasthan",
    subtitle: "Jaipur · Jodhpur · Jaisalmer · Udaipur — detailed PDF planner",
    image: "/images/blogs/rajasthan/india-rajasthan.jpeg",
    imageAlt: "Rajasthan, India",
    access: "paid",
    href: null,
    status: "coming_soon",
    destinationSlug: "rajasthan",
    storySlug: "9-days-rajasthan-cinematic-journey",
  },
];

export function getLiveGuides() {
  return guideProducts.filter((g) => g.status === "live" && g.href);
}

export function getGuideBySlug(slug: string) {
  return guideProducts.find((g) => g.slug === slug);
}
