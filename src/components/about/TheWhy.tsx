import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const TheWhy = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div
        className={`max-w-[1320px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-px bg-swann-gold" />
            <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold">
              Our Story
            </span>
            <div className="w-8 h-px bg-swann-gold" />
          </div>
          <h2 className="font-headline font-bold uppercase text-[clamp(28px,4vw,52px)] leading-[0.95] tracking-[-0.03em] text-foreground">
            Why Swann Exists
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 max-w-[1080px] mx-auto">
          <p className="font-body text-[15px] md:text-[16px] font-light text-swann-text-dim leading-relaxed">
            The aesthetics industry has a digital problem. On one side, there are template website builders — Squarespace, Wix, WordPress themes — that give every medspa the same generic look. On the other, there are large agencies that charge six figures, take six months, and still don't truly understand the compliance landscape of medical aesthetics.
            <br /><br />
            Neither option respects the practitioner. Neither delivers the combination of beauty, performance, and industry expertise that aesthetics businesses actually need.
          </p>
          <p className="font-body text-[15px] md:text-[16px] font-light text-swann-text-dim leading-relaxed">
            Swann was built to be the third option. An AI-native studio that delivers bespoke quality — the kind that used to require a massive agency and a massive budget — at a pace and price point that makes sense for growing practices.
            <br /><br />
            We chose to focus exclusively on aesthetics because the industry demands it. HIPAA compliance, medical advertising regulations, before/after photo rules, patient consent — these aren't things you can learn on the fly. They need to be in the DNA of every website, every campaign, every decision.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TheWhy;
