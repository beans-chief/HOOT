"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard, type BlogCardProps } from "@/components/blog-card";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

const blogPosts: BlogCardProps[] = [
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Author",
    date: "Nov 29, 2024",
    title: "Digital Declutter : Cutting the Noise in a...",
    excerpt:
      "In today's hyperconnected world, the lines between work, leisure and rest have blurred significantly. Notificati...",
    slug: "digital-declutter",
  },
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Saarah Mcbride",
    date: "Nov 29, 2024",
    title: "Eco-Friendly Homes: The Future of Real Esta...",
    excerpt:
      "The real estate industry is undergoing a significant transformation as eco-friendly hom...",
    slug: "eco-friendly-homes",
  },
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Cruz Mcintyre",
    date: "Nov 29, 2024",
    title: "A Foodie's Guide to Europe:...",
    excerpt:
      "Europe is a treasure trove of culinary delights, offering a diverse array of flavors, techniques, and traditions. F...",
    slug: "foodie-guide-europe",
  },
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Amna",
    date: "Nov 29, 2024",
    title: "The Art of Black-and-White Photography",
    excerpt:
      "Black-and-white photography is a timeless art form that transcends trends and technology. By stripping...",
    slug: "black-white-photography",
  },
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Clara Wilson",
    date: "Nov 29, 2024",
    title: "Sustainable Travel Tips: Reducing Your Carbon...",
    excerpt:
      "Practical advice for eco-conscious travelers to explore the world responsibly and sustainably.",
    slug: "sustainable-travel-tips",
  },
  {
    image: "/api/placeholder/400/300",
    authorAvatar: "/api/placeholder/40/40",
    authorName: "Sophia Turner",
    date: "Nov 29, 2024",
    title: "The Rise of Minimalist Interior Design",
    excerpt:
      "Learn how to create serene and functional spaces with the principles of minimalist interior design.",
    slug: "minimalist-interior-design",
  },
];

interface MediaPageLayoutProps {
  title: string;
  subtitle: string;
  images: [string, string];
  badgeTop: string | StaticImageData;
  badgeBottom: string | StaticImageData;
}

export function MediaPageLayout({ title, subtitle, images, badgeTop, badgeBottom }: MediaPageLayoutProps) {
  const [visibleCount, setVisibleCount] = useState(6);
  const visiblePosts = blogPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden border-2 border-black bg-white">
          {/* Top teal bar */}
          <div className="h-1.5 w-full bg-[#166294]" />

          <div className="relative container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            {/* Badge - top right */}
            <div className="absolute right-4 -top-2 h-12 w-12 -rotate-6 md:right-12 md:-top-4 md:h-20 md:w-20">
              <Image
                src={badgeTop}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative image - left */}
            <div className="absolute left-8 top-1/2 -translate-y-1/2 -rotate-12 md:left-20 lg:left-32">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl md:h-28 md:w-28">
                <Image
                  src={images[0]}
                  alt=""
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Decorative image - right */}
            <div className="absolute right-8 top-1/2 -translate-y-1/4 rotate-12 md:right-20 lg:right-32">
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl  md:h-28 md:w-28">
                <Image
                  src={images[1]}
                  alt=""
                  fill
                  className="object-cover grayscale"
                />
              </div>
            </div>

            {/* Content */}
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
                {title}
              </h1>
              <p className="mt-3 text-sm text-gray-600 md:text-base">
                {subtitle}
              </p>

              {/* Subscribe */}
              <div className="mt-6 flex items-center justify-center gap-3">
                <input
                  type="email"
                  placeholder="Enter Email"
                  className="w-full max-w-xs rounded-lg border border-gray-300 bg-white px-5 py-3 text-sm text-gray-700 placeholder-gray-400 outline-none focus:border-[#166294] focus:ring-1 focus:ring-[#166294]"
                />
                <button className="rounded-lg bg-[#166294] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#124f78]">
                  Subscribe
                </button>
              </div>
            </motion.div>

            {/* Badge - bottom left */}
            <div className="absolute -bottom-4 left-4 h-12 w-12 md:left-12 md:-bottom-6 md:h-20 md:w-20">
              <Image
                src={badgeBottom}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              {visiblePosts.map((post, index) => (
                <motion.div
                  key={post.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <BlogCard {...post} />
                </motion.div>
              ))}
            </div>

            {/* Load More */}
            {visibleCount < blogPosts.length && (
              <motion.div
                className="my-12 flex justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="rounded-lg border border-gray-400 px-8 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-600 hover:bg-white"
                >
                  Load More
                </button>
              </motion.div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
