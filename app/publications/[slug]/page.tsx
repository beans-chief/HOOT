import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { sanityFetch } from "@/sanity/lib/client";
import { publicationBySlugQuery } from "@/sanity/lib/queries";
import { PostDetail } from "@/components/post-detail";
import { urlFor } from "@/sanity/lib/image";

interface PublicationPostPageProps {
  params: Promise<{ slug: string }>;
}

type PublicationPost = {
  _id: string;
  title: string;
  slug: { current: string };
  author?: string;
  publishedAt?: string;
  excerpt?: string;
  mainImage?: { asset: { _ref: string }; alt?: string };
  body?: unknown[];
  fileUrl?: string;
};

export async function generateMetadata({ params }: PublicationPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await sanityFetch<PublicationPost | null>({
    query: publicationBySlugQuery,
    params: { slug },
  });

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

export default async function PublicationPostPage({
  params,
}: PublicationPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<PublicationPost | null>({
    query: publicationBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  return (
    <PostDetail
      post={post}
      backLink="/publications"
      backLabel="Publications"
    />
  );
}
