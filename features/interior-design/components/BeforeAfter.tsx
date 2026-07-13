"use client";

import { useState, useRef, MouseEvent, TouchEvent } from "react";
import Image from "next/image";

export default function BeforeAfter() {
    const [sliderPos, setSliderPos] = useState(50);
    const containerRef = useRef<HTMLDivElement>(null);

    const processMove = (clientX: number) => {
        if (!containerRef.current) return;
        const box = containerRef.current.getBoundingClientRect();
        const position = ((clientX - box.left) / box.width) * 100;
        // Lock boundaries safely between 0% and 100%
        setSliderPos(Math.max(0, Math.min(100, position)));
    };

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        // Process movement when left mouse button is clicked/held
        if (e.buttons === 1) {
            processMove(e.clientX);
        }
    };

    const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
        if (e.touches[0]) {
            processMove(e.touches[0].clientX);
        }
    };

    return (
        <section className="py-24 md:py-32 bg-spatial-warmWhite overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12 xl:px-24">

                {/* Section Heading Spacing Framework */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-4">
                    <div>
                        <span className="text-xs tracking-[0.3em] uppercase block mb-4 text-spatial-bronze font-sans font-medium">
                            Comparative Spatial View
                        </span>
                        <h2 className="text-3xl md:text-4xl font-display font-light text-spatial-charcoal">
                            Before & After
                        </h2>
                    </div>
                    <p className="text-xs tracking-widest uppercase font-medium text-spatial-charcoal/50 font-sans hidden md:block">
                        Drag Slider to Reveal Transition
                    </p>
                </div>

                {/* Interactive Canvas Grid Container */}
                <div
                    ref={containerRef}
                    onMouseMove={handleMouseMove}
                    onTouchMove={handleTouchMove}
                    className="relative h-[400px] md:h-[600px] w-full overflow-hidden select-none cursor-ew-resize border border-spatial-stone/30 bg-spatial-stone"
                >
                    {/* Base Layer: Structural Before Footprint */}
                    <div className="absolute inset-0 w-full h-full">
                        <Image
                            src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600"
                            alt="Structural footprint prior layout modification"
                            fill
                            sizes="100vw"
                            className="object-cover filter grayscale opacity-90 select-none"
                            priority
                        />
                        <div className="absolute bottom-6 left-6 bg-spatial-charcoal text-white text-[10px] tracking-widest uppercase px-4 py-2 font-sans font-medium mix-blend-normal z-10">
                            Before
                        </div>
                    </div>

                    {/* Overlay Mask Layer: Realized After Composition */}
                    <div
                        className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none transition-all duration-75"
                        style={{ clipPath: `polygon(0 0, ${sliderPos}% 0, ${sliderPos}% 100%, 0 100%)` }}
                    >
                        <div className="absolute inset-0 w-full h-full">
                            <Image
                                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&q=80&w=1600"
                                alt="Completed luxury spatial realization composition"
                                fill
                                sizes="100vw"
                                className="object-cover select-none"
                                priority
                            />
                        </div>
                        <div className="absolute bottom-6 right-6 bg-white text-spatial-charcoal text-[10px] tracking-widest uppercase px-4 py-2 font-sans font-medium z-10 shadow-sm">
                            After
                        </div>
                    </div>

                    {/* Interactive Mechanical Rule Seam Bar */}
                    <div
                        className="absolute top-0 bottom-0 w-px bg-white z-20 pointer-events-none"
                        style={{ left: `${sliderPos}%` }}
                    >
                        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-spatial-charcoal text-white rounded-full flex items-center justify-center border border-white/40 shadow-2xl transition-transform duration-200 hover:scale-105 active:scale-95">
                            <span className="text-xs font-sans select-none tracking-tight">↔</span>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}