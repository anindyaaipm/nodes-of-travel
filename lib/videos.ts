export interface Video {
  id: string; // YouTube video ID (also used as anchor link)
  title: string;
  description: string;
  category: string;
  url: string;
  tags?: string[];
  relatedBlog?: string; // slug of related blog post
  playlist?: string; // which series/playlist this belongs to
}

export interface VideoPlaylist {
  id: string;
  title: string;
  description: string;
  emoji: string;
}

export const playlists: VideoPlaylist[] = [
  {
    id: "italy-series",
    title: "Italy Travel Series",
    description: "A cinematic journey through Italy - Venice, Florence, Pisa, Cinque Terre, and Rome",
    emoji: "🇮🇹",
  },
  {
    id: "southwest-usa-series",
    title: "Southwest USA Travel Series",
    description: "A journey through Southwest USA - Zion National Park, Bryce Canyon, Arches National Park, Monument Valley, Horseshoe Bend, and Grand Canyon",
emoji: "🇺🇸",
  },
  // Add more playlists as you create them
];

export const videos: Video[] = [
  // Italy Series
  {
    id: "uYj_J8WJmd0", // YouTube video ID (used for thumbnails and anchor links)
    title: "Perfect 10 DayItaly Itinerary",
    description: "Venice, Florence, Pisa, Cinque Terre & Rome",
    category: "Travel Film",
    url: "https://youtu.be/uYj_J8WJmd0",
    tags: ["italy", "venice", "burano", "cinematic"],
    relatedBlog: "10-days-italy-cinematic-journey",
    playlist: "italy-series",
  },
  {
    id: "CIqRQt7WLCM", // YouTube video ID (used for thumbnails and anchor links)
    title: "Venice - The Floating Dream | Italy Travel Vlog",
    description: "Experience Venice's canals, Burano's colors, and St. Mark's magic in this cinematic travel film.",
    category: "Travel Film",
    url: "https://youtu.be/CIqRQt7WLCM",
    tags: ["italy", "venice", "burano", "cinematic"],
    relatedBlog: "10-days-italy-cinematic-journey",
    playlist: "italy-series",
  },
  {
    id: "AcQX7z04TUc", // YouTube video ID
    title: "Florence & Pisa - Renaissance & Rain | Italy Travel Vlog",
    description: "From Florence's Duomo to Pisa's Leaning Tower - a journey through Tuscany's heart.",
    category: "Travel Film",
    url: "https://youtu.be/AcQX7z04TUc",
    tags: ["italy", "florence", "pisa", "tuscany", "cinematic"],
    relatedBlog: "10-days-italy-cinematic-journey",
    playlist: "italy-series",
  },
  {
    id: "FwWDHnQ-YNE", // YouTube video ID
    title: "Cinque Terre - Colors Carved by the Sea | Italy Travel Vlog",
    description: "Hike the Blue Trail, explore five villages, and watch sunsets over the Mediterranean.",
    category: "Travel Film",
    url: "https://youtu.be/FwWDHnQ-YNE",
    tags: ["italy", "cinque-terre", "hiking", "coast", "cinematic"],
    relatedBlog: "10-days-italy-cinematic-journey",
    playlist: "italy-series",
  },
  {
    id: "U7X57tQH6XY", // YouTube video ID
    title: "Rome - The Eternal City | Italy Travel Vlog",
    description: "From the Vatican to the Colosseum - walk through 3,000 years of history in Rome.",
    category: "Travel Film",
    url: "https://youtu.be/U7X57tQH6XY",
    tags: ["italy", "rome", "vatican", "colosseum", "cinematic"],
    relatedBlog: "10-days-italy-cinematic-journey",
    playlist: "italy-series",
  },
  // Add more videos here as you create them
  
  // Southwest USA Series
  {
    id: "V7rEAkFPNfs", // YouTube video ID (used for thumbnails and anchor links)
    title: "Southwest USA Itinerary",
    description: "Zion National Park, Bryce Canyon, Arches National Park, Monument Valley, Horseshoe Bend, and Grand Canyon",
    category: "Travel Film",
    url: "https://youtu.be/V7rEAkFPNfs",
    tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
    relatedBlog: "southwest-usa-roadtrip",
    playlist: "southwest-usa-series",
  },
  {
    id: "uu1MTUHujd8", // YouTube video ID (used for thumbnails and anchor links)
    title: "Zion National Park",
    description: "Experience Zion National Park",
    category: "Travel Film",
    url: "https://youtu.be/uu1MTUHujd8",
    tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
    relatedBlog: "southwest-usa-roadtrip",
    playlist: "southwest-usa-series",
  },
  {
    id: "M58n9pQmf7A", // YouTube video ID (used for thumbnails and anchor links)
    title: "Bryce Canyon National Park",
    description: "Experience Bryce Canyon National Park",
    category: "Travel Film",
    url: "https://youtu.be/M58n9pQmf7A",
    tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
    relatedBlog: "southwest-usa-roadtrip",
    playlist: "southwest-usa-series",
  },
    {
        id: "rR6xRK1R90g", // YouTube video ID (used for thumbnails and anchor links)
        title: "Arches National Park",
        description: "Experience Arches National Park",
        category: "Travel Film",
        url: "https://youtu.be/rR6xRK1R90g",
        tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
        relatedBlog: "southwest-usa-roadtrip",
        playlist: "southwest-usa-series",
    },
    {
        id: "hrEEzsYwBUc", // YouTube video ID (used for thumbnails and anchor links)
        title: "Monument Valley",
        description: "Experience Monument Valley",
        category: "Travel Film",
        url: "https://youtu.be/hrEEzsYwBUc",
        tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
        relatedBlog: "southwest-usa-roadtrip",
        playlist: "southwest-usa-series",
    },
    {
        id: "vld58yJ_FGQ", // YouTube video ID (used for thumbnails and anchor links)
        title: "Grand Canyon",
        description: "Experience Grand Canyon",
        category: "Travel Film",
        url: "https://youtu.be/vld58yJ_FGQ",
        tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
        relatedBlog: "southwest-usa-roadtrip",
        playlist: "southwest-usa-series",
    },
    {
        id: "7T4WOfSd6JI", // YouTube video ID (used for thumbnails and anchor links)
        title: "Las Vegas",
        description: "Experience Las Vegas",
        category: "Travel Film",
        url: "https://youtu.be/7T4WOfSd6JI",
        tags: ["southwest", "usa", "zion", "bryce", "arches", "monument", "horseshoe", "grand", "canyon", "cinematic"],
        relatedBlog: "southwest-usa-roadtrip",
        playlist: "southwest-usa-series",
    },
];

export function getVideoById(id: string): Video | undefined {
  return videos.find((video) => video.id === id);
}

export function getVideosByTag(tag: string): Video[] {
  return videos.filter((video) => video.tags?.includes(tag.toLowerCase()));
}

export function getVideosByPlaylist(playlistId: string): Video[] {
  return videos.filter((video) => video.playlist === playlistId);
}

export function getPlaylistById(id: string): VideoPlaylist | undefined {
  return playlists.find((playlist) => playlist.id === id);
}

