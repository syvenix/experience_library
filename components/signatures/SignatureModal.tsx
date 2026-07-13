"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, X } from "lucide-react";
import Link from "next/link";

import type { Signature } from "./types";

interface SignatureModalProps {
  signature: Signature | null;
  onClose: () => void;
}

export default function SignatureModal({
  signature,
  onClose,
}: SignatureModalProps) {
  if (!signature) {
    return null;
  }

  const Icon = signature.icon;

  return (
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={`signature-title-${signature.id}`}
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 24 }}
          transition={{ duration: 0.3 }}
          onClick={(event) => event.stopPropagation()}
          className={`relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-gray-200 bg-gradient-to-br ${signature.bgGradient} p-6 shadow-2xl sm:p-8 lg:p-10`}
        >
          {/* Close Button */}

          <button
            type="button"
            aria-label="Close signature details"
            onClick={onClose}
            className="absolute right-5 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white/80 text-gray-600 shadow-sm backdrop-blur transition hover:scale-105 hover:text-gray-950"
          >
            <X size={20} />
          </button>

          {/* Signature Identity */}

          <div className="pr-14">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm ${signature.color}`}
            >
              <Icon size={32} />
            </motion.div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-gray-500">
              {signature.industry}
            </p>

            <h2
              id={`signature-title-${signature.id}`}
              className={`mt-2 text-3xl font-bold sm:text-4xl ${signature.textColor}`}
            >
              {signature.name}
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-8 text-gray-700 sm:text-lg">
              {signature.overview}
            </p>
          </div>

          {/* Principles + Applications */}

          <div className="mt-10 grid gap-8 border-t border-gray-300/70 pt-8 md:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
                Design Principles
              </h3>

              <div className="mt-5 space-y-4">
                {signature.principles.map((principle) => (
                  <div
                    key={principle}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <span
                      className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white shadow-sm ${signature.color}`}
                    >
                      <Check size={13} />
                    </span>

                    <span>{principle}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-gray-900">
                Applications
              </h3>

              <div className="mt-5 flex flex-wrap gap-2">
                {signature.applications.map((application) => (
                  <span
                    key={application}
                    className="rounded-full border border-gray-300/80 bg-white/70 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm backdrop-blur"
                  >
                    {application}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Action */}

          <div className="mt-10 border-t border-gray-300/70 pt-8">
            {signature.available ? (
              <Link
                href={signature.signatureUrl}
                onClick={onClose}
                className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:gap-3 hover:bg-slate-800"
              >
                Explore Full Signature

                <ArrowRight size={18} />
              </Link>
            ) : (
              <div className="inline-flex rounded-xl border border-gray-300 bg-white/70 px-6 py-3 font-semibold text-gray-500 shadow-sm backdrop-blur">
                Full Signature Coming Soon
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
  );
}