"use client";

import { motion } from "framer-motion";

export default function Testimonials() {
    return (
        <section id="testimonials" className="py-24 md:py-32 xl:py-40 bg-white overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Asymmetrical Bordered Content Block Layout */}
                <div className="max-w-4xl border-l-2 border-spatial-bronze pl-8 md:pl-16 lg:pl-20 py-2">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                        className="text-xs tracking-[0.3em] uppercase block mb-8 text-spatial-bronze font-sans font-medium"
                    >
                        Client Stories
                    </motion.span>

                    <motion.blockquote
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                        className="text-2xl md:text-3xl lg:text-4xl font-display font-light text-spatial-charcoal leading-relaxed mb-10 select-none"
                    >
                        “Syvenix understood our vision perfectly and transformed our house into a home that feels timeless, warm and truly ours. The attention to detail and the experience throughout the journey was exceptional.”
                    </motion.blockquote>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                    >
                        <h4 className="text-sm md:text-base font-sans font-medium text-spatial-charcoal">
                            Anjali & Rohan Mehta
                        </h4>
                        <p className="text-xs text-spatial-charcoal/40 uppercase tracking-[0.15em] mt-1 font-sans font-medium">
                            Hillside Residence, Bangalore
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}