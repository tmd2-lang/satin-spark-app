import { useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef } from "react";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import SectionLabel from "@/components/SectionLabel";

const serviceOptions = [
  "Bespoke Websites",
  "Brand Identity",
  "SEO",
  "Digital Advertising",
  "Social Media",
  "Email Marketing",
  "Compliance",
  "Other",
];

const industryOptions = [
  "Med Spa",
  "Plastic Surgery",
  "Aesthetician",
  "Luxury Spa",
  "Dermatology",
  "Multi-Location",
  "Other",
];

const inputClass =
  "w-full bg-white/[0.06] border border-white/10 rounded-md px-4 py-3.5 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors";

const labelClass =
  "font-body text-[12px] uppercase tracking-[0.1em] text-white/40 mb-2 block";

const slideFromLeft = (delay: number) => ({
  hidden: { opacity: 0, x: -60, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { type: "spring" as const, damping: 20, stiffness: 90, delay },
  },
});

const fadeUp = (delay: number) => ({
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 22, stiffness: 100, delay },
  },
});

const scaleIn = (delay: number) => ({
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring" as const, damping: 12, stiffness: 150, delay },
  },
});

const AnimatedCheckmark = () => (
  <motion.svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    className="mx-auto"
  >
    <motion.circle
      cx="40"
      cy="40"
      r="36"
      stroke="hsl(var(--swann-gold, 39 45% 61%))"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    />
    <motion.path
      d="M24 42 L35 53 L56 28"
      stroke="hsl(var(--swann-gold, 39 45% 61%))"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.4, delay: 0.5, ease: "easeOut" }}
    />
  </motion.svg>
);

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 });
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formState, setFormState] = useState<"form" | "success">("form");

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("success");
  };

  const resetForm = () => {
    setFormState("form");
    setSelectedServices([]);
  };

  const animate = isInView ? "visible" : "hidden";

  return (
    <div className="min-h-screen bg-swann-dark">
      <Navbar />

      <section ref={sectionRef} className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="max-w-[1320px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20">
            {/* Left — Bold Statement */}
            <div>
              <motion.div variants={slideFromLeft(0)} initial="hidden" animate={animate}>
                <SectionLabel label="Contact" dark />
              </motion.div>

              <h1 className="font-headline font-bold uppercase text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-[-0.03em] text-white mb-16">
                {["When You're", "Ready for", "What's Next"].map((line, i) => (
                  <motion.span
                    key={line}
                    className="block"
                    variants={slideFromLeft(0.15 + i * 0.15)}
                    initial="hidden"
                    animate={animate}
                  >
                    {line}
                  </motion.span>
                ))}
              </h1>

              <div className="space-y-8">
                {[
                  {
                    title: "Give Us A Call",
                    content: (
                      <a href="tel:+1234567890" className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                        (123) 456-7890
                      </a>
                    ),
                  },
                  {
                    title: "Email Us",
                    content: (
                      <a href="mailto:hello@swannco.co" className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                        hello@swannco.co
                      </a>
                    ),
                  },
                  {
                    title: "Follow Us",
                    content: (
                      <div className="flex gap-5">
                        {["Instagram", "LinkedIn", "X"].map((s) => (
                          <a key={s} href="#" className="font-body text-[14px] text-white/50 hover:text-swann-gold transition-colors">
                            {s}
                          </a>
                        ))}
                      </div>
                    ),
                  },
                ].map((block, i) => (
                  <motion.div
                    key={block.title}
                    variants={fadeUp(0.7 + i * 0.15)}
                    initial="hidden"
                    animate={animate}
                  >
                    <span className="font-body text-[13px] uppercase tracking-[0.1em] text-swann-gold block mb-2">
                      {block.title}
                    </span>
                    {block.content}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right — Form / Success */}
            <div>
              <AnimatePresence mode="wait">
                {formState === "form" ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
                  >
                    <motion.p
                      className="font-body text-[16px] font-light text-swann-text-dim mb-10"
                      variants={fadeUp(0.3)}
                      initial="hidden"
                      animate={animate}
                    >
                      It starts with a conversation. Then a strategy. Then results.
                    </motion.p>

                    <form className="space-y-6" onSubmit={handleSubmit}>
                      {/* Row 1 */}
                      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={fadeUp(0.4)} initial="hidden" animate={animate}>
                        <div>
                          <label className={labelClass}>First Name *</label>
                          <input placeholder="First Name" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Last Name *</label>
                          <input placeholder="Last Name" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Business Name *</label>
                          <input placeholder="Business Name" className={inputClass} />
                        </div>
                      </motion.div>

                      {/* Row 2 */}
                      <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-4" variants={fadeUp(0.55)} initial="hidden" animate={animate}>
                        <div>
                          <label className={labelClass}>Email *</label>
                          <input type="email" placeholder="Email" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Phone *</label>
                          <input type="tel" placeholder="Phone Number" className={inputClass} />
                        </div>
                        <div>
                          <label className={labelClass}>Website URL</label>
                          <input type="url" placeholder="https://" className={inputClass} />
                        </div>
                      </motion.div>

                      {/* Row 3 — Industry */}
                      <motion.div variants={fadeUp(0.7)} initial="hidden" animate={animate}>
                        <label className={labelClass}>Industry</label>
                        <select
                          defaultValue=""
                          className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")] bg-no-repeat bg-[right_16px_center]`}
                        >
                          <option value="" disabled className="bg-[#111114] text-white/30">
                            Select your industry
                          </option>
                          {industryOptions.map((opt) => (
                            <option key={opt} value={opt} className="bg-[#111114] text-white">
                              {opt}
                            </option>
                          ))}
                        </select>
                      </motion.div>

                      {/* Row 4 — Services */}
                      <motion.div variants={fadeUp(0.85)} initial="hidden" animate={animate}>
                        <label className={labelClass}>Services Interested In</label>
                        <div className="flex flex-wrap gap-3">
                          {serviceOptions.map((service) => (
                            <motion.button
                              key={service}
                              type="button"
                              onClick={() => toggleService(service)}
                              animate={
                                selectedServices.includes(service)
                                  ? {
                                      scale: [1, 1.15, 1],
                                      boxShadow: [
                                        "0 0 0 0 rgba(201,169,110,0)",
                                        "0 0 20px 4px rgba(201,169,110,0.3)",
                                        "0 0 0 0 rgba(201,169,110,0)",
                                      ],
                                    }
                                  : { scale: 1, boxShadow: "0 0 0 0 rgba(201,169,110,0)" }
                              }
                              transition={{ duration: 0.35 }}
                              className={`font-body text-[13px] rounded-full px-4 py-2 border transition-colors ${
                                selectedServices.includes(service)
                                  ? "bg-swann-gold border-swann-gold text-swann-dark"
                                  : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/70"
                              }`}
                            >
                              {service}
                            </motion.button>
                          ))}
                        </div>
                      </motion.div>

                      {/* Row 5 — Message */}
                      <motion.div variants={fadeUp(1.0)} initial="hidden" animate={animate}>
                        <label className={labelClass}>Message</label>
                        <textarea
                          placeholder="Tell us about your project..."
                          rows={4}
                          className={`${inputClass} resize-none`}
                        />
                      </motion.div>

                      {/* Consent */}
                      <motion.p
                        className="font-body text-[12px] text-white/30 leading-relaxed"
                        variants={fadeUp(1.1)}
                        initial="hidden"
                        animate={animate}
                      >
                        By completing this form, you are giving us permission to follow up by phone, email, or text.
                      </motion.p>

                      {/* Submit */}
                      <motion.button
                        type="submit"
                        variants={scaleIn(1.2)}
                        initial="hidden"
                        animate={animate}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full font-body text-[15px] font-medium bg-white text-swann-dark py-4 rounded-md hover:bg-swann-gold hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all duration-300"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 20, stiffness: 100 }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <AnimatedCheckmark />
                    <motion.h2
                      className="font-headline text-[28px] font-bold text-white mt-8 mb-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7, duration: 0.5 }}
                    >
                      We'll be in touch
                    </motion.h2>
                    <motion.p
                      className="font-body text-[15px] text-white/50 mb-8"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9, duration: 0.5 }}
                    >
                      Expect to hear from us within 24 hours.
                    </motion.p>
                    <motion.button
                      onClick={resetForm}
                      className="font-body text-[14px] text-swann-gold hover:text-white transition-colors underline underline-offset-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.1 }}
                    >
                      Send another message
                    </motion.button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default Contact;
