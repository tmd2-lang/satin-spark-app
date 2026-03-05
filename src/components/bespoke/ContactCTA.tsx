import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import SectionLabel from "@/components/SectionLabel";

const serviceOptions = [
  "Bespoke Websites",
  "Brand Identity",
  "SEO",
  "Digital Advertising",
  "Social Media",
  "Other",
];

const ContactCTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <section ref={ref} className="bg-swann-dark py-24 md:py-32">
      <div className="max-w-[1320px] mx-auto px-6">
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Left */}
          <div>
            <SectionLabel label="Contact Swann" dark />
            <h2 className="font-headline font-bold uppercase text-[clamp(28px,3.5vw,48px)] leading-[0.95] tracking-[-0.03em] text-white mb-12">
              When You're
              <br />
              Ready for
              <br />
              What's Next
            </h2>

            <div className="space-y-8">
              <div>
                <span className="font-body text-[13px] text-swann-gold block mb-2">Give Us A Call</span>
                <a href="tel:+1234567890" className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                  (123) 456-7890
                </a>
              </div>
              <div>
                <span className="font-body text-[13px] text-swann-gold block mb-2">Email Us</span>
                <a href="mailto:hello@swannco.co" className="font-body text-[15px] text-white/70 hover:text-white transition-colors">
                  hello@swannco.co
                </a>
              </div>
              <div>
                <span className="font-body text-[13px] text-swann-gold block mb-2">Follow Us</span>
                <div className="flex gap-5">
                  {["Instagram", "LinkedIn", "X"].map((s) => (
                    <a key={s} href="#" className="font-body text-[14px] text-white/50 hover:text-white transition-colors">
                      {s}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <p className="font-body text-[16px] font-light text-swann-text-dim mb-8">
              It starts with a conversation. Then a strategy. Then results.
            </p>
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input placeholder="First Name *" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
                <input placeholder="Last Name *" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
                <input placeholder="Business Name *" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="email" placeholder="Email *" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
                <input type="tel" placeholder="Phone *" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
                <input type="url" placeholder="Website URL" className="bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors" />
              </div>

              {/* Services */}
              <div>
                <span className="font-body text-[12px] uppercase tracking-[0.1em] text-white/40 mb-3 block">
                  Services Interested In
                </span>
                <div className="flex flex-wrap gap-3">
                  {serviceOptions.map((service) => (
                    <button
                      key={service}
                      type="button"
                      onClick={() => toggleService(service)}
                      className={`font-body text-[13px] rounded-full px-4 py-2 border transition-colors ${
                        selectedServices.includes(service)
                          ? "bg-swann-gold border-swann-gold text-swann-dark"
                          : "border-white/15 text-white/50 hover:border-white/30 hover:text-white/70"
                      }`}
                    >
                      {service}
                    </button>
                  ))}
                </div>
              </div>

              <textarea
                placeholder="Tell us about your project..."
                rows={4}
                className="w-full bg-white/[0.06] border border-white/10 rounded-md px-4 py-3 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors resize-none"
              />

              <p className="font-body text-[12px] text-white/30">
                By submitting this form, you agree to be contacted by Swann Company regarding your inquiry.
              </p>

              <button
                type="submit"
                className="font-body text-[14px] font-medium bg-white text-swann-dark px-8 py-3.5 rounded-md hover:bg-swann-gold hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
