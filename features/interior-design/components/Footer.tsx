"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-spatial-charcoal text-white pt-24 pb-12 border-t border-white/5 font-sans">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Core Links & Info Layout Framework */}
                <div className="grid grid-cols-2 md:grid-cols-12 gap-12 xl:gap-16 mb-20">

                    {/* Studio Description Block (4 Columns wide on Desktop) */}
                    <div className="col-span-2 md:col-span-4">
                        <h3 className="text-xl tracking-[0.25em] font-light mb-6">SYVENIX</h3>
                        <p className="text-xs text-spatial-sand/50 font-light max-w-xs leading-relaxed">
                            Designing Spaces. Creating Experiences. Spatial Layers™ Interior Framework Architecture v1.0. Clean luxury created through absolute structural restraint.
                        </p>

                        {/* Minimal Social Line Triggers */}
                        <div className="flex space-x-6 mt-8 text-xs font-light text-spatial-sand/40 tracking-widest uppercase">
                            <a href="#" className="hover:text-spatial-bronze transition-colors">IG</a>
                            <a href="#" className="hover:text-white transition-colors">PN</a>
                            <a href="#" className="hover:text-white transition-colors">LN</a>
                        </div>
                    </div>

                    {/* Studio Nav Links Column (2 Columns wide) */}
                    <div className="col-span-1 md:col-span-2 md:col-start-6">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-spatial-sand mb-6 font-medium">
                            Studio
                        </h4>
                        <div className="flex flex-col space-y-3 text-xs font-light text-spatial-sand/60">
                            <a href="#" className="hover:text-white transition-colors">About Us</a>
                            <a href="#" className="hover:text-white transition-colors">Our Approach</a>
                            <a href="#" className="hover:text-white transition-colors">Careers</a>
                            <a href="#" className="hover:text-white transition-colors">Journal</a>
                        </div>
                    </div>

                    {/* Services Nav Links Column (2 Columns wide) */}
                    <div className="col-span-1 md:col-span-2">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-spatial-sand mb-6 font-medium">
                            Services
                        </h4>
                        <div className="flex flex-col space-y-3 text-xs font-light text-spatial-sand/60">
                            <a href="#" className="hover:text-white transition-colors">Interior Design</a>
                            <a href="#" className="hover:text-white transition-colors">Architecture</a>
                            <a href="#" className="hover:text-white transition-colors">Space Planning</a>
                            <a href="#" className="hover:text-white transition-colors">Consultation</a>
                        </div>
                    </div>

                    {/* Stay Inspired / Newsletter Block Column (2 Columns wide) */}
                    <div className="col-span-2 md:col-span-2">
                        <h4 className="text-[10px] uppercase tracking-[0.2em] text-spatial-sand mb-6 font-medium">
                            Stay Inspired
                        </h4>
                        <p className="text-[11px] font-light text-spatial-sand/60 leading-relaxed mb-4">
                            Subscribe to our journal for design insights and inspiration.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center border-b border-white/20 pb-1">
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                                className="w-full bg-transparent text-xs text-white placeholder-spatial-sand/30 font-light focus:outline-none py-1"
                            />
                            <button type="submit" className="text-spatial-sand/60 hover:text-white transition-colors p-1" aria-label="Subscribe">
                                <ArrowRight className="w-3.5 h-3.5" />
                            </button>
                        </form>
                    </div>
                </div>

                {/* Legal Bottom Baseline Bar */}
                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] tracking-widest uppercase text-spatial-sand/40 gap-4">
                    <p>© 2026 Syvenix. All rights reserved.</p>
                    <div className="flex space-x-8">
                        <p className="text-spatial-sand/30 font-light lowercase">hello@syvenix.com</p>
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}