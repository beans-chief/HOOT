import { MediaPageLayout } from "@/components/media-page-layout";
import BlogImage1 from "@/assets/blog-1.svg";
import BlogImage2 from "@/assets/blog-2.svg";
import GreenBadgeTop from "@/assets/orange-badge-top.svg";
import GreenBadgeBottom from "@/assets/orange-badge-bottom.svg";

export default function BlogPage() {
  return (
    <MediaPageLayout
      images={[BlogImage1, BlogImage2]}
      title="BLOG"
      badgeTop={GreenBadgeTop}
      badgeBottom={GreenBadgeBottom}
      subtitle="Find out what has been, what is and what will be happening"
    />
  );
}
