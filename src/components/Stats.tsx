import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

const stats = [
  { value: "100%", label: "HIPAA Compliant", numericValue: 100, suffix: "%" },
  { value: "3.2x", label: "Avg. Traffic Increase", numericValue: 3.2, suffix: "x", decimals: 1 },
  { value: "<48h", label: "Response Time", prefix: "<", numericValue: 48, suffix: "h" },
  { value: "97%", label: "Client Retention", numericValue: 97, suffix: "%" },
];

const AnimatedCounter = ({
  numericValue,
  suffix = "",
  prefix = "",
  decimals = 0,
  isInView,
  delay,
}: {
  numericValue: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  isInView: boolean;
  delay: number;
}) => {
  const motionVal = useMotionValue(0);
  const rounded = useTransform(motionVal, (v) =>
    decimals > 0 ? v.toFixed(decimals) : Math.round(v).toString()
  );
  const [display, setDisplay] = useState(decimals > 0 ? "0.0" : "0");

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(motionVal, numericValue, {
      duration: 1.5,
      delay,
      ease: [...ease],
    });
    const unsub = rounded.on("change", (v) => setDisplay(v));
    return () => {
      controls.stop();
      unsub();
    };
  }, [isInView, numericValue, delay, motionVal, rounded]);

  return (
    <span>
      {prefix}
      {display}
      {suffix}
    </span>
  );
};

const Stats = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

  return (
    <section ref={sectionRef} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                delay: i * 0.15,
                duration: 0.6,
                ease: [...ease],
              }}
              className={`text-center py-8 ${
                i < stats.length - 1 ? "md:border-r md:border-white/[0.08]" : ""
              } ${i >= 2 ? "border-t border-white/[0.06] md:border-t-0" : ""}`}
            >
              <p className="font-headline text-[36px] font-bold text-white mb-2">
                <AnimatedCounter
                  numericValue={stat.numericValue}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                  decimals={stat.decimals}
                  isInView={isInView}
                  delay={i * 0.15 + 0.3}
                />
              </p>
              <p className="font-body text-[13px] text-swann-text-dim uppercase tracking-[0.08em]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
