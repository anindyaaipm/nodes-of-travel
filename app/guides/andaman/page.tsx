import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./print.css";
import PrintGuideButton from "./PrintGuideButton";
import {
  guideMeta,
  contents,
  beforeYouGo,
  practicalTravelNotes,
  atAGlance,
  mapsSearchUrl,
  googleSearchUrl,
  places,
  jollyBuoy,
  mustDo,
  waterActivities,
  ferryComparison,
  whereWeStayed,
  gettingAround,
  costs,
  plan7,
  plan9,
  experiences,
  checklist,
  contacts,
  finalRecs,
  type MappedStop,
} from "@/content/andaman-guide";

export const metadata: Metadata = {
  title: `${guideMeta.title} ${guideMeta.tagline} | Nodes of Travel`,
  description: guideMeta.subtitle,
};

function extHref(item: { mapsQuery?: string; googleQuery?: string; href?: string }) {
  if (item.href) return item.href;
  if (item.mapsQuery) return mapsSearchUrl(item.mapsQuery);
  if (item.googleQuery) return googleSearchUrl(item.googleQuery);
  return undefined;
}

function ExtLink({
  href,
  children,
  className = "text-primary underline-offset-2 hover:underline",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  const internal = href.startsWith("/");
  if (internal) {
    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  );
}

function Section({
  id,
  number,
  title,
  children,
  breakBefore = false,
}: {
  id: string;
  number?: string;
  title: string;
  children: ReactNode;
  breakBefore?: boolean;
}) {
  return (
    <section
      id={id}
      className={`guide-section border-b border-border/50 py-10 md:py-12 ${
        breakBefore ? "guide-section-break" : ""
      }`}
    >
      <div className="mb-5 flex items-baseline gap-3">
        {number ? <span className="editorial-eyebrow !text-primary/80">{number}</span> : null}
        <h2 className="font-display text-2xl md:text-3xl">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function BulletList({ items }: { items: readonly string[] }) {
  return (
    <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/85 md:text-base">
      {items.map((item) => (
        <li key={item.slice(0, 56)} className="flex gap-2">
          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function LinkedBulletList({
  items,
}: {
  items: readonly { text: string; mapsQuery?: string; googleQuery?: string; href?: string }[];
}) {
  return (
    <ul className="space-y-2 text-[0.95rem] leading-relaxed text-foreground/85 md:text-base">
      {items.map((item) => {
        const href = extHref(item);
        return (
          <li key={item.text.slice(0, 56)} className="flex gap-2">
            <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
            {href ? (
              <ExtLink href={href} className="text-foreground/85 underline-offset-2 hover:text-primary hover:underline">
                {item.text}
              </ExtLink>
            ) : (
              <span>{item.text}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}

function OurTake({ text }: { text: string }) {
  return (
    <p className="mt-5 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground md:text-[0.95rem]">
      <span className="font-medium text-foreground/80">Our take — </span>
      {text}
    </p>
  );
}

/** Delhi-guide style compact mapped stops */
function StopList({ stops }: { stops: readonly MappedStop[] }) {
  return (
    <ol className="divide-y divide-border/60 border border-border/70">
      {stops.map((stop, idx) => (
        <li key={stop.name} className="grid gap-2 px-4 py-4 sm:grid-cols-[2rem_1fr_auto] sm:items-start sm:gap-4">
          <span className="font-display text-lg text-primary/80">{idx + 1}</span>
          <div>
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <h3 className="font-display text-xl leading-snug">
                <ExtLink href={mapsSearchUrl(stop.mapsQuery)} className="hover:text-primary">
                  {stop.name}
                </ExtLink>
              </h3>
              {stop.duration ? (
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  {stop.duration}
                </span>
              ) : null}
            </div>
            <p className="mt-1 text-sm leading-relaxed text-foreground/80">{stop.note}</p>
            {stop.transferHint ? (
              <p className="mt-1 text-xs text-muted-foreground">{stop.transferHint}</p>
            ) : null}
          </div>
          <ExtLink
            href={mapsSearchUrl(stop.mapsQuery)}
            className="guide-action-link text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary transition-colors hover:text-primary/80 sm:pt-1"
          >
            Get directions →
          </ExtLink>
          <span className="guide-print-only mt-1 text-[0.65rem] text-muted-foreground sm:pt-1">
            Maps: {stop.mapsQuery}
          </span>
        </li>
      ))}
    </ol>
  );
}

function PlanBlock({
  id,
  number,
  heading,
  badge,
  note,
  days,
  honourableMention,
  breakBefore,
}: {
  id: string;
  number: string;
  heading: string;
  badge: string;
  note: string;
  days: readonly { label: string; focus: string }[];
  honourableMention?: string;
  breakBefore?: boolean;
}) {
  return (
    <Section id={id} number={number} title={heading} breakBefore={breakBefore}>
      <p className="editorial-eyebrow mb-2">{badge}</p>
      <p className="mb-5 text-sm text-muted-foreground md:text-[0.95rem]">{note}</p>
      <ol className="divide-y divide-border/60 border border-border/70">
        {days.map((d) => (
          <li key={d.label} className="grid gap-1 px-4 py-3 sm:grid-cols-[6.5rem_1fr] sm:gap-4">
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-foreground/70">
              {d.label}
            </span>
            <span className="text-[0.95rem] text-foreground/85">{d.focus}</span>
          </li>
        ))}
      </ol>
      {honourableMention ? (
        <p className="mt-5 border-l-2 border-primary/40 pl-4 text-sm leading-relaxed text-muted-foreground">
          <span className="font-medium text-foreground/80">Honorable mention — </span>
          {honourableMention}
        </p>
      ) : null}
    </Section>
  );
}

export default function AndamanGuidePage() {
  return (
    <article className="andaman-guide bg-background pb-16">
      {/* Sticky under fixed site nav — was previously buried under the header */}
      <div className="guide-no-print sticky top-[4.5rem] z-40 border-b border-border/60 bg-[#f3efe7]/95 backdrop-blur-md md:top-[5rem]">
        <div className="mx-auto flex max-w-[210mm] flex-wrap items-center justify-between gap-3 px-4 py-3 md:px-8">
          <p className="text-sm text-muted-foreground">{guideMeta.productLine}</p>
          <div className="flex flex-wrap gap-2 sm:gap-3">
            <a
              href={guideMeta.pdfHref}
              download={guideMeta.pdfFileName}
              className="btn-editorial-primary !px-4 !py-2 text-[0.65rem] sm:!px-5 sm:!py-2.5"
            >
              Download free PDF
            </a>
            <PrintGuideButton />
            <Link
              href="/guides"
              className="btn-editorial-outline-dark !px-4 !py-2 text-[0.65rem] sm:!px-5 sm:!py-2.5"
            >
              All guides
            </Link>
            <Link
              href="/destinations/andaman"
              className="btn-editorial-outline-dark !px-4 !py-2 text-[0.65rem] sm:!px-5 sm:!py-2.5"
            >
              Destination
            </Link>
            <Link
              href="/blog/week-in-andaman"
              className="btn-editorial-outline-dark !px-4 !py-2 text-[0.65rem] sm:!px-5 sm:!py-2.5"
            >
              Free story
            </Link>
          </div>
        </div>
      </div>

      {/* 1. Cover — face-free harbor landscape only (div, not header: site nav is <header>) */}
      <div className="guide-hero relative flex min-h-[70svh] items-end overflow-hidden md:min-h-[78svh]">
        <Image
          src={guideMeta.coverImage}
          alt="Andaman Islands harbor"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="guide-hero-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/25" />
        <div className="relative z-10 mx-auto w-full max-w-[210mm] px-4 pb-14 pt-16 md:px-8 md:pb-16">
          <p className="editorial-eyebrow mb-3 text-white/70">{guideMeta.brand}</p>
          <h1 className="font-display text-5xl tracking-[0.06em] text-white md:text-7xl">
            {guideMeta.title}
          </h1>
          <p className="mt-3 font-display text-2xl text-white/90 md:text-3xl">{guideMeta.tagline}</p>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {guideMeta.subtitle}
          </p>
          <p className="guide-print-only mt-8 max-w-md text-sm leading-relaxed text-white/75">
            Port Blair · Havelock · Neil Island — a practical handbook from our self-planned week.
            Double-occupancy cost model. Not a packaged tour brochure.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-[210mm] px-4 md:px-8">
        <Section id="contents" number="02" title="Contents">
          <ol className="columns-1 gap-x-10 sm:columns-2">
            {contents.map((item) => (
              <li key={item.id} className="mb-2 break-inside-avoid">
                <a
                  href={`#${item.id}`}
                  className="flex gap-3 text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  <span className="tabular-nums text-muted-foreground">{item.n}</span>
                  <span>{item.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </Section>

        <Section id="before-you-go" number="03" title={beforeYouGo.heading} breakBefore>
          <LinkedBulletList items={beforeYouGo.bullets} />
        </Section>

        <Section id="practical-notes" number="03b" title={practicalTravelNotes.heading}>
          <LinkedBulletList items={practicalTravelNotes.bullets} />
        </Section>

        <Section id="at-a-glance" number="04" title={atAGlance.heading}>
          <dl className="guide-table divide-y divide-border/70 border border-border/70">
            {atAGlance.items.map((item) => (
              <div
                key={item.label}
                className="grid gap-1 px-3 py-3 sm:grid-cols-[11rem_1fr] sm:gap-4 sm:px-4"
              >
                <dt className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  {item.label}
                </dt>
                <dd className="text-[0.95rem] text-foreground/90">{item.value}</dd>
              </div>
            ))}
          </dl>
          <OurTake text={atAGlance.ourTake} />
        </Section>

        {/* 5–7 Island chapters with mapped stops */}
        {places.map((place, i) => (
          <Section
            key={place.id}
            id={place.id}
            number={String(5 + i).padStart(2, "0")}
            title={place.heading}
            breakBefore={i === 0}
          >
            <p className="mb-2 text-sm font-medium text-foreground/75">{place.role}</p>
            {place.image ? (
              <figure className="guide-figure relative mb-5 aspect-[16/9] overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.imageAlt || place.heading}
                  fill
                  sizes="(max-width: 800px) 100vw, 210mm"
                  className="object-cover object-center"
                />
              </figure>
            ) : null}
            <p className="editorial-eyebrow mb-3">Mapped stops</p>
            <p className="guide-no-print mb-4 text-xs text-muted-foreground">
              Total stops: {place.stops.length} · Tap Get directions for Google Maps
            </p>
            <p className="guide-print-only mb-4 text-xs text-muted-foreground">
              Total stops: {place.stops.length} · Search place names in Google Maps
            </p>
            <StopList stops={place.stops} />
            <OurTake text={place.ourTake} />
          </Section>
        ))}

        <Section id="must-do" number="08" title={mustDo.heading} breakBefore>
          <p className="mb-5 text-sm text-muted-foreground">{mustDo.intro}</p>
          <ol className="space-y-3">
            {mustDo.items.map((item, idx) => {
              const href = extHref(item);
              return (
                <li
                  key={item.title}
                  className="grid gap-1 border-b border-border/40 pb-3 sm:grid-cols-[1.5rem_1fr_auto] sm:items-start"
                >
                  <span className="text-xs tabular-nums text-muted-foreground">{idx + 1}.</span>
                  <div>
                    {href ? (
                      <ExtLink href={href} className="font-medium text-foreground hover:text-primary">
                        {item.title}
                      </ExtLink>
                    ) : (
                      <p className="font-medium text-foreground">{item.title}</p>
                    )}
                    <p className="text-sm text-muted-foreground">{item.note}</p>
                  </div>
                  {href ? (
                    <ExtLink
                      href={href}
                      className="guide-action-link text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
                    >
                      Open →
                    </ExtLink>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </Section>

        <Section id="jolly-buoy" number="09" title={jollyBuoy.heading}>
          {jollyBuoy.image ? (
            <figure className="guide-figure relative mb-5 aspect-[16/9] overflow-hidden">
              <Image
                src={jollyBuoy.image}
                alt={jollyBuoy.imageAlt}
                fill
                sizes="(max-width: 800px) 100vw, 210mm"
                className="object-cover object-center"
              />
            </figure>
          ) : null}
          <p className="editorial-eyebrow mb-3">Mapped stops</p>
          <StopList stops={jollyBuoy.stops} />
          <p className="editorial-eyebrow mb-3 mt-8">{jollyBuoy.tipsHeading}</p>
          <LinkedBulletList items={jollyBuoy.tips} />
          <OurTake text={jollyBuoy.ourTake} />
        </Section>

        <Section id="water" number="10" title={waterActivities.heading} breakBefore>
          <div className="space-y-4">
            {waterActivities.items.map((item) => {
              const href = item.mapsQuery ? mapsSearchUrl(item.mapsQuery) : undefined;
              return (
                <div key={item.title} className="border border-border/60 px-4 py-3">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    {href ? (
                      <h3 className="font-display text-xl">
                        <ExtLink href={href} className="hover:text-primary">
                          {item.title}
                        </ExtLink>
                      </h3>
                    ) : (
                      <h3 className="font-display text-xl">{item.title}</h3>
                    )}
                    {href ? (
                      <ExtLink
                        href={href}
                        className="guide-action-link text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
                      >
                        Get directions →
                      </ExtLink>
                    ) : null}
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-foreground/85">{item.notes}</p>
                </div>
              );
            })}
          </div>
        </Section>

        <Section id="ferries" number="11" title={ferryComparison.heading}>
          <p className="mb-5 text-sm text-muted-foreground">{ferryComparison.intro}</p>
          <div className="guide-table overflow-x-auto">
            <table className="w-full min-w-[28rem] border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-border/80">
                  <th className="py-2 pr-3 font-semibold">Ferry</th>
                  <th className="py-2 pr-3 font-semibold">Leg we used</th>
                  <th className="py-2 pr-3 font-semibold">Deck</th>
                  <th className="py-2 font-semibold">Our notes</th>
                </tr>
              </thead>
              <tbody>
                {ferryComparison.rows.map((row) => (
                  <tr key={row.name} className="border-b border-border/50 align-top">
                    <td className="py-3 pr-3 font-medium">
                      <ExtLink href={googleSearchUrl(row.nameQuery)} className="hover:text-primary hover:underline">
                        {row.name}
                      </ExtLink>
                    </td>
                    <td className="py-3 pr-3 text-foreground/80">
                      <ExtLink
                        href={mapsSearchUrl(row.legMapsQuery)}
                        className="text-foreground/80 hover:text-primary hover:underline"
                      >
                        {row.leg}
                      </ExtLink>
                    </td>
                    <td className="py-3 pr-3 text-foreground/80">{row.deck}</td>
                    <td className="py-3 text-foreground/80">{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="stays" number="12" title={whereWeStayed.heading} breakBefore>
          <p className="mb-5 text-sm text-muted-foreground">{whereWeStayed.intro}</p>
          <div className="space-y-8">
            {whereWeStayed.stays.map((stay) => (
              <div key={stay.place} className="border-b border-border/40 pb-6 last:border-0">
                {"image" in stay && stay.image ? (
                  <figure className="guide-figure relative mb-4 aspect-[16/10] overflow-hidden">
                    <Image
                      src={stay.image}
                      alt={stay.place}
                      fill
                      sizes="(max-width: 800px) 100vw, 210mm"
                      className="object-cover object-center"
                    />
                  </figure>
                ) : null}
                <h3 className="font-display text-xl">
                  <ExtLink href={mapsSearchUrl(stay.mapsQuery)} className="hover:text-primary">
                    {stay.place}
                  </ExtLink>
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-foreground/85">{stay.notes}</p>
                <ExtLink
                  href={mapsSearchUrl(stay.mapsQuery)}
                  className="guide-action-link mt-2 inline-block text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
                >
                  Open in Maps →
                </ExtLink>
                <p className="guide-print-only mt-2 text-[0.65rem] text-muted-foreground">
                  Maps: {stay.mapsQuery}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="getting-around" number="13" title={gettingAround.heading}>
          <LinkedBulletList items={gettingAround.items} />
        </Section>

        <Section id="costs" number="14" title={costs.heading} breakBefore>
          <p className="text-sm text-muted-foreground">{costs.intro}</p>
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
            {costs.basisLabel}: {costs.basis}
          </p>
          <div className="mt-6 border border-border/70 bg-[#f3efe7] px-5 py-8 text-center">
            <p className="editorial-eyebrow mb-2">{costs.totalLabel}</p>
            <p className="font-display text-4xl md:text-5xl">{costs.total}</p>
          </div>

          <p className="editorial-eyebrow mb-3 mt-10">By category</p>
          <dl className="guide-table divide-y divide-border/70 border border-border/70">
            {costs.categories.map((row) => (
              <div
                key={row.label}
                className="grid gap-1 px-3 py-3 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-4 sm:px-4"
              >
                <dt className="text-sm text-foreground/85">{row.label}</dt>
                <dd className="text-sm font-semibold tabular-nums">{row.amount}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {costs.notes.map((n) => (
              <li key={n.slice(0, 40)}>{n}</li>
            ))}
          </ul>
        </Section>

        <PlanBlock
          id="plan-7"
          number="15"
          heading={plan7.heading}
          badge={plan7.badge}
          note={plan7.note}
          days={plan7.days}
          breakBefore
        />
        <PlanBlock
          id="plan-9"
          number="16"
          heading={plan9.heading}
          badge={plan9.badge}
          note={plan9.note}
          days={plan9.days}
          honourableMention={plan9.honourableMention}
        />

        <Section id="again" number="17" title={experiences.doAgain.heading} breakBefore>
          <LinkedBulletList items={experiences.doAgain.items} />
        </Section>
        <Section id="differently" number="18" title={experiences.differently.heading}>
          <LinkedBulletList items={experiences.differently.items} />
        </Section>

        <Section id="checklist" number="19" title={checklist.heading} breakBefore>
          <p className="editorial-eyebrow mb-3">Book ahead</p>
          <LinkedBulletList items={checklist.booking} />
          <p className="editorial-eyebrow mb-3 mt-8">Pack</p>
          <BulletList items={checklist.packing} />
          <p className="mt-5 text-sm text-muted-foreground">{checklist.note}</p>
        </Section>

        <Section id="contacts" number="20" title={contacts.heading}>
          <p className="mb-5 text-sm text-muted-foreground">{contacts.intro}</p>
          <dl className="guide-table divide-y divide-border/70 border border-border/70">
            {contacts.items.map((item) => {
              const href = extHref(item);
              return (
                <div
                  key={item.label}
                  className="grid gap-1 px-3 py-3 sm:grid-cols-[10rem_1fr_auto] sm:items-center sm:gap-4 sm:px-4"
                >
                  <dt className="text-sm font-medium">
                    {href ? (
                      <ExtLink href={href} className="hover:text-primary hover:underline">
                        {item.label}
                      </ExtLink>
                    ) : (
                      item.label
                    )}
                  </dt>
                  <dd className="text-sm text-foreground/85">{item.detail}</dd>
                  {href ? (
                    <ExtLink
                      href={href}
                      className="guide-action-link text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-primary"
                    >
                      Open →
                    </ExtLink>
                  ) : null}
                </div>
              );
            })}
          </dl>
        </Section>

        <Section id="final" number="21" title={finalRecs.heading} breakBefore>
          <div className="space-y-4 text-[0.95rem] leading-relaxed text-foreground/85">
            {finalRecs.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
          <p className="mt-6 text-sm italic text-muted-foreground">{finalRecs.ctaNote}</p>
          <div className="guide-no-print mt-8 flex flex-wrap gap-3">
            <a
              href={guideMeta.pdfHref}
              download={guideMeta.pdfFileName}
              className="btn-editorial-primary"
            >
              Download free PDF
            </a>
            <Link href="/videos#andaman-series" className="btn-editorial-outline-dark">
              Watch free films
            </Link>
            <Link href="/plan-your-trip" className="btn-editorial-outline-dark">
              Plan Your Trip
            </Link>
          </div>
        </Section>

        <div className="guide-section guide-colophon border-t border-border/60 py-12 text-center">
          <p className="editorial-eyebrow mb-2">{guideMeta.brand}</p>
          <p className="font-display text-xl">
            {guideMeta.title} · {guideMeta.tagline}
          </p>
          <p className="guide-print-only mx-auto mt-4 max-w-md text-xs leading-relaxed text-muted-foreground">
            Phone numbers, prices, ferry schedules, hotel rates, permits, and seasons can change.
            Verify with providers and official Andaman Tourism before travel. Personal account from our
            trip — not a guarantee or endorsement.
          </p>
          <p className="guide-print-only mt-3 text-[0.65rem] uppercase tracking-[0.16em] text-muted-foreground">
            Nodes of Travel · Free handbook · V2
          </p>
        </div>
      </div>
    </article>
  );
}
