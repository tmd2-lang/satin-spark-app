import SectionLabel from "./SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const industries = [
  { name: "Med Spas", image: "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80" },
  { name: "Plastic Surgery", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80" },
  { name: "Aestheticians", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { name: "Luxury Spas", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { name: "Dermatology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" },
  { name: "Multi-Location", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
];

const Industries = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps", align: "start" });

  return (
    <section id="industries" ref={ref} className="bg-swann-light py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-12">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel label="Industries" />
          <h2 className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-[#111114] tracking-[-0.02em] mb-2">
            Built for the aesthetics industry.
          </h2>
          <p className="font-body text-[16px] text-swann-text-dim">
            Every vertical. Every complexity.
          </p>
        </div>
      </div>

      {/* Embla Carousel */}
      <div className="overflow-hidden px-6" ref={emblaRef}>
        <div className="flex gap-5">
          {industries.map((industry) => (
            <div
              key={industry.name}
              className="flex-none w-[280px] md:w-[380px] h-[400px] md:h-[480px] rounded-xl overflow-hidden relative group cursor-pointer"
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <span className="font-headline text-[18px] md:text-[20px] font-bold text-white">
                  {industry.name}
                </span>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
