import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutHero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section ref={ref} className="bg-swann-light pt-32 pb-24 md:pt-40 md:pb-32">
      <div
        className={`max-w-[1320px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="inline-flex font-body text-[11px] uppercase tracking-[0.15em] text-swann-text-dim border border-swann-text-dim/20 rounded-full px-4 py-1.5 mb-10">
          About Swann
        </span>

        <h1 className="font-headline font-bold uppercase text-[clamp(30px,5vw,68px)] leading-[0.95] tracking-[-0.03em] text-foreground mb-8">
          The Aesthetics Industry
          <br />
          Deserved Better.
          <br />
          So We Built It.
        </h1>

        <p className="font-body text-[16px] md:text-[18px] font-light text-swann-text-dim max-w-[640px] mx-auto leading-relaxed">
          Swann Company is a digital atelier built for one industry: aesthetics. We combine AI technology with human craft to create bespoke websites and marketing for med spas, plastic surgery practices, and beauty businesses that refuse to settle for templates.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
