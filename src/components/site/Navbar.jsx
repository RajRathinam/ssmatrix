import { useEffect, useState } from "react";
import { Menu, X, Phone, ChevronRight } from "lucide-react";
import logo from "@/assets/ssmatrix-logo.png";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#why", label: "Why Choose Us" },
  { href: "#process", label: "Process" },
  { href: "#gallery", label: "Gallery" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
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
    return () => { html.style.overflow = ""; };
  }, [sidebarOpen]);

  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 overflow-x-hidden transition-all duration-500 ${
          scrolled ? "bg-white shadow-elegant py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <img src={logo} alt="SS Matrix" className="h-8 sm:h-9 md:h-11 w-auto" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 2xl:gap-7 font-display font-medium text-sm">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative text-foreground/80 hover:text-primary transition-colors whitespace-nowrap after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-primary hover:after:w-full after:transition-all"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="tel:+919865348416"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-border font-display font-semibold text-sm hover:border-primary hover:text-primary transition-colors whitespace-nowrap"
            >
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-display font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
              style={{
                background: "var(--gradient-cta)",
                color: "white",
              }}
            >
              <span>Get Consultation</span>
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="xl:hidden p-2 rounded-md hover:bg-muted transition-colors"
            onClick={() => setSidebarOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>
        </div>
      </header>

      {/* Mobile Sidebar - Fixed position with proper dimensions */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-300 ${
          sidebarOpen
            ? "visible bg-black/50 backdrop-blur-sm"
            : "invisible bg-black/0 backdrop-blur-none pointer-events-none"
        }`}
        onClick={closeSidebar}
      />

      {/* Mobile Sidebar Panel */}
      <div
        className={`fixed top-0 right-0 bottom-0 w-[280px] sm:w-[320px] max-w-[85vw] z-[100] bg-white dark:bg-gray-900 shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-200 dark:border-gray-800">
          <img src={logo} alt="SS Matrix" className="h-7 sm:h-8 w-auto" />
          <button
            onClick={closeSidebar}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Sidebar Navigation Links - Scrollable */}
        <div className="flex-1 overflow-y-auto py-3 sm:py-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={closeSidebar}
              className="flex items-center justify-between py-3 px-4 sm:px-5 mx-2 rounded-lg font-display font-medium text-foreground/80 hover:bg-primary/10 hover:text-primary transition-colors"
            >
              <span>{l.label}</span>
              <ChevronRight className="w-4 h-4 opacity-50" />
            </a>
          ))}
        </div>

        {/* Sidebar CTA Section */}
        <div className="p-4 sm:p-5 border-t border-gray-200 dark:border-gray-800 space-y-3 bg-gray-50 dark:bg-gray-800/50">
          <a
            href="tel:+919865348416"
            onClick={closeSidebar}
            className="flex items-center justify-center gap-2 w-full py-3 rounded-full border border-gray-300 dark:border-gray-700 font-display font-semibold text-sm hover:border-primary hover:text-primary transition-colors"
          >
            <Phone className="w-4 h-4" /> Call Now
          </a>
          <a
            href="#contact"
            onClick={closeSidebar}
            className="group block w-full text-center py-3 rounded-full font-display font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              background: "var(--gradient-cta)",
              color: "white",
            }}
          >
            <span className="flex items-center justify-center gap-2">
              Get Consultation
              <svg 
                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                strokeWidth="2.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
        </div>
      </div>
    </>
  );
}