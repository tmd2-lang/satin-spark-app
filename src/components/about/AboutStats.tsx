import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "100%", label: "HIPAA Compliant" },
  { value: "0", label: "Templates Used" },
  { value: "1", label: "Industry Focus" },
  { value: "<48h", label: "Response Time" },
];

const AboutStats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-20 md:py-24">
      <div
        className={`max-w-[1320px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className={`text-center ${
                i < stats.length - 1 ? "md:border-r md:border-white/10" : ""
              }`}
            >
              <span className="font-headline text-[clamp(32px,4vw,56px)] font-bold text-white block leading-none mb-2">
                {s.value}
              </span>
              <span className="font-body text-[12px] uppercase tracking-[0.12em] text-swann-text-dim">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutStats;
