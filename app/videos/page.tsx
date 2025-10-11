import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Play, BookOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { videos, playlists, getVideosByPlaylist } from "@/lib/videos";
import { getPostBySlug } from "@/lib/blog";

export default function VideosPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-4xl font-bold tracking-tight">Travel Videos</h1>
        <p className="text-lg text-muted-foreground">
          Immersive travel vlogs and destination guides from around the world
        </p>
      </div>

      {/* Playlists */}
      {playlists.map((playlist) => {
        const playlistVideos = getVideosByPlaylist(playlist.id);
        if (playlistVideos.length === 0) return null;
        const relatedPost = playlistVideos[0]?.relatedBlog ? getPostBySlug(playlistVideos[0].relatedBlog) : null;

        return (
          <div key={playlist.id} id={playlist.id} className="mb-16 scroll-mt-20">
            {/* Playlist Header */}
            <div className="mb-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <span className="text-4xl">{playlist.emoji}</span>
                {playlist.title}
              </h2>
              <p className="text-muted-foreground mt-2">{playlist.description}</p>
            </div>

            {/* Videos Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {playlistVideos.map((video) => (
                <a
                  key={video.id}
                  id={video.id}
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block scroll-mt-20"
                >
                  <Card className="group overflow-hidden transition-all hover:shadow-lg cursor-pointer h-full">
                    <div className="relative aspect-video bg-muted">
                      <Image
                        src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                        alt={video.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="rounded-full bg-red-600 p-3">
                          <Play className="h-6 w-6 text-white fill-white" />
                        </div>
                      </div>
                    </div>
                    <CardHeader className="p-4">
                      <CardTitle className="text-sm group-hover:text-primary transition-colors line-clamp-2">
                        {video.title}
                      </CardTitle>
                      <CardDescription className="text-xs line-clamp-2 mt-1">
                        {video.description}
                      </CardDescription>
                    </CardHeader>
                  </Card>
                </a>
              ))}
            </div>

            {/* Related Blog Post */}
            {relatedPost && (
              <div className="mt-8 text-center">
                <Link 
                  href={`/blog/${relatedPost.slug}`}
                  className="inline-flex items-center gap-2 text-lg font-medium text-primary hover:underline"
                >
                  <BookOpen className="h-5 w-5" />
                  Read the Story: {relatedPost.title}
                </Link>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}



