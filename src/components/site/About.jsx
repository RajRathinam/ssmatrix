import { Target, Eye, Heart, CheckCircle2, ArrowRight, ShieldCheck, Award, Briefcase, Cpu, Factory, Landmark, Stethoscope, Building2 } from "lucide-react";
import aboutImage from "../../assets/about_1.png";
import aboutImage2 from "../../assets/about_2.png";
import Counter from "./Counter";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    color: "from-amber-500 to-orange-500",
    bgLight: "bg-amber-50 text-amber-600 border-amber-200",
    text: "To help organisations grow by connecting them with the right talent and the right technology, delivered with speed and integrity.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    color: "from-indigo-600 to-purple-600",
    bgLight: "bg-indigo-50 text-indigo-600 border-indigo-200",
    text: "To be the most trusted people-and-technology partner for growing businesses across India and beyond.",
  },
  {
    icon: Heart,
    title: "Our Values",
    color: "from-rose-500 to-pink-500",
    bgLight: "bg-rose-50 text-rose-600 border-rose-200",
    text: "Transparency, accountability, quality and long-term relationships over short-term transactions.",
  },
];

const industries = [
  {
    icon: Cpu,
    title: "IT & Software",
    desc: "Product firms, services companies and high-growth tech startups.",
    color: "text-blue-600 bg-blue-50 border-blue-200",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    desc: "Plant operations, industrial engineering, supply chain and automation.",
    color: "text-amber-600 bg-amber-50 border-amber-200",
  },
  {
    icon: Landmark,
    title: "Banking & Finance",
    desc: "Fintech disruptors, BFSI institutions and global shared services.",
    color: "text-emerald-600 bg-emerald-50 border-emerald-200",
  },
  {
    icon: Stethoscope,
    title: "Healthcare & Retail",
    desc: "Healthcare operations, clinical support, consumer retail and digital platforms.",
    color: "text-purple-600 bg-purple-50 border-purple-200",
  },
];

const glanceItems = [
  { title: "Consultant Model", text: "Manpower & technology consultant" },
  { title: "Client Footprint", text: "Serving startups, SMEs and enterprises" },
  { title: "Workforce Flexibility", text: "Onsite, hybrid and remote delivery" },
];

const achievements = [
  { label: "Professionals Placed", value: 500, suffix: "+" },
  { label: "Client Engagements", value: 50, suffix: "+" },
  { label: "Industries Served", value: 15, suffix: "+" },
  { label: "Agility Profile Turnaround", value: 99, suffix: "%" },
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
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              A 360° Partner for{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                People and Technology
              </span>
            </h2>
          </div>
          <div data-aos="fade-left">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              We combine recruitment expertise with hands-on engineering so our clients get talent and technology that actually fit together.
            </p>
          </div>
        </div>

        {/* ── Our Story & At A Glance Grid ── */}
        <div className="grid gap-8 lg:grid-cols-12 items-stretch mb-16">
          {/* Main Story (7 cols) */}
          <div
            className="lg:col-span-7 rounded-3xl p-8 sm:p-10 bg-slate-900 text-white shadow-xl relative overflow-hidden flex flex-col justify-between"
            data-aos="fade-right"
          >
            <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <span className="text-amber-400 font-bold text-xs tracking-widest uppercase block mb-2">
                Our Story • Why We Exist
              </span>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-white mb-5 leading-snug">
                Solving the Disconnect Between Hiring & Engineering
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
                Most companies struggle with two linked problems: finding skilled people, and choosing and building the right technology. Treating them separately leads to mismatched hires and under-used systems.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                <strong className="text-amber-400 font-semibold">AIT3CH360</strong> was created to solve both together. Our recruiters understand technology, and our technologists understand teams, so we can staff a project, build it, or do both.
              </p>
            </div>

            {/* At a Glance Badges */}
            <div className="relative z-10 mt-8 pt-6 border-t border-slate-800 grid grid-cols-1 sm:grid-cols-3 gap-3">
              {glanceItems.map((item, idx) => (
                <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80">
                  <div className="text-amber-400 font-semibold text-xs">{item.title}</div>
                  <div className="text-slate-200 text-xs font-medium mt-0.5">{item.text}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Showcase & Visual (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6" data-aos="fade-left">
            <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 flex-1 min-h-[220px] relative group">
              <img
                src={aboutImage}
                alt="AIT3CH360 professional team at work"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent flex flex-col justify-end p-6">
                <span className="text-amber-400 font-semibold text-xs tracking-wider uppercase">
                  Synergy In Action
                </span>
                <p className="text-white text-base font-bold font-display">
                  Where Talent Strategy Meets Engineering Precision
                </p>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden shadow-md border border-slate-200/80 h-44 sm:h-48 relative group">
              <img
                src={aboutImage2}
                alt="AIT3CH360 modern workplace"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-slate-900/30 group-hover:bg-slate-900/10 transition-colors" />
            </div>
          </div>
        </div>

        {/* ── Mission / Vision / Values 3-Card Grid ── */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-8" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-600 block mb-1">
              Mission & Values
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              What Guides Our Work
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
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
                  <h4 className="text-xl font-bold font-display text-slate-900 mb-3 group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Industries / Sectors We Serve ── */}
        <div className="mb-16">
          <div className="text-center max-w-xl mx-auto mb-10" data-aos="fade-up">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
              Industries
            </span>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-slate-900">
              Sectors We Serve
            </h3>
            <p className="text-slate-600 text-sm mt-2">
              Deep vertical expertise across core enterprise domains.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {industries.map((ind, idx) => (
              <div
                key={ind.title}
                className="p-6 rounded-3xl bg-white border border-slate-200/80 hover:border-amber-300 hover:shadow-lg transition-all duration-300 group"
                data-aos="fade-up"
                data-aos-delay={idx * 80}
              >
                <div className={`w-11 h-11 rounded-2xl flex items-center justify-center border mb-4 ${ind.color}`}>
                  <ind.icon className="w-5 h-5" />
                </div>
                <h4 className="font-display font-bold text-slate-900 text-base mb-1.5 group-hover:text-amber-600 transition-colors">
                  {ind.title}
                </h4>
                <p className="text-slate-600 text-xs leading-relaxed">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Interactive Achievements Banner with Animated Counters ── */}
        <div
          className="relative overflow-hidden rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white shadow-2xl"
          data-aos="zoom-in"
        >
          {/* Ambient decorative elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block mb-2">
              Performance by the Numbers
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-display font-bold">
              Trusted by Ambitious Enterprises Across India & Beyond
            </h3>
          </div>

          <div className="relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-800">
            {achievements.map((item, idx) => (
              <div key={idx} className="text-center pt-6 sm:pt-0 sm:px-4">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-amber-400 flex items-center justify-center">
                  <Counter end={item.value} target={item.value} />
                  <span>{item.suffix}</span>
                </div>
                <div className="mt-2 text-xs sm:text-sm font-semibold text-slate-200">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}