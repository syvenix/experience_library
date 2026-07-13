import { ShieldCheck } from "lucide-react";

import { partners } from "@healthcare/lib/site-data";

export function TrustBar() {
  return (
    <section
      aria-labelledby="trust-bar-heading"
      className="py-8"
    >
      <div className="clinic-shell">
        <div className="clinic-card grid items-center gap-4 rounded-lg px-6 py-5 md:grid-cols-[1.25fr_repeat(5,1fr)_0.8fr]">
          {/* Heading */}
          <div className="flex items-center gap-3 border-b border-clinic-border pb-4 md:border-b-0 md:border-r md:pb-0 md:pr-5">
            <span className="grid size-11 place-items-center rounded-pill bg-clinic-lightBlue text-clinic-primary">
              <ShieldCheck
                aria-hidden="true"
                size={24}
              />
            </span>

            <p
              id="trust-bar-heading"
              className="text-sm font-bold leading-5 text-clinic-navy"
            >
              Trusted
              <span className="block text-clinic-body">
                by Leading Healthcare
              </span>
              Partners
            </p>
          </div>

          {/* Partner Logos */}
          {partners.map((partner) => {
            const [brand, ...rest] = partner.split(" ");

            return (
              <div
                key={partner}
                className="border-b border-clinic-border py-2 text-center md:border-b-0 md:border-r md:px-4"
              >
                <p className="text-lg font-extrabold leading-5 text-clinic-primary">
                  {brand}
                </p>

                <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-clinic-muted">
                  {rest.join(" ") || "Healthcare"}
                </p>
              </div>
            );
          })}

          {/* Statistics */}
          <div className="text-center">
            <p className="text-3xl font-bold text-clinic-primary">
              25+
            </p>

            <p className="mt-1 text-xs font-semibold text-clinic-muted">
              Partner Hospitals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}