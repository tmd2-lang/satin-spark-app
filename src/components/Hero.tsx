import { motion } from "framer-motion";
import HeroWave from "./ui/dynamic-wave-canvas-background";

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
};

const Hero = () => {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center bg-swann-dark overflow-hidden"
    >
      <HeroWave />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#09090B_70%)]" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(201,169,110,0.06)_0%,_transparent_70%)]" />

      <div className="relative z-10 max-w-[1320px] mx-auto px-6 pt-28 md:pt-32 pb-12 md:pb-20 w-full">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(201,169,110,0.12)] border border-swann-gold/20 mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-swann-gold" />
              <span className="font-body text-[12px] uppercase tracking-[0.12em] text-swann-gold">
                Digital Atelier for Aesthetics
              </span>
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="font-headline font-bold tracking-[-0.02em] text-white mb-6 max-w-[820px]"
            style={{ fontSize: "clamp(36px, 5.5vw, 68px)", lineHeight: 1.05 }}
          >
            Designed to{" "}
            <span className="text-gold-gradient">Captivate</span>.
            <br />
            Engineered to Convert.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="font-body text-[16px] md:text-[18px] font-light text-swann-text-dim max-w-[520px] mb-10 leading-relaxed"
          >
            AI-powered websites and digital strategy for med spas, plastic
            surgery practices, and aesthetics businesses that refuse to blend in.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="flex flex-col min-[400px]:flex-row gap-4 mb-16 md:mb-20">
            <a
              href="#portfolio"
              className="font-body text-[14px] font-medium bg-white text-[#09090B] px-8 py-3.5 rounded-lg hover:bg-swann-gold transition-colors duration-200 text-center"
            >
              See Our Work
            </a>
            <a
              href="#services"
              className="font-body text-[14px] font-light text-white/50 border border-white/[0.12] px-8 py-3.5 rounded-lg hover:border-swann-gold hover:text-swann-gold transition-all duration-200 text-center"
            >
              How It Works
            </a>
          </motion.div>
        </motion.div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="font-body text-[12px] uppercase tracking-[0.12em] text-swann-text-dimmer"
        >
          The technology is invisible — the taste is not.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
