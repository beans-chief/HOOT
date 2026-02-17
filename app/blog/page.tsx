import { MediaPageLayout } from "@/components/media-page-layout";
import BlogImage1 from "@/assets/blog-1.svg";
import BlogImage2 from "@/assets/blog-2.svg";
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
