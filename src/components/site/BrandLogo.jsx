import React from "react";

export default function BrandLogo({ className = "h-9", isDark = false, showTagline = true }) {
  return (
    <div className={`inline-flex items-center gap-2.5 select-none ${className}`}>
      {/* High-tech Geometric 360 AI Emblem */}
      <div className="relative w-9 h-9 sm:w-10 sm:h-10 shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md transition-transform duration-300 group-hover:scale-105"
        >
          <defs>
            <linearGradient id="orbitGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f59e0b" />
              <stop offset="50%" stopColor="#ea580c" />
              <stop offset="100%" stopColor="#d97706" />
            </linearGradient>
            <linearGradient id="orbitGrad2" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
            <linearGradient id="coreGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#fbbf24" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>

          {/* Outer Rounded Squircle Base */}
          <rect
            x="2"
            y="2"
            width="40"
            height="40"
            rx="11"
            fill={isDark ? "#0f172a" : "#ffffff"}
            stroke={isDark ? "#334155" : "#e2e8f0"}
            strokeWidth="1.5"
          />

          {/* Dynamic 360 Orbital Ring 1 */}
          <path
            d="M8 22C8 14.268 14.268 8 22 8C27.5 8 32.2 11.2 34.5 15.8"
            stroke="url(#orbitGrad1)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Dynamic 360 Orbital Ring 2 */}
          <path
            d="M36 22C36 29.732 29.732 36 22 36C16.5 36 11.8 32.8 9.5 28.2"
            stroke="url(#orbitGrad2)"
            strokeWidth="3.2"
            strokeLinecap="round"
          />

          {/* Core Central Node */}
          <circle cx="22" cy="22" r="5" fill="url(#coreGrad)" />
          <circle cx="22" cy="22" r="2" fill="#ffffff" />

          {/* Orbit Satellites */}
          <circle cx="34.5" cy="15.8" r="2" fill="#ea580c" />
          <circle cx="9.5" cy="28.2" r="2" fill="#6366f1" />
        </svg>
      </div>

      {/* Typography Lockup */}
      <div className="flex flex-col justify-center leading-none">
        <div className="flex items-center tracking-tight font-display text-lg sm:text-xl font-black">
          <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 bg-clip-text text-transparent">
            AI
          </span>
          <span className={isDark ? "text-white" : "text-slate-900"}>
            T3CH
          </span>
          <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 bg-clip-text text-transparent">
            360
          </span>
        </div>
        {showTagline && (
          <div className="flex flex-col items-start leading-tight mt-0.5">
            <span
              className={`text-[7.5px] sm:text-[8px] font-bold tracking-[0.14em] uppercase text-left ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Manpower & Technology
            </span>
            <span
              className={`text-[7px] sm:text-[7.5px] font-bold tracking-[0.18em] uppercase text-left ${
                isDark ? "text-amber-400" : "text-amber-600"
              }`}
            >
              Consultancy
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
