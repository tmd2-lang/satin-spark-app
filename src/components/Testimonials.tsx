import SectionLabel from "./SectionLabel";
import useEmblaCarousel from "embla-carousel-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    quote: "Swann Company completely transformed our online presence. Our patient inquiries increased by 240% within the first three months.",
    name: "Dr. Sarah Mitchell",
    practice: "Luminare Medical Spa",
    location: "Beverly Hills, CA",
  },
  {
    quote: "They understand the aesthetics industry better than any agency we've worked with. The website they built for us is a true reflection of our brand.",
    name: "Dr. James Chen",
    practice: "Chen Aesthetics",
    location: "Manhattan, NY",
  },
  {
    quote: "From strategy to execution, every detail was handled with precision. Our digital presence finally matches the quality of care we provide.",
    name: "Maria Torres",
    practice: "FORMA Skin Studio",
    location: "Miami, FL",
  },
  {
    quote: "The HIPAA-compliant systems they implemented gave us peace of mind while delivering a stunning patient experience online.",
    name: "Dr. Rachel Kim",
    practice: "Glow Dermatology",
    location: "Austin, TX",
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
  hidden: { opacity: 0, y: 30, rotate: 2 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: { delay: 0.3 + i * 0.1, duration: 0.6, ease },
  }),
};

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const [emblaRef] = useEmblaCarousel({ dragFree: true, containScroll: "trimSnaps", align: "start" });

  return (
    <section ref={sectionRef} className="bg-swann-light py-24 overflow-hidden">
      <motion.div
        className="max-w-[1320px] mx-auto px-6 mb-12"
        variants={headerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={headerChild}>
          <SectionLabel label="Client Experience" />
        </motion.div>
        <motion.h2 variants={headerChild} className="font-headline text-[clamp(24px,3vw,36px)] font-bold text-foreground tracking-[-0.02em] max-w-[600px]">
          Your digital partner should be as invested in your practice as you are.
        </motion.h2>
      </motion.div>

      <div className="overflow-hidden px-6" ref={emblaRef}>
        <div className="flex gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              className="flex-none w-[300px] md:w-[380px] bg-white border border-foreground/[0.06] rounded-xl p-6 md:p-8"
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
            >
              <p className="font-body text-[15px] md:text-[16px] text-foreground leading-relaxed mb-6">
                "{t.quote}"
              </p>
              <div className="w-10 h-px bg-swann-gold mb-4" />
              <p className="font-body text-[14px] font-medium text-foreground">
                {t.name}
              </p>
              <p className="font-body text-[13px] text-swann-text-dim">
                {t.practice} · {t.location}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
