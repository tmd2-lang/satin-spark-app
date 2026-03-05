import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-center bg-swann-dark overflow-hidden"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#09090B_70%)]" />
      {/* Subtle gold glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 pt-32 pb-20 w-full">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(201,169,110,0.12)] border border-swann-gold/20 mb-8">
            <div className="w-1.5 h-1.5 rounded-full bg-swann-gold" />
            <span className="font-body text-[12px] uppercase tracking-[0.12em] text-swann-gold">
              Digital Atelier for Aesthetics
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-headline font-bold tracking-[-0.02em] text-white mb-6 max-w-[820px]"
            style={{ fontSize: "clamp(40px, 5.5vw, 68px)", lineHeight: 1.05 }}
          >
            Designed to{" "}
            <span className="text-gold-gradient">Captivate</span>.
            <br />
            Engineered to Convert.
          </h1>

          {/* Subheadline */}
          <p className="font-body text-[18px] font-light text-swann-text-dim max-w-[520px] mb-10 leading-relaxed">
            AI-powered websites and digital strategy for med spas, plastic
            surgery practices, and aesthetics businesses that refuse to blend in.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-20">
            <a
              href="#portfolio"
              className="font-body text-[14px] font-medium bg-white text-[#09090B] px-8 py-3.5 rounded-lg hover:bg-swann-gold transition-colors duration-200"
            >
              See Our Work
            </a>
            <a
              href="#services"
              className="font-body text-[14px] font-light text-white/50 border border-white/[0.12] px-8 py-3.5 rounded-lg hover:border-swann-gold hover:text-swann-gold transition-all duration-200"
            >
              How It Works
            </a>
          </div>
        </div>

        {/* Bottom tagline */}
        <p className="font-body text-[12px] uppercase tracking-[0.12em] text-swann-text-dimmer">
          The technology is invisible — the taste is not.
        </p>
      </div>
    </section>
  );
};

export default Hero;
