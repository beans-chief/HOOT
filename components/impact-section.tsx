"use client";

import { Card } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import Impact1 from "@/assets/impact-1.svg";
import Impact2 from "@/assets/impact-2.svg";
import Impact3 from "@/assets/impact-3.svg";
import Impact4 from "@/assets/impact-4.svg";
import Impact5 from "@/assets/impact-5.svg";
import Impact6 from "@/assets/impact-6.svg";

interface ImpactCard {
  number: string;
  label: string;
  description: string;
  image: StaticImageData;
}

const impactData: ImpactCard[] = [
  {
    number: "1550+ ",
    label: "Girls",
    description:
      "reached through My Period, My Pride menstrual health and hygiene education",
    image: Impact1,
  },
  {
    number: "100+",
    label: "Volunteers",
    description:
      "engaged through the Tell Someone About it Awareness Campaign.",
    image: Impact2,
  },
  {
    number: "2000+",
    label: "Books",
    description:
      "reached through Mentorship And Personal Development sessions",
    image: Impact3,
  },
  {
    number: "6000+",
    label: "Kids",
    description: "engaged through Rural Kids Connect Program",
    image: Impact4,
  },
  {
    number: "50+",
    label: "Communities",
    description: "supported through the Ready for College program",
    image: Impact5,
  },
  {
    number: "400+",
    label: "Projects",
    description:
      "engaged through Antimicrobial Resistance (AMR) Awareness campaigns",
    image: Impact6,
  },
];

function highlightCaps(text: string) {
  return text.split(" ").map((word, i) => {
    const isCapitalized = /^[A-Z]/.test(word);
    return (
      <span
        key={i}
        className={isCapitalized ? "text-yellow-400 font-semibold" : ""}
      >
        {word}{" "}
      </span>
    );
  });
}

export function ImpactSection() {
  return (
    <section id="our-impact" className="bg-transparent py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
              <span className="text-2xl font-medium text-black md:text-4xl lg:text-4xl">
                Young People &<br />
                Communities
              </span>
            </div>
          </motion.div>
        </div>

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
                <div className="relative h-60 w-full overflow-hidden md:h-56 lg:h-124">
                  <Image
                    src={item.image}
                    alt={item.label}
                    fill
                    className="object-cover opacity-60 transition-opacity group-hover:opacity-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="mb-2 flex items-center gap-2 text-4xl font-bold md:text-5xl">
                    {item.number}
                    <span className="text-lg md:text-xl lg:text-xl">
                      {item.label}
                    </span>
                  </div>

                  <p className="text-sm text-gray-300 md:text-lg">
                    {highlightCaps(item.description)}
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