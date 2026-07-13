"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { navItems } from "./navItems";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-slate-800/70 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}

        <Link href="/" className="group flex shrink-0 items-center gap-3">
          <Image
            src="/logo.png"
            alt="Syvenix Logo"
            width={48}
            height={48}
            priority
            className="rounded-xl transition duration-300 group-hover:scale-105"
          />

          <div>
            <h2 className="text-xl font-bold leading-none tracking-wide text-white">
              Syvenix
            </h2>

            <p className="text-xs tracking-wide text-slate-400">
              Technology With Purpose.
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}

        <div className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`relative font-medium transition duration-300 ${
                item.active
                  ? "text-white"
                  : "text-slate-300 hover:text-white"
              }`}
            >
              {item.label}

              {item.active && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full rounded-full bg-gradient-to-r from-[#007BFF] to-[#00CFFF]" />
              )}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}

        <Link
          href="https://forms.gle/9EqhVPBxjCbdn7B48"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center justify-center rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/20 transition-all duration-300 hover:scale-105 lg:flex"
        >
          Book Consultation
        </Link>

        {/* Mobile Toggle */}

        <button
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          onClick={() => setOpen((current) => !current)}
          className="text-white lg:hidden"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (
        <div className="border-t border-slate-800 bg-slate-950 lg:hidden">
          <div className="flex flex-col gap-6 p-6">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`transition ${
                  item.active
                    ? "font-semibold text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="https://forms.gle/9EqhVPBxjCbdn7B48"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] py-3 text-center font-semibold text-white transition-all duration-300 hover:scale-[1.02]"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}