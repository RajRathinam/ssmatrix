import { useEffect, useState } from "react";
import { Menu, X, ChevronRight, Sparkles, ArrowUpRight } from "lucide-react";
import BrandLogo from "@/components/site/BrandLogo";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Us" },
  { href: "#stats", label: "Key Stats" },
  { href: "#process", label: "How We Work" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active link spy
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
      {/* Top micro announcement bar with Marquee */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white text-[11px] sm:text-xs py-2 font-medium tracking-wide overflow-hidden border-b border-slate-800/80">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-3">
          {/* Static Brand Pill on the left */}
          <div className="shrink-0 flex items-center pr-3 border-r border-slate-800">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-semibold text-[10px] border border-amber-500/30 whitespace-nowrap shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              AIT3CH360
            </span>
          </div>

          {/* Marquee Scroller */}
          <div className="relative flex-1 overflow-hidden">
            {/* Gradient masks for seamless edge fading */}
            <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-r from-slate-950 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 sm:w-10 bg-gradient-to-l from-indigo-950 to-transparent z-10" />

            <div className="flex animate-topbar-marquee hover:pause whitespace-nowrap items-center will-change-transform">
              {[
                "Software & Web Development",
                "Cloud & DevOps Engineering",
                "Data & AI Automation",
                "IT & Non-IT Recruitment",
                "Software & Web Development",
                "Cloud & DevOps Engineering",
                "Data & AI Automation",
                "IT & Non-IT Recruitment",
              ].map((item, idx) => (
                <div key={`set1-${idx}`} className="inline-flex items-center gap-2 mx-4 text-slate-300 hover:text-amber-300 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">{item}</span>
                </div>
              ))}
              {[
                "Software & Web Development",
                "Cloud & DevOps Engineering",
                "Data & AI Automation",
                "IT & Non-IT Recruitment",
                "Software & Web Development",
                "Cloud & DevOps Engineering",
                "Data & AI Automation",
                "IT & Non-IT Recruitment",
              ].map((item, idx) => (
                <div key={`set2-${idx}`} className="inline-flex items-center gap-2 mx-4 text-slate-300 hover:text-amber-300 transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80 shrink-0" />
                  <span className="font-semibold text-[11px] sm:text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes topbarMarquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-topbar-marquee {
          animation: topbarMarquee 35s linear infinite;
          width: fit-content;
        }
        .animate-topbar-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>

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
          <a href="#home" className="flex items-center gap-3 group" aria-label="AIT3CH360 Home">
            <BrandLogo />
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
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-xs text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap overflow-hidden"
              style={{
                background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
              }}
            >
              <span className="relative z-10 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Talk to an Expert</span>
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
          <BrandLogo className="h-8" />
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
        <div className="p-4 border-t border-slate-100 bg-slate-50/70">
          <a
            href="#contact"
            onClick={closeSidebar}
            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-display font-semibold text-xs text-white shadow-md transition-all active:scale-95"
            style={{
              background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
            }}
          >
            <span>Talk to an Expert</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </>
  );
}