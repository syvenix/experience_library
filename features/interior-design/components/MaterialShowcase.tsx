"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const materialItems = [
    {
        name: "Travertine",
        description: "Timeless. Natural. Beautiful because it ages gracefully.",
        image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&q=75&w=600"
    },
    {
        name: "Walnut Wood",
        description: "Rich tones providing structure and organic warmth.",
        image: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&q=75&w=600"
    },
    {
        name: "Brushed Brass",
        description: "Meticulously refined linear friction contact accents.",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=75&w=600"
    },
    {
        name: "Linen Fabric",
        description: "Woven texturing balancing hard architectural planes.",
        image: "https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=75&w=600"
    },
    {
        name: "Natural Stone",
        description: "Raw tectonic power carved into structural precision.",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?auto=format&fit=crop&q=75&w=600"
    }
];

export default function MaterialShowcase() {
    return (
        <section className="py-24 md:py-32 bg-spatial-warmWhite overflow-hidden border-t border-spatial-stone/20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Editorial Title Block Layout */}
                <div className="max-w-2xl mb-20">
                    <span className="text-xs tracking-[0.3em] uppercase block mb-4 text-spatial-bronze font-sans font-medium">
                        03. Tactile Palettes
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-light text-spatial-charcoal">
                        Crafted with Intention
                    </h2>
                </div>

                {/* Horizontal Material 5-Column Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8 items-start">
                    {materialItems.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="group cursor-pointer flex flex-col"
                        >
                            {/* Textured Image Frame Canvas */}
                            <div className="relative h-80 w-full bg-spatial-stone mb-4 overflow-hidden border border-spatial-stone/10">
                                <Image
                                    src={item.image}
                                    alt={`${item.name} material texture canvas snapshot`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                                    className="object-cover filter grayscale group-hover:grayscale-0 transform group-hover:scale-105 transition-all duration-700 ease-[0.22,1,0.36,1]"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-spatial-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Title & Micro-Narrative Details Label */}
                            <h3 className="text-base font-sans font-medium text-spatial-charcoal mb-1 group-hover:text-spatial-bronze transition-colors">
                                {item.name}
                            </h3>

                            <p className="text-xs text-spatial-charcoal/50 leading-relaxed font-light mb-4">
                                {item.description}
                            </p>

                            {/* Minimal Text Action Trigger */}
                            <div className="inline-flex items-center gap-1.5 text-[10px] tracking-widest uppercase font-semibold text-spatial-charcoal group-hover:text-spatial-bronze mt-auto pt-2 transition-colors">
                                Explore Material <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform duration-300" />
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}