import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";
import SubscribeForm from "@/components/SubscribeForm";
import { getAllPosts } from "@/lib/blog";
import { getVideoById } from "@/lib/videos";
import {
  featuredGuideSlugs,
  featuredVideoIds,
  guideImageBySlug,
  homeJourneys,
  ourTravelsGrid,
  blogSlugToDestination,
} from "./home-data";

function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="editorial-eyebrow mb-4">{eyebrow}</p>
      <h2 className="font-display text-3xl leading-tight md:text-4xl lg:text-[2.75rem]">{title}</h2>
      {intro ? (
        <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">{intro}</p>
      ) : null}
    </div>
  );
}

function MeetSection() {
  return (
    <section className="border-b border-border/60 bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="The story"
              title="Meet Nodes of Travel"
              intro="Where every stop is a story, and every journey connects the world a little more. We film, write, and plan from trips we’ve actually taken — so you can travel with more clarity and wonder."
            />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
              Quiet canals, island mornings, Rockies lakes, desert highways, and whitewashed
              villages — we don’t just collect destinations. We look for meaning in the moments
              between them.
            </p>
            <Link href="/about" className="btn-editorial-primary mt-10">
              About us
            </Link>
          </div>
          <div className="lg:col-span-7">
            <div className="image-cinematic-zoom relative aspect-[4/5] overflow-hidden sm:aspect-[5/4] lg:aspect-[4/3]">
              <Image
                src="/images/about/about-story.jpeg"
                alt="Travel story from Nodes of Travel"
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="image-cinematic object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function JourneysSection() {
  const [featured, ...rest] = homeJourneys;

  const toDestination = (blogSlug: string) => {
    const slug = blogSlugToDestination[blogSlug];
    return slug ? `/destinations#${slug}` : "/destinations";
  };

  return (
    <section className="bg-[#f3efe7] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Journeys"
            title="Find your next journey"
            intro="Real itineraries from places we’ve travelled — filmed and written so you can follow the path, or make it your own."
          />
          <Link
            href="/destinations"
            className="btn-editorial-outline-dark shrink-0 self-start md:self-auto"
          >
            View destinations
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Link
            href={toDestination(featured.slug)}
            className="image-cinematic-zoom group relative aspect-[16/10] overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[28rem]"
          >
            <Image
              src={featured.image}
              alt={featured.imageAlt}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="image-cinematic object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-10">
              <p className="editorial-eyebrow mb-3 text-white/70">{featured.place}</p>
              <h3 className="font-display text-3xl text-white md:text-4xl">{featured.name}</h3>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-white/80 md:text-base">
                {featured.blurb}
              </p>
            </div>
          </Link>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {rest.slice(0, 2).map((journey) => (
              <Link
                key={journey.slug}
                href={toDestination(journey.slug)}
                className="image-cinematic-zoom group relative aspect-[16/10] flex-1 overflow-hidden lg:aspect-auto lg:min-h-[13rem]"
              >
                <Image
                  src={journey.image}
                  alt={journey.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="image-cinematic object-cover object-center"
                  unoptimized={journey.image.startsWith("http")}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="editorial-eyebrow mb-2 text-white/70">{journey.place}</p>
                  <h3 className="font-display text-2xl text-white">{journey.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {rest.slice(2).map((journey) => (
            <Link
              key={journey.slug}
              href={toDestination(journey.slug)}
              className="image-cinematic-zoom group relative aspect-[3/2] overflow-hidden"
            >
              <Image
                src={journey.image}
                alt={journey.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="image-cinematic object-cover object-center"
                unoptimized={journey.image.startsWith("http")}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/15 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="editorial-eyebrow mb-2 text-white/70">{journey.place}</p>
                <h3 className="font-display text-xl text-white md:text-2xl">{journey.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function VideosSection() {
  const featuredVideos = featuredVideoIds
    .map((id) => getVideoById(id))
    .filter((v): v is NonNullable<typeof v> => Boolean(v));

  const [lead, ...others] = featuredVideos;

  if (!lead) return null;

  return (
    <section className="bg-foreground py-20 text-white md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="editorial-eyebrow mb-4 text-white/55">Films</p>
            <h2 className="font-display text-3xl leading-tight text-white md:text-4xl lg:text-[2.75rem]">
              Watch the journey
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              Cinematic travel films from the road — the same routes behind our written guides.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/videos"
              className="btn-editorial-primary"
            >
              All videos
            </Link>
            <a
              href="https://www.youtube.com/@NodesofTravel"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-editorial-secondary"
            >
              YouTube
            </a>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 lg:gap-8">
          <Link
            href={`/videos#${lead.id}`}
            className="image-cinematic-zoom group relative aspect-video overflow-hidden lg:col-span-7 lg:aspect-auto lg:min-h-[26rem]"
          >
            <Image
              src={`https://img.youtube.com/vi/${lead.id}/maxresdefault.jpg`}
              alt={lead.title}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="image-cinematic object-cover"
              unoptimized
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
            <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-full border border-white/40 bg-black/30 backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
              <span className="ml-0.5 border-y-[7px] border-l-[12px] border-y-transparent border-l-white" />
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
              <p className="editorial-eyebrow mb-2 text-white/60">{lead.category}</p>
              <h3 className="font-display text-2xl text-white md:text-3xl">{lead.title}</h3>
              <p className="mt-2 max-w-lg text-sm text-white/70 line-clamp-2">{lead.description}</p>
            </div>
          </Link>

          <div className="flex flex-col gap-6 lg:col-span-5">
            {others.map((video) => (
              <Link
                key={video.id}
                href={`/videos#${video.id}`}
                className="image-cinematic-zoom group grid grid-cols-5 gap-0 overflow-hidden bg-white/5"
              >
                <div className="relative col-span-2 aspect-[4/3] sm:aspect-auto sm:min-h-[7.5rem]">
                  <Image
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    fill
                    sizes="160px"
                    className="image-cinematic object-cover"
                    unoptimized
                  />
                </div>
                <div className="col-span-3 flex flex-col justify-center px-4 py-4 sm:px-5">
                  <p className="editorial-eyebrow mb-2 text-white/45">{video.category}</p>
                  <h3 className="font-display text-lg leading-snug text-white transition-colors group-hover:text-white/85 line-clamp-2">
                    {video.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function GuidesSection() {
  const posts = getAllPosts();
  const guides = featuredGuideSlugs
    .map((slug) => posts.find((p) => p.slug === slug))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 flex flex-col gap-8 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Guides"
            title="Travel guides"
            intro="Written companions to the films — day-by-day routes, places we loved, and the details that make a trip work."
          />
          <Link href="/blog" className="btn-editorial-outline-dark shrink-0 self-start md:self-auto">
            Read the guides
          </Link>
        </div>

        <div className="space-y-10 md:space-y-14">
          {guides.map((post, index) => {
            const imageSrc = guideImageBySlug[post.slug] || post.imageUrl;
            const reverse = index % 2 === 1;

            return (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group grid items-center gap-8 md:grid-cols-12 md:gap-12"
              >
                <div
                  className={`image-cinematic-zoom relative aspect-[16/10] overflow-hidden md:col-span-6 ${
                    reverse ? "md:order-2" : ""
                  }`}
                >
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="image-cinematic object-cover"
                      unoptimized={imageSrc.startsWith("http")}
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-muted text-5xl">
                      {post.image || "✦"}
                    </div>
                  )}
                </div>
                <div className={`md:col-span-6 ${reverse ? "md:order-1" : ""}`}>
                  <p className="editorial-eyebrow mb-3">
                    {post.category || "Travel guide"}
                    {post.date
                      ? ` · ${new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "short",
                        })}`
                      : ""}
                  </p>
                  <h3 className="font-display text-2xl leading-snug transition-colors group-hover:text-primary md:text-3xl">
                    {post.title.replace(/^[^\w]+/, "").trim() || post.title}
                  </h3>
                  <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground line-clamp-3">
                    {post.excerpt}
                  </p>
                  <span className="mt-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                    Read guide
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PlanTripSection() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/blogs/canada-banff/banff-sign.JPEG"
          alt="Plan a trip with Nodes of Travel"
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
            Plan your trip
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/80 md:text-lg">
            Tell us where you want to go, how you like to travel, and what matters on the road. We’ll
            help shape a journey grounded in real itineraries and lived experience.
          </p>
          <Link
            href="/plan-your-trip"
            className="btn-editorial-primary mt-10 shadow-lg shadow-black/30"
          >
            Start planning
          </Link>
        </div>
      </div>
    </section>
  );
}

function OurTravelsSection() {
  return (
    <section className="bg-[#f3efe7] py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mb-14 md:mb-16">
          <SectionHeader
            eyebrow="Places"
            title="Our travels"
            intro="A visual map of places we’ve stood in — each frame opens that destination."
            align="center"
          />
        </div>

        {/* Same editorial image treatment as Travel Guides (wide frames), slightly different ratio */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {ourTravelsGrid.map((item, index) => (
            <Link
              key={`${item.destinationSlug}-${item.label}-${index}`}
              href={`/destinations#${item.destinationSlug}`}
              className="group"
            >
              <div className="image-cinematic-zoom relative aspect-[3/2] overflow-hidden">
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
                {item.label}
              </h3>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/destinations" className="btn-editorial-outline-dark">
            Explore destinations
          </Link>
        </div>
      </div>
    </section>
  );
}

function SubscribeSection() {
  return (
    <section className="border-t border-border/60 bg-background py-20 md:py-24">
      <div className="container mx-auto max-w-3xl px-4">
        <div className="mb-10 text-center">
          <p className="editorial-eyebrow mb-4">Stay inspired</p>
          <h2 className="font-display text-3xl md:text-4xl">Join the Nodes of Travel community</h2>
        </div>
        <Suspense fallback={<div className="text-center text-muted-foreground">Loading…</div>}>
          <SubscribeForm />
        </Suspense>
      </div>
    </section>
  );
}

export default function HomeEditorial() {
  return (
    <>
      <MeetSection />
      <JourneysSection />
      <VideosSection />
      <GuidesSection />
      <PlanTripSection />
      <OurTravelsSection />
      <SubscribeSection />
    </>
  );
}
