import type { Metadata } from "next";
import { MediaPageLayout } from "@/components/media-page-layout";

export const metadata: Metadata = {
  title: "Hoot News",
  description:
    "Stay up to date with the latest news and updates from HOOT Initiative — our programs, events, and impact stories.",
  openGraph: {
    title: "Hoot News | HOOT Initiative",
    description:
      "Stay up to date with the latest news and updates from HOOT Initiative — our programs, events, and impact stories.",
    type: "website",
  },
};
import BlogImage1 from "@/assets/blog-1.webp";
import BlogImage2 from "@/assets/blog-2.webp";
import OrangeBadgeTop from "@/assets/green-badge-top.svg";
import GreenBadgeBottom from "@/assets/green-badge-bottom.svg";
import { sanityFetch } from "@/sanity/lib/client";
import { allNewsQuery } from "@/sanity/lib/queries";
import { SanityPost } from "@/components/blog-card";

export default async function HootNewsPage() {
  const posts = await sanityFetch<SanityPost[]>({ query: allNewsQuery });

  return (
    <MediaPageLayout
      images={[BlogImage1, BlogImage2]}
      title="HOOT NEWS"
      badgeTop={OrangeBadgeTop}
      badgeBottom={GreenBadgeBottom}
      subtitle="Find out what has been, what is and what will be happening"
      posts={posts}
      basePath="/hoot-news"
    />
  );
}
