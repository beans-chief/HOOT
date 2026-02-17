import { MediaPageLayout } from "@/components/media-page-layout";
import BlogImage1 from "@/assets/blog-1.svg";
import BlogImage2 from "@/assets/blog-2.svg";
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
