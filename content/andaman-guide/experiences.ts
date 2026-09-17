export const experiences = {
  doAgain: {
    heading: "What We’d Do Again",
    items: [
      { text: "More weight on Neil Island’s slow pace — favourite stop", mapsQuery: "Neil Island Shaheed Dweep" },
      { text: "First scuba dive on Havelock", mapsQuery: "Scuba diving Havelock Island" },
      { text: "Elephant Beach snorkeling", mapsQuery: "Elephant Beach Havelock" },
      { text: "Radhanagar sunset", mapsQuery: "Radhanagar Beach Havelock" },
      { text: "Laxmanpur 2 sunset on Neil", mapsQuery: "Laxmanpur Beach 2 Neil Island" },
      { text: "Morning shoreline walk on Neil", mapsQuery: "Bharatpur Beach Neil Island" },
      { text: "Open-deck Green Ocean return", googleQuery: "Green Ocean ferry Andaman" },
      { text: "Ross Island + Port Blair terrace evenings", mapsQuery: "Ross Island Port Blair" },
      { text: "Jolly Buoy when in season", mapsQuery: "Jolly Buoy Island Andaman" },
      { text: "Cellular Jail visit (kept honest by placing it late)", mapsQuery: "Cellular Jail Port Blair" },
    ],
  },
  differently: {
    heading: "What We’d Do Differently",
    items: [
      { text: "More buffer around inbound flights", mapsQuery: "Veer Savarkar International Airport Port Blair" },
      { text: "Backup plan when Munda Pahar is closed (we used Chiriya Tapu)", mapsQuery: "Chiriya Tapu Port Blair" },
      { text: "Extra time allowance for Elephant Beach boat logistics", mapsQuery: "Elephant Beach Havelock" },
      { text: "Treat Jolly Buoy season + prior-day tickets as fixed planning rules", mapsQuery: "Wandoor Jetty Port Blair" },
      { text: "Allocate more nights on Neil if stillness is the goal", mapsQuery: "Neil Island Shaheed Dweep" },
    ],
  },
} as const;

export const checklist = {
  heading: "Packing / Booking Checklist",
  booking: [
    { text: "Flights with arrival buffer into Port Blair", mapsQuery: "Veer Savarkar International Airport Port Blair" },
    {
      text: "Inter-island ferries in advance (peak season especially) — report ≥30 minutes before departure",
      googleQuery: "Andaman ferry booking Nautica Makruzz Green Ocean",
    },
    {
      text: "Jolly Buoy: forest permit + book 1–2 days ahead (Directorate of Tourism / package)",
      mapsQuery: "Directorate of Tourism Port Blair",
    },
    { text: "Scuba slot on Havelock if diving matters to you", mapsQuery: "Scuba diving Havelock Island" },
    {
      text: "Stays positioned for Aberdeen Jetty (arrival) and/or Chiriya Tapu (finale)",
      mapsQuery: "Aberdeen Jetty Port Blair",
    },
  ],
  packing: [
    "Reef-safe sunscreen / sun protection for boat days",
    "Light cover-up for ferries and jetties",
    "Water shoes helpful for coral / rocky entries (Neil low tide, boat landings)",
    "Dry bag for speed-boat / rain surprises",
    "No disposable plastics for Jolly Buoy — declare or leave behind",
    "Comfortable evening layer for Cellular Jail programs",
  ],
  note: "Packing items are practical suggestions grounded in what our days involved — not a sponsored gear list.",
} as const;

export const contacts = {
  heading: "Useful Contacts & Resources",
  intro: "Names and places from our notes — verify current timings and bookings yourself.",
  items: [
    {
      label: "Nautica Pro",
      detail: "Private ferry operator (we used Port Blair → Havelock)",
      googleQuery: "Nautica Pro ferry Andaman",
    },
    {
      label: "Makruzz",
      detail: "Private ferry operator (we used Havelock → Neil)",
      googleQuery: "Makruzz ferry Andaman",
    },
    {
      label: "Green Ocean 1",
      detail: "Open-deck ferry (we used Neil → Port Blair)",
      googleQuery: "Green Ocean ferry Andaman",
    },
    {
      label: "Aberdeen Jetty",
      detail: "Ross Island departures",
      mapsQuery: "Aberdeen Jetty Port Blair",
    },
    {
      label: "Haddo Jetty",
      detail: "Havelock ferry departures from Port Blair",
      mapsQuery: "Haddo Jetty Port Blair",
    },
    {
      label: "Wandoor Jetty",
      detail: "Jolly Buoy boat departures (~30 km from Port Blair)",
      mapsQuery: "Wandoor Jetty Port Blair",
    },
    {
      label: "Directorate of Tourism",
      detail: "Jolly Buoy permits / offline booking in Port Blair",
      mapsQuery: "Directorate of Tourism Port Blair",
    },
    {
      label: "Veer Savarkar Airport",
      detail: "Port Blair arrival / departure",
      mapsQuery: "Veer Savarkar International Airport Port Blair",
    },
    {
      label: "Hotel Star Paradise",
      detail: "Port Blair arrival stay",
      mapsQuery: "Hotel Star Paradise Port Blair",
    },
    {
      label: "Tango Beach Resort",
      detail: "Neil Island stay",
      mapsQuery: "Tango Beach Resort Neil Island",
    },
    {
      label: "Hotel Idhaya",
      detail: "Port Blair finale stay near Chiriya Tapu",
      mapsQuery: "Hotel Idhaya Port Blair Chiriya Tapu",
    },
    { label: "Free story (blog)", detail: "/blog/week-in-andaman", href: "/blog/week-in-andaman" },
    { label: "Free films", detail: "/videos#andaman-series", href: "/videos#andaman-series" },
    { label: "Destination page", detail: "/destinations/andaman", href: "/destinations/andaman" },
  ],
} as const;

export const finalRecs = {
  heading: "Final Nodes of Travel Recommendations",
  paragraphs: [
    "This free handbook is for planning — places, ferries, water decisions, real spend, and flexible 7/9-day shapes — not another retelling of our vlog.",
    "Watch the films for emotion; read the blog for the narrative; download the PDF when you want it offline on the plane.",
    "If you only have one bias to steal from us: do not under-allocate Neil Island.",
  ],
  ctaNote: "Download the free PDF from the top of this page, or print from your browser anytime.",
} as const;
