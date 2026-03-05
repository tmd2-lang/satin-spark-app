import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { createPortal } from "react-dom";

interface MobileContactSheetProps {
  open: boolean;
  onClose: () => void;
}

const MobileContactSheet = ({ open, onClose }: MobileContactSheetProps) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", business: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Client-side only for now
    onClose();
  };

  const handleDragEnd = (_: any, info: { offset: { y: number }; velocity: { y: number } }) => {
    if (info.offset.y > 100 || info.velocity.y > 500) {
      onClose();
    }
  };

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
              <h3 className="font-headline text-[20px] font-bold text-white mb-1">
                Book a Consultation
              </h3>
              <p className="font-body text-[13px] text-white/50 mb-6">
                It starts with a conversation.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                {[
                  { label: "Name", key: "name", type: "text", placeholder: "Your full name" },
                  { label: "Email", key: "email", type: "email", placeholder: "you@company.com" },
                  { label: "Phone", key: "phone", type: "tel", placeholder: "(555) 000-0000" },
                  { label: "Business Name", key: "business", type: "text", placeholder: "Your business" },
                ].map((field) => (
                  <div key={field.key}>
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
                  </div>
                ))}

                <button
                  type="submit"
                  className="w-full mt-2 font-body text-[15px] font-medium bg-white text-[#09090B] py-3.5 rounded-lg hover:bg-swann-gold transition-colors"
                >
                  Send Message →
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default MobileContactSheet;
