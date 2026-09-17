import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { guideHeroBySlug } from "@/lib/blog-images";
import {
  getAllDestinationPlaces,
  getDestinationBySlug,
  getRegionForDestination,
  getRelatedDestinations,
} from "@/lib/destinations";
import { getPlaylistById, getVideosByPlaylist } from "@/lib/videos";

export function generateStaticParams() {
  return getAllDestinationPlaces().map((place) => ({ slug: place.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const place = getDestinationBySlug(params.slug);
  if (!place) return { title: "Destination" };

  const guide = place.blogSlug ? getPostBySlug(place.blogSlug) : null;
  const playlist = place.playlistId ? getPlaylistById(place.playlistId) : null;
  const description =
    guide?.excerpt || playlist?.description || `${place.name} — ${place.subtitle}`;

  return {
    title: `${place.name} — Nodes of Travel`,
    description,
  };
}

export default function DestinationPage({ params }: { params: { slug: string } }) {
  const place = getDestinationBySlug(params.slug);
  if (!place) notFound();

  const region = getRegionForDestination(place.slug);
  const guide = place.blogSlug ? getPostBySlug(place.blogSlug) : null;
  const playlist = place.playlistId ? getPlaylistById(place.playlistId) : null;
  const films = place.playlistId ? getVideosByPlaylist(place.playlistId) : [];
  const related = getRelatedDestinations(place.slug, 3);

  const guideHero = guide
    ? guideHeroBySlug[guide.slug] || guide.imageUrl || place.image
    : place.image;

  const intro =
    playlist?.description ||
    guide?.excerpt ||
    `${place.name} — ${place.subtitle}`;

  const leadFilm = films[0];
  const otherFilms = films.slice(1);

  return (
    <article className="bg-background pb-0">
      {/* 1. Cinematic hero */}
      <section className="relative -mt-[4.5rem] min-h-[70svh] md:-mt-[5rem] md:min-h-[80svh]">
        <Image
          src={place.image}
          alt={place.imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          unoptimized={place.image.startsWith("http")}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/20" />
        <div className="relative z-10 flex min-h-[70svh] items-end md:min-h-[80svh]">
          <div className="container mx-auto px-4 pb-14 pt-32 md:pb-20 md:pt-40">
            <Link
              href="/destinations"
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              ← All destinations
            </Link>
            {region ? (
              <p className="editorial-eyebrow mb-4 text-white/65">{region.name}</p>
            ) : null}
            <h1 className="max-w-4xl font-display text-4xl leading-tight text-white md:text-6xl lg:text-[3.5rem]">
              {place.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base text-white/80 md:text-lg">{place.subtitle}</p>
          </div>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="border-b border-border/60 bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-2xl">
            <p className="editorial-eyebrow mb-4">The destination</p>
            <h2 className="font-display text-3xl md:text-4xl">Discover {place.name}</h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
              {intro}
            </p>
            {guide?.title ? (
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Follow our written story{" "}
                <Link href={`/blog/${guide.slug}`} className="editorial-link">
                  {guide.title}
                </Link>
                {place.handbookSlug ? (
                  <>
                    {" "}
                    or open the{" "}
                    <Link href={`/guides/${place.handbookSlug}`} className="editorial-link">
                      planning guide
                    </Link>
                  </>
                ) : null}
                {leadFilm ? (
                  <>
                    {" "}
                    · watch{" "}
                    <Link href={`/videos#${leadFilm.id}`} className="editorial-link">
                      {leadFilm.title}
                    </Link>
                  </>
                ) : null}
                .
              </p>
            ) : null}
          </div>
        </div>
      </section>

      {/* 3. Related Films */}
      {films.length > 0 ? (
        <section className="bg-foreground py-16 text-white md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div className="max-w-2xl">
                <p className="editorial-eyebrow mb-4 text-white/55">Films</p>
                <h2 className="font-display text-3xl leading-tight text-white md:text-4xl">
                  {playlist?.title || `Films from ${place.name}`}
                </h2>
                {playlist?.description ? (
                  <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
                    {playlist.description}
                  </p>
                ) : null}
              </div>
              <Link href={`/videos#${place.playlistId}`} className="btn-editorial-primary shrink-0 self-start">
                All videos
              </Link>
            </div>

            {leadFilm ? (
              <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
                <Link
                  href={`/videos#${leadFilm.id}`}
                  className="image-cinematic-zoom group relative aspect-video overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[24rem]"
                >
                  <Image
                    src={`https://img.youtube.com/vi/${leadFilm.id}/maxresdefault.jpg`}
                    alt={leadFilm.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 58vw"
                    className="image-cinematic object-cover"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
                  <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm">
                    <span className="ml-0.5 border-y-[7px] border-l-[12px] border-y-transparent border-l-white" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                    <p className="editorial-eyebrow mb-2 text-white/60">{leadFilm.category}</p>
                    <h3 className="font-display text-2xl text-white md:text-3xl">{leadFilm.title}</h3>
                    <p className="mt-2 max-w-lg text-sm text-white/70 line-clamp-2">
                      {leadFilm.description}
                    </p>
                  </div>
                </Link>

                {otherFilms.length > 0 ? (
                  <div className="flex flex-col gap-4 lg:col-span-5">
                    {otherFilms.map((video) => (
                      <Link
                        key={video.id}
                        href={`/videos#${video.id}`}
                        className="image-cinematic-zoom group grid grid-cols-5 gap-0 overflow-hidden bg-white/5"
                      >
                        <div className="relative col-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[6.5rem]">
                          <Image
                            src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                            alt={video.title}
                            fill
                            sizes="160px"
                            className="image-cinematic object-cover"
                            unoptimized
                          />
                        </div>
                        <div className="col-span-3 flex flex-col justify-center px-4 py-3 sm:px-5">
                          <p className="editorial-eyebrow mb-1 text-white/45">{video.category}</p>
                          <h3 className="font-display text-base leading-snug text-white line-clamp-2 md:text-lg">
                            {video.title}
                          </h3>
                        </div>
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 4. Related story + planning handbook */}
      {guide || place.handbookSlug ? (
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-4 space-y-16">
            {guide ? (
              <div>
                <div className="mb-10 md:mb-12">
                  <p className="editorial-eyebrow mb-4">Story</p>
                  <h2 className="font-display text-3xl md:text-4xl">Read the story</h2>
                </div>

                <Link
                  href={`/blog/${guide.slug}`}
                  className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
                >
                  <div className="image-cinematic-zoom relative aspect-[16/10] overflow-hidden md:col-span-6">
                    {guideHero ? (
                      <Image
                        src={guideHero}
                        alt={guide.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="image-cinematic object-cover"
                        unoptimized={guideHero.startsWith("http")}
                      />
                    ) : null}
                  </div>
                  <div className="md:col-span-6">
                    <p className="editorial-eyebrow mb-3">{guide.category || "Travel story"}</p>
                    <h3 className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                      {guide.title}
                    </h3>
                    {guide.excerpt ? (
                      <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                        {guide.excerpt}
                      </p>
                    ) : null}
                    <span className="mt-6 inline-block text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-foreground/80 transition-colors group-hover:text-primary">
                      Read story →
                    </span>
                  </div>
                </Link>
              </div>
            ) : null}

            {place.handbookSlug ? (
              <div>
                <div className="mb-10 md:mb-12">
                  <p className="editorial-eyebrow mb-4">Guide</p>
                  <h2 className="font-display text-3xl md:text-4xl">Planning handbook</h2>
                </div>
                <Link
                  href={`/guides/${place.handbookSlug}`}
                  className="group flex flex-col gap-4 border border-border/70 bg-[#f3efe7]/50 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-8"
                >
                  <div>
                    <p className="editorial-eyebrow mb-2">Free PDF</p>
                    <h3 className="font-display text-2xl transition-colors group-hover:text-primary md:text-3xl">
                      {place.name} travel guide
                    </h3>
                    <p className="mt-3 max-w-xl text-base text-muted-foreground">
                      Stops, ferries, costs, and flexible day plans — open on the site or download the
                      PDF.
                    </p>
                  </div>
                  <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-primary">
                    Open guide →
                  </span>
                </Link>
              </div>
            ) : null}
          </div>
        </section>
      ) : null}

      {/* 5. Explore visual section */}
      {place.explore && place.explore.length > 0 ? (
        <section className="bg-[#f3efe7] py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 md:mb-14">
              <p className="editorial-eyebrow mb-4">Places</p>
              <h2 className="font-display text-3xl md:text-4xl">Explore {place.name}</h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">
                {place.subtitle}
              </p>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {place.explore.map((item) => (
                <div key={`${item.label}-${item.image}`} className="group">
                  <div className="image-cinematic-zoom relative aspect-[3/2] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="image-cinematic object-cover object-center"
                    />
                  </div>
                  <p className="editorial-eyebrow mt-4 mb-1">Place</p>
                  <h3 className="font-display text-2xl">{item.label}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      {/* 6. Plan Your Trip CTA */}
      <section className="relative overflow-hidden py-24 md:py-32">
        <div className="absolute inset-0">
          <Image
            src={place.image}
            alt={`Plan a trip to ${place.name}`}
            fill
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="mx-auto max-w-2xl text-center text-white">
            <p className="editorial-eyebrow mb-4 text-white/65">Plan</p>
            <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">
              Plan your trip to {place.name}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
              Tell us where you want to go, how you like to travel, and what matters on the road.
            </p>
            <Link
              href="/plan-your-trip"
              className="btn-editorial-primary mt-10 shadow-lg shadow-black/30"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </section>

      {/* 7. Related destinations */}
      {related.length > 0 ? (
        <section className="border-t border-border/60 bg-background py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-10 flex flex-col gap-6 md:mb-12 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="editorial-eyebrow mb-4">Next</p>
                <h2 className="font-display text-3xl md:text-4xl">
                  {region ? `More in ${region.name}` : "More destinations"}
                </h2>
              </div>
              <Link href="/destinations" className="btn-editorial-outline-dark shrink-0 self-start">
                All destinations
              </Link>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <Link key={item.slug} href={`/destinations/${item.slug}`} className="group">
                  <div className="image-cinematic-zoom relative aspect-[16/10] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="image-cinematic object-cover object-center"
                    />
                  </div>
                  <p className="editorial-eyebrow mt-4 mb-1">Destination</p>
                  <h3 className="font-display text-2xl transition-colors group-hover:text-primary">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="border-t border-border/60 bg-background py-12 text-center">
          <Link href="/destinations" className="btn-editorial-outline-dark">
            All destinations
          </Link>
        </section>
      )}
    </article>
  );
}
