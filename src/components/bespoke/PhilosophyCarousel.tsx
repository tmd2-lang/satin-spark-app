import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const cards = [
  {
    image: "https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800&q=80",
    title: "Conversion Is the Craft",
    text: "A beautiful website that doesn't book consultations is just art hanging on a wall. Every layout decision, every CTA placement, every word we write is reverse-engineered from one goal: turning visitors into patients.",
  },
  {
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&q=80",
    title: "Show Before You Tell",
    text: "Your patients don't read — they scan. In three seconds they've decided if you're worth their time. We lead with visuals that demand attention, then layer in the story that keeps them engaged.",
  },
  {
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80",
    title: "Aesthetics Demands Aesthetics",
    text: "You're in the business of beauty. Your digital presence can't be anything less. Every photo, animation, and interaction on a Swann website is held to the same standard your patients hold you to.",
  },
  {
    image: "https://images.unsplash.com/photo-1595959183082-7b570b7e1e6b?w=800&q=80",
    title: "Compliance Isn't an Add-On",
    text: "HIPAA. Medical advertising rules. Before/after photo regulations. State-by-state consent requirements. Most agencies learn about these the hard way. We build them in from the first wireframe.",
  },
];

const PhilosophyCarousel = () => {
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
        <SectionLabel label="Our Philosophy" />
      </div>

      <div
        className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
      >
        <div ref={emblaRef} className="overflow-hidden pl-6 md:pl-[max(1.5rem,calc((100%-1320px)/2+1.5rem))]">
          <div className="flex gap-6">
            {cards.map((card, i) => (
              <div key={i} className="flex-none w-[300px] md:w-[520px]">
                <div className="aspect-[4/3] rounded-lg overflow-hidden mb-5">
                  <img src={card.image} alt={card.title} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-headline text-[20px] md:text-[24px] font-bold text-foreground tracking-[-0.01em] mb-3">
                  {card.title}
                </h3>
                <p className="font-body text-[14px] md:text-[15px] font-light text-swann-text-dim leading-relaxed">
                  {card.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-[1320px] mx-auto px-6 mt-10 flex items-center justify-between">
          <div className="flex gap-2">
            {scrollSnaps.map((_, i) => (
              <button
                key={i}
                className={`w-2 h-2 rounded-full transition-colors ${i === selectedIndex ? "bg-foreground" : "bg-foreground/20"}`}
                onClick={() => emblaApi?.scrollTo(i)}
              />
            ))}
          </div>
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
    </section>
  );
};

export default PhilosophyCarousel;
