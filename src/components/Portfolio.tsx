import { useState, useRef } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence, useInView } from "framer-motion";

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

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ease = [0.22, 1, 0.36, 1] as const;

const headerChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { delay: 0.3 + i * 0.12, duration: 0.6, ease },
  }),
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.25 } },
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.industry === activeFilter);

  return (
    <section id="portfolio" ref={sectionRef} className="bg-swann-light py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <motion.div variants={headerChild}>
                <SectionLabel label="Portfolio" />
              </motion.div>
              <motion.h2 variants={headerChild} className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-foreground tracking-[-0.02em]">
                Results are everything.
              </motion.h2>
            </div>
            <motion.a
              variants={headerChild}
              href="#"
              className="font-body text-[14px] text-swann-gold hover:text-[#b8963d] transition-colors mt-4 md:mt-0"
            >
              → See All Work
            </motion.a>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.name}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
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
                    <p className="font-headline text-[16px] font-bold text-foreground">
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
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Filter pills */}
        <motion.div
          className="flex gap-2 overflow-x-auto pb-4 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:pb-2"
          style={{ scrollbarWidth: "none" }}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.06, delayChildren: 0.5 } } }}
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0 } }}
              onClick={() => setActiveFilter(f)}
              className={`flex-none whitespace-nowrap font-body text-[13px] px-4 py-2 rounded-full border transition-all duration-200 ${
                activeFilter === f
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-swann-text-dim border-foreground/10 hover:border-foreground/30"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
