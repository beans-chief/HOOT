import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export interface BlogCardProps {
  image: string;
  authorAvatar: string;
  authorName: string;
  date: string;
  title: string;
  excerpt: string;
  slug: string;
}

export function BlogCard({
  image,
  authorAvatar,
  authorName,
  date,
  title,
  excerpt,
  slug,
}: BlogCardProps) {
  return (
    <article className="flex flex-col">
      {/* Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Author info */}
      <div className="mt-3 flex items-center gap-2">
        <div className="relative h-7 w-7 overflow-hidden rounded-full">
          <Image
            src={authorAvatar}
            alt={authorName}
            fill
            className="object-cover"
          />
        </div>
        <span className="text-sm font-medium text-gray-800">{authorName}</span>
        <span className="text-sm text-gray-400">{date}</span>
      </div>

      {/* Title */}
      <h3 className="mt-2 text-lg font-bold leading-snug text-gray-900">
        {title}
      </h3>

      {/* Excerpt */}
      <p className="mt-1 line-clamp-3 text-sm leading-relaxed text-gray-600">
        {excerpt}
      </p>

      {/* Read More */}
      <Link
        href={`/media/${slug}`}
        className="mt-3 inline-flex items-center gap-1 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-gray-500 hover:text-gray-900 w-fit"
      >
        READ MORE
        <ChevronRight size={16} />
      </Link>
    </article>
  );
}
