import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const BoldStatement = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-20 md:py-28">
      <div
        className={`max-w-[1100px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-6 block">
          Swann Bespoke Websites
        </span>
        <h2 className="font-headline font-bold uppercase text-[clamp(26px,4.5vw,60px)] leading-[0.95] tracking-[-0.03em] text-foreground">
          How Are You Different or
          <br className="hidden md:block" />
          Better Than Competitors?
          <br className="hidden md:block" />
          The Answer Starts With
          <br className="hidden md:block" />
          Your Website.
        </h2>
      </div>
    </section>
  );
};

export default BoldStatement;
