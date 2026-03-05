import { useState, useRef } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence, useInView } from "framer-motion";

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

const ease = [0.22, 1, 0.36, 1] as const;

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const headerChild = {
  hidden: { opacity: 0, y: 20, filter: "blur(4px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.6, ease } },
};

const tabBarVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08, delayChildren: 0.6 } },
};

const tabChild = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const pillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.1 + 0.1, type: "spring" as const, stiffness: 400, damping: 20 },
  }),
};

// Text child items stagger
const textChildVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("design");
  const active = tabs.find((t) => t.id === activeTab)!;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab) {
      setActiveTab(tabId);
    }
  };

  return (
    <section id="services" ref={sectionRef} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
            <div>
              <motion.div variants={headerChild}>
                <SectionLabel label="Services" dark />
              </motion.div>
              <motion.h2 variants={headerChild} className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-white tracking-[-0.02em]">
                Everything your practice needs.
                <br />
                Nothing it doesn't.
              </motion.h2>
            </div>
            <motion.a
              variants={headerChild}
              href="#contact"
              className="font-body text-[14px] text-swann-gold hover:text-swann-gold-bright transition-colors mt-4 md:mt-0"
            >
              → Schedule a Consultation
            </motion.a>
          </div>
        </motion.div>

        {/* Cinematic image reveal — desktop: full-width image slides to 50%, revealing text */}
        <div className="relative mb-12 min-h-[400px] lg:min-h-[450px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              className="relative w-full"
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Mobile: stacked layout with simple fade */}
              <div className="block lg:hidden">
                <motion.div
                  className="relative aspect-[4/3] rounded-lg overflow-hidden mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1, transition: { duration: 0.4, ease } }}
                  exit={{ opacity: 0, transition: { duration: 0.25 } }}
                >
                  <img
                    src={active.image}
                    alt={active.headline}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="flex flex-col justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0, transition: { duration: 0.4, delay: 0.2, ease } }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                >
                  <h3 className="font-headline text-[28px] font-bold text-white mb-4 tracking-[-0.02em]">
                    {active.headline}
                  </h3>
                  <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-8 max-w-[440px]">
                    {active.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {active.pills.map((pill, i) => (
                      <motion.span
                        key={pill}
                        custom={i}
                        variants={pillVariants}
                        initial="hidden"
                        animate="visible"
                        className="font-body text-[13px] px-4 py-2 rounded-full border border-white/[0.1] text-white/70"
                      >
                        {pill}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Desktop: cinematic reveal */}
              <div className="hidden lg:block relative" style={{ minHeight: "450px" }}>
                {/* Text content — positioned in the right half, revealed as image slides */}
                <motion.div
                  className="absolute right-0 top-0 w-1/2 h-full flex items-center"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { delay: 0.9, duration: 0.4, ease, staggerChildren: 0.1, delayChildren: 0.9 },
                    },
                    exit: { opacity: 0, transition: { duration: 0.2 } },
                  }}
                >
                  <div className="pl-12">
                    <motion.h3
                      variants={textChildVariants}
                      className="font-headline text-[28px] font-bold text-white mb-4 tracking-[-0.02em]"
                    >
                      {active.headline}
                    </motion.h3>
                    <motion.p
                      variants={textChildVariants}
                      className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-8 max-w-[440px]"
                    >
                      {active.description}
                    </motion.p>
                    <motion.div variants={textChildVariants} className="flex flex-wrap gap-3">
                      {active.pills.map((pill, i) => (
                        <motion.span
                          key={pill}
                          custom={i}
                          variants={pillVariants}
                          initial="hidden"
                          animate="visible"
                          className="font-body text-[13px] px-4 py-2 rounded-full border border-white/[0.1] text-white/70"
                        >
                          {pill}
                        </motion.span>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>

                {/* Image — starts full width, slides to 50% */}
                <motion.div
                  className="absolute left-0 top-0 h-full rounded-lg overflow-hidden"
                  style={{ zIndex: 2 }}
                  variants={{
                    hidden: { width: "100%", opacity: 0 },
                    visible: {
                      width: "48%",
                      opacity: 1,
                      transition: {
                        opacity: { duration: 0.3, ease },
                        width: { delay: 0.4, duration: 0.6, ease },
                      },
                    },
                    exit: { opacity: 0, transition: { duration: 0.25 } },
                  }}
                >
                  <img
                    src={active.image}
                    alt={active.headline}
                    className="w-full h-full object-cover"
                    style={{ minHeight: "450px" }}
                  />
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Tab bar */}
        <motion.div
          className="flex overflow-x-auto border-t border-white/[0.08] pb-2 -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: "none" }}
          variants={tabBarVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              variants={tabChild}
              onClick={() => handleTabChange(tab.id)}
              className={`flex-1 min-w-[100px] py-4 font-body text-[12px] md:text-[14px] font-medium transition-all duration-200 relative whitespace-nowrap ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="services-tab-indicator"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-0.5 bg-swann-gold"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </motion.button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
