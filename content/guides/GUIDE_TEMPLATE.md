# Guide handbook — checklist for the next destination

Use Andaman as the working example: `content/andaman-guide/` + `app/guides/andaman/`.

## 1. Create folders

```
content/{slug}-guide/
public/images/{slug}-guide/
public/downloads/       # free PDF downloads live here
app/guides/{slug}/
```

Example slug: `italy`, `spain-andalusia`, `rajasthan`

## 2. Content modules (same shape every time)

| File | Fill with |
|------|-----------|
| `content.ts` | Title, `access: "free" \| "paid"`, `pdfHref` (if free), before-you-go, practical notes, at-a-glance, link helpers |
| `itinerary.ts` | Place chapters with **mapped stops** (`name`, `duration`, `note`, `mapsQuery`), ferries, stays, water, tips |
| `costs.ts` | Clear basis (e.g. double occupancy) + category/day tables — only real sheet numbers |
| `plans.ts` | 5 / 7 / 9 day planner strips |
| `experiences.ts` | Do again / differently / checklist / contacts — `mapsQuery` or `googleQuery` where useful |
| `index.ts` | Re-export everything |

## 3. Images

- Face-free only.
- Wire paths in place/stay modules.

## 4. Page

Copy `app/guides/andaman/` (`page.tsx`, `print.css`, `PrintGuideButton.tsx`).  
Point imports at `@/content/{slug}-guide`.  
Free guides: primary CTA = **Download free PDF**.  
Paid guides (later): primary CTA = **Buy PDF** → Lemon Squeezy.

## 5. PDF file

- Free → `public/downloads/{slug}-practical-guide.pdf` (see README for Chrome export).
- Paid → upload to Lemon Squeezy only (optional teaser PDF on site).

## 6. One Cursor prompt you can reuse

```
Add a free travel guide handbook for {DESTINATION}.
Copy content/andaman-guide and app/guides/andaman.
Use only facts from content/blog/{slug}.md and any attached expense sheet.
Face-free images are in public/images/{slug}-guide/.
Every place/hotel/ferry/office must have mapsQuery or googleQuery.
Set access: "free" and wire Download free PDF to public/downloads/{slug}-practical-guide.pdf.
Do not change homepage, n8n, or /api/submit-trip.
```
