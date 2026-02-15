"use client";

import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { motion } from "framer-motion";

export function PartnersSection() {
  return (
    <section className="bg-[#F3EEE7] py-6 md:py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="w-auto shrink-0 bg-[#DE3A2E]">
              <h3 className="whitespace-nowrap px-4 py-3 text-center text-sm font-semibold text-white md:px-4 md:py-4 md:text-xl">
                Meet Our Partners
              </h3>
            </div>
            <div className="flex flex-1 gap-4 overflow-x-auto sm:justify-end md:gap-10">
              {Array.from({ length: 9 }).map((_, i) => (
                <div
                  key={i}
                  className="h-8 w-8 shrink-0 overflow-hidden md:h-12 md:w-12"
                >
                  <Image
                    src={Logo}
                    alt={`Partner ${i + 1}`}
                    width={130}
                    height={130}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
