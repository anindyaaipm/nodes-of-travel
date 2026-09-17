import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getAllPosts, getPostBySlug } from "@/lib/blog";
import { guideHeroBySlug } from "@/lib/blog-images";
import ReactMarkdown from "react-markdown";
import VideoCard from "@/components/VideoCard";
import ProseImage from "@/components/editorial/ProseImage";

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) return { title: "Guide" };
  return {
    title: `${post.title} — Nodes of Travel`,
    description: post.excerpt,
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const hero = guideHeroBySlug[post.slug] || post.imageUrl;

  return (
    <article className="bg-background pb-20">
      <div className="relative -mt-[4.5rem] min-h-[55svh] md:-mt-[5rem] md:min-h-[65svh]">
        {hero ? (
          <>
            <Image
              src={hero}
              alt={post.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
              unoptimized={hero.startsWith("http")}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/40 to-black/25" />
          </>
        ) : (
          <div className="absolute inset-0 bg-foreground" />
        )}
        <div className="relative z-10 flex min-h-[55svh] items-end md:min-h-[65svh]">
          <div className="container mx-auto px-4 pb-12 pt-32 md:pb-16 md:pt-40">
            <Link
              href="/blog"
              className="mb-6 inline-block text-xs font-semibold uppercase tracking-[0.16em] text-white/70 transition-colors hover:text-white"
            >
              ← All stories
            </Link>
            <p className="editorial-eyebrow mb-4 text-white/65">
              {post.category || "Travel guide"}
              {post.date
                ? ` · ${new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}`
                : ""}
            </p>
            <h1 className="max-w-4xl font-display text-3xl leading-tight text-white md:text-5xl lg:text-[3.25rem]">
              {post.title}
            </h1>
            {post.excerpt ? (
              <p className="mt-5 max-w-2xl text-base text-white/80 md:text-lg">{post.excerpt}</p>
            ) : null}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl py-12 md:py-16">
          <div className="editorial-prose">
            <ReactMarkdown
              components={{
                h1: ({ children }) => (
                  <h1 className="mb-5 mt-12 font-display text-3xl md:text-4xl">{children}</h1>
                ),
                h2: ({ children }) => (
                  <h2 className="mb-4 mt-12 font-display text-2xl md:text-3xl">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="mb-3 mt-8 font-display text-xl md:text-2xl">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="mb-5 text-base leading-8 text-foreground/85 md:text-[1.05rem]">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="mb-5 ml-5 list-disc space-y-2 text-foreground/85">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="mb-5 ml-5 list-decimal space-y-2 text-foreground/85">{children}</ol>
                ),
                li: ({ children }) => <li className="leading-7">{children}</li>,
                blockquote: ({ children }) => (
                  <blockquote className="my-8 border-l-2 border-primary pl-5 italic text-muted-foreground">
                    {children}
                  </blockquote>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    className="font-medium text-primary underline-offset-4 hover:underline"
                  >
                    {children}
                  </a>
                ),
                img: ({ src, alt }) => {
                  if (!src || typeof src !== "string") return null;
                  return <ProseImage src={src} alt={alt || ""} />;
                },
                hr: () => <hr className="my-10 border-border/80" />,
                strong: ({ children }) => (
                  <strong className="font-semibold text-foreground">{children}</strong>
                ),
                em: ({ children }) => <em className="italic text-foreground/80">{children}</em>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>

          {post.video ? (
            <div className="mt-14">
              <VideoCard
                videoId={post.video}
                title="Watch the film"
                description="Experience this journey in motion"
              />
            </div>
          ) : null}

          <div className="mt-16 flex flex-col gap-4 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
            <Link href="/blog" className="editorial-link">
              ← More stories
            </Link>
            <Link href="/plan-your-trip" className="btn-editorial-primary">
              Plan Your Trip
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
