import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutCTA = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32 border-t border-white/5">
      <div
        className={`max-w-[800px] mx-auto px-6 text-center transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="font-headline font-bold uppercase text-[clamp(28px,4vw,52px)] leading-[0.95] tracking-[-0.03em] text-white mb-6">
          When You're Ready
          <br />
          for What's Next.
        </h2>
        <p className="font-body text-[16px] font-light text-swann-text-dim mb-10">
          It starts with a conversation. Then a strategy. Then results.
        </p>
        <a
          href="#"
          className="inline-flex font-body text-[14px] font-medium bg-white text-swann-dark px-8 py-3.5 rounded-md hover:bg-swann-gold hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all duration-300"
        >
          Book a Consultation →
        </a>
      </div>
    </section>
  );
};

export default AboutCTA;
