import Image from "next/image";

export function InsuranceStrip() {
  return (
    <aside
      aria-label="Insurance Accepted"
      className="clinic-glass overflow-hidden rounded-[28px]"
    >
      <Image
        src="/experiences/healthcare/images/clinic/insurance-strip.png"
        alt="Insurance accepted including Star Health, Niva Bupa, Care Health and more"
        width={760}
        height={340}
        className="h-auto w-full select-none object-contain"
        draggable={false}
        priority
      />
    </aside>
  );
}