import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const footerLinks = {
  Company: ["About", "Portfolio", "Journal", "Contact"],
  Industries: ["Med Spas", "Plastic Surgery", "Aestheticians", "Luxury Spas"],
  Services: ["Websites", "Brand Identity", "SEO", "Advertising", "Social", "Compliance"],
};

const CTAFooter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" ref={ref} className="bg-swann-dark">
      {/* CTA */}
      <div className="relative py-32 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[radial-gradient(ellipse,_rgba(201,169,110,0.08)_0%,_transparent_70%)]" />
        <div
          className={`relative z-10 max-w-[1320px] mx-auto px-6 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="font-headline text-[clamp(28px,3.5vw,44px)] font-bold text-white tracking-[-0.02em] mb-4">
            When you're ready for what's next.
          </h2>
          <p className="font-body text-[16px] font-light text-swann-text-dim mb-10 max-w-[440px] mx-auto">
            It starts with a conversation. Then a strategy. Then results.
          </p>
          <a
            href="#"
            className="inline-flex font-body text-[15px] font-medium bg-white text-[#09090B] px-10 py-4 rounded-lg hover:bg-swann-gold hover:shadow-[0_8px_30px_rgba(201,169,110,0.3)] hover:-translate-y-0.5 transition-all duration-300"
          >
            Book a Consultation →
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/[0.06]">
        <div className="max-w-[1320px] mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            {/* Logo col */}
            <div className="md:col-span-2">
              <div className="flex items-baseline gap-1.5 mb-3">
                <span className="font-headline text-[18px] font-bold text-white">SWANN</span>
                <span className="font-body text-[10px] font-light uppercase tracking-[0.15em] text-white/50">
                  company
                </span>
              </div>
              <p className="font-body text-[13px] text-swann-text-dim max-w-[280px]">
                The technology is invisible — the taste is not.
              </p>
            </div>

            {/* Link columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <p className="font-body text-[12px] uppercase tracking-[0.1em] text-white/40 mb-4">
                  {title}
                </p>
                <ul className="space-y-2.5">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-body text-[14px] text-swann-text-dim hover:text-white transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.06]">
          <div className="max-w-[1320px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <p className="font-body text-[12px] text-swann-text-dim">
              © 2026 Swann Company. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {["Instagram", "LinkedIn", "X"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-[12px] text-swann-text-dim hover:text-white transition-colors"
                >
                  {social}
                </a>
              ))}
            </div>
            <span className="font-body text-[12px] text-swann-text-dim">
              swannco.co
            </span>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default CTAFooter;
