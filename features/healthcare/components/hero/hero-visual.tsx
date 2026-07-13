import Image from "next/image";

export function HeroVisual() {
  return (
    <div className="relative flex items-center justify-center">
      <Image
        src="/experiences/healthcare/images/clinic/hero-visual.png"
        alt="Doctor with appointment and insurance interface"
        priority
        width={900}
        height={900}
        sizes="(max-width:1024px) 90vw, 760px"
        className="h-auto w-full max-w-[760px] select-none object-contain pointer-events-none"
        draggable={false}
      />
    </div>
  );
}