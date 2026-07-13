"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-24 md:py-32 xl:py-40 bg-spatial-warmWhite overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Asymmetric Structural Editorial Header Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 xl:gap-24 items-start mb-24 md:mb-32">
                    <div className="lg:col-span-7">
                        <motion.span
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                            className="text-xs tracking-[0.3em] uppercase block mb-6 text-spatial-bronze font-sans font-medium"
                        >
                            Our Philosophy
                        </motion.span>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="text-3xl md:text-5xl font-display font-light text-spatial-charcoal leading-[1.15] max-w-2xl"
                        >
                            Great interiors are not decorated. They are composed.</motion.h2>
                    </div>

                    <div className="lg:col-span-5 lg:pt-10">
                        <motion.p
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="text-spatial-charcoal/70 font-light leading-relaxed mb-8 text-sm md:text-base"
                        >
                            We believe exceptional design comes from understanding space, light, materials and the way people live. Every detail has purpose. Every space has a story.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                        >
                            <a href="#projects" className="inline-flex items-center gap-3 text-xs tracking-widest uppercase font-medium text-spatial-charcoal hover:text-spatial-bronze transition-colors group">
                                Read Our Philosophy{" "}
                                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Spatial Layers™ Layered Media block */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-7 relative h-[350px] md:h-[550px] bg-spatial-stone overflow-hidden group"
                    >
                        <Image
                            src="https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&q=80&w=1400"
                            alt="Crafted element detailed view with micro material grain alignment"
                            fill
                            sizes="(max-width: 768px) 100vw, 60vw"
                            className="object-cover transform group-hover:scale-103 transition-transform duration-1000 ease-[0.22,1,0.36,1]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="md:col-span-5 bg-spatial-stone/30 p-8 md:p-16 xl:p-20 flex flex-col justify-between border border-spatial-stone/20"
                    >
                        <div className="max-w-xs">
                            <span className="text-[10px] tracking-[0.2em] uppercase block mb-6 text-spatial-walnut font-sans font-semibold">
                                Crafted with Purpose
                            </span>
                            <p className="text-xl font-display text-spatial-charcoal font-light leading-relaxed mb-6">
                                Every material. Every detail. Every decision. Made with purpose.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-spatial-stone/40 flex items-center justify-between">
                            <span className="text-[10px] text-spatial-walnut/60 font-sans tracking-wider uppercase">
                                Spatial Layers™ System
                            </span>
                            <span className="text-[10px] font-sans text-spatial-bronze font-medium">
                                v1.0
                            </span>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}