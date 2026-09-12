import Image from "next/image";
import Link from "next/link";

/**
 * Full-bleed cinematic hero. Sits under the fixed transparent navbar.
 * Uses negative margin so other pages can keep normal document flow with PageShell.
 */
export default function HomeHero() {
  return (
    <section className="relative -mt-[4.25rem] flex min-h-[100svh] items-end overflow-hidden bg-foreground md:-mt-[4.75rem]">
      <div className="absolute inset-0 animate-image-reveal">
        <Image
          src="/images/hero/home-hero.jpeg"
          alt="Cinematic travel landscape from Nodes of Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/35 to-black/25" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      <div className="relative z-10 container mx-auto px-4 pb-16 pt-32 md:pb-24 md:pt-40">
        <div className="max-w-3xl">
          <p
            className="editorial-eyebrow mb-5 text-white/75 animate-fade-up"
            style={{ animationDelay: "0.15s" }}
          >
            Nodes of Travel
          </p>
          <h1
            className="font-display text-[2.75rem] leading-[1.05] text-white animate-fade-up sm:text-5xl md:text-6xl lg:text-[4.25rem]"
            style={{ animationDelay: "0.28s" }}
          >
            Travel stories, guides and journeys from around the world.
          </h1>
          <p
            className="mt-6 max-w-xl text-base leading-relaxed text-white/80 animate-fade-up md:text-lg"
            style={{ animationDelay: "0.42s" }}
          >
            Places we&apos;ve experienced. Stories we&apos;ve lived. Trips we&apos;ve put together —
            filmed and written so you can travel with more clarity and wonder.
          </p>
          <div
            className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            <Link href="/destinations" className="btn-editorial-secondary">
              Explore Destinations
            </Link>
            <Link
              href="/plan-your-trip"
              className="btn-editorial-primary shadow-lg shadow-black/25"
            >
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
