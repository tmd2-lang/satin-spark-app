import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

export interface PhilosophyCard {
  image: string;
  title: string;
  text: string;
}

interface ServicePhilosophyProps {
  label?: string;
  cards: PhilosophyCard[];
}

const ServicePhilosophy = ({ label = "Our Philosophy", cards }: ServicePhilosophyProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true, align: "start", containScroll: "trimSnaps" });
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
    <section ref={ref} className="bg-swann-light py-20 md:py-28 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-10">
        <SectionLabel label={label} />
      </div>

      <div className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
        <div ref={emblaRef} className="overflow-hidden pl-6 md:pl-[max(1.5rem,calc((100%-1320px)/2+1.5rem))]">
          <div className="flex gap-6">
            {cards.map((card, i) => (
              <div key={i} className="flex-none w-[300px] md:w-[520px]">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-headline text-[20px] md:text-[24px] font-bold text-foreground tracking-[-0.01em] mb-3">{card.title}</h3>
                <p className="font-body text-[14px] md:text-[15px] font-light text-swann-text-dim leading-relaxed">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[1320px] mx-auto px-6 mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {scrollSnaps.map((_, i) => (
              <button key={i} className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-foreground" : "bg-foreground/20"}`} onClick={() => emblaApi?.scrollTo(i)} />
            ))}
          </div>
          <div className="flex gap-3">
            <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-swann-light transition-colors"><ChevronLeft size={18} /></button>
            <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-swann-light transition-colors"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePhilosophy;
