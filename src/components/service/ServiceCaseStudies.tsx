import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

export interface CaseStudy {
  image: string;
  client: string;
  description: string;
  metrics: { value: string; label: string }[];
}

interface ServiceCaseStudiesProps {
  caseStudies: CaseStudy[];
}

const ServiceCaseStudies = ({ caseStudies }: ServiceCaseStudiesProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const { ref, isVisible } = useScrollAnimation();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-10">
        <SectionLabel label="Case Studies" dark />
      </div>

      <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex">
            {caseStudies.map((cs, i) => (
              <div key={i} className="flex-none w-full min-w-0 px-6">
                <div className="max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden">
                    <img src={cs.image} alt={cs.client} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div>
                    <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-4 block">Case Study</span>
                    <h3 className="font-headline text-[clamp(24px,2.5vw,36px)] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-4">{cs.client}</h3>
                    <p className="font-body text-[15px] font-light text-swann-text-dim leading-relaxed mb-8 max-w-[460px]">{cs.description}</p>
                    <div className="grid grid-cols-3 gap-6 mb-8">
                      {cs.metrics.map((m, j) => (
                        <div key={j}>
                          <span className="font-headline text-[clamp(24px,2vw,36px)] font-bold text-white block">{m.value}</span>
                          <span className="font-body text-[12px] text-swann-text-dim">{m.label}</span>
                        </div>
                      ))}
                    </div>
                    <a href="#" className="inline-flex font-body text-[14px] font-medium text-white border-b border-white/30 pb-1 hover:border-swann-gold hover:text-swann-gold transition-colors duration-300">View Case Study →</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 mt-12 flex items-center justify-between">
          <div className="flex gap-2">
            {scrollSnaps.map((_, i) => (
              <button key={i} className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-white" : "bg-white/20"}`} onClick={() => emblaApi?.scrollTo(i)} />
            ))}
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-[13px] text-swann-text-dim hover:text-white transition-colors">→ More Case Studies</a>
            <div className="flex gap-3">
              <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-swann-dark transition-colors"><ChevronLeft size={18} /></button>
              <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-swann-dark transition-colors"><ChevronRight size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceCaseStudies;
