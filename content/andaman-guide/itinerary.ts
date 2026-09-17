/**
 * Place modules with mapped attractions (Delhi-guide IA: numbered stops + directions).
 * Only places from our Andaman trip notes — no invented attractions.
 */

export type MappedStop = {
  name: string;
  /** Suggested time on site from how we experienced it — approximate, not a promise */
  duration?: string;
  note: string;
  mapsQuery: string;
  transferHint?: string;
};

export type PlaceGuide = {
  id: string;
  heading: string;
  role: string;
  ourTake: string;
  image?: string;
  imageAlt?: string;
  /** Compact stop list with Get directions — handbook style */
  stops: MappedStop[];
};

export const places: PlaceGuide[] = [
  {
    id: "port-blair",
    heading: "Port Blair",
    role: "Gateway hub — arrival/departure, history, and launch point for Ross Island & Jolly Buoy.",
    image: "/images/andaman-guide/RossIsland.jpeg",
    imageAlt: "Ross Island jetty and shoreline, Port Blair",
    ourTake:
      "Essential as a hub, not only a transit night. Leave emotional bandwidth for Cellular Jail; pair Ross Island with an Aberdeen Jetty–convenient stay.",
    stops: [
      {
        name: "Aberdeen Jetty",
        duration: "15–30m",
        note: "Ferry point for Ross Island when staying nearby — we used it day one.",
        mapsQuery: "Aberdeen Jetty Port Blair",
      },
      {
        name: "Ross Island (Netaji Subhash Chandra Bose Dweep)",
        duration: "2–3h",
        note: "Nature reclaiming colonial grounds; deer & peacocks; golf cart helps; lighthouse at the end.",
        mapsQuery: "Ross Island Port Blair",
        transferHint: "Ferry from Aberdeen Jetty",
      },
      {
        name: "Wandoor Beach",
        duration: "30m transfer",
        note: "Road head for Jolly Buoy boats (~30 min from Port Blair in our run).",
        mapsQuery: "Wandoor Beach Port Blair",
        transferHint: "~30 min from Port Blair",
      },
      {
        name: "Cellular Jail (light & sound / full visit)",
        duration: "1–2h",
        note: "Evening light-and-sound on our trip; full visit kept for the final morning — heavy, essential.",
        mapsQuery: "Cellular Jail Port Blair",
      },
      {
        name: "Corbyn’s Cove",
        duration: "1h",
        note: "Port Blair’s main town beach — we used it on the finale morning.",
        mapsQuery: "Corbyn's Cove Port Blair",
      },
      {
        name: "Flag Point",
        duration: "30–45m",
        note: "Site tied to Netaji Subhas Bose hoisting the Tiranga on free Indian soil.",
        mapsQuery: "Flag Point Port Blair Netaji",
      },
      {
        name: "Chiriya Tapu",
        duration: "1–2h",
        note: "Sunset area; Munda Pahar trek was closed for us — beach sunset still worked. ~15 min bus from our final hotel area.",
        mapsQuery: "Chiriya Tapu Port Blair",
        transferHint: "~15 min by local bus from south stays",
      },
      {
        name: "Veer Savarkar Airport",
        duration: "—",
        note: "Arrival/departure gateway — build delay buffer into day 1.",
        mapsQuery: "Veer Savarkar International Airport Port Blair",
      },
    ],
  },
  {
    id: "havelock",
    heading: "Havelock (Swaraj Dweep)",
    role: "Beach and water-activity island — swimming, sunset, scuba, snorkeling.",
    image: "/images/andaman-guide/RadhanagarBeach_Havelock.jpeg",
    imageAlt: "Radhanagar Beach, Havelock",
    ourTake:
      "Highest energy stretch. Expect early ferry mornings and chaotic-but-worth-it boats for Elephant Beach.",
    stops: [
      {
        name: "Haddo Jetty (Port Blair departure)",
        duration: "—",
        note: "Our Havelock sailing left from here — we aimed for ~6:30am for a pre-booked Nautica Pro.",
        mapsQuery: "Haddo Jetty Port Blair",
        transferHint: "Early morning ferry check-in",
      },
      {
        name: "Havelock / Swaraj Dweep Jetty",
        duration: "—",
        note: "Arrival after ~2h Nautica Pro sail; Elephant Beach boats also leave from the jetty area.",
        mapsQuery: "Havelock Island Jetty",
      },
      {
        name: "Kala Pathar Beach",
        duration: "1–2h",
        note: "Clear-water swim after arrival — we took an auto from the jetty side.",
        mapsQuery: "Kalapathar Beach Havelock",
        transferHint: "Auto from jetty / hotel",
      },
      {
        name: "Radhanagar Beach",
        duration: "1.5–2h",
        note: "Sunset beach — among the most celebrated on Asia lists we kept hearing on the ground.",
        mapsQuery: "Radhanagar Beach Havelock",
      },
      {
        name: "Scuba (Havelock operators / dive sites)",
        duration: "half day",
        note: "Our first dive: orientation + signals, then the dive — life-changing. Book a reputable operator on island.",
        mapsQuery: "Scuba diving Havelock Island",
      },
      {
        name: "Elephant Beach",
        duration: "3–4h",
        note: "~30 min speed boat from the jetty; snorkeling rivalled our scuba morning; boat scene can feel chaotic.",
        mapsQuery: "Elephant Beach Havelock",
        transferHint: "~30 min speed boat from jetty",
      },
    ],
  },
  {
    id: "neil",
    heading: "Neil Island (Shaheed Dweep)",
    role: "Slow island — water colour, coral shallows, sunsets, downtime.",
    image: "/images/andaman-guide/NeilIslandSunrise.jpeg",
    imageAlt: "Neil Island shoreline at golden hour",
    ourTake:
      "We loved Neil the most. If you want stillness, give it more nights than a pass-through plan suggests.",
    stops: [
      {
        name: "Neil Island / Shaheed Dweep Jetty",
        duration: "—",
        note: "Makruzz from Havelock (~1h). Water colour at arrival is striking turquoise/azure.",
        mapsQuery: "Neil Island Jetty Shaheed Dweep",
      },
      {
        name: "Laxmanpur Beach 1 (coral arch)",
        duration: "1.5–2h",
        note: "Natural coral arch at low tide; tide pools with fish and crabs — go around low tide.",
        mapsQuery: "Laxmanpur Beach 1 Neil Island",
      },
      {
        name: "Laxmanpur Beach 2 (sunset beach)",
        duration: "1–2h",
        note: "Best sunset of our trip — popular and romantic.",
        mapsQuery: "Laxmanpur Beach 2 Neil Island",
        transferHint: "Often paired same afternoon as Beach 1",
      },
      {
        name: "Neil shoreline / resort beach stretch",
        duration: "flexible",
        note: "Private-beach mornings (hammocks, swing) and a quiet walk toward the sunset point — highlight of our stay.",
        mapsQuery: "Bharatpur Beach Neil Island",
      },
    ],
  },
];

