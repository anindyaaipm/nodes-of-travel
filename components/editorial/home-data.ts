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
    image: "/images/blogs/rajasthan/india-rajasthan.jpeg",
    imageAlt: "Rajasthan, India",
  },
  {
    slug: "rockies-canada-roadtrip",
    name: "Canadian Rockies",
    place: "Banff · Jasper · Yoho",
    blurb: "Turquoise lakes, icefields and mountain highways through Banff and beyond.",
    image: "/images/blogs/canada-banff/moraine-lake-pose.JPEG",
    imageAlt: "Moraine Lake, Canadian Rockies",
  },
  {
    slug: "wonders-of-canada-west-coast",
    name: "Canada West Coast",
    place: "Vancouver · Squamish · Whistler",
    blurb: "Stanley Park seawalls, Sea to Sky, and mountains meeting the Pacific.",
    image: "/images/blogs/canada-west-coast/vancouver-city.jpeg",
    imageAlt: "Vancouver, Canada West Coast",
  },
  {
    slug: "wonders-of-canada-east-coast",
    name: "Maritime Canada",
    place: "PEI · New Brunswick · Nova Scotia",
    blurb: "Lighthouses, Cabot Trail curves, and Atlantic light from PEI to Peggy’s Cove.",
    image: "/images/blogs/canada-maritimes/cabot-trail.jpeg",
    imageAlt: "Cabot Trail, Maritime Canada",
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
  "gznuwZ7IQkI", // Canadian Rockies
  "eXrancqXrPw", // Vancouver / West Coast
] as const;

/** Guide slugs to feature (must exist in content/blog) */
export const featuredGuideSlugs = [
  "7-days-andalusia-cinematic-journey",
  "portugal-travel-series",
  "rockies-canada-roadtrip",
  "wonders-of-canada-east-coast",
  "week-in-andaman",
  "9-days-rajasthan-cinematic-journey",
] as const;

/** Local image overrides for guide cards when available */
export const guideImageBySlug: Record<string, string> = {
  "7-days-andalusia-cinematic-journey": "/images/destinations/granada.jpeg",
  "portugal-travel-series": "/images/destinations/sintra-moorish.jpeg",
  "week-in-andaman": "/images/destinations/andaman-sunrise.jpeg",
  "9-days-rajasthan-cinematic-journey": "/images/blogs/rajasthan/india-rajasthan.jpeg",
  "week-in-yucatan-mexico": "/images/destinations/mexico-yucatan.jpeg",
  "southwest-usa-roadtrip": "/images/destinations/grand-canyon.jpeg",
  "rockies-canada-roadtrip": "/images/blogs/canada-banff/moraine-lake-pose.JPEG",
  "wonders-of-canada-east-coast": "/images/blogs/canada-maritimes/cabot-trail.jpeg",
  "wonders-of-canada-west-coast": "/images/blogs/canada-west-coast/vancouver-city.jpeg",
  "10-days-italy-cinematic-journey": "/images/blogs/italy/venice.jpeg",
};

export type TravelGridItem = {
  slug: string;
  destinationSlug: string;
  label: string;
  image: string;
  imageAlt: string;
};

/** Our Travels — landscape place stills linking to destination hubs */
export const ourTravelsGrid: TravelGridItem[] = [
  {
    slug: "week-in-andaman",
    destinationSlug: "andaman",
    label: "Havelock",
    image: "/images/destinations/havelock.jpeg",
    imageAlt: "Havelock Island, Andaman",
  },
  {
    slug: "week-in-andaman",
    destinationSlug: "andaman",
    label: "Andaman sunrise",
    image: "/images/destinations/andaman-sunrise.jpeg",
    imageAlt: "Sunrise in the Andaman Islands",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    destinationSlug: "spain-andalusia",
    label: "Seville",
    image: "/images/destinations/seville-cathedral.jpeg",
    imageAlt: "Seville Cathedral",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    destinationSlug: "spain-andalusia",
    label: "Ronda",
    image: "/images/destinations/ronda-puente-nuevo.jpeg",
    imageAlt: "Puente Nuevo, Ronda",
  },
  {
    slug: "portugal-travel-series",
    destinationSlug: "portugal",
    label: "Sintra",
    image: "/images/destinations/sintra-moorish.jpeg",
    imageAlt: "Moorish Castle, Sintra",
  },
  {
    slug: "7-days-andalusia-cinematic-journey",
    destinationSlug: "spain-andalusia",
    label: "Granada",
    image: "/images/destinations/granada.jpeg",
    imageAlt: "Granada, Spain",
  },
  {
    slug: "rockies-canada-roadtrip",
    destinationSlug: "canadian-rockies",
    label: "Banff",
    image: "/images/blogs/canada-banff/banff-sign.JPEG",
    imageAlt: "Banff, Canadian Rockies",
  },
  {
    slug: "rockies-canada-roadtrip",
    destinationSlug: "canadian-rockies",
    label: "Moraine Lake",
    image: "/images/blogs/canada-banff/moraine-lake-pose.JPEG",
    imageAlt: "Moraine Lake, Banff",
  },
  {
    slug: "wonders-of-canada-west-coast",
    destinationSlug: "canada-west",
    label: "Vancouver",
    image: "/images/blogs/canada-west-coast/vancouver-lionsgate-bridge.jpeg",
    imageAlt: "Lions Gate Bridge, Vancouver",
  },
  {
    slug: "wonders-of-canada-east-coast",
    destinationSlug: "canada-east",
    label: "Cabot Trail",
    image: "/images/blogs/canada-maritimes/cabot-trail.jpeg",
    imageAlt: "Cabot Trail, Nova Scotia",
  },
  {
    slug: "wonders-of-canada-east-coast",
    destinationSlug: "canada-east",
    label: "Lunenburg",
    image: "/images/blogs/canada-maritimes/lunenberg-nova-scotia.jpeg",
    imageAlt: "Lunenburg, Nova Scotia",
  },
  {
    slug: "wonders-of-canada-west-coast",
    destinationSlug: "canada-west",
    label: "Sea to Sky",
    image: "/images/blogs/canada-west-coast/sea-to-sky-highway-squamish-gondola.jpeg",
    imageAlt: "Sea to Sky Highway, Squamish",
  },
];

/** Map guide/blog slug → destinations hub slug */
export const blogSlugToDestination: Record<string, string> = {
  "portugal-travel-series": "portugal",
  "7-days-andalusia-cinematic-journey": "spain-andalusia",
  "10-days-italy-cinematic-journey": "italy",
  "week-in-andaman": "andaman",
  "9-days-rajasthan-cinematic-journey": "rajasthan",
  "week-in-yucatan-mexico": "yucatan",
  "southwest-usa-roadtrip": "southwest-usa",
  "rockies-canada-roadtrip": "canadian-rockies",
  "wonders-of-canada-west-coast": "canada-west",
  "wonders-of-canada-east-coast": "canada-east",
};
