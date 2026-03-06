import SectionLabel from "./SectionLabel";
import { ArrowRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import medspaImage from "@/assets/medspa-industry.jpeg";
import plasticSurgeryImage from "@/assets/plastic-surgery-industry.jpeg";

const industries = [
  { name: "Med Spas", image: medspaImage },
  { name: "Plastic Surgery", image: plasticSurgeryImage },
  { name: "Aestheticians", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80" },
  { name: "Luxury Spas", image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=800&q=80" },
  { name: "Dermatology", image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80" },
  { name: "Multi-Location", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80" },
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
  hidden: { opacity: 0, x: 60, rotateY: 8 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    rotateY: 0,
    transition: { delay: 0.4 + i * 0.1, duration: 0.7, ease },
  }),
};

const Industries = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps", align: "start" });

  return (
    <section id="industries" ref={sectionRef} className="bg-swann-light py-24 overflow-hidden">
      <motion.div
        className="max-w-[1320px] mx-auto px-6 mb-12"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={headerChild}>
          <SectionLabel label="Industries" />
        </motion.div>
        <motion.h2 variants={headerChild} className="font-headline text-[clamp(28px,3.5vw,42px)] font-bold text-foreground tracking-[-0.02em] mb-2">
          Built for the aesthetics industry.
        </motion.h2>
        <motion.p variants={headerChild} className="font-body text-[16px] text-swann-text-dim">
          Every vertical. Every complexity.
        </motion.p>
      </motion.div>

      <div className="overflow-hidden px-6" ref={emblaRef}>
        <div className="flex gap-5" style={{ perspective: "1200px" }}>
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-none w-[280px] md:w-[380px] h-[400px] md:h-[480px] rounded-xl overflow-hidden relative group cursor-pointer"
              whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={industry.image}
                alt={industry.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 group-hover:from-black/50" />
              <div className="absolute bottom-0 left-0 right-0 p-6 flex items-end justify-between">
                <span className="font-headline text-[18px] md:text-[20px] font-bold text-white">
                  {industry.name}
                </span>
                <ArrowRight className="w-5 h-5 text-white/70 group-hover:text-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