export const jollyBuoy = {
  id: "jolly-buoy",
  heading: "Jolly Buoy",
  image: "/images/andaman-guide/JollyBuoy.jpeg",
  imageAlt: "Jolly Buoy Island waters",
  ourTake:
    "Fairytale water when open — treat seasonality, forest permits, and advance booking as non-negotiable.",
  stops: [
    {
      name: "Wandoor Jetty (boat departure)",
      duration: "transfer + wait",
      note: "All boats for Jolly Buoy depart from here — about 30 km from Port Blair.",
      mapsQuery: "Wandoor Jetty Port Blair",
      transferHint: "~30 km from Port Blair",
    },
    {
      name: "Jolly Buoy Island",
      duration: "half day",
      note: "Mangrove approach, glass-bottom boats, crystal turquoise; open seasonally; limited permits.",
      mapsQuery: "Jolly Buoy Island Andaman",
      transferHint: "Boat from Wandoor Jetty",
    },
  ] as MappedStop[],
  tipsHeading: "Jolly Buoy tips — booking & rules",
  tips: [
    {
      text: "Permit requirement: a mandatory forest department permit is required (often included in tour packages). You can also arrange it at the Directorate of Tourism office in Port Blair.",
      mapsQuery: "Directorate of Tourism Port Blair",
    },
    {
      text: "Departure point: all boats leave from Wandoor Jetty, about 30 km from Port Blair.",
      mapsQuery: "Wandoor Jetty Port Blair",
    },
    {
      text: "Book 1–2 days in advance — slots are limited.",
      googleQuery: "Jolly Buoy Island booking permit Andaman",
    },
    {
      text: "Offline option: visit the Directorate of Tourism office in Port Blair to secure permits.",
      mapsQuery: "Directorate of Tourism Port Blair",
    },
    {
      text: "No-plastic zone: all plastic items must be declared or left behind.",
      googleQuery: "Jolly Buoy Island no plastic zone rules",
    },
  ],
} as const;

