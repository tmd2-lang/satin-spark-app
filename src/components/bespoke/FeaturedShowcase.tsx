import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const FeaturedShowcase = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section
      ref={ref}
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden"
    >
      {/* Background image */}
      <img
        src="https://images.unsplash.com/photo-1629397685944-7073299d5113?w=1920&q=80"
        alt="Luxury medspa interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/40 to-transparent" />

      {/* Content */}
      <div
        className={`absolute bottom-0 left-0 right-0 p-6 md:p-16 max-w-[900px] transition-all duration-700 delay-200 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <span className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-4 block">
          Swann Project
        </span>
        <h2 className="font-headline font-bold uppercase text-[clamp(22px,3.5vw,44px)] leading-[1] tracking-[-0.02em] text-white mb-6">
          Your Patients Decide in Half a Second.
          <br />
          We Make That Half Second Count.
        </h2>
        <a
          href="#"
          className="inline-flex font-body text-[14px] font-medium text-white border-b border-white/40 pb-1 hover:border-swann-gold hover:text-swann-gold transition-colors duration-300"
        >
          View Project →
        </a>
      </div>

      {/* Badge */}
      <div className="absolute bottom-6 right-6 md:bottom-16 md:right-16 hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
        <div className="w-2 h-2 rounded-full bg-swann-gold" />
        <span className="font-body text-[11px] uppercase tracking-[0.1em] text-white/80">
          Aesthetics-First Design
        </span>
      </div>
    </section>
  );
};

export default FeaturedShowcase;
