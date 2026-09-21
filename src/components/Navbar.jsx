import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

export function Navbar({ onContactClick }) {
  const [activeSection, setActiveSection] = useState("projects");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["projects", "about", "skills", "experience", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "py-3 backdrop-blur-md bg-white/75 shadow-xs border-b border-black/[0.04]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Left Monogram / Logo */}
        <button
          id="nav-logo-btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="group flex items-center gap-2 text-left cursor-pointer focus:outline-hidden"
          aria-label="Rendra Home"
        >
          <div className="w-9 h-9 rounded-xl bg-white/90 border border-black/8 shadow-xs flex items-center justify-center font-bold text-xs tracking-tight text-neutral-800 transition-all group-hover:scale-105 group-hover:border-blue-500/40 overflow-hidden">
            <span className="font-semibold text-neutral-900">
              <img src="/src/assets/images/Logo.png" alt="Logo" />
            </span>
          </div>
        </button>

        {/* Center Navigation Pill (Desktop) */}
        <nav
          id="desktop-nav-pill"
          className="hidden md:flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-xl border border-black/[0.06] shadow-xs"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
                  isActive
                    ? "bg-neutral-100/90 text-neutral-900 font-semibold shadow-2xs"
                    : "text-neutral-600 hover:text-neutral-900 hover:bg-black/[0.03]"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button
            id="nav-cta-btn"
            onClick={onContactClick}
            className="group hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 hover:bg-neutral-50 text-neutral-900 border border-black/8 hover:border-black/15 shadow-2xs transition-all text-xs font-semibold cursor-pointer"
          >
            <span>Let's Talk</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-neutral-600" />
          </button>

          {/* Mobile Hamburger Button */}
          <button
            id="mobile-nav-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-white/80 border border-black/8 text-neutral-700 hover:text-neutral-900 focus:outline-hidden"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-menu-drawer"
          className="md:hidden px-4 pt-3 pb-6 mt-2 mx-4 rounded-2xl bg-white/95 backdrop-blur-2xl border border-black/8 shadow-xl space-y-1 animate-in fade-in slide-in-from-top-2"
        >
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors cursor-pointer ${
                activeSection === item.id
                  ? "bg-blue-50/80 text-blue-600 font-semibold"
                  : "text-neutral-700 hover:bg-neutral-100/70"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onContactClick();
              }}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0071e3] text-white text-sm font-semibold flex items-center justify-center gap-2 shadow-sm cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
