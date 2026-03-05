import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ServiceShowcaseProps {
  image: string;
  label: string;
  headline: ReactNode;
  badge: string;
}

const ServiceShowcase = ({ image, label, headline, badge }: ServiceShowcaseProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden">
      <img src={image} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

      <div className={`absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-[900px] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-4 block">{label}</span>
        <h2 className="font-headline font-bold uppercase text-[clamp(22px,3.5vw,44px)] leading-[1] tracking-[-0.02em] text-white mb-6">
          {headline}
        </h2>
        <a href="#" className="inline-flex font-body text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-swann-gold hover:text-swann-gold transition-colors duration-300">
          View Project →
        </a>
      </div>

      <div className="absolute bottom-6 right-6 md:bottom-16 md:right-16 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-swann-gold" />
        <span className="font-body text-[11px] uppercase tracking-[0.1em] text-white/80">{badge}</span>
      </div>
    </section>
  );
};

export default ServiceShowcase;
