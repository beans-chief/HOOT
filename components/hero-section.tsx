"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/assets/hero-image.webp";
import HeroImage2 from "@/assets/hero-image-2.webp";
import HeroImage3 from "@/assets/hero-image-3.webp";

import { motion, AnimatePresence } from "framer-motion";

const heroImages = [
  { src: HeroImage, alt: "Children learning together" },
  { src: HeroImage2, alt: "Happy girl representing HOOT Initiative" },
  { src: HeroImage3, alt: "Boy with plane representing our mission" },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative h-[70vh] min-h-96 overflow-hidden bg-black md:h-[85vh]">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={heroImages[currentIndex].src}
            alt={heroImages[currentIndex].alt}
            fill
            className="object-cover object-center"
            priority
          />
        </motion.div>
      </AnimatePresence>

      {/* Dark gradient overlay - stronger on left for text readability */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.7) 35%, rgba(0,0,0,0.4) 65%, rgba(0,0,0,0.15) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full items-end">
        <div className="container mx-auto px-4 pb-12 sm:px-6 md:pb-20 lg:px-32 lg:pb-24">
          <motion.div
            className="max-w-2xl space-y-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h1 className="text-4xl font-bold leading-tight text-white md:text-6xl lg:text-[60px] lg:leading-[1.35]">
              We Empower{" "}
              <span
                className={`transition-colors duration-500 underline-offset-4 ${currentIndex === 0 ? "text-[#F5A623] underline decoration-[#F5A623]" : ""}`}
              >
                Children,
              </span>
              <br />
              <span
                className={`transition-colors duration-500 underline-offset-4 ${currentIndex === 1 ? "text-[#F5A623] underline decoration-[#F5A623]" : ""}`}
              >
                Youths
              </span>{" "}
              and{" "}
              <span
                className={`transition-colors duration-500 underline-offset-4 ${currentIndex === 2 ? "text-[#F5A623] underline decoration-[#F5A623]" : ""}`}
              >
                Communities
              </span>
            </h1>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button size="lg" className="bg-[#F3A22D] px-8 text-base hover:bg-[#F3A22D]" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-white bg-transparent px-8 text-base text-white hover:bg-white/10"
              >
                <Link href="/get-involved">Donate</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
