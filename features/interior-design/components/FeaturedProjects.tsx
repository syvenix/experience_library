"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

const portfolioWorks = [
    {
        id: 1,
        title: "Hillside Residence",
        location: "Bangalore, India",
        specs: "4,200 sq.ft",
        image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 2,
        title: "Serenity Villa",
        location: "Goa, India",
        specs: "5,800 sq.ft",
        image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&q=80&w=1000",
    },
    {
        id: 3,
        title: "Oak & Stone Apartment",
        location: "Mumbai, India",
        specs: "3,100 sq.ft",
        image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&q=80&w=1000",
    }
];

export default function FeaturedProjects() {
    return (
        <section id="projects" className="py-24 md:py-32 xl:py-40 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Section Header with Massive Spacing Hierarchy */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-6">
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase block mb-4 text-spatial-bronze font-sans font-medium">
                            Selected Portfolios
                        </span>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-light text-spatial-charcoal">
                            Featured Projects
                        </h2>
                    </div>

                    <motion.a
                        href="#"
                        whileHover={{ x: 4 }}
                        transition={{ duration: 0.3 }}
                        className="text-xs tracking-widest uppercase border-b border-spatial-charcoal/25 pb-1 hover:border-spatial-bronze hover:text-spatial-bronze transition-colors font-sans font-medium"
                    >
                        View All Projects — Portfolio
                    </motion.a>
                </div>

                {/* The Exact 3-Column Square Aspect Project Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12">
                    {portfolioWorks.map((project, idx) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.15, ease: [0.22, 1, 0.36, 1] }}
                            className="group cursor-pointer flex flex-col"
                        >
                            {/* Image Frame Canvas with Architecture Aspect Ratio */}
                            <div className="relative aspect-square w-full overflow-hidden bg-spatial-warmWhite mb-6 border border-spatial-stone/10">
                                <Image
                                    src={project.image}
                                    alt={`${project.title} detailed spatial architecture deployment`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover transform group-hover:scale-103 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                                    loading="lazy"
                                />

                                {/* Subtle Layer Cover Overlay Effect */}
                                <div className="absolute inset-0 bg-spatial-charcoal/5 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            {/* Card Meta Content Block Layout */}
                            <div className="flex justify-between items-start w-full">
                                <div>
                                    <h3 className="text-lg md:text-xl font-display font-light text-spatial-charcoal mb-1.5 transition-colors group-hover:text-spatial-bronze">
                                        {project.title}
                                    </h3>
                                    <p className="text-[11px] text-spatial-charcoal/50 uppercase tracking-[0.15em] font-sans font-medium">
                                        {project.location} <span className="mx-1.5 text-spatial-stone">•</span> {project.specs}
                                    </p>
                                </div>

                                {/* Elegant Round Custom Circle Outline Icon Transition */}
                                <div className="w-9 h-9 rounded-full border border-spatial-stone flex items-center justify-center text-spatial-charcoal bg-transparent group-hover:bg-spatial-charcoal group-hover:text-white group-hover:border-spatial-charcoal transition-all duration-300 transform group-hover:-rotate-45">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}