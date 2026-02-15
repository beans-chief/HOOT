"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { BlogCard, type BlogCardProps } from "@/components/blog-card";
import Image from "next/image";
import GreenBadge from "@/assets/green-badge.png";
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

export default function MediaPage() {
  const [visibleCount, setVisibleCount] = useState(6);
  const visiblePosts = blogPosts.slice(0, visibleCount);

  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-white">
          {/* Top teal bar */}
          <div className="h-2 w-full bg-[#166294]" />

          <div className="relative container mx-auto px-4 py-12 sm:px-6 md:py-16 lg:px-8">
            {/* Green star - top right */}
            <div className="absolute right-8 top-4 h-12 w-12 md:right-16 md:top-6 md:h-16 md:w-16">
              <Image
                src={GreenBadge}
                alt=""
                fill
                className="object-contain"
              />
            </div>

            {/* Decorative image - left */}
            <div className="absolute left-4 top-8 h-16 w-16 overflow-hidden rounded-2xl rotate-[-12deg] shadow-md md:left-12 md:top-10 md:h-20 md:w-20">
              <Image
                src="/api/placeholder/80/80"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative image - right */}
            <div className="absolute right-4 top-1/2 h-16 w-16 overflow-hidden rounded-2xl rotate-[12deg] shadow-md md:right-12 md:h-20 md:w-20">
              <Image
                src="/api/placeholder/80/80"
                alt=""
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <motion.div
              className="mx-auto max-w-2xl text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-black text-gray-900 md:text-5xl lg:text-6xl">
                HOOT NEWS
              </h1>
              <p className="mt-3 text-sm text-gray-600 md:text-base">
                Find out what has been, what is and what will be happening
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

            {/* Green badge - bottom left */}
            <div className="absolute -bottom-6 left-4 h-16 w-16 md:left-12 md:h-24 md:w-24">
              <Image
                src={GreenBadge}
                alt=""
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom divider */}
          <div className="border-t border-gray-200" />
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
                className="mt-12 flex justify-center"
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
