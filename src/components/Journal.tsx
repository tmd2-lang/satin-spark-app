import SectionLabel from "./SectionLabel";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const articles = [
  {
    category: "Web Design",
    title: "Why Your MedSpa Website Is Losing You Patients",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80",
  },
  {
    category: "Compliance",
    title: "HIPAA Compliance for Aesthetics Websites: What You Need to Know",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80",
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

const Journal = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  return (
    <section id="journal" ref={sectionRef} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <motion.div
          variants={headerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
            <div>
              <motion.div variants={headerChild}>
                <SectionLabel label="Journal" dark />
              </motion.div>
              <motion.h2 variants={headerChild} className="font-headline text-[clamp(24px,3vw,36px)] font-bold text-white tracking-[-0.02em] max-w-[520px]">
                Insights at the intersection of aesthetics and technology.
              </motion.h2>
            </div>
            <motion.a
              variants={headerChild}
              href="#"
              className="font-body text-[14px] text-swann-gold hover:text-swann-gold-bright transition-colors mt-4 md:mt-0"
            >
              → View All
            </motion.a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {articles.map((article, i) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, x: i === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 + i * 0.15, duration: 0.7, ease: [...ease] }}
              className="group cursor-pointer"
            >
              <div className="aspect-[16/9] rounded-xl overflow-hidden mb-4">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
              </div>
              <motion.span
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.6 + i * 0.15 }}
                className="font-body text-[11px] uppercase tracking-[0.15em] text-swann-gold mb-2 block relative"
              >
                {article.category}
                <motion.span
                  className="absolute -bottom-1 left-0 h-px bg-swann-gold"
                  initial={{ width: 0 }}
                  animate={isInView ? { width: "100%" } : {}}
                  transition={{ delay: 0.8 + i * 0.15, duration: 0.5 }}
                  style={{ maxWidth: "60px" }}
                />
              </motion.span>
              <h3 className="font-headline text-[20px] font-bold text-white group-hover:text-white/80 transition-colors mt-3">
                {article.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journal;
