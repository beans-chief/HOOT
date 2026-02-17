import { notFound } from "next/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { blogBySlugQuery } from "@/sanity/lib/queries";
import { PostDetail } from "@/components/post-detail";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
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
    tags?: string[];
  } | null>({
    query: blogBySlugQuery,
    params: { slug },
  });

  if (!post) notFound();

  return <PostDetail post={post} backLink="/blog" backLabel="Blog" />;
}
