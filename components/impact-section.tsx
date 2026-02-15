"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { motion } from "framer-motion";

interface ImpactCard {
  number: string;
  label: string;
  description: string;
  image: string;
}

const impactData: ImpactCard[] = [
  {
    number: "1650+",
    label: "Kits",
    description: "Distributed to students across 5 communities",
    image: "/api/placeholder/400/300",
  },
  {
    number: "100+",
    label: "Volunteers",
    description: "Dedicated people making a difference",
    image: "/api/placeholder/400/300",
  },
  {
    number: "2000+",
    label: "Books",
    description: "Donated to school libraries",
    image: "/api/placeholder/400/300",
  },
  {
    number: "6000+",
    label: "Kids",
    description: "Empowered through our programs",
    image: "/api/placeholder/400/300",
  },
  {
    number: "50+",
    label: "Communities",
    description: "Reached across the region",
    image: "/api/placeholder/400/300",
  },
  {
    number: "400+",
    label: "Projects",
    description: "Successfully completed",
    image: "/api/placeholder/400/300",
  },
];

export function ImpactSection() {
  return (
    <section id="our-impact" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2
            className="mb-4 text-3xl font-medium text-[#0D6CB6] md:mb-8 md:text-5xl lg:text-7xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            Our Impact
          </motion.h2>
          <motion.div
            className="flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-5xl font-medium text-[#E63946] md:text-8xl lg:text-9xl">
              10,000+
            </span>
            <div className="inline-block rounded-lg px-4 py-2 md:px-6 md:py-3">
              <span className="text-2xl font-medium text-[#1E3A5F] md:text-4xl lg:text-5xl">
                Young People &<br />
                Communities
              </span>
            </div>
          </motion.div>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {impactData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="group relative overflow-hidden rounded-2xl border-0 bg-gradient-to-br from-gray-900 to-gray-800 p-0 shadow-lg transition-transform hover:scale-105">
                {/* Background Image */}
                <div className="relative h-48 w-full overflow-hidden md:h-56">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 text-4xl font-bold md:text-5xl">
                    {item.number}
                  </div>
                  <div className="mb-1 text-xl font-semibold md:text-2xl">
                    {item.label}
                  </div>
                  <p className="text-sm text-gray-300 md:text-base">
                    {item.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
