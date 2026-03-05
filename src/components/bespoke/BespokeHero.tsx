import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BespokeHero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-swann-light pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        className={`max-w-[1320px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Pill tags */}
        <div className="flex items-center justify-center gap-3 mb-10">
          <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dim border border-swann-text-dim/20 rounded-full px-4 py-1.5">
            Bespoke Websites
          </span>
          <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dim border border-swann-text-dim/20 rounded-full px-4 py-1.5">
            Aesthetics
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-headline font-bold uppercase text-[clamp(32px,5.5vw,72px)] leading-[0.95] tracking-[-0.03em] text-foreground mb-8">
          Bespoke by Design
          <br />
          Built to Captivate
          <br />
          and Convert
        </h1>

        {/* Body */}
        <p className="font-body text-[16px] md:text-[18px] font-light text-swann-text-dim max-w-[640px] mx-auto leading-relaxed mb-10">
          There are reasons why Swann Company websites are becoming the creative standard for aesthetics practices that care about brand, performance, and patient experience. Every strategic, visual, and functional detail matters — because we're not just building a website. We're building the engine of your growth.
        </p>

        {/* Divider */}
        <div className="w-[60px] h-px bg-swann-gold mx-auto mb-6" />

        {/* Sub-label */}
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold">
          Bespoke Websites for Aesthetics
        </span>
      </div>
    </section>
  );
};

export default BespokeHero;
