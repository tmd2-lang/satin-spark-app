import { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BookConsultationButton from "./BookConsultationButton";
import { Menu, X, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const serviceLinks = [
  { label: "Bespoke Websites", to: "/services/websites" },
  { label: "SEO & AEO", to: "/services/seo" },
  { label: "Brand Identity", to: "/services/brand-identity" },
];

const mainLinks = [
  { label: "Industries", hash: "industries" },
  { label: "Services", dropdown: true },
  { label: "Portfolio", hash: "portfolio" },
  { label: "About", to: "/about" },
  { label: "Journal", hash: "journal" },
];

// Pages that start with a light hero
const lightHeroPages = ["/services/websites", "/services/seo", "/services/brand-identity", "/about"];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isLightHero = lightHeroPages.some((p) => location.pathname === p);
  const isHome = location.pathname === "/";

  // Text color logic: on light-hero pages, dark text when not scrolled
  const isLight = !scrolled && isLightHero;
  const textBase = isLight ? "text-[#111114]" : "text-white";
  const linkClasses = isLight
    ? "text-[#111114]/60 hover:text-[#111114]"
    : "text-white/60 hover:text-white";
  const borderColor = isLight ? "border-[#111114]/10" : "border-white/[0.06]";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const handleHashLink = (hash: string) => {
    if (isHome) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(`/#${hash}`);
    }
  };

  // Handle hash scroll after navigation
  useEffect(() => {
    if (location.hash) {
      setTimeout(() => {
        const el = document.getElementById(location.hash.slice(1));
        el?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [location]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090B]/80 backdrop-blur-[20px] border-b border-white/[0.06]"
          : `bg-transparent border-b ${borderColor}`
      }`}
      style={{ borderBottomColor: scrolled ? undefined : "transparent" }}
    >
      <div className="max-w-[1320px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link to="/" className="flex items-baseline gap-1.5">
          <span className={`font-headline text-[18px] font-bold tracking-[-0.02em] transition-colors duration-300 ${textBase}`}>
            SWANN
          </span>
          <span className={`font-body text-[10px] font-light uppercase tracking-[0.15em] transition-colors duration-300 ${isLight ? "text-[#111114]/60" : "text-white/60"}`}>
            company
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {mainLinks.map((link) =>
            link.dropdown ? (
              <div key="services" ref={dropdownRef} className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  className={`flex items-center gap-1 font-body text-[13px] font-light transition-colors duration-200 tracking-wide ${linkClasses}`}
                >
                  Services
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${servicesOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <AnimatePresence>
                  {servicesOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[220px] bg-[#111114] border border-white/[0.08] rounded-xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
                    >
                      {serviceLinks.map((s, i) => (
                        <Link
                          key={s.to}
                          to={s.to}
                          onClick={() => setServicesOpen(false)}
                          className={`block px-5 py-3.5 font-body text-[13px] text-white/70 hover:text-white hover:bg-white/[0.04] transition-colors ${
                            i < serviceLinks.length - 1 ? "border-b border-white/[0.06]" : ""
                          }`}
                        >
                          {s.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : link.to ? (
              <Link
                key={link.label}
                to={link.to}
                className={`font-body text-[13px] font-light transition-colors duration-200 tracking-wide ${linkClasses}`}
              >
                {link.label}
              </Link>
            ) : (
              <button
                key={link.label}
                onClick={() => handleHashLink(link.hash!)}
                className={`font-body text-[13px] font-light transition-colors duration-200 tracking-wide ${linkClasses}`}
              >
                {link.label}
              </button>
            )
          )}
        </div>

        {/* CTA */}
        <BookConsultationButton
          className={`hidden md:inline-flex font-body text-[13px] font-medium px-5 py-2.5 rounded-md transition-colors duration-200 ${
            isLight
              ? "bg-[#111114] text-white hover:bg-swann-gold hover:text-[#09090B]"
              : "bg-white text-[#09090B] hover:bg-swann-gold hover:text-[#09090B]"
          }`}
        >
          Book a Consultation
        </BookConsultationButton>

        {/* Mobile toggle */}
        <button
          className={`md:hidden transition-colors duration-300 ${textBase}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Full-Screen Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#09090B] overflow-y-auto md:hidden"
          >
            <div className="px-8 pt-12 pb-16 flex flex-col min-h-full">
              {/* Main Links */}
              <div className="flex-1 space-y-2">
                {mainLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.4, ease: "easeOut" }}
                  >
                    {link.dropdown ? (
                      <div>
                        <button
                          onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                          className="flex items-center gap-3 w-full"
                        >
                          <span className="font-headline text-[32px] font-bold text-white tracking-[-0.02em]">
                            Services
                          </span>
                          <ChevronDown
                            size={20}
                            className={`text-white/50 transition-transform duration-200 ${mobileServicesOpen ? "rotate-180" : ""}`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileServicesOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.25 }}
                              className="overflow-hidden ml-1 mt-3 mb-2 space-y-3 border-l-2 border-white/[0.08] pl-5"
                            >
                              {serviceLinks.map((s) => (
                                <Link
                                  key={s.to}
                                  to={s.to}
                                  onClick={() => setMobileOpen(false)}
                                  className="block font-body text-[16px] text-white/50 hover:text-white transition-colors"
                                >
                                  {s.label}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : link.to ? (
                      <Link
                        to={link.to}
                        onClick={() => setMobileOpen(false)}
                        className="block font-headline text-[32px] font-bold text-white tracking-[-0.02em] hover:text-swann-gold transition-colors"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <button
                        onClick={() => {
                          setMobileOpen(false);
                          handleHashLink(link.hash!);
                        }}
                        className="block font-headline text-[32px] font-bold text-white tracking-[-0.02em] hover:text-swann-gold transition-colors"
                      >
                        {link.label}
                      </button>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="mt-12"
              >
                <BookConsultationButton
                  onClick={() => setMobileOpen(false)}
                  className="block font-body text-[15px] font-medium bg-white text-[#09090B] px-6 py-4 rounded-lg text-center hover:bg-swann-gold transition-colors"
                >
                  Book a Consultation
                </BookConsultationButton>
              </motion.div>

              {/* Social + Contact */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="mt-10 pt-8 border-t border-white/[0.06]"
              >
                <p className="font-body text-[12px] uppercase tracking-[0.1em] text-white/30 mb-4">
                  Connect
                </p>
                <div className="flex gap-6">
                  {["Instagram", "LinkedIn", "X"].map((social) => (
                    <a
                      key={social}
                      href="#"
                      className="font-body text-[14px] text-white/50 hover:text-white transition-colors"
                    >
                      {social}
                    </a>
                  ))}
                </div>
                <p className="font-body text-[13px] text-white/30 mt-4">
                  hello@swannco.co
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
