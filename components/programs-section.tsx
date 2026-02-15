"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

interface Program {
  title: string;
  tagline: string;
  image: string;
}

const programs: Program[] = [
  {
    title: "Provide Period Poverty",
    tagline: "Provide Period Poverty",
    image: "/api/placeholder/400/500",
  },
  {
    title: "I Talk",
    tagline: "I Talk, Adults Listen About It (ITAALAI)",
    image: "/api/placeholder/400/500",
  },
  {
    title: "Health",
    tagline: "Promoting wellness with HIV awareness",
    image: "/api/placeholder/400/500",
  },
];

export function ProgramsSection() {
  return (
    <section id="our-programs" className="bg-transparent py-16 md:py-24">
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
            Our Programs
          </h2>
        </motion.div>

        {/* Programs Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
            >
              <Card className="group relative overflow-hidden rounded-3xl border-0 bg-white shadow-lg transition-transform hover:scale-105">
                {/* Program Image */}
                <div className="relative h-96 w-full overflow-hidden md:h-[450px]">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover transition-transform group-hover:scale-110"
                  />
                </div>

                {/* Overlay Card */}
                <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 transform rounded-2xl bg-white p-4 shadow-xl md:p-6">
                  <div className="relative">
                    {/* Red decorative lines */}
                    <div className="absolute -left-3 top-1/2 h-px w-6 -translate-y-1/2 bg-red-500 md:-left-4 md:w-8" />
                    <div className="absolute -right-3 top-1/2 h-px w-6 -translate-y-1/2 bg-red-500 md:-right-4 md:w-8" />

                    {/* Content */}
                    <div className="text-center">
                      <h3 className="mb-2 text-xl font-bold text-red-600 md:text-2xl">
                        {program.title}
                      </h3>
                      <p className="text-sm text-gray-700 md:text-base">
                        {program.tagline}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
