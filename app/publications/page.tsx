import type { Metadata } from "next";
import { MediaPageLayout } from "@/components/media-page-layout";

export const metadata: Metadata = {
  title: "Publications",
  description:
    "Explore research, reports, and publications from HOOT Initiative on youth development, community empowerment, and sustainable growth in Africa.",
  openGraph: {
    title: "Publications | HOOT Initiative",
    description:
      "Explore research, reports, and publications from HOOT Initiative on youth development, community empowerment, and sustainable growth in Africa.",
    type: "website",
  },
};
import BlogImage1 from "@/assets/blog-1.webp";
import BlogImage2 from "@/assets/blog-2.webp";
import OrangeBadgeTop from "@/assets/blue-badge-top.svg";
import GreenBadgeBottom from "@/assets/blue-badge-bottom.svg";
import { sanityFetch } from "@/sanity/lib/client";
import { allPublicationsQuery } from "@/sanity/lib/queries";
import { SanityPost } from "@/components/blog-card";

export default async function PublicationsPage() {
  const posts = await sanityFetch<SanityPost[]>({
    query: allPublicationsQuery,
  });

  return (
    <MediaPageLayout
      images={[BlogImage1, BlogImage2]}
      title="PUBLICATION"
      badgeTop={OrangeBadgeTop}
      badgeBottom={GreenBadgeBottom}
      subtitle="A publication is a gift you give your target audience again"
      posts={posts}
      basePath="/publications"
    />
  );
}
