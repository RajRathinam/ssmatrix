import { useState } from "react";
import { Mail, Phone, MapPin, Linkedin, Facebook, Instagram, ArrowRight, Heart, Sparkles, CheckCircle2 } from "lucide-react";
import BrandLogo from "@/components/site/BrandLogo";

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    const mailto = email
      ? `mailto:subscribe@ait3ch360.com?subject=Newsletter%20Subscription&body=Please%20subscribe%20${encodeURIComponent(email)}`
      : "mailto:subscribe@ait3ch360.com?subject=Newsletter%20Subscription";
    window.location.href = mailto;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setEmail("");
    }, 4000);
  };

  return (
    <footer className="bg-slate-950 text-slate-300 relative overflow-hidden font-display border-t border-slate-800">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Massive Brand Shimmer Heading */}
      <div className="w-full text-center pt-14 pb-4 px-4 overflow-hidden select-none">
        <span className="text-[11vw] font-black tracking-wider leading-none bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500 bg-clip-text text-transparent opacity-90 inline-block animate-pulse-soft">
          AIT3CH360
        </span>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-6 pb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">

          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <a href="#home" className="inline-block" aria-label="AIT3CH360 Home">
              <BrandLogo isDark className="h-10" />
            </a>

            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Manpower & technology consultant helping businesses grow with the right talent and the right tools.
            </p>

            <div className="pt-2">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-3">
                Connect With Us
              </span>
              <div className="flex gap-2">
                {[
                  { Icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
                  { Icon: Facebook, href: "https://facebook.com", label: "Facebook" },
                  { Icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                ].map(({ Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={label}
                    className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-amber-400 hover:bg-slate-800 transition-all duration-200"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Col 2: Company (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {[
                { label: "About Us", href: "#about" },
                { label: "How We Work", href: "#process" },
                { label: "Why AIT3CH360", href: "#why" },
                { label: "Key Stats", href: "#stats" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="hover:text-amber-400 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              {[
                "Technology Consulting",
                "Permanent Recruitment",
                "Contract Staffing",
                "Software & Web Dev",
                "Cloud & DevOps",
              ].map((s) => (
                <li key={s}>
                  <a href="#services" className="hover:text-amber-400 transition-colors">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact & Location (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-amber-400 tracking-wider uppercase">
              Contact
            </h4>

            <div className="space-y-2.5 text-xs sm:text-sm text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Coimbatore, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="tel:+910000000000" className="hover:text-amber-400 transition-colors">
                  +91 00000 00000
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href="mailto:enquiry@ait3ch360.com" className="hover:text-amber-400 transition-colors">
                  enquiry@ait3ch360.com
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div className="pt-2">
              <span className="text-xs font-semibold text-slate-300 block mb-2">
                Subscribe for Talent & Tech Insights
              </span>
              <form onSubmit={handleSubscribe} className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter work email"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
                  />
                  <a
                    href="mailto:subscribe@ait3ch360.com?subject=Newsletter%20Subscription"
                    onClick={(e) => {
                      if (email) {
                        e.preventDefault();
                        handleSubscribe(e);
                      }
                    }}
                    className="px-4 py-2 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs transition-colors shrink-0 flex items-center justify-center cursor-pointer"
                  >
                    Join
                  </a>
                </div>
                {subscribed && (
                  <p className="text-[11px] text-emerald-400 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Opening mail client for subscribe@ait3ch360.com...
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} AIT3CH360. Manpower & Technology Consultant. All Rights Reserved.</p>
          <div className="flex items-center gap-1.5 text-slate-400">
            <span>Developed by</span>
            <a
              href="https://trueluxe.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 font-semibold tracking-wide hover:text-amber-300 transition-colors hover:underline"
            >
              Trueluxe Solutions
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#contact" className="hover:text-slate-400 transition-colors">Contact Us</a>
          </div>
        </div>
      </div>
    </footer>
  );
}