import { HeroContent } from "./hero-content";
import { HeroStats } from "./hero-stats";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-clinic-border/70 bg-white"
    >
      <div className="clinic-shell relative py-16 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.44fr_0.56fr]">
          {/* Left */}
          <div className="relative z-20">
            <HeroContent />
            <HeroStats />
          </div>

          {/* Right */}
          <div className="relative flex justify-end">
            <HeroVisual />
          </div>
        </div>
      </div>
    </section>
  );
}