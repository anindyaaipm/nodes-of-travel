import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { guideProducts } from "@/lib/guides";

export const metadata: Metadata = {
  title: "Guides — Nodes of Travel",
  description:
    "Practical travel handbooks and PDF planners from trips we've taken — free downloads and paid planners.",
};

export default function GuidesIndexPage() {
  return (
    <div className="bg-background pb-20 pt-24 md:pb-28 md:pt-28">
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="editorial-eyebrow mb-4">Planning handbooks</p>
          <h1 className="font-display text-4xl md:text-5xl">Guides</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Practical companions for booking and choosing — stops, ferries, costs, and flexible day
            plans. Stories stay under Stories; these are the planning layers.
          </p>
        </header>

        <div className="mx-auto max-w-5xl space-y-12 md:space-y-16">
          {guideProducts.map((guide, index) => {
            const reverse = index % 2 === 1;
            const isLive = guide.status === "live" && guide.href;

            const media = (
              <div
                className={`image-cinematic-zoom relative aspect-[16/10] overflow-hidden md:col-span-6 ${
                  reverse ? "md:order-2" : ""
                } ${!isLive ? "opacity-90" : ""}`}
              >
                <Image
                  src={guide.image}
                  alt={guide.imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="image-cinematic object-cover object-center"
                />
              </div>
            );

            const body = (
              <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                <p className="editorial-eyebrow mb-3">
                  {guide.access === "free" ? "Free PDF" : "PDF"}
                </p>
                <h2 className="font-display text-2xl leading-snug md:text-3xl">{guide.title}</h2>
                <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
                  {guide.subtitle}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {isLive ? (
                    <>
                      <Link href={guide.href!} className="btn-editorial-primary !px-5 !py-2.5 text-[0.65rem]">
                        Open guide
                      </Link>
                      {guide.access === "free" && guide.pdfHref ? (
                        <a
                          href={guide.pdfHref}
                          download={guide.pdfFileName}
                          className="btn-editorial-outline-dark !px-5 !py-2.5 text-[0.65rem]"
                        >
                          Download free PDF
                        </a>
                      ) : null}
                      {guide.access === "paid" && guide.buyUrl ? (
                        <a
                          href={guide.buyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-editorial-outline-dark !px-5 !py-2.5 text-[0.65rem]"
                        >
                          Buy PDF
                        </a>
                      ) : null}
                    </>
                  ) : (
                    <span className="inline-flex items-center text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      Handbook in progress
                    </span>
                  )}
                </div>

                {guide.storySlug ? (
                  <p className="mt-5 text-sm text-muted-foreground">
                    Prefer the narrative?{" "}
                    <Link href={`/blog/${guide.storySlug}`} className="editorial-link">
                      Read the story
                    </Link>
                  </p>
                ) : null}
              </div>
            );

            return isLive ? (
              <article key={guide.slug} className="grid items-center gap-8 md:grid-cols-12 md:gap-12">
                <Link href={guide.href!} className="contents group">
                  {media}
                </Link>
                {body}
              </article>
            ) : (
              <article
                key={guide.slug}
                className="grid items-center gap-8 border border-border/60 bg-[#f3efe7]/40 px-4 py-8 md:grid-cols-12 md:gap-12 md:px-6"
              >
                {media}
                {body}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
