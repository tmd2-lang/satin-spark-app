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
            <SectionLabel label="What Makes Swann Different" dark />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-6">
              AI Builds the Foundation.
              <br />
              We Build the Experience.
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[480px]">
              Most agencies spend 400 hours and six figures building one website. Most template builders spend 4 hours and give you something that looks like everyone else. Swann exists in the space between — AI handles the structural heavy lifting (architecture, SEO framework, responsive optimization, content scaffolding) while our designers obsess over the details that make patients feel something. The result is bespoke work delivered at a pace and price point that traditional agencies can't touch.
            </p>

            <div>
              <h4 className="font-headline text-[16px] font-bold text-white mb-2">
                Two Minds, One Output
              </h4>
              <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed max-w-[440px]">
                Think of it as an architect and an artist working on the same building. AI is the architect — efficient, precise, structurally sound. Our team is the artist — the custom finishes, the lighting, the feeling you get when you walk in. You need both. That's what we deliver.
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
