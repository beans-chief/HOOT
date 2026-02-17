"use client";

import Image from "next/image";
import JoinMovementImage from "@/assets/join-movement-image.webp";
import { motion } from "framer-motion";

export function JoinMovementSection() {
  return (
    <section id="support" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-[#166294] md:text-4xl lg:text-5xl">
            Join The Movement
          </h2>
        </motion.div>

        {/* Image on green background */}
        <motion.div
          className="group relative mx-auto max-w-4xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Green background with curved top corners */}
          <div className="absolute inset-x-0 bottom-0 top-1/3 rounded-t-[3rem] bg-[#4CAF50]" />

          {/* Image sitting on top of green background */}
          <div className="relative z-10 px-8 pt-4 md:px-16">
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <Image
                src={JoinMovementImage}
                alt="Join the movement - Community members"
                fill
                className="object-cover grayscale transition-all duration-500 group-hover:scale-105 group-hover:grayscale-0"
              />
            </div>
          </div>

          {/* Floating Labels */}
          <motion.div
            className="absolute -left-2 top-1/2 z-20 rounded-lg border border-[#E63946] bg-white px-3 py-1.5 text-xs font-semibold text-[#E63946] shadow-md sm:px-4 sm:py-2 sm:text-sm md:-left-8 md:px-5 md:py-2.5 md:text-base"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.6 }}
          >
            Volunteer
          </motion.div>
          <motion.div
            className="absolute -right-2 top-1/2 z-20 rounded-lg border border-gray-900 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-md sm:px-4 sm:py-2 sm:text-sm md:-right-8 md:px-5 md:py-2.5 md:text-base"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            Partner With Us
          </motion.div>
          <motion.div
            className="absolute -bottom-3 left-4 z-20 rounded-lg border border-gray-900 bg-white px-3 py-1.5 text-xs font-semibold text-gray-900 shadow-md sm:left-1/6 sm:px-4 sm:py-2 sm:text-sm md:-bottom-6 md:px-5 md:py-2.5 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.8 }}
          >
            Attend Events
          </motion.div>
          <motion.div
            className="absolute -bottom-3 right-4 z-20 rounded-lg border border-[#E63946] bg-white px-3 py-1.5 text-xs font-semibold text-[#E63946] shadow-md sm:right-1/6 sm:px-4 sm:py-2 sm:text-sm md:-bottom-6 md:px-5 md:py-2.5 md:text-base"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            Donate
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
