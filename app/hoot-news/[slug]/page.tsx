import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { newsBySlugQuery } from "@/sanity/lib/queries";
import { PostDetail } from "@/components/post-detail";
import { urlFor } from "@/sanity/lib/image";

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

type NewsPost = {
  _id: string;
  title: string;
  slug: { current: string };
  publishedAt?: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown[];
  source?: string;
};

export async function generateMetadata({ params }: NewsPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<NewsPost | null>({ query: newsBySlugQuery, params: { slug } });

  if (!post) return {};

  const ogImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      ...(ogImage && {
        images: [{ url: ogImage, width: 1200, height: 630, alt: post.title }],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      ...(ogImage && { images: [ogImage] }),
    },
  };
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<NewsPost | null>({
    query: newsBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  return <PostDetail post={post} backLink="/hoot-news" backLabel="Hoot News" />;
}
