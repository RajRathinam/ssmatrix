// src/components/ui/marketing-marquee.tsx
import {
  Users,
  Briefcase,
  Code2,
  GraduationCap,
  ShieldCheck,
  Globe,
  Award,
  Zap,
} from "lucide-react";

const matrixCapabilities = [
  { name: "Executive Search & Leadership", icon: Award, color: "text-amber-500 bg-amber-50" },
  { name: "Permanent & Lateral Staffing", icon: Users, color: "text-indigo-500 bg-indigo-50" },
  { name: "Full-Stack IT & Cloud Engineers", icon: Code2, color: "text-blue-500 bg-blue-50" },
  { name: "Campus Drives & Student Placements", icon: GraduationCap, color: "text-purple-500 bg-purple-50" },
  { name: "HR Compliance & Payroll Advisory", icon: ShieldCheck, color: "text-emerald-500 bg-emerald-50" },
  { name: "Contract-to-Hire (C2H) Scalability", icon: Briefcase, color: "text-rose-500 bg-rose-50" },
  { name: "Custom Web & Software Development", icon: Globe, color: "text-cyan-500 bg-cyan-50" },
  { name: "Rapid 48-Hour Talent Delivery", icon: Zap, color: "text-amber-600 bg-amber-100/60" },
];

export function MarketingMarquee() {
  return (
    <div className="w-full overflow-hidden py-6 bg-slate-900 border-y border-slate-800 relative">
      <div className="relative">
        {/* Left & Right gradient fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 md:w-36 z-10 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 md:w-36 z-10 bg-gradient-to-l from-slate-900 via-slate-900/80 to-transparent pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee hover:pause whitespace-nowrap">
          {/* First set */}
          {matrixCapabilities.map((item, idx) => (
            <div
              key={`first-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 mx-2 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-sm hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-300 group cursor-default"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                <item.icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}

          {/* Duplicate set for seamless infinite loop */}
          {matrixCapabilities.map((item, idx) => (
            <div
              key={`second-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-2.5 mx-2 rounded-full bg-slate-800/80 border border-slate-700/80 shadow-sm hover:border-amber-400/50 hover:bg-slate-800 transition-all duration-300 group cursor-default"
            >
              <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 ${item.color}`}>
                <item.icon className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
          width: fit-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}