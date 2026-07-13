"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen bg-spatial-charcoal overflow-hidden flex items-center">
            {/* Background Image Layer (Spatial Layers™ Base) */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=85&w=2560"
                    alt="Syvenix Spatial Architecture Layout Frame"
                    fill
                    priority
                    sizes="100vw"
                    className="object-cover opacity-40 scale-105 select-none"
                />
            </div>

            {/* Main Structural Content Grid */}
            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-16 pb-12 lg:pb-24 pt-32">
                <div className="max-w-3xl text-white">
                    <motion.span
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs tracking-[0.3em] uppercase block mb-6 text-spatial-sand font-sans font-medium"
                    >
                        Architecture First
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-4xl md:text-6xl xl:text-7xl font-display font-light leading-[1.1] tracking-tight mb-8"
                    >
                        Designing Spaces.<br />Creating Experiences.
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-sm md:text-base text-spatial-sand/80 max-w-sm mb-12 font-light leading-relaxed"
                    >
                        Luxury interiors crafted with timeless design principles and meticulous attention to every detail.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="flex flex-wrap gap-4"
                    >
                        <a href="#contact" className="bg-spatial-bronze text-white px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-3 hover:bg-spatial-warmWhite hover:text-spatial-charcoal transition-all duration-300">
                            Start Your Project <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                        <a href="#projects" className="border border-white/20 text-white px-8 py-4 text-xs tracking-widest uppercase flex items-center gap-2 hover:bg-white/10 transition-all duration-300">
                            Explore Portfolio
                        </a>
                    </motion.div>
                </div>

                {/* Statistic Block (Component 07 from Phase 7 Layout Handoff Sheet) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="bg-spatial-warmWhite p-10 min-w-[320px] shadow-2xl space-y-6 hidden xl:block border border-spatial-stone/20"
                >
                    <div>
                        <div className="text-3xl font-display font-light text-spatial-charcoal">120+</div>
                        <div className="text-[10px] tracking-widest uppercase text-spatial-walnut/60 mt-1 font-sans font-medium">Projects Completed</div>
                    </div>
                    <div className="border-t border-spatial-stone pt-6">
                        <div className="text-3xl font-display font-light text-spatial-charcoal">18</div>
                        <div className="text-[10px] tracking-widest uppercase text-spatial-walnut/60 mt-1 font-sans font-medium">Years of Experience</div>
                    </div>
                    <div className="border-t border-spatial-stone pt-6">
                        <div className="text-3xl font-display font-light text-spatial-charcoal">98%</div>
                        <div className="text-[10px] tracking-widest uppercase text-spatial-walnut/60 mt-1 font-sans font-medium">Client Satisfaction</div>
                    </div>
                    <div className="border-t border-spatial-stone pt-6">
                        <div className="text-3xl font-display font-light text-spatial-charcoal">15</div>
                        <div className="text-[10px] tracking-widest uppercase text-spatial-walnut/60 mt-1 font-sans font-medium">Design Awards</div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative Elegant Scroll Prompt Label */}
            <div className="absolute bottom-8 left-6 xl:left-24 z-10 hidden md:block">
                <span className="text-[10px] tracking-[0.3em] uppercase text-white/40 font-sans block vertical-text">Scroll to explore</span>
            </div>
        </section>
    );
}