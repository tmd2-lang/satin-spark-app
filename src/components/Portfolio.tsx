import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const filters = ["All", "Med Spas", "Plastic Surgery", "Aestheticians", "Spas", "Dermatology"];

const projects = [
  {
    name: "Luminare Medical Spa",
    industry: "Med Spas",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
  },
  {
    name: "Dr. Chen Aesthetics",
    industry: "Plastic Surgery",
    image: "https://images.unsplash.com/photo-1629909615957-be38d6024e28?w=800&q=80",
  },
  {
    name: "FORMA Skin Studio",
    industry: "Aestheticians",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&q=80",
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const { ref, isVisible } = useScrollAnimation();

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <section id="portfolio" ref={ref} className="bg-swann-light py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <SectionLabel label="Portfolio" />
              <h2 className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-[#111114] tracking-[-0.02em]">
                Results are everything.
              </h2>
            </div>
            <a
              href="#"
              className="font-body text-[14px] text-swann-gold hover:text-[#b8963d] transition-colors mt-4 md:mt-0"
            >
              → See All Work
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            {filtered.map((project) => (
              <div
                key={project.name}
                className="group rounded-xl overflow-hidden cursor-pointer"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="py-4 flex items-center justify-between">
                  <div>
                    <p className="font-headline text-[16px] font-bold text-[#111114]">
                      {project.name}
                    </p>
                    <span className="font-body text-[12px] uppercase tracking-[0.1em] text-swann-text-dim">
                      {project.industry}
                    </span>
                  </div>
                  <span className="font-body text-[13px] text-swann-gold group-hover:text-[#b8963d] transition-colors">
                    → Case Study
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`font-body text-[13px] px-4 py-2 rounded-full border transition-all duration-200 ${
                  activeFilter === f
                    ? "bg-[#111114] text-white border-[#111114]"
                    : "bg-transparent text-swann-text-dim border-[#111114]/10 hover:border-[#111114]/30"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
