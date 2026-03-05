import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const services = [
  {
    image: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&q=80",
    pill: "Brand Identity",
    title: "Brand Identity",
    description: "Cohesive visual systems that make your practice instantly recognizable and unmistakably premium.",
  },
  {
    image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    pill: "SEO & Content",
    title: "Search & SEO",
    description: "Data-driven content strategy and technical SEO that puts your practice in front of patients actively searching.",
  },
];

const RelatedServices = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <SectionLabel label="Swann Core Services" />
        <h2
          className={`font-headline text-[clamp(28px,3vw,42px)] font-bold text-foreground tracking-[-0.02em] mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          More Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((s, i) => (
            <a
              key={i}
              href="#"
              className={`group block transition-all duration-700 delay-${i * 100} ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="aspect-[16/10] rounded-lg overflow-hidden mb-5">
                <img
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <span className="inline-flex font-body text-[11px] uppercase tracking-[0.12em] text-swann-gold border border-swann-gold/30 rounded-full px-3 py-1 mb-3">
                {s.pill}
              </span>
              <h3 className="font-headline text-[22px] font-bold text-foreground mb-2 group-hover:text-swann-gold transition-colors">
                {s.title}
              </h3>
              <p className="font-body text-[14px] font-light text-swann-text-dim">
                {s.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
