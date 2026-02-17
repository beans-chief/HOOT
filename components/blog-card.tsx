import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { urlFor } from "@/sanity/lib/image";

export interface SanityPost {
  _id: string;
  title: string;
  slug: { current: string };
  author?: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: {
    asset: { _ref: string };
    alt?: string;
  };
  tags?: string[];
  source?: string;
  fileUrl?: string;
}

export interface BlogCardProps {
  post: SanityPost;
  basePath: string;
}

export function BlogCard({ post, basePath }: BlogCardProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(400).height(300).url()
    : "/api/placeholder/400/300";

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <article className="flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={imageUrl}
          alt={post.mainImage?.alt || post.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Author info */}
      <div className="mt-3 flex items-center gap-2">
        {post.author && (
          <span className="text-sm font-medium text-gray-800">
            {post.author}
          </span>
        )}
        {date && <span className="text-sm text-gray-400">{date}</span>}
      </div>

      {/* Title */}
      <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
        {post.title}
      </h3>

      {/* Excerpt */}
      {post.excerpt && (
        <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-gray-600">
          {post.excerpt}
        </p>
      )}

      {/* Read More */}
      <Link
        href={`${basePath}/${post.slug.current}`}
        className="mt-3 inline-flex w-fit items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-gray-900"
      >
        READ MORE
        <ChevronRight size={16} />
      </Link>
    </article>
  );
}
