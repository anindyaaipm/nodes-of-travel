/**
 * Flexible plans — planner tools, not memoir.
 * 7-day mirrors what we ran; 9-day keeps that skeleton and adds Baratang (+ Diglipur note).
 */

export type PlanDay = { label: string; focus: string };

export const plan7 = {
  heading: "7-Day Plan",
  badge: "Closest to our trip",
  note: "Outline of how we actually moved — use as a booking skeleton, not a script to narrate.",
  days: [
    { label: "Days 1–2", focus: "Port Blair · Ross Island · Jolly Buoy · Cellular Jail light-and-sound" },
    { label: "Days 3–4", focus: "Nautica to Havelock · Kala Pathar · Radhanagar · scuba · Elephant Beach" },
    { label: "Day 5", focus: "Makruzz to Neil · resort beach · Laxmanpur 1 & 2" },
    { label: "Days 6–7", focus: "Neil morning walk · Green Ocean to Port Blair · Chiriya Tapu · Corbyn’s Cove · Flag Point · Cellular Jail · depart" },
  ] as PlanDay[],
} as const;

export const plan9 = {
  heading: "9-Day Plan",
  badge: "Our week + Baratang",
  note: "Same seven days we ran, then Baratang on Day 8. Honorable mention: with two more days beyond this outline, add Diglipur (North Andaman).",
  days: [
    { label: "Days 1–2", focus: "Port Blair · Ross Island · Jolly Buoy · Cellular Jail light-and-sound" },
    { label: "Days 3–4", focus: "Nautica to Havelock · Kala Pathar · Radhanagar · scuba · Elephant Beach" },
    { label: "Day 5", focus: "Makruzz to Neil · resort beach · Laxmanpur 1 & 2" },
    { label: "Days 6–7", focus: "Neil morning walk · Green Ocean to Port Blair · Chiriya Tapu · Corbyn’s Cove · Flag Point · Cellular Jail" },
    {
      label: "Day 8",
      focus: "Baratang day trip — Jarawa Tribal Reserve corridor (strict permit/photography rules) · limestone caves / mud volcano area as offered",
    },
    { label: "Day 9", focus: "Port Blair buffer · any leftover Cellular Jail / Flag Point · depart" },
  ] as PlanDay[],
  honourableMention:
    "If you have two more days after Day 9, add Diglipur (Ross & Smith Islands / North Andaman) rather than packing more into the middle islands.",
} as const;
