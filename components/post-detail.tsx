import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

interface PostDetailProps {
  post: {
    title: string;
    author?: string;
    publishedAt?: string;
    mainImage?: {
      asset: { _ref: string };
      alt?: string;
    };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    body?: any[];
    tags?: string[];
    source?: string;
    fileUrl?: string;
  };
  backLink: string;
  backLabel: string;
}

export function PostDetail({ post, backLink, backLabel }: PostDetailProps) {
  const imageUrl = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  const date = post.publishedAt
    ? new Date(post.publishedAt).toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
      })
    : "";

  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <Navbar />
      <main className="pb-30">
        {/* Back navigation */}
        <div className="container mx-auto px-4 pt-8 sm:px-6 lg:px-8">
          <Link
            href={backLink}
            className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition-colors hover:text-gray-900"
          >
            <ArrowLeft size={16} />
            Back to {backLabel}
          </Link>
        </div>

        {/* Hero Image */}
        {imageUrl && (
          <div className="container mx-auto mt-6 px-4 sm:px-6 lg:px-8">
            <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
              <Image
                src={imageUrl}
                alt={post.mainImage?.alt || post.title}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        )}

        {/* Content */}
        <article className="container mx-auto mt-8 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
              {post.author && (
                <span className="font-medium text-gray-800">
                  {post.author}
                </span>
              )}
              {date && <span>{date}</span>}
              {post.source && (
                <span className="text-gray-400">Source: {post.source}</span>
              )}
            </div>

            {/* Title */}
            <h1 className="mt-4 text-3xl font-black text-gray-900 md:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#166294]/10 px-3 py-1 text-xs font-medium text-[#166294]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* PDF Download */}
            {post.fileUrl && (
              <div className="mt-6">
                <a
                  href={post.fileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg bg-[#166294] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#124f78]"
                >
                  <Download size={16} />
                  Download PDF
                </a>
              </div>
            )}

            {/* Body */}
            {post.body && (
              <div className="prose prose-lg mt-8 max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-[#166294] prose-strong:text-gray-900 prose-img:rounded-lg">
                <PortableText value={post.body} />
              </div>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
