"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Phone, Menu, X, Scale } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lawfirm/lib/utils";

const NAV_ITEMS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Practice Areas", href: "#practice" },
  { name: "Attorneys", href: "#attorneys" },
  { name: "Results", href: "#results" },
  { name: "Resources", href: "#resources" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-dark-bg/90 backdrop-blur-md border-b border-dark-border/40 py-3 shadow-lg"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full border border-gold-base flex items-center justify-center text-gold-base group-hover:bg-gold-base group-hover:text-dark-bg transition-all duration-300">
              <Scale size={20} className="stroke-[1.5]" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-lg font-bold tracking-widest text-white leading-tight uppercase group-hover:text-gold-base transition-colors duration-300">
                Syvenix
              </span>
              <span className="text-[10px] tracking-[0.25em] text-gold-base font-medium uppercase">
                Law Firm
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative text-xs tracking-wider uppercase font-medium text-neutral-300 hover:text-gold-base transition-colors duration-200 group py-1"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gold-base transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop Call / Schedule Actions */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:+18005550199"
              className="flex items-center gap-2 px-4 py-2 border border-neutral-700 rounded-md text-xs font-semibold uppercase tracking-wider text-neutral-300 hover:text-white hover:border-white transition-all duration-200"
            >
              <Phone size={13} className="text-gold-base" />
              <span>+1 (800) 555-0199</span>
            </a>
            <Link
              href="#contact"
              className="px-5 py-2.5 bg-gold-base hover:bg-gold-hover text-dark-bg text-xs font-semibold uppercase tracking-wider rounded-md transition-colors duration-200 shadow-md"
            >
              Schedule Consultation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-neutral-300 hover:text-white transition-colors duration-200 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-dark-bg/98 backdrop-blur-lg pt-24 px-8 pb-10 flex flex-col justify-between lg:hidden"
          >
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  key={item.name}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-serif tracking-wide text-neutral-200 hover:text-gold-base transition-colors duration-200 block py-1"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col gap-4 mt-8 border-t border-neutral-800 pt-8"
            >
              <a
                href="tel:+18005550199"
                className="flex items-center justify-center gap-2 py-3 border border-neutral-700 rounded-md text-sm font-semibold uppercase tracking-wider text-neutral-300 hover:text-white"
              >
                <Phone size={14} className="text-gold-base" />
                <span>+1 (800) 555-0199</span>
              </a>
              <Link
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="py-3.5 bg-gold-base text-dark-bg text-sm font-semibold uppercase tracking-wider rounded-md text-center hover:bg-gold-hover transition-colors"
              >
                Schedule Consultation
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
