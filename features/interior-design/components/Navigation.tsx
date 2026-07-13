"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export default function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            <motion.nav
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className={`fixed top-0 left-0 right-0 z-50 px-6 xl:px-24 py-6 transition-all duration-300 ${isScrolled ? "bg-spatial-charcoal/95 backdrop-blur-md text-white border-b border-white/5" : "bg-transparent text-white"
                    }`}
            >
                <div className="max-w-[1440px] mx-auto flex items-center justify-between">
                    <a href="#" className="text-lg font-light tracking-[0.25em] font-sans">SYVENIX</a>

                    <div className="hidden lg:flex items-center space-x-12 text-xs tracking-[0.2em] uppercase font-light">
                        <a href="#projects" className="hover:text-spatial-bronze transition-colors">Projects</a>
                        <a href="#philosophy" className="hover:text-spatial-bronze transition-colors">Philosophy</a>
                        <a href="#process" className="hover:text-spatial-bronze transition-colors">Process</a>
                        <a href="#contact" className="hover:text-spatial-bronze transition-colors">Contact</a>
                    </div>

                    <a
                        href="#contact"
                        className="hidden md:flex items-center gap-2 border border-current/20 px-6 py-3 text-xs tracking-widest uppercase hover:bg-white hover:text-spatial-charcoal transition-all duration-300"
                    >
                        Start Your Project <ArrowUpRight className="w-3 h-3" />
                    </a>

                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className="lg:hidden flex flex-col space-y-1.5 p-2"
                        aria-label="Toggle navigation menu"
                    >
                        <span className={`h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
                        <span className={`h-px w-6 bg-current transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
                        <span className={`h-px w-6 bg-current transition-transform duration-300 ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
                    </button>
                </div>
            </motion.nav>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.4 }}
                        className="fixed inset-0 z-40 bg-spatial-charcoal flex flex-col justify-center px-12 text-white space-y-8"
                    >
                        <div className="flex flex-col space-y-6 text-2xl font-light tracking-widest uppercase">
                            <a href="#projects" onClick={() => setMobileOpen(false)}>Projects</a>
                            <a href="#philosophy" onClick={() => setMobileOpen(false)}>Philosophy</a>
                            <a href="#process" onClick={() => setMobileOpen(false)}>Process</a>
                            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}