import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const Differentiator = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[1fr_55%] gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Content */}
          <div>
            <SectionLabel label="Swann Website Specialties" dark />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6">
              We Started With AI.
              <br />
              Craft Became Essential.
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[480px]">
              Swann Company was built as an AI-native digital studio from day one. But we quickly learned that AI alone isn't enough — aesthetics businesses demand a level of visual craft and emotional resonance that only human creativity can deliver. Today, our approach combines AI speed and intelligence with hands-on design refinement. The result: bespoke websites that would take a traditional agency months, delivered in a fraction of the time without sacrificing an ounce of quality.
            </p>

            <div>
              <h4 className="font-headline text-[16px] font-bold text-white mb-2">
                AI + Human, Under One Roof
              </h4>
              <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed max-w-[440px]">
                AI handles the heavy lifting — content generation, SEO structure, responsive optimization. Our designers handle the soul — brand expression, visual storytelling, the details that make patients feel something.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden order-first lg:order-last">
            <img
              src="https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?w=800&q=80"
              alt="Beauty close-up editorial"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Differentiator;
