"use client";

import { useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import Image from "next/image";
import Logo from "@/assets/logo.svg";
import { Instagram, Copy, Check, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import GetInvolvedIMage from "@/assets/donate-picture.svg";
import GreenBadge from "@/assets/green-badge.png"
import WhiteBadge from "@/assets/white badge.png"
type ModalType = "donate" | "volunteer" | null;

export default function GetInvolvedPage() {
  const [activeModal, setActiveModal] = useState<ModalType>(null);
  const [copied, setCopied] = useState(false);

  const copyAccountNumber = () => {
    navigator.clipboard.writeText("1013511394");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F3EEE7]">
      <Navbar />
      <main className="flex min-h-[calc(100vh-120px)] items-center justify-center px-4 py-12 md:py-20">
        <motion.div
          className="relative w-full max-w-3xl overflow-hidden rounded-3xl border border-gray-300 bg-white p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-stretch">
            {/* Left - Buttons */}
            <div className="flex w-full flex-col justify-center gap-6 md:w-1/2">
              <button
                onClick={() => setActiveModal("donate")}
                className="w-full rounded-lg bg-[#E63946] px-8 py-4 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#d12f3d] md:text-xl"
              >
                Donate
              </button>
              <button
                onClick={() => setActiveModal("volunteer")}
                className="w-full rounded-lg bg-[#E63946] px-8 py-4 text-lg font-bold text-white shadow-md transition-transform hover:scale-105 hover:bg-[#d12f3d] md:text-xl"
              >
                Volunteer
              </button>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-full items-center justify-center gap-3 rounded-lg border-2 border-gray-400 px-8 py-4 text-sm font-semibold text-[#166294] transition-colors hover:border-[#166294] hover:bg-gray-50 md:text-base"
              >
                <Instagram size={20} className="text-[#166294]" />
                Reach us on Instagram
              </a>
            </div>

            {/* Right - Image placeholder */}
            <div className="relative hidden w-1/2 md:block">
              <div className="relative h-full min-h-75 w-full ">
                <Image
                  src={GetInvolvedIMage}
                  alt="Get involved - child"
                  fill
                  className=" w-full  object-cover absolute"
                />
              </div>
            </div>
          </div>

          {/* Green logo element - bottom left */}
          <div className="absolute -bottom-2 -left-2 h-20 w-20 md:bottom-0 md:left-0 md:h-28 md:w-28">
            <Image
              src={GreenBadge}
              alt=""
              fill
              className="object-contain"
              style={{ filter: "brightness(0) saturate(100%) invert(55%) sepia(65%) saturate(500%) hue-rotate(80deg)" }}
            />
          </div>
        </motion.div>

        {/* Modals */}
        <AnimatePresence>
          {activeModal === "donate" && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#166294] p-8 md:p-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
                >
                  <X size={24} />
                </button>

                {/* Watermark text */}
                <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-between overflow-hidden py-6 text-white/10">
                  <span className="text-4xl font-black tracking-widest md:text-5xl">
                    THANK YOU THANK YOU
                  </span>
                  <span className="text-4xl font-black tracking-widest md:text-5xl">
                    THANK YOU THANK YOU
                  </span>
                </div>

                {/* Green decorative elements */}
                <div className="pointer-events-none absolute -bottom-10 left-1/2 h-32 w-32 -translate-x-1/2">
                  <div className="h-full w-full rounded-lg bg-[#4CAF50]/20" />
                </div>
                <div className="pointer-events-none absolute -left-10 top-1/2 h-40 w-40 -translate-y-1/2">
                  <div className="h-full w-full rounded-lg bg-[#4CAF50]/15" />
                </div>
                <div className="pointer-events-none absolute -right-10 top-1/3 h-40 w-40">
                  <div className="h-full w-full rounded-lg bg-[#4CAF50]/15" />
                </div>

                {/* Bank details */}
                <div className="relative z-10 space-y-8 pt-4">
                  <div className="space-y-2 border-b border-white/30 pb-6">
                    <p className="text-sm text-white/70">Bank</p>
                    <p className="text-xl font-bold text-white md:text-2xl">
                      KEY STONE BANK
                    </p>
                  </div>
                  <div className="space-y-2 border-b border-white/30 pb-6">
                    <p className="text-sm text-white/70">Account Name</p>
                    <p className="text-xl font-bold text-white md:text-2xl">
                      HOOT AFRICA
                    </p>
                  </div>
                  <div className="space-y-2 border-b border-white/30 pb-6">
                    <p className="text-sm text-white/70">Account Number</p>
                    <div className="flex items-center gap-3">
                      <p className="text-xl font-bold text-white md:text-2xl">
                        1013511394
                      </p>
                      <button
                        onClick={copyAccountNumber}
                        className="rounded-md p-1.5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                        aria-label="Copy account number"
                      >
                        {copied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}

          {activeModal === "volunteer" && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                className="relative w-full max-w-lg overflow-hidden rounded-3xl bg-[#4CAF50] p-8 md:p-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close button */}
                <button
                  onClick={() => setActiveModal(null)}
                  className="absolute right-4 top-4 text-white/70 transition-colors hover:text-white"
                >
                  <X size={24} />
                </button>

                {/* Red diagonal decorative lines */}
                <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-4 rotate-45 bg-[#E63946]" />
                <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-4 rotate-45 bg-[#E63946]" />
                <div className="pointer-events-none absolute -left-10 top-1/4 h-80 w-4 -rotate-45 bg-[#E63946]" />
                <div className="pointer-events-none absolute -right-10 bottom-1/4 h-80 w-4 -rotate-45 bg-[#E63946]" />

                {/* Form */}
                <form className="relative z-10 space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-lg bg-white px-6 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 md:text-base"
                  />
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="w-full rounded-lg bg-white px-6 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 md:text-base"
                  />
                  <input
                    type="tel"
                    placeholder="Enter your whatsapp number"
                    className="w-full rounded-lg bg-white px-6 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 md:text-base"
                  />
                  <input
                    type="text"
                    placeholder="Tell us what skills you have (optional)"
                    className="w-full rounded-lg bg-white px-6 py-3.5 text-sm text-gray-700 placeholder-gray-400 outline-none focus:ring-2 focus:ring-white/50 md:text-base"
                  />
                  <div className="pt-2 text-center">
                    <button
                      type="submit"
                      className="rounded-lg bg-white px-10 py-3 text-sm font-semibold text-[#4CAF50] transition-transform hover:scale-105 md:text-base"
                    >
                      Submit
                    </button>
                  </div>
                </form>

                {/* White logo at bottom */}
                <div className="relative z-10 mt-6 flex justify-center">
                  <div className="h-12 w-12">
                    <Image
                      src={WhiteBadge}
                      alt="HOOT Logo"
                      width={48}
                      height={48}
                      className="h-auto w-auto absolute"
                    />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}
