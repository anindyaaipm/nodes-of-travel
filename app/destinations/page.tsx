import Image from "next/image";
import Link from "next/link";
import { destinationRegions } from "@/lib/destinations";

export const metadata = {
  title: "Destinations — Nodes of Travel",
  description:
    "Explore destinations we've travelled — watch the films or read the guides from that part of the world.",
};

export default function DestinationsPage() {
  return (
    <div className="bg-background pb-20 pt-24 md:pb-28 md:pt-28">
      <div className="container mx-auto px-4">
        <header className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
          <p className="editorial-eyebrow mb-4">Explore</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl">Destinations</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Open a destination for films, guides, and place photography from trips we&apos;ve taken.
          </p>
        </header>

        {/* Region jump links — same idea as a destination index map */}
        <nav
          aria-label="Destination regions"
          className="mb-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 border-y border-border/80 py-5"
        >
          {destinationRegions.map((region) => (
            <a
              key={region.id}
              href={`#${region.id}`}
              className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-foreground/70 transition-colors hover:text-primary"
            >
              {region.name}
            </a>
          ))}
        </nav>

        <div className="space-y-20 md:space-y-24">
          {destinationRegions.map((region) => (
            <section key={region.id} id={region.id} className="scroll-mt-28">
              <div className="mb-8 flex items-end justify-between gap-4 border-b border-border/70 pb-4">
                <h2 className="font-display text-3xl md:text-4xl">{region.name}</h2>
                <span className="editorial-eyebrow hidden sm:inline">
                  {region.places.length}{" "}
                  {region.places.length === 1 ? "destination" : "destinations"}
                </span>
              </div>

              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {region.places.map((place) => (
                  <article
                    key={place.slug}
                    id={place.slug}
                    className="group flex scroll-mt-28 flex-col"
                  >
                    <Link
                      href={`/destinations/${place.slug}`}
                      className="image-cinematic-zoom relative aspect-[16/10] overflow-hidden bg-muted"
                    >
                      <Image
                        src={place.image}
                        alt={place.imageAlt}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="image-cinematic object-cover object-center"
                        unoptimized={place.image.startsWith("http")}
                      />
                    </Link>

                    <div className="mt-5 flex flex-1 flex-col">
                      <Link href={`/destinations/${place.slug}`}>
                        <h3 className="font-display text-2xl leading-snug transition-colors group-hover:text-primary">
                          {place.name}
                        </h3>
                      </Link>
                      <p className="mt-2 text-sm text-muted-foreground">{place.subtitle}</p>

                      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 border-t border-border/60 pt-4">
                        <Link
                          href={`/destinations/${place.slug}`}
                          className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                        >
                          View destination
                        </Link>
                        {place.playlistId ? (
                          <Link
                            href={`/videos#${place.playlistId}`}
                            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                          >
                            Watch Videos
                          </Link>
                        ) : null}
                        {place.blogSlug ? (
                          <Link
                            href={`/blog/${place.blogSlug}`}
                            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                          >
                            Read story
                          </Link>
                        ) : null}
                        {place.handbookSlug ? (
                          <Link
                            href={`/guides/${place.handbookSlug}`}
                            className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors hover:text-primary"
                          >
                            Planning guide
                          </Link>
                        ) : null}
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-20 border-t border-border pt-12 text-center">
          <p className="editorial-eyebrow mb-4">Plan</p>
          <h2 className="font-display text-3xl md:text-4xl">Going somewhere next?</h2>
          <p className="mx-auto mt-4 max-w-lg text-muted-foreground">
            Tell us where you want to go — we&apos;ll help shape a journey from real experience.
          </p>
          <Link href="/plan-your-trip" className="btn-editorial-primary mt-8">
            Plan Your Trip
          </Link>
        </div>
      </div>
    </div>
  );
}
