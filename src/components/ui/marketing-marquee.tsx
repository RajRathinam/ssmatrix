// src/components/ui/marketing-marquee.tsx
import { Users, Search, BarChart, Mail, Zap } from "lucide-react";

const marketingServices = [
  { name: "Social Media Marketing", icon: Users, color: "from-pink-500 to-rose-500" },
  { name: "Search Engine Optimization", icon: Search, color: "from-blue-500 to-cyan-500" },
  { name: "Content Marketing", icon: BarChart, color: "from-purple-500 to-indigo-500" },
  { name: "Email Marketing", icon: Mail, color: "from-orange-500 to-red-500" },
  { name: "Marketing Automation", icon: Zap, color: "from-green-500 to-emerald-500" },
];

export function MarketingMarquee() {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-slate-50 via-slate-50/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 pointer-events-none" />
        
        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-slate-50 via-slate-50/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee hover:pause">
          {/* First set of items - removed mx-3 gap */}
          {marketingServices.map((service) => (
            <div
              key={service.name}
              className="inline-flex items-center gap-2 px-4 md:px-6 py-3 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <service.icon className={`w-4 h-4 text-gray-400`} />
              <span className="text-body font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {service.name}
              </span>
            </div>
          ))}
          {/* Duplicate set for seamless loop - removed mx-3 gap */}
          {marketingServices.map((service) => (
            <div
              key={`${service.name}-duplicate`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 cursor-pointer group"
            >
              <service.icon className={`w-4 h-4 text-gray-400`} />
              <span className="text-body font-medium text-gray-700 dark:text-gray-300 whitespace-nowrap">
                {service.name}
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
          animation: marquee 25s linear infinite;
          width: fit-content;
        }
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}