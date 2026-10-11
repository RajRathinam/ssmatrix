import { Users, ArrowRight, Sparkles, MessageSquare, Clock } from "lucide-react";
import recruiter from "@/assets/recruiter.png";

export default function CTA() {
  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Main High-Impact Banner Card */}
        <div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white shadow-2xl border border-slate-800"
          data-aos="zoom-in"
        >
          {/* Ambient Glows */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between">

            {/* Left Content Area */}
            <div className="flex-1 p-8 sm:p-12 lg:p-14 relative z-10">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold tracking-wider uppercase mb-4 border border-amber-500/30">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                Let's Build Together
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white leading-tight mb-4">
                Ready to build your team or your platform?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-xl mb-8">
                Tell us what you need. Whether you need skilled talent or modern software and cloud engineering, our consultants are ready to help.
              </p>

              {/* Stats & Trust Row */}
              <div className="flex flex-wrap items-center gap-6 mb-8 pt-6 border-t border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-bold text-xs">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Prompt Support</div>
                    <div className="text-[11px] text-slate-400">Dedicated consultant guidance</div>
                  </div>
                </div>

                <div className="hidden sm:block w-px h-8 bg-slate-800" />

                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400 font-bold text-xs">
                    <Users className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">500+ Placed</div>
                    <div className="text-[11px] text-slate-400">Across 15+ industries</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3.5">
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-display font-bold text-sm text-slate-950 bg-amber-400 hover:bg-amber-300 shadow-lg shadow-amber-500/20 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Get in Touch</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>

                <a
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-900/60 text-white font-semibold text-sm hover:bg-slate-800 transition-all duration-200"
                >
                  <span>Explore Services</span>
                </a>
              </div>
            </div>

            {/* Right Recruiter Visual Area */}
            <div className="relative lg:w-[420px] flex items-end justify-center pt-8 pb-0 px-6 overflow-hidden">
              <div className="relative">
                <img
                  src={recruiter}
                  alt="AIT3CH360 Senior Recruiter"
                  className="w-full max-w-[320px] h-auto object-contain drop-shadow-2xl relative z-10"
                />

                {/* Floating Status Pill */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 bg-slate-900/95 backdrop-blur-md rounded-2xl px-4 py-2 shadow-xl border border-slate-700/80 whitespace-nowrap">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold text-white">Active Mandates</span>
                    <span className="text-xs text-slate-500">•</span>
                    <span className="text-xs font-semibold text-amber-400">Fast Turnaround</span>
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