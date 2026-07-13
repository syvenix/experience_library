"use client";

import React, { useState } from "react";
import { User, Phone, Mail, ChevronDown, Check, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@lawfirm/lib/utils";

const PRACTICE_AREAS = [
  "Corporate Law",
  "Litigation & Dispute Resolution",
  "Family Law",
  "Real Estate Law",
  "Intellectual Property",
  "Criminal Defense",
];

export default function ConsultationWidget() {
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    practiceArea: "",
    caseBrief: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required";
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = "Phone number is required";
    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.emailAddress)) {
      newErrors.emailAddress = "Invalid email address";
    }
    if (!formData.practiceArea) newErrors.practiceArea = "Select a practice area";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API call (200ms max animate/response duration)
    await new Promise((resolve) => setTimeout(resolve, 600));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({
      fullName: "",
      phoneNumber: "",
      emailAddress: "",
      practiceArea: "",
      caseBrief: "",
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-neutral-900/90 backdrop-blur-md border border-neutral-800 rounded-lg p-6 lg:p-8 w-full max-w-md shadow-2xl relative z-10"
    >
      <AnimatePresence mode="wait">
        {!isSubmitted ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.15 }}
            className="flex flex-col gap-4"
          >
            <div>
              <h3 className="font-serif text-lg lg:text-xl text-white font-semibold leading-tight">
                Book a Consultation
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                Confidential & No Obligation
              </p>
            </div>

            {/* Name Input */}
            <div className="relative">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                className={cn(
                  "w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors pr-10 font-light",
                  errors.fullName && "border-red-500/50 focus:border-red-500"
                )}
              />
              <User size={14} className="absolute right-3.5 top-3.5 text-neutral-500" />
              {errors.fullName && (
                <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.fullName}</span>
              )}
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className={cn(
                  "w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors pr-10 font-light",
                  errors.phoneNumber && "border-red-500/50 focus:border-red-500"
                )}
              />
              <Phone size={14} className="absolute right-3.5 top-3.5 text-neutral-500" />
              {errors.phoneNumber && (
                <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.phoneNumber}</span>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                type="email"
                name="emailAddress"
                placeholder="Email Address"
                value={formData.emailAddress}
                onChange={handleChange}
                className={cn(
                  "w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors pr-10 font-light",
                  errors.emailAddress && "border-red-500/50 focus:border-red-500"
                )}
              />
              <Mail size={14} className="absolute right-3.5 top-3.5 text-neutral-500" />
              {errors.emailAddress && (
                <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.emailAddress}</span>
              )}
            </div>

            {/* Practice Area Dropdown */}
            <div className="relative">
              <select
                name="practiceArea"
                value={formData.practiceArea}
                onChange={handleChange}
                className={cn(
                  "w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-neutral-300 text-xs px-4 py-3 rounded outline-none transition-colors pr-10 appearance-none font-light cursor-pointer",
                  errors.practiceArea && "border-red-500/50 focus:border-red-500"
                )}
              >
                <option value="" disabled className="bg-neutral-900">
                  Select Practice Area
                </option>
                {PRACTICE_AREAS.map((area) => (
                  <option key={area} value={area} className="bg-neutral-900 text-white">
                    {area}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="absolute right-3.5 top-3.5 text-neutral-500 pointer-events-none" />
              {errors.practiceArea && (
                <span className="text-[10px] text-red-400 mt-1 block pl-1">{errors.practiceArea}</span>
              )}
            </div>

            {/* Case Brief Textarea */}
            <div>
              <textarea
                name="caseBrief"
                placeholder="Briefly describe your case..."
                rows={3}
                value={formData.caseBrief}
                onChange={handleChange}
                className="w-full bg-neutral-950/60 border border-neutral-800 focus:border-gold-base text-white text-xs px-4 py-3 rounded outline-none transition-colors resize-none font-light"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-gold-base hover:bg-gold-hover disabled:bg-neutral-800 disabled:text-neutral-500 text-dark-bg text-xs font-semibold uppercase tracking-wider rounded transition-colors duration-200 flex items-center justify-center gap-2 group cursor-pointer shadow-lg mt-2"
            >
              {isSubmitting ? (
                <span>Processing...</span>
              ) : (
                <>
                  <span>Book Consultation</span>
                  <motion.span
                    className="inline-block transition-transform duration-200 group-hover:translate-x-1"
                  >
                    &rarr;
                  </motion.span>
                </>
              )}
            </button>

            {/* Secure Note */}
            <div className="flex items-center justify-center gap-1.5 mt-2 text-[10px] text-neutral-500">
              <ShieldCheck size={12} className="text-gold-base" />
              <span>Your information is 100% secure</span>
            </div>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <div className="w-14 h-14 rounded-full border border-gold-base/30 bg-gold-base/10 flex items-center justify-center text-gold-base mb-6">
              <Check size={28} />
            </div>
            <h3 className="font-serif text-xl text-white font-semibold">
              Thank You
            </h3>
            <p className="text-xs text-neutral-400 mt-2 max-w-xs leading-relaxed">
              Your consultation request has been received. One of our senior legal executives will contact you within 24 business hours.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="mt-8 text-xs font-semibold text-gold-base hover:text-white uppercase tracking-wider transition-colors"
            >
              Request Another Session
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
