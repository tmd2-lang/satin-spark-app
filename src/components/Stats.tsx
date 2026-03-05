import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const stats = [
  { value: "100%", label: "HIPAA Compliant" },
  { value: "3.2x", label: "Avg. Traffic Increase" },
  { value: "<48h", label: "Response Time" },
  { value: "97%", label: "Client Retention" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center py-8 ${
                i < stats.length - 1 ? "md:border-r md:border-white/[0.08]" : ""
              }`}
            >
              <p className="font-headline text-[36px] font-bold text-white mb-2">
                {stat.value}
              </p>
              <p className="font-body text-[13px] text-swann-text-dim uppercase tracking-[0.08em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
