"use client";

import React, { useState } from "react";
import { Mail, MapPin, Phone, Clock, Check, Send } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulation
    await new Promise((resolve) => setTimeout(resolve, 500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", message: "" });
    setTimeout(() => setIsSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="py-24 bg-dark-bg text-white relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column: Info details */}
          <div className="flex flex-col items-start justify-center">
            <span className="text-[10px] tracking-[0.3em] font-semibold text-gold-base uppercase mb-4 block">
              Contact Us
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-6">
              Connect With Our Legal Executives.
            </h2>
            <p className="text-neutral-400 font-sans font-light text-sm sm:text-base leading-relaxed mb-12 max-w-md">
              Whether you are facing a corporate legal dispute, starting a new project,
              or looking for defense counsel, we are here to protect your interests.
            </p>

            {/* Support info items */}
            <div className="flex flex-col gap-6 w-full max-w-sm">
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-gold-base shrink-0">
                  <MapPin size={16} />
                </div>
                <span className="text-xs sm:text-sm text-neutral-300 font-light">
                  100 Corporate Parkway, Suite 500, New York, NY 10001
                </span>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-gold-base shrink-0">
                  <Phone size={16} />
                </div>
                <a href="tel:+18005550199" className="text-xs sm:text-sm text-neutral-300 font-light hover:text-gold-base transition-colors">
                  +1 (800) 555-0199
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-gold-base shrink-0">
                  <Mail size={16} />
                </div>
                <a href="mailto:info@syvenixlaw.com" className="text-xs sm:text-sm text-neutral-300 font-light hover:text-gold-base transition-colors">
                  info@syvenixlaw.com
                </a>
              </div>
              <div className="flex gap-4 items-center">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center text-gold-base shrink-0">
                  <Clock size={16} />
                </div>
                <span className="text-xs sm:text-sm text-neutral-300 font-light">
                  Monday &ndash; Friday: 9:00 AM &ndash; 6:00 PM
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Message Form */}
          <div className="bg-neutral-900/60 border border-neutral-800 rounded-lg p-8 shadow-xl">
            <h3 className="font-serif text-lg sm:text-xl text-white font-semibold mb-6">
              Send a Direct Message
            </h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors font-light"
                />
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors font-light"
                />
              </div>

              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors font-light"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Write your message here..."
                  rows={4}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors resize-none font-light"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-gold-base hover:bg-gold-hover text-dark-bg text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-lg mt-2"
              >
                {isSubmitting ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send size={12} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    className="flex items-center gap-2 justify-center text-xs text-gold-base mt-2"
                  >
                    <Check size={14} />
                    <span>Message sent successfully! We will get back to you shortly.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
}
