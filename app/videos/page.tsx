"use client";

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

            {/* Horizontal Scrolling Videos */}
            <div className="relative mb-8">
              <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
                {playlistVideos.map((video) => (
                  <a
                    key={video.id}
                    id={video.id}
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-none w-64 md:w-80 snap-start scroll-mt-20"
                  >
                    <Card className="group overflow-hidden transition-all hover:shadow-xl cursor-pointer h-full hover:scale-105 duration-300">
                      <div className="relative aspect-video bg-muted">
                        <Image
                          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
                          alt={video.title}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="rounded-full bg-red-600 p-4 shadow-lg">
                            <Play className="h-8 w-8 text-white fill-white" />
                          </div>
                        </div>
                      </div>
                      <CardHeader className="p-4">
                        <CardTitle className="text-base group-hover:text-primary transition-colors line-clamp-2">
                          {video.title}
                        </CardTitle>
                        <CardDescription className="text-sm line-clamp-2 mt-2">
                          {video.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </a>
                ))}
              </div>
              
              {/* Scroll Indicator */}
              <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white via-white/50 to-transparent pointer-events-none" />
            </div>
            
            {/* CSS to hide scrollbar */}
            <style jsx>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
            `}</style>

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



