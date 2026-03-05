import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const OurApproach = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[600px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80"
              alt="Artistic beauty editorial"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <SectionLabel label="How We Think" />
            <h2 className="font-headline text-[clamp(28px,3vw,42px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              The Websites Nobody
              <br />
              Scrolls Past
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[520px]">
              Your website isn't a brochure you hand out at the front desk. It's the first conversation you have with every potential patient — before they ever call, book, or walk through your door. If that conversation is generic, forgettable, or confusing, they're already looking at your competitor. We design websites that stop the scroll, earn the trust, and start the relationship.
            </p>

            <div>
              <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dimmer mb-4 block">
                Supporting Services
              </span>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#"
                  className="font-body text-[13px] text-foreground border border-foreground/20 rounded-full px-5 py-2 hover:bg-foreground hover:text-swann-light transition-colors duration-200"
                >
                  Brand Identity
                </a>
                <a
                  href="#"
                  className="font-body text-[13px] text-foreground border border-foreground/20 rounded-full px-5 py-2 hover:bg-foreground hover:text-swann-light transition-colors duration-200"
                >
                  SEO &amp; Content
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;
