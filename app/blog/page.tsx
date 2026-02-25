import type { Metadata } from "next";
import { MediaPageLayout } from "@/components/media-page-layout";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Read the latest articles and stories from HOOT Initiative on youth empowerment, community development, and sustainable change.",
  openGraph: {
    title: "Blog | HOOT Initiative",
    description:
      "Read the latest articles and stories from HOOT Initiative on youth empowerment, community development, and sustainable change.",
    type: "website",
  },
};
import BlogImage1 from "@/assets/blog-1.webp";
import BlogImage2 from "@/assets/blog-2.webp";
import GreenBadgeTop from "@/assets/orange-badge-top.svg";
import GreenBadgeBottom from "@/assets/orange-badge-bottom.svg";
import { sanityFetch } from "@/sanity/lib/client";
import { allBlogsQuery } from "@/sanity/lib/queries";
import { SanityPost } from "@/components/blog-card";

export default async function BlogPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: allBlogsQuery });

  return (
    <MediaPageLayout
      images={[BlogImage1, BlogImage2]}
      title="BLOG"
      badgeTop={GreenBadgeTop}
      badgeBottom={GreenBadgeBottom}
      subtitle="Find out what has been, what is and what will be happening"
      posts={posts}
      basePath="/blog"
    />
  );
}
