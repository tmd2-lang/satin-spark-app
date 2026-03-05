import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";
import { ReactNode } from "react";

interface ServiceDiffProps {
  image: string;
  label: string;
  headline: ReactNode;
  body: string;
  subBold: string;
  subText: string;
}

const ServiceDifferentiator = ({ image, label, headline, body, subBold, subText }: ServiceDiffProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className={`grid grid-cols-1 lg:grid-cols-[1fr_55%] gap-10 lg:gap-16 items-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <div>
            <SectionLabel label={label} dark />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6">{headline}</h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[480px]">{body}</p>
            <div>
              <h4 className="font-headline text-[16px] font-bold text-white mb-2">{subBold}</h4>
              <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed max-w-[440px]">{subText}</p>
            </div>
          </div>
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden order-first lg:order-last">
            <img src={image} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDifferentiator;
