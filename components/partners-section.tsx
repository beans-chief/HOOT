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
        <div className="shrink-0 self-stretch bg-[#DE3A2E]">
          <h3 className="flex h-full items-center whitespace-nowrap px-4 py-4 text-center text-xs font-semibold text-white sm:text-sm md:px-8 md:py-6 md:text-xl">
            Meet Our Partners
          </h3>
        </div>
        <div className="flex flex-1 items-center  bg-white justify-evenly gap-2 overflow-x-auto scrollbar-hide px-4 py-4 sm:gap-4 md:px-8 md:py-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="h-8 w-8 shrink-0 overflow-hidden sm:h-10 sm:w-10 md:h-14 md:w-14 lg:h-20 lg:w-20"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
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
