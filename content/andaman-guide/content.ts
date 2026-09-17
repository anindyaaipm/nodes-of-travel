/**
 * Andaman Travel Guide V2 — free handbook content.
 * Sourced only from Nodes of Travel Andaman trip notes (week-in-andaman) + recorded total.
 * Images: face-free only (personal/portrait trip photos excluded).
 */

export const guideMeta = {
  slug: "andaman",
  title: "ANDAMAN",
  tagline: "Travel Guide",
  subtitle: "A practical handbook from our self-planned week — Port Blair, Havelock & Neil Island",
  productLine: "Nodes of Travel · Free travel guide",
  access: "free" as const,
  /** Hosted free PDF — regenerate via Print / Save PDF or Chrome headless when content changes */
  pdfHref: "/downloads/andaman-practical-guide.pdf",
  pdfFileName: "Nodes_of_Travel_Andaman_Practical_Guide.pdf",
  brand: "Nodes of Travel",
  /** Face-free cover only — harbor/landscape, no identifiable portraits */
  coverImage: "/images/andaman-guide/cover.jpeg",
  relatedBlog: "week-in-andaman",
  relatedVideosPlaylist: "andaman-series",
} as const;

export const contents = [
  { n: "03", id: "before-you-go", title: "Before You Go" },
  { n: "03b", id: "practical-notes", title: "Practical Travel Notes" },
  { n: "04", id: "at-a-glance", title: "Andaman at a Glance" },
  { n: "05", id: "port-blair", title: "Port Blair" },
  { n: "06", id: "havelock", title: "Havelock" },
  { n: "07", id: "neil", title: "Neil Island" },
  { n: "08", id: "must-do", title: "Must-Do Experiences" },
  { n: "09", id: "jolly-buoy", title: "Jolly Buoy" },
  { n: "10", id: "water", title: "Scuba / Snorkeling / Water Activities" },
  { n: "11", id: "ferries", title: "Ferry Comparison" },
  { n: "12", id: "stays", title: "Where We Stayed" },
  { n: "13", id: "getting-around", title: "Getting Around" },
  { n: "14", id: "costs", title: "What We Actually Spent" },
  { n: "15", id: "plan-7", title: "7-Day Plan" },
  { n: "16", id: "plan-9", title: "9-Day Plan" },
  { n: "17", id: "again", title: "What We’d Do Again" },
  { n: "18", id: "differently", title: "What We’d Do Differently" },
  { n: "19", id: "checklist", title: "Packing / Booking Checklist" },
  { n: "20", id: "contacts", title: "Useful Contacts & Resources" },
  { n: "21", id: "final", title: "Final Nodes of Travel Recommendations" },
] as const;

export const beforeYouGo = {
  heading: "Before You Go",
  bullets: [
    {
      text: "Build flight buffer into day 1 — our arrival was massively delayed and stressful.",
      mapsQuery: "Veer Savarkar International Airport Port Blair",
    },
    {
      text: "Pre-book inter-island ferries; popular options include Nautica, Makruzz, and Green Ocean.",
      googleQuery: "Andaman ferry booking Nautica Makruzz Green Ocean",
    },
    {
      text: "For Havelock: plan an early Haddo Jetty departure (we left ~6:30am for a pre-booked Nautica Pro).",
      mapsQuery: "Haddo Jetty Port Blair",
    },
    {
      text: "Jolly Buoy: confirm season, permits, and book 1–2 days ahead — slots are limited.",
      mapsQuery: "Jolly Buoy Island Andaman",
    },
    {
      text: "Jolly Buoy boats leave from Wandoor Jetty (~30 km from Port Blair).",
      mapsQuery: "Wandoor Jetty Port Blair",
    },
    {
      text: "Stay near Aberdeen Jetty if Ross Island is a priority on arrival days.",
      mapsQuery: "Aberdeen Jetty Port Blair",
    },
    {
      text: "Keep a sunset backup near Chiriya Tapu — Munda Pahar trek was closed when we visited.",
      mapsQuery: "Chiriya Tapu Port Blair",
    },
    {
      text: "Schedule Cellular Jail when you have emotional bandwidth; we kept the full visit for the final morning.",
      mapsQuery: "Cellular Jail Port Blair",
    },
  ],
} as const;

/** Practical planning notes for the handbook */
export const practicalTravelNotes = {
  heading: "Practical Travel Notes",
  bullets: [
    {
      text: "Ferry tickets should be booked in advance, especially during peak season.",
      googleQuery: "Andaman inter island ferry booking",
    },
    {
      text: "Reporting at least 30 minutes before ferry departure is mandatory due to baggage scanning and boarding procedures.",
      mapsQuery: "Aberdeen Jetty Port Blair",
    },
    {
      text: "Jolly Buoy permits are limited and should be arranged ahead of time.",
      googleQuery: "Jolly Buoy Island booking permit Andaman",
    },
    {
      text: "Early morning ferries generally offer smoother sea conditions.",
      googleQuery: "Andaman ferry early morning sea conditions",
    },
    {
      text: "Weather between November and April is considered ideal for travel.",
      googleQuery: "Andaman best time to visit November to April",
    },
  ],
} as const;

export const atAGlance = {
  heading: "Andaman at a Glance",
  items: [
    { label: "Islands we based on", value: "Port Blair · Havelock (Swaraj Dweep) · Neil (Shaheed Dweep)" },
    { label: "Trip style", value: "Self-planned island hopping" },
    { label: "Our reference length", value: "7 days / 6 nights" },
    { label: "Cost model in this guide", value: "Double occupancy (couple planning sheet)" },
    { label: "Planner options", value: "7-day trip outline · 9-day with Baratang (+ Diglipur note)" },
    { label: "Ferries we used", value: "Nautica Pro · Makruzz · Green Ocean 1" },
    { label: "Signature experiences", value: "Ross Island · Jolly Buoy · Radhanagar · scuba · Elephant Beach · Laxmanpur sunsets · Cellular Jail" },
    { label: "Recorded double-occupancy total", value: "₹93,600" },
    { label: "Best for", value: "Travelers who want beaches + history + water activities without a packaged tour" },
  ],
  ourTake:
    "Free films and our blog give you the feeling of the islands. This guide is for decisions — where to base, which ferry, what to book ahead, how a couple-budget week spent, and how to shape 7 or 9 days.",
} as const;

/** Google Maps search URL */
export function mapsSearchUrl(query: string) {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(query)}`;
}

/** Generic Google search (operators, offices, brands) */
export function googleSearchUrl(query: string) {
  return `https://www.google.com/search?q=${encodeURIComponent(query)}`;
}

