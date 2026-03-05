import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const tabs = [
  {
    id: "design",
    label: "Design",
    headline: "Look Unforgettable",
    description:
      "Develop a distinct and memorable digital presence that positions your practice above others in the minds of new patients.",
    pills: ["Bespoke Websites", "Brand Identity"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
  },
  {
    id: "growth",
    label: "Growth",
    headline: "Get More Patients",
    description:
      "Identify and connect with your ideal patients through bottom-funnel digital strategies that align with your practice goals.",
    pills: ["Search & SEO", "Digital Advertising"],
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
  },
  {
    id: "presence",
    label: "Presence",
    headline: "Own Your Space",
    description:
      "Expand your reach to build a broader audience who's aware of and admires your brand, laying the foundation for future patients.",
    pills: ["Social Media", "Email Marketing"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
  },
  {
    id: "intelligence",
    label: "Intelligence",
    headline: "Know What Works",
    description:
      "Most digital marketing is templated, confined by one-size-fits-all software. You need customized intelligence to compete.",
    pills: ["Analytics & Reporting", "Compliance & HIPAA"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("design");
  const active = tabs.find((t) => t.id === activeTab)!;
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <SectionLabel label="Services" dark />
              <h2 className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-white tracking-[-0.02em]">
                Everything your practice needs.
                <br />
                Nothing it doesn't.
              </h2>
            </div>
            <a
              href="#contact"
              className="font-body text-[14px] text-swann-gold hover:text-swann-gold-bright transition-colors mt-4 md:mt-0"
            >
              → Schedule a Consultation
            </a>
          </div>

          {/* Two column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            {/* Image */}
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <img
                key={active.id}
                src={active.image}
                alt={active.headline}
                className="w-full h-full object-cover animate-fade-up"
                style={{ animationDuration: "0.4s" }}
              />
            </div>

            {/* Content */}
            <div key={active.id} className="flex flex-col justify-center animate-fade-up" style={{ animationDuration: "0.4s" }}>
              <h3 className="font-headline text-[28px] font-bold text-white mb-4 tracking-[-0.02em]">
                {active.headline}
              </h3>
              <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-8 max-w-[440px]">
                {active.description}
              </p>
              <div className="flex flex-wrap gap-3">
                {active.pills.map((pill) => (
                  <span
                    key={pill}
                    className="font-body text-[13px] px-4 py-2 rounded-full border border-white/[0.1] text-white/70"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex overflow-x-auto border-t border-white/[0.08]" style={{ scrollbarWidth: "none" }}>
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 min-w-[100px] py-4 font-body text-[12px] md:text-[14px] font-medium transition-all duration-200 relative whitespace-nowrap ${
                  activeTab === tab.id
                    ? "text-white"
                    : "text-white/40 hover:text-white/70"
                }`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-swann-gold" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
