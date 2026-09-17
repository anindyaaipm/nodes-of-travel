/**
 * Double-occupancy cost model from Nodes of Travel expense sheet
 * (7 Days / 6 Nights — Double Occupancy). Grand total ₹93,600.
 * Family trip total is intentionally not used in this free guide.
 */

export const costs = {
  heading: "What We Actually Spent",
  intro:
    "Figures below are for a 7 days / 6 nights trip on a double-occupancy basis — the planning model we recommend for couples. (Our own family trip total was higher; this guide uses the double-occupancy sheet so numbers stay useful for most readers.)",
  basisLabel: "Basis",
  basis: "7 Days · 6 Nights · Double occupancy",
  totalLabel: "Recorded double-occupancy total",
  total: "₹93,600",
  categories: [
    { label: "Flights (round trip to Port Blair)", amount: "₹30,000" },
    { label: "Hotels (6 nights)", amount: "₹24,000" },
    { label: "Food", amount: "₹6,500" },
    { label: "Private ferries (Nautica / Makruzz / Green Ocean)", amount: "₹10,500" },
    { label: "Cabs (airport, hotel ↔ jetty, etc.)", amount: "₹2,500" },
    { label: "Ross Island (Aberdeen Jetty)", amount: "₹1,000" },
    { label: "Port Blair sightseeing (Cellular Jail)", amount: "₹1,600" },
    { label: "Jolly Buoy", amount: "₹4,500" },
    { label: "Havelock sightseeing (Kala Pathar, Radhanagar)", amount: "₹1,000" },
    { label: "Havelock — scuba", amount: "₹7,000" },
    { label: "Elephant Beach water activity", amount: "₹4,000" },
    { label: "Neil Island sightseeing", amount: "₹1,000" },
  ],
  notes: [
    "Use as a real-world planning anchor — your season, hotel tier, and activity mix will differ.",
    "Ferry line covers three private-ferry legs at ₹3,500 each in this sheet.",
    "Hotel nights: Port Blair ₹3,000 × arrival/return pattern; Havelock/Neil ₹5,000 nights as logged.",
  ],
} as const;
