import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const steps = [
  { num: "01", title: "Discovery", text: "We learn your practice, your patients, your market, and your goals." },
  { num: "02", title: "Design & Build", text: "AI-powered architecture meets handcrafted design. Every pixel intentional." },
  { num: "03", title: "Launch & Grow", text: "Your site goes live, we measure everything, and we optimize from day one." },
];

const TheApproach = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="aspect-[3/4] lg:aspect-auto lg:h-[620px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Creative workspace"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div>
            <SectionLabel label="How We Work" />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              AI Builds the Foundation.
              <br />
              We Build the Experience.
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-12 max-w-[520px]">
              Our process starts with AI-powered intelligence — market analysis, competitive research, SEO mapping, content architecture. This gives us a structural foundation that would take a traditional agency weeks to assemble. Then our designers take over. Every page, every interaction, every visual detail is crafted by hand to reflect your brand and convert your visitors. The result: bespoke work on a timeline that actually makes sense.
            </p>

            <div className="space-y-8">
              {steps.map((s) => (
                <div key={s.num} className="flex gap-5">
                  <span className="font-headline text-[14px] font-bold text-swann-gold shrink-0 pt-0.5">
                    {s.num}
                  </span>
                  <div>
                    <h4 className="font-headline text-[16px] font-bold text-foreground mb-1">
                      {s.title}
                    </h4>
                    <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">
                      {s.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TheApproach;
