import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, User, ArrowRight } from "lucide-react";
import { getAllPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Travel Blog</h1>
        <p className="text-lg text-muted-foreground">
          Stories, tips, and guides from around the world
        </p>
      </div>

      {posts.length === 0 ? (
        <Card className="mx-auto max-w-2xl">
          <CardHeader>
            <CardTitle>No Posts Yet</CardTitle>
            <CardDescription>
              Check back soon for travel stories and tips!
            </CardDescription>
          </CardHeader>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="block">
              <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer h-full">
                <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                  {post.imageUrl ? (
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-6xl">
                      {post.image}
                    </div>
                  )}
                </div>
                <CardHeader>
                  <div className="mb-2 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>{post.author}</span>
                    </div>
                    {post.category && (
                      <>
                        <span>•</span>
                        <span className="text-primary">{post.category}</span>
                      </>
                    )}
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">
                    {post.title}
                  </CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="inline-flex items-center text-sm font-medium text-primary group-hover:underline">
                    Read More <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}



