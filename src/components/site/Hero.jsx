// src/components/site/Hero.tsx
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Sparkles, PhoneCall } from "lucide-react";
import hero1 from "../../assets/hero_1.png";
import hero2 from "../../assets/hero_2.png";
import hero3 from "../../assets/hero_3.png";
import hero4 from "../../assets/hero_4.png";

function HeroImageGrid() {
  return (
    <div className="relative max-w-lg lg:max-w-none mx-auto w-full">
      {/* Ambient Glow behind image grid */}
      <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 via-purple-400/15 to-transparent rounded-3xl blur-2xl -z-10" />

      {/* Floating Card — Top Left (Success Metric) */}
      <div className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 z-20 rounded-2xl p-3 sm:p-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs">
            <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">98%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Placement Retention</div>
          </div>
        </div>
      </div>

      {/* Floating Card — Bottom Right (Candidates Placed) */}
      <div className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 z-20 rounded-2xl p-3 sm:p-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl">
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs">
            <Users className="w-4 h-4 sm:w-5 sm:h-5" />
          </div>
          <div>
            <div className="font-display font-bold text-base sm:text-lg text-slate-900 leading-tight">5,000+</div>
            <div className="text-[10px] sm:text-xs text-slate-500 font-medium">Careers Launched</div>
          </div>
        </div>
      </div>

      {/* Floating Badge — Middle Right (Quality Guarantee) */}
      <div className="hidden sm:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-20 rounded-xl px-3.5 py-2.5 bg-slate-900/90 text-white backdrop-blur-md shadow-xl border border-slate-800 items-center gap-2.5">
        <ShieldCheck className="w-5 h-5 text-amber-400" />
        <div>
          <div className="text-xs font-bold leading-tight">100% Pre-Vetted</div>
          <div className="text-[10px] text-slate-300">Background Verified</div>
        </div>
      </div>

      {/* ── 4-IMAGE ASYMMETRIC GRID ── */}
      <div className="flex gap-2.5 sm:gap-4 h-[360px] sm:h-[460px] lg:h-[510px]">
        {/* Left — tall anchor image */}
        <div className="flex-[1.15] overflow-hidden rounded-2xl sm:rounded-3xl shadow-lg border border-slate-200/60 relative group">
          <img
            src={hero1}
            alt="Corporate recruitment and interview in Chennai"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-3 sm:p-4">
            <span className="text-[10px] sm:text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
              Executive Search
            </span>
          </div>
        </div>

        {/* Right — 3 stacked images */}
        <div className="flex-1 flex flex-col gap-2.5 sm:gap-4">
          <div className="flex-1 overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-slate-200/60 relative group">
            <img
              src={hero2}
              alt="Tech team collaboration"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-slate-200/60 relative group">
            <img
              src={hero3}
              alt="Digital workforce solutions"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="flex-1 overflow-hidden rounded-xl sm:rounded-2xl shadow-md border border-slate-200/60 relative group">
            <img
              src={hero4}
              alt="Enterprise IT consulting"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden bg-gradient-to-b from-amber-500/[0.03] via-slate-50 to-white"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-40 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 text-center lg:text-left w-full" data-aos="fade-right">
            {/* Trust Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold shadow-xs mb-5 sm:mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-500" />
              <span>Leading Recruitment & IT Partner • Chennai, India</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-3xl sm:text-5xl md:text-6xl lg:text-[3.75rem] leading-[1.14] tracking-tight text-slate-900">
              Connecting Elite Talent with{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                Exceptional Growth
              </span>
            </h1>

            {/* Description */}
            <p className="mt-4 sm:mt-5 max-w-xl mx-auto lg:mx-0 text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed">
              SS MATRIX delivers precision recruitment, executive search, workforce staffing, and custom IT development tailored to accelerate high-growth enterprises and careers across India.
            </p>

            {/* ── MOBILE IMAGE SECTION (Moved on top for mobile, right below text) ── */}
            <div className="block lg:hidden my-8 w-full" data-aos="fade-up">
              <HeroImageGrid />
            </div>

            {/* Highlights Grid */}
            <div className="mt-6 sm:mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                { title: "5,000+ Placements", sub: "Engineers & Executives" },
                { title: "48-Hour Turnaround", sub: "Fast-track shortlist" },
                { title: "250+ Corporate Clients", sub: "Pan-India presence" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 sm:p-3.5 rounded-2xl bg-white/80 border border-slate-200/80 shadow-xs backdrop-blur-xs flex items-start gap-2.5"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-900">{item.title}</div>
                    <div className="text-[11px] text-slate-500">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-3.5 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-semibold text-sm text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                }}
              >
                <span>Hire Top Talent</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/40 shadow-sm transition-all duration-200"
              >
                Explore Services
              </a>

              <a
                href="tel:+919865348416"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full font-display font-semibold text-sm text-indigo-700 bg-indigo-50/80 border border-indigo-200/70 hover:bg-indigo-100 transition-all duration-200"
              >
                <PhoneCall className="w-4 h-4 text-indigo-600" />
                <span>Call Consultant</span>
              </a>
            </div>

            {/* Trust Bar (With 4 sectors as edited by the user) */}
            <div className="mt-8 sm:mt-10 pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                Industry Sectors We Empower
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start items-center">
                {[
                  "IT & Software Engineering",
                  "Banking & FinTech",
                  "Healthcare & Pharma",
                  "Manufacturing & Auto",
                ].map((sector) => (
                  <span
                    key={sector}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100/90 text-slate-600 font-medium border border-slate-200/60"
                  >
                    {sector}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── DESKTOP RIGHT IMAGE GRID (Hidden on mobile, shown on lg+) ── */}
          <div className="hidden lg:block flex-1 mt-6 lg:mt-0 w-full" data-aos="fade-left">
            <HeroImageGrid />
          </div>

        </div>
      </div>
    </section>
  );
}