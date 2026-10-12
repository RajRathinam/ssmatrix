import { Users, Clock, Award, ShieldCheck, TrendingUp, Sparkles, Building2, Briefcase } from "lucide-react";
import Counter from "./Counter";

const stats = [
  {
    value: 500,
    suffix: "+",
    label: "Professionals Placed",
    description: "High-performing talent placed across software engineering, operations and leadership.",
    icon: Users,
    highlight: false,
  },
  {
    value: 50,
    suffix: "+",
    label: "Client Engagements",
    description: "Startups, SMEs and enterprise organisations relying on our people & technology solutions.",
    icon: Briefcase,
    highlight: false,
  },
  {
    value: 15,
    suffix: "+",
    label: "Industries Served",
    description: "Deep sector experience across IT, software, manufacturing, banking, and healthcare.",
    icon: Building2,
    highlight: true,
  },
  {
    value: 98,
    suffix: "%",
    label: "Agility Profile Turnaround",
    description: "Speed without compromise: vetted, interview-ready profiles delivered with agility and velocity.",
    icon: Clock,
    highlight: false,
  },
];

export default function Stats() {
  return (
    <section id="stats" className="py-20 md:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative ambient glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14" data-aos="fade-up">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-500/30">
              <TrendingUp className="w-3.5 h-3.5 text-amber-400" />
              Measurable Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Driving Results with{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                People & Technology
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm md:text-base max-w-md leading-relaxed">
            Our dual practice ensures you get the right workforce capabilities and modern engineering under one trusted partner.
          </p>
        </div>

        {/* 4 Big Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((item, idx) => (
            <div
              key={idx}
              className={`p-7 rounded-3xl border transition-all duration-300 group flex flex-col justify-between ${
                item.highlight
                  ? "bg-gradient-to-b from-slate-800 to-slate-850 border-amber-500/40 shadow-xl shadow-amber-500/5 ring-1 ring-amber-500/20"
                  : "bg-slate-850/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/60"
              }`}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center ${
                      item.highlight
                        ? "bg-amber-400 text-slate-950 shadow-md"
                        : "bg-slate-800 text-amber-400 group-hover:bg-slate-700"
                    }`}
                  >
                    <item.icon className="w-6 h-6" />
                  </div>
                  {item.highlight && (
                    <span className="text-[10px] font-bold text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded-full border border-amber-500/30 uppercase tracking-widest">
                      Multi-Sector
                    </span>
                  )}
                </div>

                <div className="font-display font-black text-4xl sm:text-5xl text-white tracking-tight flex items-baseline">
                  <Counter end={item.value} target={item.value} />
                  <span className="text-amber-400 ml-1">{item.suffix}</span>
                </div>

                <div className="mt-2 text-base font-bold font-display text-slate-100">
                  {item.label}
                </div>

                <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}