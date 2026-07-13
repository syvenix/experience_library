import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ExternalLink,
} from "lucide-react";

import type { Signature } from "./types";

interface SignatureDetailProps {
  signature: Signature;
}

const experienceRoutes: Record<string, string> = {
  "calm-flow": "/experiences/healthcare",
  "authority-lines": "/experiences/law-firm",
  "spatial-layers": "/experiences/interior-design",
};

export default function SignatureDetail({
  signature,
}: SignatureDetailProps) {
  const Icon = signature.icon;
  const experienceUrl = experienceRoutes[signature.slug];

  return (
    <section
      className={`min-h-screen bg-gradient-to-br ${signature.bgGradient}`}
    >
      {/* Hero */}

      <div className="border-b border-gray-200/80">
        <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:pb-28 lg:pt-24">
          <Link
            href="/signatures"
            className="group inline-flex items-center gap-2 font-semibold text-gray-600 transition hover:text-gray-950"
          >
            <ArrowLeft
              size={18}
              className="transition-transform group-hover:-translate-x-1"
            />

            Back to Design Signatures
          </Link>

          <div className="mt-16 max-w-4xl">
            <div
              className={`flex h-20 w-20 items-center justify-center rounded-3xl bg-white shadow-lg ${signature.color}`}
            >
              <Icon size={40} />
            </div>

            <p className="mt-10 text-sm font-bold uppercase tracking-[0.25em] text-gray-500">
              Syvenix Design Signature · {signature.industry}
            </p>

            <h1
              className={`mt-4 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl ${signature.textColor}`}
            >
              {signature.name}
            </h1>

            <p className="mt-8 max-w-3xl text-xl leading-9 text-gray-700 sm:text-2xl">
              {signature.description}
            </p>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600 sm:text-lg">
              {signature.overview}
            </p>
          </div>
        </div>
      </div>

      {/* Design System */}

      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Principles */}

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Design System
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl">
              Core Principles
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              The principles that govern how {signature.name} translates
              industry requirements into a coherent digital experience.
            </p>

            <div className="mt-10 space-y-4">
              {signature.principles.map((principle, index) => (
                <div
                  key={principle}
                  className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white/70 p-5 shadow-sm backdrop-blur"
                >
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ${signature.color}`}
                  >
                    <Check size={18} />
                  </span>

                  <div>
                    <span className="text-xs font-bold tracking-widest text-gray-400">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <p className="mt-1 font-semibold text-gray-800">
                      {principle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-gray-500">
              Industry Applications
            </p>

            <h2 className="mt-4 text-3xl font-bold text-gray-950 sm:text-4xl">
              Built for Real Experiences
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-gray-600">
              {signature.name} can guide digital products and platforms across
              organizations that share similar trust, interaction, and
              communication requirements.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {signature.applications.map((application) => (
                <div
                  key={application}
                  className="flex min-h-28 items-end rounded-2xl border border-gray-200 bg-white/70 p-6 shadow-sm backdrop-blur transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <p className="font-semibold text-gray-800">
                    {application}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related Experience */}

      {experienceUrl && (
        <div className="border-t border-gray-200/80">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28">
            <div className="rounded-3xl bg-slate-950 px-8 py-12 text-white shadow-2xl sm:px-12 lg:flex lg:items-center lg:justify-between lg:px-16 lg:py-16">
              <div className="max-w-2xl">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-blue-400">
                  Experience System
                </p>

                <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
                  See {signature.name} in practice.
                </h2>

                <p className="mt-5 leading-7 text-slate-300">
                  Explore the complete {signature.industry} Experience System
                  built using the principles behind this proprietary design
                  language.
                </p>
              </div>

              <div className="mt-8 lg:ml-10 lg:mt-0">
                <Link
                  href={experienceUrl}
                  className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#007BFF] to-[#00CFFF] px-6 py-3 font-semibold text-white shadow-lg transition duration-300 hover:-translate-y-0.5 hover:gap-3"
                >
                  View Experience System

                  <ExternalLink size={18} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Navigation */}

      <div className="border-t border-gray-200/80">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/signatures"
            className="inline-flex items-center gap-2 font-semibold text-gray-600 transition hover:text-gray-950"
          >
            <ArrowLeft size={18} />
            All Design Signatures
          </Link>

          <Link
            href="/"
            className="group inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:text-blue-700"
          >
            Experience Library

            <ArrowRight
              size={18}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}