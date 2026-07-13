"use client";

import HeroContent from "./HeroContent";
import HeroCarousel from "./HeroCarousel";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white via-white to-gray-50 pb-12 pt-32">
      {/* Background Glow */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -right-20 -top-24 h-[500px] w-[500px] rounded-full bg-blue-500/10 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left */}

          <HeroContent />

          {/* Right */}

          <HeroCarousel />
        </div>
      </div>
    </section>
  );
}