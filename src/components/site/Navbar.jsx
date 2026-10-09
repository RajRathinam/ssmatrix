import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight, Sparkles, Clock, ArrowUpRight } from "lucide-react";
import logo from "@/assets/ssmatrix-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#stats", label: "Key Stats" },
  { href: "#process", label: "Process" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#gallery", label: "Insights" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Simple active link spy
      const sections = links.map((l) => document.querySelector(l.href));
      const scrollPos = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const sec = sections[i];
        if (sec && sec.offsetTop <= scrollPos) {
          setActiveLink(links[i].href);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    const html = document.documentElement;
    if (sidebarOpen) {
      html.style.overflow = "hidden";
    } else {
      html.style.overflow = "";
    }
    return () => {
      html.style.overflow = "";
    };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      {/* Top micro announcement bar */}
      <div className="bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 text-white text-[11px] sm:text-xs py-1.5 font-medium tracking-wide">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center gap-2 mx-auto sm:mx-0">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-[10px] border border-amber-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
              HIRING PARTNER
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Connecting Top Indian Talent with Fast-Growing Enterprises
            </span>
            <span className="text-amber-300 sm:hidden">
              Top Talent & IT Solutions
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-slate-300 text-[11px]">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-amber-400" /> Mon - Sat: 9:00 AM - 6:30 PM IST
            </span>
            <a
              href="tel:+919865348416"
              className="text-amber-300 hover:text-white transition-colors font-semibold"
            >
              +91 98653 48416
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`sticky top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200/80 py-2.5"
            : "bg-white/90 backdrop-blur-md py-3 border-b border-slate-100/80 shadow-xs"
        }`}
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          {/* Logo with tagline */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="SS Matrix Consultancy & Development Services"
              className="h-9 sm:h-10 md:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-1 2xl:gap-2 bg-slate-100/70 p-1 rounded-full border border-slate-200/60 shadow-inner">
            {links.map((l) => {
              const isActive = activeLink === l.href;
              return (
                <a
                  key={l.href}
                  href={l.href}
                  className={`px-3.5 py-1.5 rounded-full font-display text-xs 2xl:text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919865348416"
              className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-full border border-slate-200 bg-white font-display font-medium text-xs text-slate-700 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/50 shadow-sm transition-all duration-200 whitespace-nowrap"
            >
              <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors">
                <Phone className="w-3 h-3" />
              </span>
              <span className="font-semibold">+91 98653 48416</span>
            </a>

            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-xs text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Get Consultation</span>
                <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors border border-slate-200"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open navigation menu"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* Mobile Drawer Backdrop */}
      <div
        className={`fixed inset-0 z-[100] transition-opacity duration-300 ${
          sidebarOpen
            ? "opacity-100 visible bg-slate-900/60 backdrop-blur-sm"
            : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Drawer Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] sm:w-[340px] max-w-[85vw] z-[101] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex items-center justify-between p-4 border-b border-slate-100 bg-slate-50/70">
          <img src={logo} alt="SS Matrix" className="h-8 w-auto" />
          <button
            onClick={closeSidebar}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Links */}
        <div className="flex-1 overflow-y-auto py-3 px-3 space-y-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeSidebar}
              className="flex items-center justify-between py-2.5 px-3.5 rounded-xl font-display font-medium text-sm text-slate-700 hover:bg-amber-50 hover:text-amber-700 transition-colors"
            >
              <span>{l.label}</span>
              <ChevronRight className="w-4 h-4 text-slate-400" />
            </a>
          ))}
        </div>

        {/* Drawer Footer Actions */}
        <div className="p-4 border-t border-slate-100 bg-slate-50/70 space-y-3">
          <a
            href="tel:+919865348416"
            onClick={closeSidebar}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl border border-slate-300 bg-white font-display font-semibold text-xs text-slate-800 hover:border-amber-400 transition-colors shadow-sm"
          >
            <Phone className="w-3.5 h-3.5 text-amber-600" /> Call +91 98653 48416
          </a>
          <a
            href="#contact"
            onClick={closeSidebar}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-display font-semibold text-xs text-white shadow-md transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
            }}
          >
            <span>Get Free Consultation</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}