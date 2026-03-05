import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutBoldStatement = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-20 md:py-28">
      <div
        className={`max-w-[1100px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-headline font-bold uppercase text-[clamp(24px,4vw,54px)] leading-[0.95] tracking-[-0.03em] text-foreground">
          We Don't Do Law Firms.
          <br />
          We Don't Do Restaurants.
          <br />
          We Don't Do E-Commerce.
          <br />
          We Do Aesthetics. That's It.
        </h2>
      </div>
    </section>
  );
};

export default AboutBoldStatement;
