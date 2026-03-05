import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Navbar from "@/components/Navbar";
import CTAFooter from "@/components/CTAFooter";
import SectionLabel from "@/components/SectionLabel";

const serviceOptions = [
  "Bespoke Websites",
  "Brand Identity",
  "SEO",
  "Digital Advertising",
  "Social Media",
  "Email Marketing",
  "Compliance",
  "Other",
];

const industryOptions = [
  "Med Spa",
  "Plastic Surgery",
  "Aesthetician",
  "Luxury Spa",
  "Dermatology",
  "Multi-Location",
  "Other",
];

const inputClass =
  "w-full bg-white/[0.06] border border-white/10 rounded-md px-4 py-3.5 font-body text-[14px] text-white placeholder:text-white/30 focus:outline-none focus:border-swann-gold/50 transition-colors";

const labelClass =
  "font-body text-[12px] uppercase tracking-[0.1em] text-white/40 mb-2 block";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (service: string) => {
    setSelectedServices((prev) =>
      prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]
    );
  };

  return (
    <div className="min-h-screen bg-swann-dark">
      <Navbar />

      <section ref={ref} className="pt-32 pb-24 md:pt-40 md:pb-32">
        <div
          className={`max-w-[1320px] mx-auto px-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[2fr_3fr] gap-16 lg:gap-20">
            {/* Left — Bold Statement */}
            <div>
              <SectionLabel label="Contact" dark />
              <h1 className="font-headline font-bold uppercase text-[clamp(32px,4vw,56px)] leading-[0.95] tracking-[-0.03em] text-white mb-16">
                When You're
                <br />
                Ready for
                <br />
                What's Next
              </h1>

              <div className="space-y-8">
                <div>
                  <span className="font-body text-[13px] uppercase tracking-[0.1em] text-swann-gold block mb-2">
                    Give Us A Call
                  </span>
                  <a
                    href="tel:+1234567890"
                    className="font-body text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    (123) 456-7890
                  </a>
                </div>
                <div>
                  <span className="font-body text-[13px] uppercase tracking-[0.1em] text-swann-gold block mb-2">
                    Email Us
                  </span>
                  <a
                    href="mailto:hello@swannco.co"
                    className="font-body text-[15px] text-white/70 hover:text-white transition-colors"
                  >
                    hello@swannco.co
                  </a>
                </div>
                <div>
                  <span className="font-body text-[13px] uppercase tracking-[0.1em] text-swann-gold block mb-2">
                    Follow Us
                  </span>
                  <div className="flex gap-5">
                    {["Instagram", "LinkedIn", "X"].map((s) => (
                      <a
                        key={s}
                        href="#"
                        className="font-body text-[14px] text-white/50 hover:text-swann-gold transition-colors"
                      >
                        {s}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right — Form */}
            <div>
              <p className="font-body text-[16px] font-light text-swann-text-dim mb-10">
                It starts with a conversation. Then a strategy. Then results.
              </p>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                {/* Row 1 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>First Name *</label>
                    <input placeholder="First Name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Last Name *</label>
                    <input placeholder="Last Name" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Business Name *</label>
                    <input placeholder="Business Name" className={inputClass} />
                  </div>
                </div>

                {/* Row 2 */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Email *</label>
                    <input type="email" placeholder="Email" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Phone *</label>
                    <input type="tel" placeholder="Phone Number" className={inputClass} />
                  </div>
                  <div>
                    <label className={labelClass}>Website URL</label>
                    <input type="url" placeholder="https://" className={inputClass} />
                  </div>
                </div>

                {/* Row 3 — Industry */}
                <div>
                  <label className={labelClass}>Industry</label>
                  <select
                    defaultValue=""
                    className={`${inputClass} appearance-none bg-[url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 24 24' fill='none' stroke='rgba(255,255,255,0.3)' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")] bg-no-repeat bg-[right_16px_center]`}
                  >
                    <option value="" disabled className="bg-[#111114] text-white/30">
                      Select your industry
                    </option>
                    {industryOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111114] text-white">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Row 4 — Services */}
                <div>
                  <label className={labelClass}>Services Interested In</label>
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

                {/* Row 5 — Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Consent */}
                <p className="font-body text-[12px] text-white/30 leading-relaxed">
                  By completing this form, you are giving us permission to follow up by phone, email, or text.
                </p>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full font-body text-[15px] font-medium bg-white text-swann-dark py-4 rounded-md hover:bg-swann-gold hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <CTAFooter />
    </div>
  );
};

export default Contact;
