export function HeroBackground() {
  return (
    <>
      {/* Main Gradient Circle */}
      <div className="absolute left-1/2 top-14 z-0 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-gradient-to-br from-[#E9F5FF] via-[#CFE6FF] to-[#7FB8FF]" />

      {/* Soft Glow */}
      <div className="absolute left-1/2 top-24 z-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#DDEEFF]/50 blur-3xl" />

      {/* Decorative Top Wave */}
      <div className="absolute -top-10 right-0 z-0 h-[220px] w-[520px] rounded-full bg-[#EEF7FF] blur-3xl opacity-90" />

      {/* Decorative Bottom Wave */}
      <div className="absolute bottom-0 left-0 z-0 h-[180px] w-[480px] rounded-full bg-[#EDF6FF] blur-3xl opacity-90" />

      {/* Floating Dot */}
      <div className="absolute left-12 top-24 h-3 w-3 rounded-full bg-clinic-primary/30" />

      <div className="absolute right-28 top-36 h-2 w-2 rounded-full bg-cyan-300" />

      <div className="absolute bottom-36 right-24 h-4 w-4 rounded-full bg-blue-200" />

      {/* Decorative Plus */}
      <span className="absolute left-8 top-52 text-3xl font-light text-blue-200">
        +
      </span>

      <span className="absolute right-20 top-60 text-2xl font-light text-blue-300">
        +
      </span>

      <span className="absolute bottom-28 left-24 text-2xl font-light text-blue-200">
        +
      </span>
    </>
  );
}