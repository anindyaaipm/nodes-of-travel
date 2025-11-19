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
  {
    id: "rajasthan-india-series",
    title: "Rajasthan India Travel Series",
    description: "A journey through Rajasthan, India - Jaipur, Jaisalmer, Jodhpur, Udaipur, and Chittorgarh",
    emoji: "🇮🇳",
  },
  {
    id: "rockies-canada-series",
    title: "Rockies Canada Travel Series",
    description: "A journey through the Rockies - Banff, Jasper, Yoho National Park",
    emoji: "🇨🇦",
  },
  {
    id: "yucatan-mexico-series",
    title: "Yucatan Mexico Travel Series",
    description: "A week in the Yucatan - Cancun, Isla Mujeres, Valladolid, Ek Balam, and Chichen Itza",
    emoji: "🇲🇽",
  },
  {
    id: "canada-coast-to-coast-series",
    title: "Canada Coast to Coast Travel Series",
    description: "A journey through West Coast to the Amazing Maritimes of Canada",
    emoji: "🇨🇦",
  },

   // Add more playlists as you create them
];

export const videos: Video[] = [
  // Italy Series
  {
    id: "uYj_J8WJmd0", // YouTube video ID (used for thumbnails and anchor links)
    title: "Perfect 10 Day Italy Itinerary",
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
    // Rajasthan India Series
    {
        id: "MSHf_zr2JxE", // YouTube video ID (used for thumbnails and anchor links)
        title: "Jaipur",
        description: "Experience Jaipur",
        category: "Travel Film",
        url: "https://youtu.be/MSHf_zr2JxE",
        tags: ["rajasthan", "india", "jaipur", "cinematic"],
        relatedBlog: "9-days-rajasthan-cinematic-journey",
        playlist: "rajasthan-india-series",
    },
    {
        id: "zmFgblKuYTk", // YouTube video ID (used for thumbnails and anchor links)
        title: "Jaisalmer",
        description: "Experience Jaisalmer",
        category: "Travel Film",
        url: "https://youtu.be/zmFgblKuYTk",
        tags: ["rajasthan", "india", "jaisalmer", "cinematic"],
        relatedBlog: "9-days-rajasthan-cinematic-journey",
        playlist: "rajasthan-india-series",
    },
    {
        id: "67rZQ3qmL2k", // YouTube video ID (used for thumbnails and anchor links)
        title: "Jodhpur",
        description: "Experience Jodhpur",
        category: "Travel Film",
        url: "https://youtu.be/67rZQ3qmL2k",
        tags: ["rajasthan", "india", "jodhpur", "cinematic"],
        relatedBlog: "9-days-rajasthan-cinematic-journey",
        playlist: "rajasthan-india-series",
    },
    {
        id: "Q2weWRU_Z7M", // YouTube video ID (used for thumbnails and anchor links)
        title: "Udaipur",
        description: "Experience Udaipur",
        category: "Travel Film",
        url: "https://youtu.be/Q2weWRU_Z7M",
        tags: ["rajasthan", "india", "udaipur", "cinematic"],
        relatedBlog: "9-days-rajasthan-cinematic-journey",
        playlist: "rajasthan-india-series",
    },
    {
        id: "vwMzTIkQakY", // YouTube video ID (used for thumbnails and anchor links)
        title: "Rajasthan",
        description: "The Complete Journey - Experience Rajasthan in 9 Days",
        category: "Travel Film",
        url: "https://youtu.be/vwMzTIkQakY",
        tags: ["rajasthan", "india", "jaipur", "jaisalmer", "jodhpur", "udaipur", "chittorgarh", "cinematic"],
        relatedBlog: "9-days-rajasthan-cinematic-journey",
        playlist: "rajasthan-india-series",
    },
    // Yucatan Mexico Series
    {
        id: "6FZf_oytyVo", // YouTube video ID (used for thumbnails and anchor links)
        title: "Yucatan",
        description: "The Complete Journey - Experience Yucatan in 7 Days",
        category: "Travel Film",
        url: "https://youtu.be/6FZf_oytyVo",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "CRNripSbj6o", // YouTube video ID (used for thumbnails and anchor links)
        title: "Cancun Terminal arrival experience",
        description: "Experience Cancun Terminal arrival experience",
        category: "Travel Film",
        url: "https://youtu.be/CRNripSbj6o",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "p1WHvcixzfI", // YouTube video ID (used for thumbnails and anchor links)
        title: "Isla Mujeres Trip", 
        description: "Experience Isla Mujeres Trip",
        category: "Travel Film",
        url: "https://youtu.be/p1WHvcixzfI",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "dfqxddzbRfM", // YouTube video ID (used for thumbnails and anchor links)
        title: "Ek Balam Trip",
        description: "Experience Ek Balam Trip",
        category: "Travel Film",
        url: "https://youtu.be/dfqxddzbRfM",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "nbO-zgnvNCk", // YouTube video ID (used for thumbnails and anchor links)
        title: "Chichen Itza Trip",
        description: "Experience Chichen Itza Trip",
        category: "Travel Film",
        url: "https://youtu.be/nbO-zgnvNCk",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "6MpOXrnXT44", // YouTube video ID (used for thumbnails and anchor links)
        title: "Valladolid Trip",
        description: "Experience Valladolid Trip",
        category: "Travel Film",
        url: "https://youtu.be/6MpOXrnXT44",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "0S48k7zvVHY", // YouTube video ID (used for thumbnails and anchor links)
        title: "ADO Bus Trip",
        description: "Experience ADO Bus Trip",
        category: "Travel Film",
        url: "https://youtu.be/0S48k7zvVHY",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "s8c8cWner_M", // YouTube video ID (used for thumbnails and anchor links)
        title: "Puerto Juarez Hotel Trip",
        description: "Experience Puerto Juarez Hotel Trip",
        category: "Travel Film",
        url: "https://youtu.be/s8c8cWner_M",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "wEUzDNLKr9I", // YouTube video ID (used for thumbnails and anchor links)
        title: "Isla Mujeres Hotel Trip",
        description: "Experience Isla Mujeres Hotel Trip",
        category: "Travel Film",
        url: "https://youtu.be/wEUzDNLKr9I",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    {
        id: "2wrEtwv5D6Y", // YouTube video ID (used for thumbnails and anchor links)
        title: "Valladolid Hotel Trip",
        description: "Experience Valladolid Hotel Trip",
        category: "Travel Film",
        url: "https://youtu.be/2wrEtwv5D6Y",
        tags: ["yucatan", "mexico", "cancun", "isla-mujeres", "tulum", "merida", "cinematic"],
        relatedBlog: "week-in-yucatan-mexico",
        playlist: "yucatan-mexico-series",
    },
    // Rockies Canada Series
    {
        id: "9y-D88zi_k0", // YouTube video ID (used for thumbnails and anchor links)
        title: "Jasper National Park",
        description: "Experience Jasper National Park",
        category: "Travel Film",  
        url: "https://youtu.be/9y-D88zi_k0",
        tags: ["rockies", "canada", "jasper", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "U-lrfq-ZBXI", // YouTube video ID (used for thumbnails and anchor links)
        title: "Athabasca Glacier",
        description: "Experience Athabasca Glacier",
        category: "Travel Film",
        url: "https://youtu.be/U-lrfq-ZBXI",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "nXDm-ePssZY", // YouTube video ID (used for thumbnails and anchor links)
        title: "Icefields Parkway",
        description: "Driving through Icefields Parkway",
        category: "Travel Film",
        url: "https://youtu.be/nXDm-ePssZY",
        tags: ["rockies", "canada", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "AIBmg3-B7tE", // YouTube video ID (used for thumbnails and anchor links)
        title: "Yoho National Park",
        description: "Amazing views at Yoho National Park",
        category: "Travel Film",
        url: "https://youtu.be/AIBmg3-B7tE",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "vxQfBAW_kN8", // YouTube video ID (used for thumbnails and anchor links)
        title: "Lake Louise and Lake Agnes Tea House",
        description: "Experience Lake Louise and Lake Agnes Tea House",
        category: "Travel Film",
        url: "https://youtu.be/vxQfBAW_kN8",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "3-Kgrrx1pGQ", // YouTube video ID (used for thumbnails and anchor links)
        title: "Moraine Lake",
        description: "Experience Moraine Lake",
        category: "Travel Film",
        url: "https://youtu.be/3-Kgrrx1pGQ",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "XBGGWI9fxLY", // YouTube video ID (used for thumbnails and anchor links)
        title: "Banff National Park",
        description: "Experience Banff National Park",
        category: "Travel Film",
        url: "https://youtu.be/XBGGWI9fxLY",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "rTa9vnFu3o4", // YouTube video ID (used for thumbnails and anchor links)
        title: "Johnston Canyon",
        description: "Hiking through Johnston Canyon",
        category: "Travel Film",
        url: "https://youtu.be/rTa9vnFu3o4",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    {
        id: "gznuwZ7IQkI", // YouTube video ID (used for thumbnails and anchor links)
        title: "Itinerary for Banff , Jasper, Yoho National Park",
        description: "Itinerary for Banff , Jasper, Yoho National Park",
        category: "Travel Film",
        url: "https://youtu.be/gznuwZ7IQkI",
        tags: ["rockies", "canada", "banff", "jasper", "yoho", "cinematic"],
        relatedBlog: "rockies-canada-roadtrip",
        playlist: "rockies-canada-series",
    },
    // Canada Coast to Coast Series
    {
        id: "eXrancqXrPw",
        title: "The Wonders of Vancouver and Pacific Coast",
        description: "The Wonders of Vancouver and Pacific Coast",
        category: "Travel Film",
        url: "https://youtu.be/eXrancqXrPw",
        tags: ["canada", "vancouver", "pacific", "coast", "cinematic"],
        relatedBlog: "wonders-of-canada-west-coast",
        playlist: "canada-coast-to-coast-series",
    },
    {
        id: "gpUgk4gr4qc",
        title: "Sea To Sky Highway & Whistler",
        description: "Driving through the Sea To Sky Highway & Whistler",
        category: "Travel Film",
        url: "https://youtu.be/gpUgk4gr4qc",
        tags: ["canada", "vancouver", "pacific", "coast", "cinematic", "sea-to-sky", "whistler"],
        relatedBlog: "wonders-of-canada-west-coast",
        playlist: "canada-coast-to-coast-series",
    },
    {
        id: "cuRnlE_wWNI",
        title: "Hiking Joffre Lakes",
        description: "Hiking Joffre Lakes",
        category: "Travel Film",
        url: "https://youtu.be/cuRnlE_wWNI",
        tags: ["canada", "vancouver", "pacific", "coast", "cinematic", "joffre-lakes", "hiking"],
        relatedBlog: "wonders-of-canada-west-coast",
        playlist: "canada-coast-to-coast-series",
    },
    {
        id: "DPNdZ69lXSo",
        title: "Canada Maritimes Road Trip - Part 1",
        description: "Canada Maritimes 1 - PEI - Nova Scotia - New Brunswick",
        category: "Travel Film",
        url: "https://youtu.be/DPNdZ69lXSo",
        tags: ["canada", "maritimes", "road-trip", "cinematic", "pei", "nova-scotia", "new-brunswick"],
        relatedBlog: "wonders-of-canada-east-coast",
        playlist: "canada-coast-to-coast-series",
    },
    {
        id: "9PHVyXWETSQ",
        title: "Canada Maritimes Road Trip - Part 2",
        description: "Canada Maritimes 2 - Nova Scotia  - PEI",
        category: "Travel Film",
        url: "https://youtu.be/9PHVyXWETSQ",
        tags: ["canada", "maritimes", "road-trip", "cinematic", "pei", "nova-scotia", "new-brunswick"],
        relatedBlog: "wonders-of-canada-east-coast",
        playlist: "canada-coast-to-coast-series",
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

