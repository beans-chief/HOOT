"use client";

import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Logo from "@/assets/logo.webp";
import { motion } from "framer-motion";

export function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Our Impact", href: "/our-impact" },
    { label: "Our Programs", href: "/our-programs" },
    { label: "About us", href: "/about-us" },
    { label: "Media", href: "/media" },
  ];

  return (
    <motion.footer
      className="rounded-t-[2rem] bg-[#DE3A2E] text-white md:rounded-t-[3rem]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 pt-8 pb-6 sm:px-6 md:px-8 md:pt-10 md:pb-8 lg:px-12">
        {/* Row 1: Logo, Nav Links, Social Icons */}
        <motion.div
          className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="bg-white rounded-lg">
            <Image
              src={Logo}
              alt="Hoot Logo"
              width={47}
              height={47}
              className="h-14 w-12"
            />
          </div>
          <nav className="flex flex-wrap items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white transition-colors hover:text-white/80"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="transition-opacity hover:opacity-80">
              <Linkedin size={22} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="transition-opacity hover:opacity-80">
              <Facebook size={22} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="transition-opacity hover:opacity-80">
              <Instagram size={22} />
            </a>
          </div>
        </motion.div>

        {/* Row 2: Contact Us button */}
        <div className="mt-8">
          <Link
            href="/contact"
            className="inline-block rounded-lg border-2 border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#E63946]"
          >
            Contact us
          </Link>
        </div>

        {/* Row 3: Contact Info (left) + Subscribe (right) */}
        <div className="mt-6 flex flex-col justify-between gap-8 md:flex-row md:items-center">
          <div className="space-y-1 text-sm">
            <p>Email: heroesfourtimeafrica@gmail.com</p>
            <p>Phone: +234-708-705-7489</p>
          </div>
          <div className="flex items-center gap-3">
            <input
              type="email"
              placeholder="Email"
              className="rounded-lg border border-white bg-white px-6 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
            />
            <button className="rounded-lg border-2 border-white bg-transparent px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-[#E63946]">
              Subscribe
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-white/30" />

        {/* Row 4: Copyright + Privacy Policy */}
        <div className="flex flex-col items-start justify-between gap-4 text-sm md:flex-row md:items-center">
          <p>&copy; {new Date().getFullYear()} HOOT Africa. All Rights Reserved.</p>
          <Link href="/privacy" className="underline hover:text-white/80">
            Privacy Policy
          </Link>
        </div>
      </div>
    </motion.footer>
  );
}
