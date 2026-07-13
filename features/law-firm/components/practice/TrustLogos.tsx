import React from "react";

export default function TrustLogos() {
  return (
    <section className="bg-white border-y border-neutral-100 py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Caption */}
        <div className="text-center md:text-left">
          <span className="text-[10px] tracking-[0.2em] font-semibold text-neutral-400 uppercase block mb-1">
            Trusted By Clients,
          </span>
          <span className="text-[10px] tracking-[0.2em] font-semibold text-neutral-400 uppercase block">
            Recognized By Leaders
          </span>
        </div>

        {/* Logos Grid */}
        <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14 opacity-50 grayscale contrast-200">
          {/* Legal 500 */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-lg font-bold tracking-tight text-black">
              LMG <span className="text-gold-dark font-sans text-xs uppercase font-extrabold tracking-widest pl-0.5">500</span>
            </span>
            <span className="text-[7px] tracking-[0.3em] font-bold text-black uppercase mt-[-4px]">
              Leading Firm
            </span>
          </div>

          {/* Chambers */}
          <div className="flex flex-col items-center justify-center border-x border-neutral-300 px-8">
            <span className="font-sans text-sm font-extrabold tracking-widest text-black uppercase">
              Chambers
            </span>
            <span className="text-[6px] tracking-[0.4em] font-semibold text-neutral-500 uppercase mt-[-2px]">
              AND PARTNERS
            </span>
          </div>

          {/* Asian Legal Business */}
          <div className="flex flex-col items-center">
            <span className="font-serif text-xs font-semibold tracking-wider text-black uppercase text-center leading-none">
              ASIAN LEGAL
            </span>
            <span className="text-[8px] tracking-[0.25em] font-extrabold text-gold-dark uppercase leading-none mt-1">
              BUSINESS
            </span>
          </div>

          {/* IFLR1000 */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-sans text-lg font-black tracking-tighter text-black">
              IFLR<span className="text-neutral-500 font-light">1000</span>
            </span>
            <span className="text-[6px] tracking-[0.3em] font-bold text-neutral-400 uppercase mt-[-6px]">
              Ranked Firm
            </span>
          </div>

          {/* Ranked Top 10 Firm */}
          <div className="flex flex-col items-center justify-center">
            <span className="font-serif text-xs font-bold tracking-widest text-black uppercase">
              RANKED
            </span>
            <span className="text-[7px] tracking-[0.2em] font-medium text-gold-dark uppercase mt-0.5">
              Top 10 Firm
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
