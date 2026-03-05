import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";
import { ReactNode } from "react";

interface ServiceApproachProps {
  image: string;
  label: string;
  headline: ReactNode;
  body: string;
  pills: string[];
}

const ServiceApproach = ({ image, label, headline, body, pills }: ServiceApproachProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div>
            <SectionLabel label={label} />
            <h2 className="font-headline text-[clamp(28px,3vw,42px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              {headline}
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[520px]">
              {body}
            </p>
            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dimmer mb-4 block">Supporting Services</span>
              <div className="flex flex-wrap gap-3">
                {pills.map((pill) => (
                  <a key={pill} href="#" className="font-body text-[13px] text-foreground border border-foreground/20 rounded-full px-5 py-2 hover:bg-foreground hover:text-swann-light transition-colors duration-200">
                    {pill}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceApproach;
