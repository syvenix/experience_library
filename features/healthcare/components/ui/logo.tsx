import Link from "next/link";

type LogoProps = {
  compact?: boolean;
};

export function Logo({ compact = false }: LogoProps) {
  return (
    <Link
      href="#home"
      aria-label="Syvenix Clinic home"
      className="flex shrink-0 items-center gap-3"
    >
      {/* Logo Mark */}
      <span
        aria-hidden="true"
        className="relative grid size-11 place-items-center rounded-md bg-clinic-lightBlue"
      >
        <span className="absolute left-3 top-2 h-7 w-4 rotate-45 rounded-pill bg-clinic-primary" />

        <span className="absolute bottom-2 right-3 h-7 w-4 rotate-45 rounded-pill bg-cyan-400" />
      </span>

      {/* Logo Text */}
      <span className="leading-none">
        <span className="block text-[22px] font-bold tracking-[0.24em] text-clinic-ink">
          SYVENIX
        </span>

        {!compact && (
          <span className="mt-1 block text-[11px] font-semibold tracking-[0.32em] text-clinic-navy">
            CLINIC SOLUTION
          </span>
        )}
      </span>
    </Link>
  );
}