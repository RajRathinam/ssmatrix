import { Users, Clock, Award, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import Counter from "./Counter";

const stats = [
  {
    value: 99,
    suffix: "%",
    label: "Placement Accuracy",
    description: "Deep technical screening ensures precise candidate-to-role matching.",
    icon: ShieldCheck,
    highlight: false,
  },
  {
    value: 48,
    suffix: "h",
    label: "Average Turnaround",
    description: "Fast delivery of interview-ready profiles to accelerate urgent hiring.",
    icon: Clock,
    highlight: false,
  },
  {
    value: 98,
    suffix: "%",
    label: "Retention Rate",
    description: "Candidates placed remain with organizations beyond the initial probation period.",
    icon: Award,
    highlight: true,
  },
  {
    value: 300,
    suffix: "+",
    label: "Corporate Partners",
    description: "Trusted staffing and technology partner to top Indian enterprises.",
    icon: Users,
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
              Measurable Performance
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white leading-tight">
              Driving Results with{" "}
              <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-amber-200 bg-clip-text text-transparent">
                Data-Driven Precision
              </span>
            </h2>
          </div>
          <p className="text-slate-400 text-sm sm:text-base max-w-md leading-relaxed">
            Eliminating hiring delays, reducing mismatch risks, and equipping enterprises with high-caliber talent that delivers immediate impact.
          </p>
        </div>

        {/* Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            const isHighlight = stat.highlight;

            return (
              <div
                key={idx}
                className={`rounded-3xl p-7 transition-all duration-300 flex flex-col justify-between group relative border ${
                  isHighlight
                    ? "bg-gradient-to-b from-amber-500/20 to-slate-800/80 border-amber-500/50 shadow-lg shadow-amber-500/10 hover:-translate-y-1.5"
                    : "bg-slate-800/60 border-slate-700/80 hover:border-slate-600 hover:bg-slate-800 hover:-translate-y-1.5 shadow-sm"
                }`}
                data-aos="fade-up"
                data-aos-delay={idx * 100}
              >
                <div>
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 shadow-xs ${
                      isHighlight
                        ? "bg-amber-500 text-slate-950 font-bold"
                        : "bg-slate-700/80 text-amber-400"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Value & Suffix */}
                  <div className="text-4xl sm:text-5xl font-black font-display tracking-tight text-white mb-2 flex items-baseline">
                    <Counter end={stat.value} suffix={stat.suffix} duration={2200} />
                  </div>

                  {/* Label */}
                  <div
                    className={`text-base font-bold font-display mb-3 ${
                      isHighlight ? "text-amber-300" : "text-slate-200"
                    }`}
                  >
                    {stat.label}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-700/60 flex items-center justify-between text-[11px] text-slate-400">
                  <span>Verified Metric</span>
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}