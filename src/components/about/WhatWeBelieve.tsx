import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const values = [
  {
    title: "Craft Over Templates",
    text: "Every project starts from zero. We don't recycle layouts, reuse structures, or apply themes. Your practice is unique — your website should be proof of that.",
  },
  {
    title: "AI + Human, Always",
    text: "AI handles the architecture — content scaffolding, SEO structure, responsive frameworks. Our designers handle the soul — brand expression, visual storytelling, the details that make patients feel something.",
  },
  {
    title: "Compliance as a Feature",
    text: "HIPAA, medical advertising rules, before/after photo regulations — these aren't afterthoughts we bolt on at the end. They're woven into every wireframe, every design decision, every line of copy.",
  },
  {
    title: "Results, Not Vanity",
    text: "A gorgeous website that doesn't book consultations is just art. Everything we build is measured by one thing: did it grow your practice?",
  },
];

const WhatWeBelieve = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32">
      <div
        className={`max-w-[1320px] mx-auto px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <SectionLabel label="What We Believe" dark />
        <h2 className="font-headline text-[clamp(28px,3vw,42px)] font-bold text-white tracking-[-0.02em] leading-[1.1] mb-14">
          The Principles Behind
          <br />
          Every Project
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12 max-w-[1080px]">
          {values.map((v, i) => (
            <div key={i}>
              <h4 className="font-headline text-[18px] font-bold text-white mb-3">
                {v.title}
              </h4>
              <p className="font-body text-[15px] font-light text-swann-text-dim leading-relaxed max-w-[460px]">
                {v.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeBelieve;
