import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ServiceHeroProps {
  pills: string[];
  headline: ReactNode;
  body: string;
  dividerLabel: string;
}

const ServiceHero = ({ pills, headline, body, dividerLabel }: ServiceHeroProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-swann-light pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        className={`max-w-[1320px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="flex items-center justify-center gap-3 mb-10">
          {pills.map((pill) => (
            <span key={pill} className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dim border border-swann-text-dim/20 rounded-full px-4 py-1.5">
              {pill}
            </span>
          ))}
        </div>

        <h1 className="font-headline font-bold uppercase text-[clamp(32px,5.5vw,72px)] leading-[0.95] tracking-[-0.03em] text-foreground mb-8">
          {headline}
        </h1>

        <p className="font-body text-[16px] md:text-[18px] font-light text-swann-text-dim max-w-[640px] mx-auto leading-relaxed mb-10">
          {body}
        </p>

        <div className="w-[60px] h-px bg-swann-gold mx-auto mb-6" />

        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold">
          {dividerLabel}
        </span>
      </div>
    </section>
  );
};

export default ServiceHero;
