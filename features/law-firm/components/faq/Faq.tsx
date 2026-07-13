"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const FAQS = [
  {
    id: "faq1",
    question: "What are your consultation fees?",
    answer: "We offer an initial confidential consultation to evaluate the details of your case. Pricing and retaining terms are discussed transparently based on the scope and complexity of your requirements.",
  },
  {
    id: "faq2",
    question: "How do you structure legal billing?",
    answer: "Billing structures vary by practice area. We accommodate hourly billing, fixed flat fees for standard document creations, and contingency fee arrangements (percentage of recovery) for qualified litigation cases.",
  },
  {
    id: "faq3",
    question: "How long does a typical lawsuit take to resolve?",
    answer: "The timeline depends heavily on court availability, case complexity, and the cooperation of opposing parties. A simple negotiation can wrap up in weeks, whereas complex trials may take a year or more.",
  },
  {
    id: "faq4",
    question: "Can you represent clients outside of New York?",
    answer: "Yes, our team handles federal regulatory and transactional matters nationwide. For state-specific litigation outside of NY, we collaborate with vetted local counsel and act as lead coordinators.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="resources" className="py-24 bg-light-bg text-dark-bg">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-dark uppercase block mb-3">
            Common Inquiries
          </span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold tracking-tight text-neutral-900 leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4">
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white border border-light-border rounded-lg overflow-hidden transition-all duration-300 shadow-sm"
              >
                {/* Trigger Row */}
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left font-serif text-sm sm:text-base font-bold text-neutral-900 hover:text-gold-dark transition-colors outline-none cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div className="w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center shrink-0 ml-4">
                    {isOpen ? <Minus size={12} /> : <Plus size={12} />}
                  </div>
                </button>

                {/* Answer Box */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.18, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-5 pt-1 border-t border-neutral-50/50 text-xs leading-relaxed text-neutral-500 font-light">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