export const mustDo = {
  heading: "Must-Do Experiences",
  intro: "Ranked from what we actually did — not a complete tourist catalogue.",
  items: [
    { title: "Neil Island sunset (Laxmanpur 2)", note: "Best sunset of the trip.", mapsQuery: "Laxmanpur Beach 2 Neil Island" },
    { title: "First scuba dive (Havelock)", note: "Orientation + dive — life-changing for us.", mapsQuery: "Scuba diving Havelock Island" },
    { title: "Elephant Beach snorkeling", note: "Marine life that challenged the morning scuba.", mapsQuery: "Elephant Beach Havelock" },
    { title: "Radhanagar sunset", note: "Signature Havelock evening.", mapsQuery: "Radhanagar Beach Havelock" },
    { title: "Jolly Buoy (in season)", note: "Crystal water; book a day ahead.", mapsQuery: "Jolly Buoy Island Andaman" },
    { title: "Ross Island", note: "History, wildlife, lighthouse — easy half-day.", mapsQuery: "Ross Island Port Blair" },
    { title: "Cellular Jail", note: "Light-and-sound and/or full visit.", mapsQuery: "Cellular Jail Port Blair" },
    { title: "Laxmanpur 1 coral arch", note: "Low tide paths and tide-pool life.", mapsQuery: "Laxmanpur Beach 1 Neil Island" },
    { title: "Open-deck Green Ocean leg", note: "Ocean views + unexpected deck energy.", googleQuery: "Green Ocean ferry Andaman" },
    { title: "Flag Point & Corbyn’s Cove", note: "Close Port Blair with beach + Tiranga site.", mapsQuery: "Flag Point Port Blair" },
  ],
} as const;

export const ferryComparison = {
  heading: "Ferry Comparison",
  intro:
    "We deliberately used three popular ferries on different legs — Nautica, Makruzz, and Green Ocean — so we could compare them firsthand.",
  rows: [
    {
      name: "Nautica Pro",
      nameQuery: "Nautica Pro ferry Andaman",
      leg: "Port Blair → Havelock (Haddo Jetty)",
      legMapsQuery: "Haddo Jetty Port Blair",
      deck: "Closed deck",
      notes: "Newest of their fleet in our experience; smooth ~2-hour sail; pre-booked; early jetty start.",
    },
    {
      name: "Makruzz",
      nameQuery: "Makruzz ferry Andaman",
      leg: "Havelock → Neil",
      legMapsQuery: "Havelock Island Jetty",
      deck: "Closed deck (white ferry)",
      notes: "About one hour; decent ride; similar closed-deck feel to Nautica.",
    },
    {
      name: "Green Ocean 1",
      nameQuery: "Green Ocean ferry Andaman",
      leg: "Neil → Port Blair",
      legMapsQuery: "Neil Island Jetty Shaheed Dweep",
      deck: "Open deck",
      notes: "Only open-deck option we used; roam for ocean views; upper deck became a Bollywood dance floor.",
    },
  ],
} as const;

