import SectionLabel from "./SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import useEmblaCarousel from "embla-carousel-react";

const testimonials = [
  {
    quote: "Swann Company completely transformed our online presence. Our patient inquiries increased by 240% within the first three months.",
    name: "Dr. Sarah Mitchell",
    practice: "Luminare Medical Spa",
    location: "Beverly Hills, CA",
  },
  {
    quote: "They understand the aesthetics industry better than any agency we've worked with. The website they built for us is a true reflection of our brand.",
    name: "Dr. James Chen",
    practice: "Chen Aesthetics",
    location: "Manhattan, NY",
  },
  {
    quote: "From strategy to execution, every detail was handled with precision. Our digital presence finally matches the quality of care we provide.",
    name: "Maria Torres",
    practice: "FORMA Skin Studio",
    location: "Miami, FL",
  },
  {
    quote: "The HIPAA-compliant systems they implemented gave us peace of mind while delivering a stunning patient experience online.",
    name: "Dr. Rachel Kim",
    practice: "Glow Dermatology",
    location: "Austin, TX",
  },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps", align: "start" });

  return (
    <section ref={ref} className="bg-swann-light py-24 overflow-hidden">
      <div className="max-w-[1320px] mx-auto px-6 mb-12">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <SectionLabel label="Client Experience" />
          <h2 className="font-headline text-[clamp(24px,3vw,36px)] font-bold text-[#111114] tracking-[-0.02em] max-w-[600px]">
            Your digital partner should be as invested in your practice as you are.
          </h2>
        </div>
      </div>

      <div className="overflow-hidden px-6" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex-none w-[300px] md:w-[380px] bg-white border border-[#111114]/[0.06] rounded-xl p-6 md:p-8"
            >
              <p className="font-body text-[15px] md:text-[16px] text-[#111114] leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="w-10 h-px bg-swann-gold mb-4" />
              <p className="font-body text-[14px] font-medium text-[#111114]">
                {t.name}
              </p>
              <p className="font-body text-[13px] text-swann-text-dim">
                {t.practice} · {t.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
