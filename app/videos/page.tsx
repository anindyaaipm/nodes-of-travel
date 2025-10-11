import { playlists, getVideosByPlaylist } from "@/lib/videos";
import { getPostBySlug } from "@/lib/blog";
import VideosClient from "./VideosClient";

export default function VideosPage() {
  // Server-side data fetching
  const playlistsWithData = playlists.map((playlist) => {
    const playlistVideos = getVideosByPlaylist(playlist.id);
    const relatedPost = playlistVideos[0]?.relatedBlog ? getPostBySlug(playlistVideos[0].relatedBlog) : null;
    return {
      ...playlist,
      videos: playlistVideos,
      relatedPost,
    };
  }).filter(p => p.videos.length > 0);

  return <VideosClient playlistsWithData={playlistsWithData} />;
}
