"use client";

import Image from "next/image";
import AboutUsImage from "@/assets/about-us-happy-girl-image.svg";
import { motion } from "framer-motion";

export function AboutSection() {
  return (
    <section id="about-us" className="bg-white py-10 md:py-24">
      <div className="relative w-full">
        {/* Background Image - Full Width */}
        <div className="relative min-h-[600px] w-full overflow-hidden sm:min-h-[700px] md:min-h-[900px]">
          <Image
            src={AboutUsImage}
            alt="Happy girl representing HOOT Initiative"
            fill
            className="object-cover"
          />

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="w-full space-y-4 md:space-y-6">
                {/* Badge */}
                <motion.div
                  className="inline-flex items-center rounded-2xl bg-[#E63946] px-5 py-3 shadow-lg md:rounded-3xl md:px-8 md:py-4"
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                >
                  <h3 className="text-xl font-bold text-white md:text-3xl">
                    About Us
                  </h3>
                </motion.div>

                {/* Description Box with transparency */}
                <motion.div
                  className="w-full rounded-2xl bg-[#5A6C7D]/80 p-5 space-y-3 text-white backdrop-blur-sm sm:p-6 md:rounded-3xl md:p-10 md:space-y-4"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                    Heroes of Our Time Africa Foundation (HOOT Africa) was founded on a simple but powerful belief: <strong>young people and communities thrive when they are intentionally guided, protected, and encouraged.</strong>
                  </p>
                  <p className="text-sm leading-relaxed md:text-base lg:text-lg">
                    We run people-centered programs that educate, empower, and uplift children, youth, and communities, reaching individuals and families across all ages and backgrounds. Across many communities, children face gaps not only in education, but also in exposure, mentorship, safety awareness, and values-based guidance. HOOT Africa exists to bridge these gaps by creating safe, engaging, and enriching spaces where learning extends beyond the classroom.
                  </p>
                  <p className="hidden text-sm leading-relaxed sm:block md:text-base lg:text-lg">
                    Our work brings together educators, professionals, community leaders, and partners to deliver programs that nurture confidence, critical thinking, self-awareness, and responsible decision-making. From educational outreach and speaker series to cultural learning experiences and child, youth, and community safety awareness, every HOOT Africa initiative is designed with both children and the wider community at the center.
                  </p>
                  <p className="hidden text-sm leading-relaxed md:block md:text-base lg:text-lg">
                    Our work also prioritizes child protection and safety awareness, including campaigns that empower children and communities to prevent abuse and speak up.
                  </p>
                  <p className="hidden text-sm leading-relaxed md:block md:text-base lg:text-lg">
                    We are building a generation that understands its roots, upholds strong values, knows their rights and fights abuse and is equipped to shape a better future.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
