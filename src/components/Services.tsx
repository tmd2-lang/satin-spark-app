import { useState, useRef } from "react";
import SectionLabel from "./SectionLabel";
import { motion, AnimatePresence, useInView } from "framer-motion";
import designTabImage from "@/assets/design-tab.png";
import presenceTabImage from "@/assets/presence-tab.jpg";

const tabs = [
  {
    id: "design",
    label: "Design",
    headline: "Look Unforgettable",
    description:
      "Develop a distinct and memorable digital presence that positions your practice above others in the minds of new patients.",
    pills: ["Bespoke Websites", "Brand Identity"],
    image: designTabImage,
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
    image: presenceTabImage,
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

const headerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const ease = [0.22, 1, 0.36, 1] as const;

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

const contentVariants = {
  enter: (dir: number) => ({ x: dir * 40, opacity: 0 }),
  center: { x: 0, opacity: 1, transition: { duration: 0.45, ease } },
  exit: (dir: number) => ({ x: dir * -40, opacity: 0, transition: { duration: 0.3 } }),
};

const pillVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: (i: number) => ({
    scale: 1,
    opacity: 1,
    transition: { delay: i * 0.1 + 0.2, type: "spring" as const, stiffness: 400, damping: 20 },
  }),
};

const Services = () => {
  const [activeTab, setActiveTab] = useState("design");
  const [direction, setDirection] = useState(0);
  const active = tabs.find((t) => t.id === activeTab)!;
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const handleTabChange = (tabId: string) => {
    const oldIdx = tabs.findIndex((t) => t.id === activeTab);
    const newIdx = tabs.findIndex((t) => t.id === tabId);
    setDirection(newIdx > oldIdx ? 1 : -1);
    setActiveTab(tabId);
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

        {/* Two column content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12 overflow-hidden">
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id + "-img"}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <img
                src={active.image}
                alt={active.headline}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </AnimatePresence>

          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={active.id + "-content"}
              custom={direction}
              variants={contentVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="flex flex-col justify-center"
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
