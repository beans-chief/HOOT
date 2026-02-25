import type { Metadata } from "next";
import { MediaPageLayout } from "@/components/media-page-layout";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Browse media coverage, press releases, and news features about HOOT Initiative and our work across Nigeria and Africa.",
  openGraph: {
    title: "Media | HOOT Initiative",
    description:
      "Browse media coverage, press releases, and news features about HOOT Initiative and our work across Nigeria and Africa.",
    type: "website",
  },
};
import BlogImage1 from "@/assets/blog-1.webp";
import BlogImage2 from "@/assets/blog-2.webp";
import OrangeBadgeTop from "@/assets/orange-badge-top.svg";
import GreenBadgeBottom from "@/assets/green-badge-bottom.svg";
import { sanityFetch } from "@/sanity/lib/client";
import { allNewsQuery } from "@/sanity/lib/queries";
import { SanityPost } from "@/components/blog-card";

export default async function MediaPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: allNewsQuery });

  return (
    <MediaPageLayout
      images={[BlogImage1, BlogImage2]}
      title="MEDIA"
      badgeTop={OrangeBadgeTop}
      badgeBottom={GreenBadgeBottom}
      subtitle="Find out what has been, what is and what will be happening"
      posts={posts}
      basePath="/hoot-news"
    />
  );
}
