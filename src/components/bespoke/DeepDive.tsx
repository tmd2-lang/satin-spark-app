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
            <SectionLabel label="Websites for Aesthetics Practices" />
            <h2 className="font-headline text-[clamp(26px,3vw,40px)] font-bold text-foreground tracking-[-0.02em] leading-[1.1] mb-6">
              We're Building the Engine
              <br />
              of Your Marketing
            </h2>
            <p className="font-body text-[16px] font-light text-swann-text-dim leading-relaxed mb-10 max-w-[520px]">
              All the time and effort you've invested in growing your practice — through referrals, ads, word-of-mouth — funnels to one place: your website. Nearly every patient will look at your website before making a decision. We make the most of that moment by turning interest into booked appointments, trust in what you offer, and measurable growth.
            </p>

            {/* Sub-points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h4 className="font-headline text-[16px] font-bold text-foreground mb-2">
                  Split-Second Branding
                </h4>
                <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">
                  It takes just 50 milliseconds for someone to form a first impression of your website. And 94% of that impression is visual. We know how to capture attention and keep it.
                </p>
              </div>
              <div>
                <h4 className="font-headline text-[16px] font-bold text-foreground mb-2">
                  Conversion Optimization
                </h4>
                <p className="font-body text-[14px] font-light text-swann-text-dim leading-relaxed">
                  Careless web design assumes visitors will immediately book. Like a pushy salesperson, it tries to close too soon. Our approach starts a conversation that naturally leads to a consultation.
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
