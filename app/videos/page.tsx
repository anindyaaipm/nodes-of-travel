import { playlists, getVideosByPlaylist } from "@/lib/videos";
import { getPostBySlug } from "@/lib/blog";
import VideosClient from "./VideosClient";

export default function VideosPage() {
  // Server-side data fetching
  const playlistsWithData = playlists.map((playlist) => {
    const playlistVideos = getVideosByPlaylist(playlist.id);
    
    // Get all unique related blog slugs from videos
    const relatedBlogSlugs = Array.from(new Set(
      playlistVideos
        .map(v => v.relatedBlog)
        .filter((slug): slug is string => Boolean(slug)) // Remove null/undefined with type guard
    ));

    // Get all related posts
    const relatedPosts = relatedBlogSlugs
      .map(slug => getPostBySlug(slug))
      .filter((post): post is NonNullable<typeof post> => post !== null); // Remove null posts with type guard

    return {
      ...playlist,
      videos: playlistVideos,
      relatedPosts,
    };
  }).filter(p => p.videos.length > 0);

  return <VideosClient playlistsWithData={playlistsWithData} />;
}
