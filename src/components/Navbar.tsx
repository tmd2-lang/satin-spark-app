import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Industries", "Services", "Portfolio", "About", "Journal"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-[20px] border-b border-white/[0.06]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-1.5">
          <span className="font-headline text-[18px] font-bold text-white tracking-[-0.02em]">
            SWANN
          </span>
          <span className="font-body text-[10px] font-light uppercase tracking-[0.15em] text-white/60">
            company
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[13px] font-light text-white/60 hover:text-white transition-colors duration-200 tracking-wide"
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex font-body text-[13px] font-medium bg-white text-[#09090B] px-5 py-2.5 rounded-md hover:bg-swann-gold hover:text-[#09090B] transition-colors duration-200"
        >
          Book a Consultation
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#09090B]/95 backdrop-blur-[20px] border-t border-white/[0.06] px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="font-body text-[15px] text-white/70 hover:text-white transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            className="font-body text-[13px] font-medium bg-white text-[#09090B] px-5 py-2.5 rounded-md text-center mt-2 hover:bg-swann-gold transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            Book a Consultation
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
