import Image from "next/image";
import Link from "next/link";
import { Play, Film } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

interface VideoCardProps {
  videoId: string;
  title?: string;
  description?: string;
}

export default function VideoCard({ videoId, title, description }: VideoCardProps) {
  const videoUrl = `https://youtu.be/${videoId}`;
  
  return (
    <div className="my-12 rounded-lg border-2 border-primary/20 bg-primary/5 p-6">
      <div className="mb-4 flex items-center gap-2">
        <Film className="h-6 w-6 text-primary" />
        <h2 className="text-2xl font-bold">Watch the Film</h2>
      </div>
      
      <a 
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer">
          <div className="relative aspect-video bg-muted">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt={title || "Related video"}
              fill
              className="object-cover"
              unoptimized
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="rounded-full bg-red-600 p-4">
                <Play className="h-8 w-8 text-white fill-white" />
              </div>
            </div>
          </div>
          {(title || description) && (
            <CardHeader>
              {title && (
                <CardTitle className="group-hover:text-primary transition-colors">
                  {title}
                </CardTitle>
              )}
              {description && (
                <CardDescription className="line-clamp-2">
                  {description}
                </CardDescription>
              )}
            </CardHeader>
          )}
        </Card>
      </a>
    </div>
  );
}

