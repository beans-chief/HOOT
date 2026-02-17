import { MediaPageLayout } from "@/components/media-page-layout";
import BlogImage1 from "@/assets/blog-1.svg";
import BlogImage2 from "@/assets/blog-2.svg";
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
