"use client";

import { useEffect, useState } from "react";
import { AnimatePresence } from "framer-motion";

import SignatureCard from "./SignatureCard";
import SignatureModal from "./SignatureModal";

import type { Signature } from "./types";

interface SignatureGridProps {
  signatures: Signature[];
}

export default function SignatureGrid({
  signatures,
}: SignatureGridProps) {
  const [selectedSignature, setSelectedSignature] =
    useState<Signature | null>(null);

  const handleCloseModal = () => {
    setSelectedSignature(null);
  };

  useEffect(() => {
    if (!selectedSignature) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedSignature]);

  if (!signatures.length) {
    return (
      <div className="flex items-center justify-center py-20">
        <p className="text-lg text-slate-500">
          No design signatures available.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {signatures.map((signature) => (
          <SignatureCard
            key={signature.id}
            signature={signature}
            onSelect={setSelectedSignature}
          />
        ))}
      </div>

      <AnimatePresence>
        {selectedSignature && (
          <SignatureModal
            key={selectedSignature.id}
            signature={selectedSignature}
            onClose={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </>
  );
}