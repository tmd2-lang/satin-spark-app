import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const DeepDive = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="bg-swann-light py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-[45%_1fr] gap-10 lg:gap-16 items-start transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Image */}
          <div className="aspect-[4/5] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
              alt="Modern architecture"
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Content */}
          <div className="lg:pt-8">
            <SectionLabel label="The Engine of Your Practice" />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              Where Every Visit Becomes
              <br />
              a Consultation
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[520px]">
              Every dollar you spend on marketing — every Instagram ad, every Google listing, every patient referral — sends people to the same place: your website. It's the single highest-leverage asset in your entire practice. We treat it that way. Swann websites are engineered to turn that traffic into trust, and that trust into booked appointments.
            </p>

            {/* Sub-points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-headline text-[16px] font-bold text-foreground mb-2">
                  First Impressions Are Visual
                </h4>
                <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">
                  94% of first impressions are design-related. Your patients are judging your clinical quality by your website's visual quality. We make sure those two things match.
                </p>
              </div>
              <div>
                <h4 className="font-headline text-[16px] font-bold text-foreground mb-2">
                  The Conversation, Not the Close
                </h4>
                <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">
                  Aggressive popups and desperate CTAs repel patients. Our approach builds a natural flow — educate, inspire confidence, then invite action. It works because it respects the patient's intelligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeepDive;
