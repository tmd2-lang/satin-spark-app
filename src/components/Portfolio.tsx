import { useRef } from "react";
import SectionLabel from "./SectionLabel";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    name: "Luminare Medical Spa",
    industry: "Med Spas",
    image: "https://images.unsplash.com/photo-1600948836101-f9ffda59d250?w=800&q=80",
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
};

const Portfolio = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
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
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
