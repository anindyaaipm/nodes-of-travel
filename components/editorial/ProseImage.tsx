"use client";

/**
 * Blog article inline images only — keeps each photo's natural orientation.
 * Do not use on homepage cards/grids.
 */
export default function ProseImage({ src, alt }: { src: string; alt?: string }) {
  return (
    <figure className="my-10 text-center">
      {/* Native img preserves intrinsic aspect ratio (portrait vs landscape) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt || ""}
        className="mx-auto h-auto max-h-[90vh] w-auto max-w-full"
        loading="lazy"
        decoding="async"
      />
      {alt ? (
        <figcaption className="mt-3 text-xs tracking-[0.06em] text-muted-foreground">
          {alt}
        </figcaption>
      ) : null}
    </figure>
  );
}
