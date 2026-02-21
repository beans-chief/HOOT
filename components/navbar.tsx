"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Logo from "@/assets/logo.webp";
export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMediaOpen, setIsMediaOpen] = useState(false);
  const mediaRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/#home", label: "Home" },
    { href: "/#our-impact", label: "Our Impact" },
    { href: "/#our-programs", label: "Our Programs" },
  ];

  const mediaLinks = [
    { href: "/blog", label: "Blog" },
    { href: "/hoot-news", label: "Hoot News" },
    { href: "/publications", label: "Publications" },
  ];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      e.preventDefault();
      if (mediaRef.current && !mediaRef.current.contains(e.target as Node)) {
        setIsMediaOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-[#F3EEE7]">
      <div className="container mx-auto p-6 lg:px-31.25 lg:py-8.75">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Hoot Logo"
              width={77}
              height={124}
              className="h-auto w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
              >
                {link.label}
              </Link>
            ))}

            {/* Media Dropdown */}
            <div className="relative" ref={mediaRef}>
              <button
                onClick={() => setIsMediaOpen(!isMediaOpen)}
                className={`flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#166294] ${isMediaOpen ? "text-[#166294] underline underline-offset-4" : "text-gray-700"}`}
              >
                Media
                <ChevronDown
                  size={14}
                  className={`transition-transform ${isMediaOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMediaOpen && (
                <div className="absolute left-0 top-full mt-2 min-w-40 rounded-lg border border-gray-200 bg-white px-4 py-3 shadow-lg">
                  <div className="flex flex-col gap-2">
                    {mediaLinks.map((link) => (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="whitespace-nowrap text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
                        onClick={() => setIsMediaOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              href="/#about-us"
              className="text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
            >
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild>
              <Link href="/get-involved">Get Involved</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 text-gray-700 hover:bg-gray-100 md:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="border-t py-4 md:hidden">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              {/* Mobile Media Dropdown */}
              <button
                onClick={() => setIsMediaOpen(!isMediaOpen)}
                className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
              >
                Media
                <ChevronDown
                  size={16}
                  className={`transition-transform ${isMediaOpen ? "rotate-180" : ""}`}
                />
              </button>
              {isMediaOpen && (
                <div className="flex flex-col gap-2 pl-4">
                  {mediaLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-sm text-gray-600 transition-colors hover:text-[#166294]"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <Link
                href="/#about-us"
                className="text-sm font-medium text-gray-700 transition-colors hover:text-[#166294]"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>

              <Button asChild className="bg-[#166294]">
                <Link href="/get-involved">Get Involved</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
