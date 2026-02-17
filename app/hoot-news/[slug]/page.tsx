import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { newsBySlugQuery } from "@/sanity/lib/queries";
import { PostDetail } from "@/components/post-detail";

interface NewsPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function NewsPostPage({ params }: NewsPostPageProps) {
  const { slug } = await params;
  const post = await sanityFetch<{
    _id: string;
    title: string;
    slug: { current: string };
    publishedAt?: string;
    excerpt?: string;
    mainImage?: { asset: { _ref: string }; alt?: string };
    body?: unknown[];
    source?: string;
  } | null>({
    query: newsBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  return <PostDetail post={post} backLink="/hoot-news" backLabel="Hoot News" />;
}
