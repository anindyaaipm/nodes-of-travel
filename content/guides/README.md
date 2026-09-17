# Travel Guides — free + paid PDF planners

## Site navigation

- **Stories** → `/blog` (narratives)
- **Guides** → `/guides` (handbooks + PDF CTAs)

Free vs paid is decided per product on the Guides index / guide page — not as separate nav items.

Catalog: `lib/guides.ts`

| Type | Path | Access | PDF |
|------|------|--------|-----|
| **Free story** | `content/blog/*.md` | Free | — |
| **Handbook guide** | `content/{slug}-guide/` + `app/guides/{slug}/` | `free` or `paid` | Free: file in `public/downloads/` · Paid: Lemon Squeezy |

## Access model (planned)

| Destination | Guide page | PDF |
|-------------|------------|-----|
| Andaman | Free (full) | Free download |
| Italy | Free | Free download |
| Andalusia | Free | Free download |
| Rajasthan | Preview or full + buy CTA | Paid (Lemon Squeezy) |
| Golden Triangle | Later | Decide with content |

## Andaman (reference — free)

```
content/andaman-guide/     # structured handbook data
app/guides/andaman/        # page + print.css
public/downloads/andaman-practical-guide.pdf
```

Live: `/guides/andaman`  
Download: `/downloads/andaman-practical-guide.pdf`

Meta fields in `content.ts`:

- `access: "free" | "paid"`
- `pdfHref` / `pdfFileName` for free downloads
- (paid later) `buyUrl` → Lemon Squeezy checkout

## Regenerating the free PDF

After content edits:

1. Run the site locally (`npm run build && npm run start -- -p 3012`).
2. Either click **Print page** → Save as PDF, or use Chrome headless:

```bash
mkdir -p public/downloads
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless=new --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=public/downloads/andaman-practical-guide.pdf \
  http://localhost:3012/guides/andaman
```

3. Run `npm run build` again (production serves `public/` from the build), then commit the PDF.

## Adding the next free guide

Follow `GUIDE_TEMPLATE.md`. Set `access: "free"` and drop the PDF under `public/guides/`.

## Paid guides (Rajasthan later)

Same page shape + Lemon Squeezy product. Do **not** use LS for free Andaman/Italy/Andalusia PDFs.
