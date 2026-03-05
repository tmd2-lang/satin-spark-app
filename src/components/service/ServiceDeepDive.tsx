import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";
import { ReactNode } from "react";

interface SubPoint {
  bold: string;
  text: string;
}

interface ServiceDeepDiveProps {
  image: string;
  label: string;
  headline: ReactNode;
  body: string;
  subPoints: SubPoint[];
}

const ServiceDeepDive = ({ image, label, headline, body, subPoints }: ServiceDeepDiveProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-start transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div className="aspect-[4/5] rounded-lg overflow-hidden">
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          <div className="lg:pt-8">
            <SectionLabel label={label} />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">{headline}</h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[520px]">{body}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {subPoints.map((sp, i) => (
                <div key={i}>
                  <h4 className="font-headline text-[16px] font-bold text-foreground mb-2">{sp.bold}</h4>
                  <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">{sp.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDeepDive;
