"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HeroImage from "@/assets/hero-image.svg";
import HeroImage2 from "@/assets/hero-image-2.svg";
import HeroImage3 from "@/assets/hero-image-3.svg";

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
    <section id="home" className="relative overflow-x-clip overflow-y-hidden border-y border-black bg-white">
      {/* Right Image - Desktop (absolute, pinned to right edge of section) */}
      <motion.div
        className="hidden md:block absolute right-0 top-0 bottom-0 w-1/2 lg:w-5/12"
        initial={{ opacity: 0, x: 80, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
      >
        <div className="relative ml-auto h-full w-full max-w-xl lg:max-w-2xl xl:max-w-3xl">
          {/* Black div underneath */}
          <div className="absolute inset-4 rotate-6 rounded-3xl bg-black" />
          {/* Tilted image on top */}
          <div className="absolute inset-4 rotate-3 overflow-hidden rounded-3xl shadow-2xl">
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
                  className="-rotate-3 scale-110 object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid min-h-112 items-center gap-8 py-12 md:min-h-128 md:grid-cols-2 md:py-20 lg:min-h-144 lg:py-24">
          {/* Left Content */}
          <motion.div
            className="relative z-10 space-y-6 lg:space-y-8"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <h1 className="text-4xl text-[#166294] text-center md:text-left font-bold leading-tight md:text-5xl lg:text-6xl">
                We Empower{" "}
                <motion.span
                  className="text-red-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  Children,
                </motion.span>
                <br />
                <motion.span
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  Youths
                </motion.span>{" "}
                and{" "}
                <motion.span
                  className="text-gray-400"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                >
                  Communities
                </motion.span>
              </h1>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col gap-4 sm:flex-row"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
            >
              <Button size="lg" className="px-8 text-base" asChild>
                <Link href="/get-involved">Get Involved</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-gray-900 px-8 text-base hover:bg-gray-50"
              >
                Donate
              </Button>
            </motion.div>
          </motion.div>

          {/* Spacer for grid on desktop (image is absolute) */}
          <div className="hidden md:block" />

          {/* Mobile Image */}
          <div className="md:hidden">
            <div className="relative aspect-4/3 w-full">
              <div className="absolute inset-0 rotate-6 rounded-3xl bg-black" />
              <div className="relative h-full w-full rotate-3 overflow-hidden rounded-3xl shadow-2xl">
                <Image
                  src={heroImages[currentIndex].src}
                  alt={heroImages[currentIndex].alt}
                  fill
                  className="-rotate-3 scale-110 object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
