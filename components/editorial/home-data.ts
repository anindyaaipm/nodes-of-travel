/**
 * Homepage curation only — maps existing blog/video content to local photography.
 * No invented destinations.
 */

export type HomeJourney = {
  slug: string;
  name: string;
  place: string;
  blurb: string;
  image: string;
  imageAlt: string;
};

/** Destinations that already have stories in content/blog + local photos */
export const homeJourneys: HomeJourney[] = [
  {
    slug: "portugal-travel-series",
    name: "Portugal",
    place: "Porto · Lisbon · Sintra",
    blurb: "Five days along the Douro and Atlantic — cities you slowly sink into.",
    image: "/images/journeys/portugal-featured.jpeg",
    imageAlt: "Portugal journey from Nodes of Travel",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    name: "Andalusia",
    place: "Seville · Córdoba · Granada · Ronda",
    blurb: "A week through southern Spain — cathedrals, white villages, and the Alhambra.",
    image: "/images/destinations/spain-andalusia.jpeg",
    imageAlt: "Andalusia, Spain",
  },
  {
    slug: "week-in-andaman",
    name: "Andaman Islands",
    place: "Port Blair · Havelock · Neil",
    blurb: "Island hopping through white sand, blue water, and quiet colonial history.",
    image: "/images/destinations/andaman.jpeg",
    imageAlt: "Andaman Islands",
  },
  {
    slug: "9-days-rajasthan-cinematic-journey",
    name: "Rajasthan",
    place: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
    blurb: "Nine days through forts, desert light, and the land of kings.",
    image: "/images/destinations/india-rajasthan.jpeg",
    imageAlt: "Rajasthan, India",
  },
  {
    slug: "week-in-yucatan-mexico",
    name: "Yucatán",
    place: "Cancún · Isla Mujeres · Valladolid · Chichén Itzá",
    blurb: "Blue beaches, Mayan ruins, and mystic cenotes across one peninsula week.",
    image: "/images/destinations/mexico-yucatan.jpeg",
    imageAlt: "Yucatán, Mexico",
  },
  {
    slug: "southwest-usa-roadtrip",
    name: "Southwest USA",
    place: "Zion · Bryce · Arches · Grand Canyon",
    blurb: "A canyon-country road trip through red rock and desert horizon.",
    image: "/images/destinations/grand-canyon.jpeg",
    imageAlt: "Grand Canyon, Southwest USA",
  },
];

/** Featured films that already exist in lib/videos.ts */
export const featuredVideoIds = [
  "uYj_J8WJmd0", // Italy itinerary
  "lQj1AFTpbCA", // Andalusia
  "VQYLOV0BjN0", // Porto
  "GzLPF_ICZpQ", // Andaman
] as const;

/** Guide slugs to feature (must exist in content/blog) */
export const featuredGuideSlugs = [
  "7-days-andalusia-cinematic-journey",
  "portugal-travel-series",
  "week-in-andaman",
  "10-days-italy-cinematic-journey",
] as const;

/** Local image overrides for guide cards when available */
export const guideImageBySlug: Record<string, string> = {
  "7-days-andalusia-cinematic-journey": "/images/destinations/granada.jpeg",
  "portugal-travel-series": "/images/destinations/sintra-moorish.jpeg",
  "week-in-andaman": "/images/destinations/andaman-sunrise.jpeg",
  "9-days-rajasthan-cinematic-journey": "/images/destinations/india-rajasthan.jpeg",
  "week-in-yucatan-mexico": "/images/destinations/mexico-yucatan.jpeg",
  "southwest-usa-roadtrip": "/images/destinations/grand-canyon.jpeg",
};

export type TravelGridItem = {
  slug: string;
  label: string;
  image: string;
  imageAlt: string;
  span?: "wide" | "tall" | "normal";
};

/** Our Travels mosaic — every item links to an existing story */
export const ourTravelsGrid: TravelGridItem[] = [
  {
    slug: "week-in-andaman",
    label: "Havelock",
    image: "/images/destinations/havelock.jpeg",
    imageAlt: "Havelock Island, Andaman",
    span: "wide",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    label: "Seville",
    image: "/images/destinations/seville-cathedral.jpeg",
    imageAlt: "Seville Cathedral",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    label: "Ronda",
    image: "/images/destinations/ronda-puente-nuevo.jpeg",
    imageAlt: "Puente Nuevo, Ronda",
    span: "tall",
  },
  {
    slug: "portugal-travel-series",
    label: "Sintra",
    image: "/images/destinations/sintra-moorish.jpeg",
    imageAlt: "Moorish Castle, Sintra",
  },
  {
    slug: "week-in-andaman",
    label: "Neil Island",
    image: "/images/destinations/neil-lakshmanpur.jpeg",
    imageAlt: "Lakshmanpur Beach, Neil Island",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    label: "Granada",
    image: "/images/destinations/granada.jpeg",
    imageAlt: "Granada, Spain",
    span: "wide",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    label: "Spain roads",
    image: "/images/destinations/spain-roadtrip.jpeg",
    imageAlt: "Andalusia road trip",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    label: "El Tajo",
    image: "/images/destinations/rondacasaeltajo.jpeg",
    imageAlt: "Ronda El Tajo gorge",
  },
];
