import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/blog";
import { guideHeroBySlug } from "@/lib/blog-images";

export const metadata = {
  title: "Travel Guides — Nodes of Travel",
  description: "Written travel guides and itineraries from journeys we've taken around the world.",
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="bg-background pb-20 pt-24 md:pb-28 md:pt-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-14 max-w-2xl text-center md:mb-16">
          <p className="editorial-eyebrow mb-4">Written journeys</p>
          <h1 className="font-display text-4xl md:text-5xl">Travel Guides</h1>
          <p className="mt-5 text-base leading-relaxed text-muted-foreground md:text-lg">
            Day-by-day routes and place notes that accompany our films — from real trips, not
            templates.
          </p>
        </div>

        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground">Guides coming soon.</p>
        ) : (
          <div className="space-y-12 md:space-y-16">
            {posts.map((post, index) => {
              const hero = guideHeroBySlug[post.slug] || post.imageUrl;
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
                    {hero ? (
                      <Image
                        src={hero}
                        alt={post.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="image-cinematic object-cover"
                        unoptimized={hero.startsWith("http")}
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
                    <h2 className="font-display text-2xl leading-snug transition-colors group-hover:text-primary md:text-3xl">
                      {post.title}
                    </h2>
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
        )}
      </div>
    </div>
  );
}
