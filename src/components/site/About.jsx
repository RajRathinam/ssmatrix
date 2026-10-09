import { Target, Eye, Heart, CheckCircle2, ArrowRight, ShieldCheck, Award } from "lucide-react";
import aboutImage from "../../assets/about_1.png";
import aboutImage2 from "../../assets/about_2.png";
import aboutImage3 from "../../assets/about_3.png";
import Counter from "./Counter";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 text-amber-600 border-amber-200",
    text: "Deliver reliable, rapid, and customized recruitment and IT solutions that empower organizations to scale sustainably while unlocking life-changing career opportunities for candidates.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "from-indigo-600 to-purple-600",
    bgLight: "bg-indigo-50 text-indigo-600 border-indigo-200",
    text: "To be India's foremost and most trusted ecosystem for talent acquisition and digital engineering, celebrated for exceptional rigor, integrity, and client outcomes.",
  },
  {
    icon: Heart,
    title: "Our Values",
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50 text-rose-600 border-rose-200",
    text: "Unyielding integrity, radical transparency, candidate empathy, and an obsession with quality delivery across every placement and digital milestone.",
  },
];

const achievements = [
  { label: "Corporate Clients", value: 300, suffix: "+" },
  { label: "Successful Placements", value: 5000, suffix: "+" },
  { label: "Client Retention Rate", value: 99, suffix: "%" },
  { label: "Years of Excellence", value: 12, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="mb-14 grid gap-6 md:grid-cols-2 items-end">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              About SS MATRIX
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Building Careers &{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                Empowering Businesses
              </span>
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Headquartered in Chennai with a pan-India footprint, SS MATRIX Consultancy & Development Services bridges the gap between ambitious enterprises and elite professionals. We combine deep domain expertise in recruitment with cutting-edge IT consulting.
            </p>
          </div>
        </div>

        {/* ── Image + Breakout Showcase Grid ── */}
        <div className="grid gap-6 lg:grid-cols-12 items-stretch mb-16">
          {/* Main Large Image (7 cols) */}
          <div
            className="lg:col-span-7 rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 relative group min-h-[340px] lg:min-h-[460px]"
            data-aos="fade-right"
          >
            <img
              src={aboutImage}
              alt="SS Matrix professional team at work"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent flex flex-col justify-end p-6 sm:p-8">
              <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase mb-1">
                Our Proven Track Record
              </span>
              <h3 className="text-white text-xl sm:text-2xl font-bold font-display">
                Strategic Recruitment & Tailored HR Solutions
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm mt-1 max-w-lg">
                Empowering startups, SMEs, and Fortune-grade enterprises with agile hiring models and seasoned talent advisory.
              </p>
            </div>
          </div>

          {/* Right Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            {/* Highlight Card */}
            <div className="rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-slate-50 to-indigo-500/5 border border-amber-200/60 shadow-sm flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shadow-md mb-5">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-2">
                  Trusted by 300+ Companies Across India
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-4">
                  From fast-track volume staffing to confidential leadership hiring and modern cloud software development, we provide end-to-end support that drives bottom-line growth.
                </p>
                <div className="space-y-2 mb-6">
                  {[
                    "Pre-vetted technical & non-technical talent",
                    "Stringent background & credentials verification",
                    "Comprehensive onboarding & 90-day retention support",
                  ].map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-slate-900 text-white hover:bg-amber-600 font-semibold text-xs transition-colors duration-200 shadow-sm"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Secondary Supporting Image */}
            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/80 h-44 sm:h-52 relative group">
              <img
                src={aboutImage2}
                alt="SS Matrix modern workplace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />
            </div>
          </div>
        </div>

        {/* ── Mission / Vision / Values 3-Card Grid ── */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {pillars.map((item, idx) => (
            <div
              key={item.title}
              className="p-7 rounded-3xl bg-slate-50/80 border border-slate-200/80 hover:border-amber-300 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border mb-5 ${item.bgLight}`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-slate-900 transition-colors">
                <span>SS MATRIX Standard</span>
                <span className="text-amber-500">★ ★ ★ ★ ★</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Interactive Achievements Banner with Animated Counters ── */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white shadow-2xl"
          data-aos="zoom-in"
        >
          {/* Ambient decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10">
            <div className="max-w-2xl mb-10">
              <span className="text-amber-400 text-xs font-bold tracking-widest uppercase mb-2 block">
                Quantifiable Impact
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display text-white">
                Proven Excellence in Numbers
              </h3>
              <p className="text-slate-400 text-sm sm:text-base mt-2">
                Over a decade of consistently outperforming benchmarks in turnaround time, talent quality, and client satisfaction.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 pt-6 border-t border-slate-800">
              {achievements.map((item, idx) => (
                <div key={idx} className="flex flex-col">
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-amber-400 tracking-tight flex items-baseline">
                    <Counter end={item.value} suffix={item.suffix} duration={2000} />
                  </div>
                  <span className="text-xs sm:text-sm text-slate-300 font-medium mt-1">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}