"use client";

import { motion } from "framer-motion";

const designSteps = [
    {
        id: "01",
        name: "Discover",
        summary: "Understanding your needs, routines, and lifestyle spatial vision thoroughly."
    },
    {
        id: "02",
        name: "Imagine",
        summary: "Exploring structural layout paths, lighting projections, and initial material pathways."
    },
    {
        id: "03",
        name: "Compose",
        summary: "Refining architectural details, scale relationships, and spatial choices with purpose."
    },
    {
        id: "04",
        name: "Craft",
        summary: "Bringing high-end tactile selections and artisan coordination parameters together."
    },
    {
        id: "05",
        name: "Reveal",
        summary: "Delivering spaces meticulously customized to inspire and elevate daily rituals."
    }
];

export default function DesignProcess() {
    return (
        <section id="process" className="py-24 md:py-32 xl:py-40 bg-white overflow-hidden border-b border-spatial-stone/20">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Step Section Heading */}
                <div className="max-w-2xl mb-20 md:mb-28">
                    <span className="text-xs tracking-[0.3em] uppercase block mb-4 text-spatial-bronze font-sans font-medium">
                        Our Design Journey
                    </span>
                    <h2 className="text-3xl md:text-4xl font-display font-light text-spatial-charcoal">
                        The Process Sequence
                    </h2>
                </div>

                {/* 5-Column Chronological Metric Sequence Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-8 lg:gap-12">
                    {designSteps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                            className="relative pt-8 border-t border-spatial-stone flex flex-col h-full"
                        >
                            {/* Numeric Top Counter Token */}
                            <div className="text-xs font-sans font-semibold text-spatial-bronze mb-4 tracking-wider">
                                {step.id}
                            </div>

                            {/* Step Context Title Descriptor */}
                            <h3 className="text-lg font-sans font-medium text-spatial-charcoal mb-3">
                                {step.name}
                            </h3>

                            {/* Detailed Summary Copy */}
                            <p className="text-xs text-spatial-charcoal/60 leading-relaxed font-light">
                                {step.summary}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}