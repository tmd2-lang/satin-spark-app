import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const articles = [
  {
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=600&q=80",
    category: "Patient Acquisition",
    title: "Why Your MedSpa Website Is Losing You Patients",
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    category: "Web Design",
    title: "Template vs. Custom: The Real Cost of a Cheap Website",
  },
  {
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&q=80",
    category: "Compliance",
    title: "Before & After Photos: The Compliance Guide for Aesthetics",
  },
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    category: "UX Research",
    title: "50 Milliseconds: The Science of First Impressions Online",
  },
];

const JournalFeed = () => {
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
    <section ref={ref} className="bg-swann-light py-24 md:py-32 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-6">
        <SectionLabel label="Swann Journal: Bespoke Websites" />
      </div>

      <div className="max-w-[1320px] mx-auto px-6 mb-12">
        <h2
          className={`font-headline font-bold uppercase text-[clamp(24px,3.5vw,48px)] leading-[0.95] tracking-[-0.03em] text-foreground transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          There's a Direct Correlation
          <br className="hidden md:block" />
          Between Web Creative and
          <br className="hidden md:block" />
          Patient Acquisition
        </h2>
      </div>

      <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        <div ref={emblaRef} className="overflow-hidden pl-6 md:pl-[max(1.5rem,calc((100%-1320px)/2+1.5rem))]">
          <div className="flex gap-6">
            {articles.map((article, i) => (
              <a key={i} href="#" className="flex-none w-[280px] md:w-[400px] group">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-4">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <span className="font-body text-[11px] uppercase tracking-[0.12em] text-swann-gold mb-2 block">
                  {article.category}
                </span>
                <h3 className="font-headline text-[17px] md:text-[20px] font-bold text-foreground tracking-[-0.01em] group-hover:text-swann-gold transition-colors duration-200">
                  {article.title}
                </h3>
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-[1320px] mx-auto px-6 mt-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {scrollSnaps.map((_, i) => (
                <button
                  key={i}
                  className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-foreground" : "bg-foreground/20"}`}
                  onClick={() => emblaApi?.scrollTo(i)}
                />
              ))}
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="font-body text-[13px] text-foreground hover:text-swann-gold transition-colors">
              → View More on the Journal
            </a>
            <div className="flex gap-3">
              <button onClick={scrollPrev} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-swann-light transition-colors">
                <ChevronLeft size={18} />
              </button>
              <button onClick={scrollNext} className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground hover:text-swann-light transition-colors">
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JournalFeed;