export const whereWeStayed = {
  heading: "Where We Stayed",
  intro:
    "Stays we actually used — named from our trip records. Choose by island role (hub vs beach vs slow).",
  stays: [
    {
      place: "Port Blair — Hotel Star Paradise (arrival)",
      mapsQuery: "Hotel Star Paradise Port Blair",
      notes:
        "Arrival base with strong terrace energy toward the bay; convenient for Aberdeen Jetty / Ross Island days.",
      image: "/images/andaman-guide/HotelStarParadise_PortBlair.jpeg",
    },
    {
      place: "Havelock",
      mapsQuery: "Havelock Island Swaraj Dweep hotels",
      notes:
        "Resort base for Kala Pathar, Radhanagar, scuba, and Elephant Beach days — plan dinner after long activity stretches.",
      image: "/images/andaman-guide/KalaPatharBeach_Havelock.jpeg",
    },
    {
      place: "Neil Island — Tango Beach Resort",
      mapsQuery: "Tango Beach Resort Neil Island",
      notes:
        "Private beach / pool setting, hammocks, slow mornings — favourite nights of the trip.",
      image: "/images/andaman-guide/NeilIsland-TangoResort.jpeg",
    },
    {
      place: "Port Blair — Hotel Idhaya (near Chiriya Tapu)",
      mapsQuery: "Hotel Idhaya Port Blair Chiriya Tapu",
      notes:
        "Finale base near Chiriya Tapu for sunset; short hop to the beach; good for wrapping Cellular Jail / Corbyn’s Cove / Flag Point.",
      image: "/images/andaman-guide/Hotel-Idhaya-PortBlair-nearChiriyaTapu.jpeg",
    },
  ],
} as const;

export const gettingAround = {
  heading: "Getting Around",
  items: [
    {
      text: "Inter-island: ferries (see comparison) — treat jetty timing as part of the day plan.",
      googleQuery: "Andaman inter island ferry Nautica Makruzz Green Ocean",
    },
    {
      text: "Ross Island: ferry from Aberdeen Jetty; golf cart on the island made navigation easy.",
      mapsQuery: "Aberdeen Jetty Port Blair",
    },
    {
      text: "Havelock: auto rickshaw for beach hops (e.g. to Kala Pathar).",
      mapsQuery: "Kalapathar Beach Havelock",
    },
    {
      text: "Elephant Beach: speed boats from near the Havelock jetty — allow buffer for chaos.",
      mapsQuery: "Elephant Beach Havelock",
    },
    {
      text: "Port Blair → Chiriya Tapu: local bus ~15 minutes from our final hotel area.",
      mapsQuery: "Chiriya Tapu Port Blair",
    },
    {
      text: "Jolly Buoy: road transfer to Wandoor Jetty + shared boat system with glass-bottom craft.",
      mapsQuery: "Wandoor Jetty Port Blair",
    },
  ],
} as const;

export const waterActivities = {
  heading: "Scuba / Snorkeling / Water Activities",
  items: [
    {
      title: "Scuba (Havelock)",
      notes:
        "First dive for us: brief orientation and signals, then the dive. We would do this again without hesitation.",
      mapsQuery: "Scuba diving Havelock Island",
    },
    {
      title: "Snorkeling — Elephant Beach",
      notes:
        "~30 min speed boat from the Havelock jetty (can feel chaotic). Snorkeling quality rivalled our scuba morning.",
      mapsQuery: "Elephant Beach Havelock",
    },
    {
      title: "Swimming — Kala Pathar",
      notes: "Clear water swim after arrival on Havelock; easy win with an auto transfer.",
      mapsQuery: "Kalapathar Beach Havelock",
    },
    {
      title: "Jolly Buoy beach time",
      notes: "Beach bathing after the glass-bottom approach; water clarity was a highlight.",
      mapsQuery: "Jolly Buoy Island Andaman",
    },
    {
      title: "Neil shoreline / tide pools",
      notes: "Low-tide coral paths and small marine life at Laxmanpur 1 — slower water joy than scuba.",
      mapsQuery: "Laxmanpur Beach 1 Neil Island",
    },
  ],
} as const;

