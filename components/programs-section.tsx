"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

import Program1 from "@/assets/program-1.svg";
import Program2 from "@/assets/program-2.svg";
import Program3 from "@/assets/program-3.svg";
import Program4 from "@/assets/program-4.svg";
import Program5 from "@/assets/program5.svg";

interface Program {
  tagline: string;
  description: string;
  image: StaticImageData;
}

const programs: Program[] = [
  {
    tagline: "Because every child deserves to feel loved",
    description: "A joyful outreach that celebrates children in rural communities through connection, care, games, gifts, and shared moments that affirm their worth",
    image: Program1,
  },
  {
    tagline: "Breaking stigma. Building confidence",
    description: "An empowerment program that educates girls on menstrual health and hygiene, challenges period stigma, and teaches practical skills like reusable pad-making",
    image: Program2,
  },
  {
    tagline: "Speaking up saves lives. Protecting every child.",
    description: "A child protection and safety awareness campaign focused on preventing child sexual abuse, promoting personal safety, and empowering children and communities to break the culture of silence.",
    image: Program3,
  },
  {
    tagline: "Preparing children for school and for life.",
    description: "A holistic transition program for children moving into JSS 1, equipping them with life skills such as financial literacy, goal-setting, self-identity, values, spirituality, and child protection.",
    image: Program4,
  },
  {
    tagline: "Knowledge that protects. Awareness that saves lives.",
    description: "A health education initiative focused on raising awareness about antimicrobial resistance, breast cancer, cervical cancer and other critical public health issues.",
    image: Program5,
  },
];

export function ProgramsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const checkScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 1);
  }, []);

  const scroll = useCallback((direction: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector("div")?.offsetWidth ?? 320;
    const distance = cardWidth + 24;
    el.scrollBy({ left: direction === "left" ? -distance : distance, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.addEventListener("scroll", checkScroll);
    checkScroll();
    return () => el.removeEventListener("scroll", checkScroll);
  }, [checkScroll]);

  return (
    <section id="our-programs" className="bg-transparent py-16 md:py-24">
      {/* Section Header with Nav Arrows */}
      <div className="container mx-auto mb-12 flex items-end justify-between px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl font-bold text-[#166294] md:text-4xl lg:text-5xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          Our Programs
        </motion.h2>

        <div className="flex gap-3">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#166294] text-[#166294] transition-colors hover:bg-[#166294] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-[#166294] text-[#166294] transition-colors hover:bg-[#166294] hover:text-white disabled:border-gray-300 disabled:text-gray-300 disabled:hover:bg-transparent"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Edge-to-edge Carousel */}
      <div
        ref={scrollRef}
        className="w-full overflow-x-auto scrollbar-hide"
      >
        <div className="flex min-w-max gap-4 px-4 md:gap-6 md:px-6">
          {programs.map((program, index) => (
            <motion.div
              key={index}
              className="group relative h-96 w-72 shrink-0 cursor-pointer overflow-hidden rounded-2xl md:h-112 md:w-80 lg:h-128 lg:w-88"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() =>
                setHoveredIndex(hoveredIndex === index ? null : index)
              }
            >
              {/* Program Image */}
              <Image
                src={program.image}
                alt={program.tagline}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Hover overlay with text - bottom half only */}
              <div
                className={`absolute inset-x-0 bottom-0 flex flex-col items-center justify-end p-6 transition-all duration-500 ${
                  hoveredIndex === index ? "opacity-100" : "opacity-0 translate-y-4"
                }`}
                style={{
                  background: "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.6) 60%, transparent 100%)",
                }}
              >
                <div className="space-y-2 text-center">
                  <p className="text-xl font-bold text-white">
                    {program.tagline}
                  </p>
                  <p className="text-sm leading-relaxed text-gray-300">
                    {program.description}
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
