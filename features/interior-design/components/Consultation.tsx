"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Consultation() {
    return (
        <section id="contact" className="py-24 md:py-32 xl:py-40 bg-spatial-stone/40 overflow-hidden border-t border-spatial-stone/30">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

                    {/* Text Branding Side Layout Column */}
                    <div className="lg:col-span-5">
                        <span className="text-xs tracking-[0.3em] uppercase block mb-4 text-spatial-walnut font-sans font-medium">
                            Let's Create Together
                        </span>
                        <h2 className="text-4xl lg:text-5xl xl:text-6xl font-display font-light text-spatial-charcoal leading-[1.1] mb-8">
                            Let's Create Something Timeless.
                        </h2>
                        <p className="text-spatial-charcoal/60 text-sm md:text-base font-light leading-relaxed max-w-sm">
                            Every exceptional space begins with a conversation. We would love to understand your vision.
                        </p>
                    </div>

                    {/* Form Processing Block Column */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                        className="lg:col-span-7 w-full bg-white p-8 md:p-12 xl:p-16 border border-spatial-stone/20 shadow-sm"
                    >
                        <form onSubmit={(e) => e.preventDefault()} className="space-y-8">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        id="client-name"
                                        required
                                        className="peer w-full bg-transparent border-b border-spatial-stone py-3 text-sm font-light focus:outline-none focus:border-spatial-charcoal transition-colors placeholder-transparent"
                                        placeholder="Your Name"
                                    />
                                    <label
                                        htmlFor="client-name"
                                        className="absolute left-0 top-3 text-xs tracking-wider uppercase text-spatial-walnut/50 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-spatial-walnut/40 peer-focus:top-[-12px] peer-focus:text-[10px] peer-focus:text-spatial-charcoal peer-valid:top-[-12px] peer-valid:text-[10px]"
                                    >
                                        Your Name
                                    </label>
                                </div>

                                <div className="relative">
                                    <input
                                        type="email"
                                        id="client-email"
                                        required
                                        className="peer w-full bg-transparent border-b border-spatial-stone py-3 text-sm font-light focus:outline-none focus:border-spatial-charcoal transition-colors placeholder-transparent"
                                        placeholder="Email Address"
                                    />
                                    <label
                                        htmlFor="client-email"
                                        className="absolute left-0 top-3 text-xs tracking-wider uppercase text-spatial-walnut/50 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-spatial-walnut/40 peer-focus:top-[-12px] peer-focus:text-[10px] peer-focus:text-spatial-charcoal peer-valid:top-[-12px] peer-valid:text-[10px]"
                                    >
                                        Email Address
                                    </label>
                                </div>
                            </div>

                            <div className="relative">
                                <select
                                    id="project-type"
                                    className="w-full bg-transparent border-b border-spatial-stone py-3 text-sm font-light focus:outline-none focus:border-spatial-charcoal transition-colors text-spatial-charcoal/80 appearance-none rounded-none"
                                >
                                    <option value="residential">Residential Space</option>
                                    <option value="commercial">Commercial Architecture</option>
                                    <option value="hospitality">Hospitality Blueprint</option>
                                </select>
                                <label htmlFor="project-type" className="block text-[10px] uppercase tracking-wider text-spatial-walnut/40 mb-1 font-sans">
                                    Project Type
                                </label>
                            </div>

                            <div className="relative">
                                <textarea
                                    id="project-brief"
                                    rows={4}
                                    required
                                    className="peer w-full bg-transparent border-b border-spatial-stone py-3 text-sm font-light focus:outline-none focus:border-spatial-charcoal transition-colors placeholder-transparent resize-none"
                                    placeholder="Tell us about your project"
                                ></textarea>
                                <label
                                    htmlFor="project-brief"
                                    className="absolute left-0 top-3 text-xs tracking-wider uppercase text-spatial-walnut/50 transition-all pointer-events-none peer-placeholder-shown:text-sm peer-placeholder-shown:text-spatial-walnut/40 peer-focus:top-[-16px] peer-focus:text-[10px] peer-focus:text-spatial-charcoal peer-valid:top-[-16px] peer-valid:text-[10px]"
                                >
                                    Tell us about your project
                                </label>
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    className="bg-spatial-charcoal text-white text-xs tracking-[0.2em] uppercase px-10 py-5 flex items-center gap-3 hover:bg-spatial-bronze transition-colors duration-300 w-full md:w-auto justify-center font-sans font-medium group"
                                >
                                    Start The Conversation{" "}
                                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                        </form>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}