import { Star } from "lucide-react";

import { stats } from "@healthcare/lib/site-data";

export function HeroStats() {
  return (
    <div className="clinic-card mt-14 w-full max-w-[620px] overflow-hidden rounded-[28px] border border-clinic-border bg-white shadow-lg">
      <div className="grid grid-cols-4">
        {stats.map((item, index) => (
          <div
            key={item.label}
            className={`flex min-h-[130px] flex-col items-center justify-center px-6 py-6 text-center ${
              index !== stats.length - 1
                ? "border-r border-clinic-border"
                : ""
            }`}
          >
            <div className="flex items-center gap-1">
              <span className="whitespace-nowrap text-[24px] font-bold leading-none text-clinic-navy">
                {item.value}
              </span>

              {index === 0 && (
                <Star
                  size={15}
                  className="fill-clinic-warning text-clinic-warning"
                />
              )}
            </div>

            <p className="mt-4 text-sm font-medium leading-7 text-clinic-muted">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}