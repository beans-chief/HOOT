"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { motion } from "framer-motion";

export function PartnersSection() {
  return (
    <section className="mt-37.5 mb-37.5 border-y border-black bg-[#F3EEE7]">
      <motion.div
        className="flex items-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="shrink-0 self-stretch bg-[#DE3A2E]">
          <h3 className="flex h-full items-center whitespace-nowrap px-4 py-4 text-center text-xs font-semibold text-white sm:text-sm md:px-8 md:py-6 md:text-xl">
            Meet Our Partners
          </h3>
        </div>
        <div className="flex flex-1 items-center justify-evenly gap-2 overflow-x-auto scrollbar-hide px-4 py-4 sm:gap-4 md:px-8 md:py-6">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className="h-8 w-8 shrink-0 overflow-hidden sm:h-10 sm:w-10 md:h-14 md:w-14 lg:h-16 lg:w-16"
            >
              <Image
                src={Logo}
                alt={`Partner ${i + 1}`}
                width={130}
                height={130}
                className="h-full w-full object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
