import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const AboutTestimonial = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[40%_1fr] gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Portrait */}
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[560px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1594824476967-48c8b964dc31?w=800&q=80"
              alt="Dr. Sarah Mitchell"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Quote */}
          <div>
            <SectionLabel label="Testimonial" dark />

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} className="w-4 h-4 text-swann-gold fill-current" viewBox="0 0 20 20">
                  <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.32L10 13.27l-4.77 2.51.91-5.32L2.27 6.69l5.34-.78L10 1z" />
                </svg>
              ))}
            </div>

            <blockquote className="font-body text-[clamp(18px,2vw,24px)] font-light text-white/90 leading-relaxed mb-8 max-w-[540px]">
              "Swann didn't just build us a website — they built us a digital presence that actually converts. Our consultations doubled in the first quarter. For the first time, our online presence matches the quality of care we provide in person."
            </blockquote>

            <div>
              <span className="font-headline text-[14px] font-bold text-white block mb-1">
                — Dr. Sarah Mitchell, Founder
              </span>
              <span className="font-body text-[13px] text-swann-text-dim">
                Luminare Medical Spa · Beverly Hills, CA
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutTestimonial;
