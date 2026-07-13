"use client";

import { Plus } from "lucide-react";
import { useState } from "react";

import { MotionSection } from "@healthcare/components/ui/motion-section";
import { faqs } from "@healthcare/lib/site-data";

export function FAQSection() {
  const [openItem, setOpenItem] = useState<number>(0);

  return (
    <MotionSection
      id="faq"
      aria-labelledby="faq-heading"
      className="py-10"
    >
      <div className="clinic-shell grid gap-6 lg:grid-cols-[0.78fr_1.22fr]">
        {/* Heading */}
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.14em] text-clinic-primary">
            FAQ
          </p>

          <h2
            id="faq-heading"
            className="mt-3 text-balance text-4xl"
          >
            Clear answers before your visit.
          </h2>
        </div>

        {/* Accordion */}
        <div className="clinic-card divide-y divide-clinic-border overflow-hidden rounded-lg">
          {faqs.map((item, index) => {
            const isOpen = index === openItem;
            const buttonId = `faq-button-${index}`;
            const panelId = `faq-panel-${index}`;

            return (
              <div key={item.question}>
                <button
                  id={buttonId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpenItem(isOpen ? -1 : index)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-bold text-clinic-navy transition-colors duration-200 hover:bg-clinic-lightBlue/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-clinic-primary focus-visible:ring-inset"
                >
                  <span>{item.question}</span>

                  <Plus
                    aria-hidden="true"
                    size={18}
                    className={`shrink-0 text-clinic-primary transition-transform duration-200 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={buttonId}
                  hidden={!isOpen}
                >
                  <p className="px-6 pb-5 text-sm leading-7 text-clinic-body">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}