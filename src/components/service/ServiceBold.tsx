import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface ServiceBoldProps {
  label: string;
  headline: ReactNode;
}

const ServiceBold = ({ label, headline }: ServiceBoldProps) => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-20 md:py-28">
      <div className={`max-w-[1100px] mx-auto px-6 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-6 block">{label}</span>
        <h2 className="font-headline font-bold uppercase text-[clamp(26px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-foreground">
          {headline}
        </h2>
      </div>
    </section>
  );
};

export default ServiceBold;
