import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { publicationBySlugQuery } from "@/sanity/lib/queries";
import { PostDetail } from "@/components/post-detail";

interface PublicationPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function PublicationPostPage({
  params,
}: PublicationPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<{
    _id: string;
    title: string;
    slug: { current: string };
    author?: string;
    publishedAt?: string;
    excerpt?: string;
    mainImage?: { asset: { _ref: string }; alt?: string };
    body?: unknown[];
    fileUrl?: string;
  } | null>({
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
