/**
 * Destinations hub data — only places with real guides and/or video playlists.
 * Structure inspired by travel-publication destination indexes (region → place cards).
 */

export type DestinationExploreItem = {
  label: string;
  image: string;
  imageAlt: string;
};

export type DestinationPlace = {
  slug: string;
  name: string;
  subtitle: string;
  image: string;
  imageAlt: string;
  blogSlug?: string;
  playlistId?: string;
  /** Live handbook under /guides/[slug] */
  handbookSlug?: string;
  /** Optional place stills for destination detail “Explore” grids — real local photos only */
  explore?: DestinationExploreItem[];
};

export type DestinationRegion = {
  id: string;
  name: string;
  places: DestinationPlace[];
};

export const destinationRegions: DestinationRegion[] = [
  {
    id: "europe",
    name: "Europe",
    places: [
      {
        slug: "portugal",
        name: "Portugal",
        subtitle: "Porto · Lisbon · Sintra",
        image: "/images/blogs/portugal/portugal.jpeg",
        imageAlt: "Portugal",
        blogSlug: "portugal-travel-series",
        playlistId: "portugal-series",
      },
      {
        slug: "spain-andalusia",
        name: "Spain — Andalusia",
        subtitle: "Seville · Córdoba · Granada · Ronda",
        image: "/images/blogs/spain/spain-andalusia.jpeg",
        imageAlt: "Andalusia, Spain",
        blogSlug: "7-days-andalusia-cinematic-journey",
        playlistId: "andalusia-spain-series",
      },
      {
        slug: "italy",
        name: "Italy",
        subtitle: "Venice · Florence · Pisa · Cinque Terre · Rome",
        image: "/images/blogs/italy/venice.jpeg",
        imageAlt: "Venice, Italy",
        blogSlug: "10-days-italy-cinematic-journey",
        playlistId: "italy-series",
      },
    ],
  },
  {
    id: "asia",
    name: "Asia",
    places: [
      {
        slug: "andaman",
        name: "Andaman Islands",
        subtitle: "Port Blair · Havelock · Neil",
        image: "/images/blogs/andaman/Andaman.jpeg",
        imageAlt: "Andaman Islands",
        blogSlug: "week-in-andaman",
        playlistId: "andaman-series",
        handbookSlug: "andaman",
        explore: [
          {
            label: "Port Blair",
            image: "/images/blogs/andaman/Andaman2.jpeg",
            imageAlt: "Port Blair and Andaman shores",
          },
          {
            label: "Havelock",
            image: "/images/destinations/havelock.jpeg",
            imageAlt: "Havelock Island, Andaman",
          },
          {
            label: "Andaman sunrise",
            image: "/images/destinations/andaman-sunrise.jpeg",
            imageAlt: "Sunrise in the Andaman Islands",
          },
        ],
      },
      {
        slug: "rajasthan",
        name: "Rajasthan, India",
        subtitle: "Jaipur · Jodhpur · Jaisalmer · Udaipur",
        image: "/images/blogs/rajasthan/india-rajasthan.jpeg",
        imageAlt: "Rajasthan, India",
        blogSlug: "9-days-rajasthan-cinematic-journey",
        playlistId: "rajasthan-india-series",
      },
    ],
  },
  {
    id: "mexico",
    name: "Mexico",
    places: [
      {
        slug: "yucatan",
        name: "Yucatán Peninsula",
        subtitle: "Cancún · Isla Mujeres · Valladolid · Chichén Itzá",
        image: "/images/blogs/mexico/mexico-yucatan.jpeg",
        imageAlt: "Yucatán, Mexico",
        blogSlug: "week-in-yucatan-mexico",
        playlistId: "yucatan-mexico-series",
      },
    ],
  },
  {
    id: "canada",
    name: "Canada",
    places: [
      {
        slug: "canadian-rockies",
        name: "Canadian Rockies",
        subtitle: "Banff · Jasper · Yoho",
        image: "/images/blogs/canada-banff/morraine-lake.JPEG",
        imageAlt: "Canadian Rockies",
        blogSlug: "rockies-canada-roadtrip",
        playlistId: "rockies-canada-series",
      },
      {
        slug: "canada-west",
        name: "West Coast",
        subtitle: "Vancouver · Pacific Coast",
        image: "/images/blogs/canada-west-coast/vancouver-city.jpeg",
        imageAlt: "Canada West Coast",
        blogSlug: "wonders-of-canada-west-coast",
        playlistId: "canada-coast-to-coast-series",
      },
      {
        slug: "canada-east",
        name: "Maritimes",
        subtitle: "PEI · New Brunswick · Nova Scotia",
        image: "/images/blogs/canada-maritimes/pei.jpeg",
        imageAlt: "Maritime Canada",
        blogSlug: "wonders-of-canada-east-coast",
        playlistId: "canada-coast-to-coast-series",
      },
    ],
  },
  {
    id: "usa",
    name: "USA",
    places: [
      {
        slug: "southwest-usa",
        name: "Southwest USA",
        subtitle: "Zion · Bryce · Arches · Grand Canyon",
        image: "/images/blogs/usa-southwest/GrandCanyon.jpeg",
        imageAlt: "Grand Canyon, Southwest USA",
        blogSlug: "southwest-usa-roadtrip",
        playlistId: "southwest-usa-series",
      },
    ],
  },
];

export function getAllDestinationPlaces(): DestinationPlace[] {
  return destinationRegions.flatMap((r) => r.places);
}

export function getDestinationBySlug(slug: string): DestinationPlace | undefined {
  return getAllDestinationPlaces().find((p) => p.slug === slug);
}

export function getRegionForDestination(slug: string): DestinationRegion | undefined {
  return destinationRegions.find((region) => region.places.some((p) => p.slug === slug));
}

/** Other places in the same region — real destinations only */
export function getRelatedDestinations(slug: string, limit = 3): DestinationPlace[] {
  const region = getRegionForDestination(slug);
  if (!region) return [];
  return region.places.filter((p) => p.slug !== slug).slice(0, limit);
}
