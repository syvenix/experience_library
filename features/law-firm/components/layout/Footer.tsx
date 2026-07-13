"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Scale, Mail, MapPin, Phone, ArrowRight, Globe, Link as LinkIcon } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <footer className="bg-dark-bg border-t border-dark-border/40 text-neutral-400 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
        {/* About / Logo Column */}
        <div className="flex flex-col gap-6">
          <Link href="#home" className="flex items-center gap-3 group self-start">
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
          <p className="text-sm leading-relaxed text-neutral-400 font-light">
            We are a results-driven firm committed to providing strategic, effective, and comprehensive legal solutions for individuals and businesses.
          </p>
          <div className="flex items-center gap-4 mt-2">
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-gold-base hover:text-white transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-gold-base hover:text-white transition-colors duration-300"
              aria-label="Twitter"
            >
              <Globe size={16} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-full border border-neutral-800 flex items-center justify-center hover:border-gold-base hover:text-white transition-colors duration-300"
              aria-label="Facebook"
            >
              <Globe size={16} />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div className="flex flex-col gap-6 lg:pl-10">
          <h3 className="font-serif text-sm tracking-wider uppercase font-semibold text-white">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 text-sm">
            <li>
              <Link href="#home" className="hover:text-gold-base transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="#about" className="hover:text-gold-base transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="#practice" className="hover:text-gold-base transition-colors">
                Practice Areas
              </Link>
            </li>
            <li>
              <Link href="#attorneys" className="hover:text-gold-base transition-colors">
                Our Attorneys
              </Link>
            </li>
            <li>
              <Link href="#results" className="hover:text-gold-base transition-colors">
                Case Results
              </Link>
            </li>
            <li>
              <Link href="#contact" className="hover:text-gold-base transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-sm tracking-wider uppercase font-semibold text-white">
            Office Location
          </h3>
          <ul className="flex flex-col gap-4 text-sm font-light">
            <li className="flex gap-3 items-start">
              <MapPin size={18} className="text-gold-base shrink-0 mt-0.5" />
              <span>
                100 Corporate Parkway, Suite 500<br />
                New York, NY 10001
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-gold-base shrink-0" />
              <a href="tel:+18005550199" className="hover:text-gold-base transition-colors">
                +1 (800) 555-0199
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-gold-base shrink-0" />
              <a href="mailto:info@syvenixlaw.com" className="hover:text-gold-base transition-colors">
                info@syvenixlaw.com
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="flex flex-col gap-6">
          <h3 className="font-serif text-sm tracking-wider uppercase font-semibold text-white">
            Newsletter
          </h3>
          <p className="text-sm font-light leading-relaxed">
            Subscribe to receive our latest insights and legal publications.
          </p>
          <form onSubmit={handleSubmit} className="relative flex items-center">
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full bg-neutral-900 border border-neutral-800 focus:border-gold-base text-white text-sm px-4 py-3 rounded-md outline-none transition-colors pr-12 font-light"
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 w-10 bg-gold-base hover:bg-gold-hover text-dark-bg flex items-center justify-center rounded transition-colors"
              aria-label="Subscribe"
            >
              <ArrowRight size={16} />
            </button>
          </form>
          {subscribed && (
            <span className="text-xs text-gold-base animate-fade-in">
              Successfully subscribed! Thank you.
            </span>
          )}
        </div>
      </div>

      {/* Bottom Copyright Area */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-light text-neutral-500">
        <span>
          &copy; {new Date().getFullYear()} Syvenix Law Firm. All rights reserved.
        </span>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold-base transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gold-base transition-colors">
            Terms of Service
          </a>
          <a href="#" className="hover:text-gold-base transition-colors">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
}
