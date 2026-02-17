"use client";

import { useState } from "react";
import Image from "next/image";
import MissionImage from "@/assets/mission-boy-wth-plane-image.webp";
import { motion } from "framer-motion";

export function MissionSection() {
  const [isCardHovered, setIsCardHovered] = useState(false);

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-24">
      <div className="w-full">
        {/* Mission & Vision Cards */}
        <div className="relative z-10 w-full space-y-8">
          {/* Mission Card */}
          <motion.div
            className="relative min-h-44 w-full border-2 border-black bg-white px-6 py-16 md:px-10 md:py-24"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="relative space-y-6">
              <div className="absolute -top-24 left-4 inline-flex items-center rounded-2xl bg-[#DE3A2E] px-6 py-3 shadow-lg md:-top-32 md:left-8 md:px-8 md:py-4">
                <h3 className="text-xl font-bold text-white md:text-3xl">
                  Mission
                </h3>
              </div>
              <div className="space-y-4 text-gray-900">
                <p className="text-sm leading-relaxed md:text-base md:pr-80 lg:pr-142 px-7 lg:text-lg relative lg:w-7xl lg:left-12 ">
                  To Empower Children, Youth, And Communities Through Holistic Programs That Nurture Creativity, Ethical Leadership, Education And Values, Fostering A Generation That Learns With Purpose, Serves With Integrity, And Leads With Vision.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            className="relative border-2 border-black bg-white px-6 py-16 mt-16 md:px-10 md:py-24 md:mt-50"
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setIsCardHovered(true)}
            onMouseLeave={() => setIsCardHovered(false)}
          >
            <div className="relative space-y-6">
              <div className="absolute -top-24 left-4 inline-flex items-center rounded-2xl bg-[#DE3A2E] px-6 py-3 shadow-lg md:-top-32 md:left-8 md:px-8 md:py-4">
                <h3 className="text-xl font-bold text-white md:text-3xl">
                  Vision
                </h3>
              </div>
              <div className="space-y-4 text-gray-900">
                <p className="text-sm leading-relaxed md:text-base md:pr-80 lg:pr-142 lg:text-lg  w-auto px-7 lg:left-12 relative lg:w-7xl">
                  To Raise A Generation Of Confident, Responsible And Values-Driven Children, Youth And Community Members Who Are Equipped With The Skills, Character, And Mindset To Create Positive Change In Their Communities And Beyond.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Image - Hidden on mobile, visible on md+ */}
      <motion.div
        className={`absolute ${isCardHovered ? "bottom-15.5" :"bottom-10.5"} right-0 z-20 hidden md:block md:h-[700px] md:w-[450px] lg:h-[900px] lg:w-[650px]`}
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="relative h-full w-full">
          <Image
            src={MissionImage}
            alt="Boy with plane representing our mission and vision"
            fill
            className={`object-contain object-right transition-all duration-500 ${isCardHovered ? "scale-105 grayscale-0" : "grayscale"}`}
          />
        </div>
      </motion.div>
    </section>
  );
}
