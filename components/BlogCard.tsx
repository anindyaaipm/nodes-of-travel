import Link from "next/link";
import { BookOpen, Calendar, User } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <div className="my-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
      <div className="mb-4 flex items-center gap-2">
        <BookOpen className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Read the Story</h2>
      </div>
      
      <Link href={`/blog/${post.slug}`}>
        <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
          {post.image && (
            <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20 text-6xl">
              {post.image}
            </div>
          )}
          <CardHeader>
            <div className="mb-2 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                <span>{new Date(post.date).toLocaleDateString()}</span>
              </div>
              <span>•</span>
              <div className="flex items-center gap-1">
                <User className="h-3 w-3" />
                <span>{post.author}</span>
              </div>
              {post.category && (
                <>
                  <span>•</span>
                  <span className="text-primary font-medium">{post.category}</span>
                </>
              )}
            </div>
            <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
              {post.title}
            </CardTitle>
            <CardDescription className="line-clamp-2">
              {post.excerpt}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}

