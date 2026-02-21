"use client";

import Image, { StaticImageData } from "next/image";
import Anya from "@/assets/Anyahuma.jpg";
import GraceLand from "@/assets/Graceland.jpg";
import Zijag from "@/assets/zijag.jpg";
import Accel from "@/assets/accel.jpg";
import Amrr from "@/assets/amrr.jpg";
import { motion } from "framer-motion";

const partners: { name: string; logo: StaticImageData }[] = [
  { name: "Anyahuma", logo: Anya },
  { name: "Graceland", logo: GraceLand },
  { name: "Zijag", logo: Zijag },
  { name: "Accel", logo: Accel },
  { name: "AMRR", logo: Amrr },
];

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
        {/* Left Title */}
        <div className="shrink-0 self-stretch bg-[#DE3A2E]">
          <h3 className="flex h-full items-center whitespace-nowrap px-4 py-4 text-center text-xs font-semibold text-white sm:text-sm md:px-8 md:py-6 md:text-xl">
            Meet Our Partners
          </h3>
        </div>

        {/* Logos */}
        <div className="flex flex-1 items-center justify-evenly gap-4 overflow-x-auto scrollbar-hide bg-white px-4 py-4 sm:gap-6 md:px-8 md:py-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="
                shrink-0
                flex items-center justify-center
                bg-white
                h-14 w-14
                sm:h-16 sm:w-16
                md:h-20 md:w-20
                lg:h-30 lg:w-30
              "
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={200}
                height={200}
                className="object-contain max-h-[70%] max-w-[70%]"
                priority
              />
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}