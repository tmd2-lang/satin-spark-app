import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface MobileContactSheetProps {
  open: boolean;
  onClose: () => void;
}

const fieldVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, damping: 22, stiffness: 120, delay: 0.15 + i * 0.08 },
  }),
};

const AnimatedCheckmark = () => (
  <motion.svg width="56" height="56" viewBox="0 0 80 80" fill="none" className="mx-auto">
    <motion.circle
      cx="40" cy="40" r="36"
      stroke="hsl(39 45% 61%)"
      strokeWidth="2.5"
      fill="none"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
    <motion.path
      d="M24 42 L35 53 L56 28"
      stroke="hsl(39 45% 61%)"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
      initial={{ pathLength: 0 }}
      animate={{ pathLength: 1 }}
      transition={{ duration: 0.35, delay: 0.4, ease: "easeOut" }}
    />
  </motion.svg>
);

const MobileContactSheet = ({ open, onClose }: MobileContactSheetProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });
  const [state, setState] = useState<"form" | "loading" | "success">("form");

  useEffect(() => {
    if (!open) {
      // Reset after sheet closes
      const t = setTimeout(() => {
        setState("form");
        setForm({ name: "", email: "", phone: "", business: "" });
      }, 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  useEffect(() => {
    if (state === "loading") {
      const t = setTimeout(() => setState("success"), 500);
      return () => clearTimeout(t);
    }
    if (state === "success") {
      const t = setTimeout(() => onClose(), 2500);
      return () => clearTimeout(t);
    }
  }, [state, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setState("loading");
  };

  const handleDragEnd = (_: any, info: { offset: { y: number }; velocity: { y: number } }) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

  const fields = [
    { label: "Name", key: "name", type: "text", placeholder: "Your full name" },
    { label: "Email", key: "email", type: "email", placeholder: "you@company.com" },
    { label: "Phone", key: "phone", type: "tel", placeholder: "(555) 000-0000" },
    { label: "Business Name", key: "business", type: "text", placeholder: "Your business" },
  ];

  return createPortal(
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[60] bg-black/60"
            onClick={onClose}
          />
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            drag="y"
            dragConstraints={{ top: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
            className="fixed bottom-0 left-0 right-0 z-[60] bg-[#111114] rounded-t-2xl max-h-[90vh] overflow-y-auto"
          >
            {/* Handle bar */}
            <div className="flex justify-center pt-3 pb-2">
              <div className="w-10 h-1 rounded-full bg-white/20" />
            </div>

            <div className="px-6 pb-8 pt-2">
              <AnimatePresence mode="wait">
                {state === "form" || state === "loading" ? (
                  <motion.div
                    key="form"
                    exit={{ opacity: 0, y: -10, transition: { duration: 0.2 } }}
                  >
                    <h3 className="font-headline text-[20px] font-bold text-white mb-1">
                      Book a Consultation
                    </h3>
                    <p className="font-body text-[13px] text-white/50 mb-6">
                      It starts with a conversation.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                      {fields.map((field, i) => (
                        <motion.div
                          key={field.key}
                          custom={i}
                          variants={fieldVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <label className="block font-body text-[12px] uppercase tracking-[0.1em] text-white/40 mb-1.5">
                            {field.label}
                          </label>
                          <input
                            type={field.type}
                            required
                            placeholder={field.placeholder}
                            value={form[field.key as keyof typeof form]}
                            onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                            className="w-full bg-white/[0.06] border border-white/10 rounded-lg px-4 py-3 font-body text-[14px] text-white placeholder:text-white/25 focus:outline-none focus:border-swann-gold/50 transition-colors"
                          />
                        </motion.div>
                      ))}

                      <motion.button
                        type="submit"
                        disabled={state === "loading"}
                        custom={fields.length}
                        variants={fieldVariants}
                        initial="hidden"
                        animate="visible"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.97 }}
                        className="w-full mt-2 font-body text-[15px] font-medium bg-white text-[#09090B] py-3.5 rounded-lg hover:bg-swann-gold transition-colors relative overflow-hidden"
                      >
                        <span className={state === "loading" ? "opacity-0" : ""}>
                          Send Message →
                        </span>
                        {state === "loading" && (
                          <motion.div
                            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 0.6, repeat: Infinity, ease: "linear" }}
                          />
                        )}
                      </motion.button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring", damping: 18, stiffness: 120 }}
                    className="flex flex-col items-center justify-center text-center py-10"
                  >
                    <AnimatedCheckmark />
                    <motion.h3
                      className="font-headline text-[20px] font-bold text-white mt-5 mb-2"
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      We'll be in touch
                    </motion.h3>
                    <motion.p
                      className="font-body text-[13px] text-white/50"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                    >
                      Expect to hear from us within 24 hours.
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileContactSheet;
