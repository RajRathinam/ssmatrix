// src/components/site/Hero.tsx
import { ArrowRight, CheckCircle2, TrendingUp, Users, ShieldCheck, Sparkles, MessageSquare, Zap } from "lucide-react";
import hero1 from "../../assets/hero_1.png";
import hero2 from "../../assets/hero_2.png";
import hero3 from "../../assets/hero_3.png";
import hero4 from "../../assets/hero_4.png";

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
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 text-center lg:text-left" data-aos="fade-right">
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/25 text-amber-900 text-xs font-semibold shadow-xs mb-6">
              <span className="flex h-2 w-2 rounded-full bg-amber-500 animate-pulse" />
              <span>Manpower & Technology Consultant</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            </div>

            {/* Main Heading */}
            <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[3.65rem] leading-[1.12] tracking-tight text-slate-900">
              The right people. The right technology.{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 bg-clip-text text-transparent block sm:inline">
                One trusted partner.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl mx-auto lg:mx-0 text-slate-600 text-base sm:text-lg leading-relaxed">
              We help businesses build high-performing teams and modern technology platforms, from hiring skilled talent to delivering software, cloud and digital transformation.
            </p>

            {/* Highlights Grid */}
            <div className="mt-5 sm:mt-6 grid grid-cols-3 gap-2 sm:gap-2.5 max-w-xl mx-auto lg:mx-0 text-left">
              {[
                { title: "500+", sub: "Professionals placed" },
                { title: "50+", sub: "Client engagements" },
                { title: "15+", sub: "Industries served" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-white/90 border border-slate-200/80 shadow-xs backdrop-blur-xs flex flex-col justify-center"
                >
                  <div className="font-display font-black text-base sm:text-lg text-slate-900 leading-tight">
                    {item.title}
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-slate-500 font-medium leading-snug mt-0.5">
                    {item.sub}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3.5 justify-center lg:justify-start">
              <a
                href="#contact"
                className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full font-display font-semibold text-sm text-white shadow-lg shadow-amber-500/25 hover:shadow-xl hover:shadow-amber-500/35 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #f59e0b 0%, #ea580c 100%)",
                }}
              >
                <MessageSquare className="w-4 h-4" />
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-display font-semibold text-sm text-slate-700 bg-white border border-slate-300 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50/40 shadow-sm transition-all duration-200"
              >
                Explore Services
              </a>
            </div>

            {/* Trust Bar */}
            <div className="mt-10 pt-6 border-t border-slate-200/80">
              <p className="text-xs font-semibold tracking-wider text-slate-400 uppercase mb-3">
                Two Core Practices • One Unified Growth Outcome
              </p>
              <div className="flex flex-wrap gap-2.5 justify-center lg:justify-start items-center">
                {[
                  "👥 Manpower Solutions",
                  "⚙️ Technology Consulting",
                  "🚀 Permanent & Contract Staffing",
                  "☁️ Cloud, DevOps & AI Solutions",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-3 py-1 rounded-full bg-slate-100/90 text-slate-700 font-medium border border-slate-200/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT IMAGE GRID ── */}
          <div className="flex-1 mt-6 lg:mt-0 w-full" data-aos="fade-left">
            <div className="relative max-w-lg lg:max-w-none mx-auto pb-6 sm:pb-8">

              {/* Ambient Glow behind image grid */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 via-purple-400/15 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Floating Card — Top Left (Pre-Vetted Talent) */}
              <div
                className="absolute -top-3 left-1 sm:-top-6 sm:-left-6 z-20 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl max-w-[210px] sm:max-w-none"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-amber-100 text-amber-600 flex items-center justify-center shadow-xs shrink-0">
                    <Zap className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-lg text-slate-900 leading-tight">Pre-Vetted Talent</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">Engineers & Specialists</div>
                  </div>
                </div>
              </div>

              {/* Floating Card — Bottom Right (Scalable Teams - Moved down to clear bottom image) */}
              <div
                className="absolute -bottom-8 -right-2 sm:-bottom-12 sm:-right-6 z-20 rounded-xl sm:rounded-2xl p-2.5 sm:p-4 bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-xl max-w-[210px] sm:max-w-none"
              >
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-xs shrink-0">
                    <Users className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <div className="font-display font-bold text-sm sm:text-lg text-slate-900 leading-tight">Scalable Teams</div>
                    <div className="text-[10px] sm:text-xs text-slate-500 font-medium leading-tight">Startups & Enterprises</div>
                  </div>
                </div>
              </div>

              {/* Floating Badge — Middle Right (Moved down to top-[63%] to clear the girl's face) */}
              <div
                className="hidden sm:flex absolute top-[63%] -right-3 sm:-right-5 transform -translate-y-1/2 z-20 rounded-xl px-3.5 py-2.5 bg-slate-900/90 text-white backdrop-blur-md shadow-xl border border-slate-800 items-center gap-2.5"
              >
                <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0" />
                <div>
                  <div className="text-xs font-bold leading-tight">360° Partner</div>
                  <div className="text-[10px] text-slate-300">Talent & Technology</div>
                </div>
              </div>

              {/* ── 4-IMAGE ASYMMETRIC GRID ── */}
              <div className="flex gap-3 sm:gap-4 h-[420px] sm:h-[480px] lg:h-[510px]">

                {/* Left — tall anchor image */}
                <div
                  className="flex-[1.15] overflow-hidden rounded-3xl shadow-lg border border-slate-200/60 relative group"
                >
                  <img
                    src={hero1}
                    alt="Manpower and technology consultant"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent flex items-end p-4">
                    <span className="text-xs font-semibold text-white px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md">
                      People & Technology
                    </span>
                  </div>
                </div>

                {/* Right — 3 stacked images */}
                <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                  <div className="flex-1 overflow-hidden rounded-2xl shadow-md border border-slate-200/60 relative group">
                    <img
                      src={hero2}
                      alt="Tech engineering team"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden rounded-2xl shadow-md border border-slate-200/60 relative group">
                    <img
                      src={hero3}
                      alt="Workforce staffing solutions"
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 overflow-hidden rounded-2xl shadow-md border border-slate-200/60 relative group">
                    <img
                      src={hero4}
                      alt="Digital transformation consulting"
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}