import { useState } from "react";
import { CheckCircle2, ChevronRight, Sparkles, ArrowRight } from "lucide-react";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";
import process5 from "../../assets/process5.png";
import process6 from "../../assets/process6.png";
import process7 from "../../assets/process7.png";

const steps = [
  {
    n: "01",
    title: "Requirement Discovery",
    desc: "In-depth discovery of position competencies, team culture, performance benchmarks, and organizational vision. We align closely with hiring managers to define non-negotiables and ideal profiles.",
    image: process1,
    duration: "Day 1 - 2",
    tags: ["Role Competencies", "Culture Fit", "Benchmark Analysis", "Stakeholder Briefing"],
    deliverables: "Validated Job Specification & Ideal Candidate Persona",
  },
  {
    n: "02",
    title: "Workforce & Talent Strategy",
    desc: "Designing tailored recruitment roadmaps based on hiring volume, complexity, and timelines. We forecast resource availability and establish multi-channel pipeline channels.",
    image: process2,
    duration: "Day 2 - 3",
    tags: ["Hiring Roadmaps", "Salary Benchmarking", "Talent Availability Mapping"],
    deliverables: "Comprehensive Sourcing Architecture & Timeline Plan",
  },
  {
    n: "03",
    title: "Multi-Channel Sourcing",
    desc: "Leveraging our proprietary database of 100K+ pre-screened professionals, niche tech communities, professional networks, and targeted headhunting.",
    image: process3,
    duration: "Day 3 - 5",
    tags: ["Proprietary Database", "Active Candidate Network", "Targeted Headhunting"],
    deliverables: "Target Candidate Pool of 50+ Qualified Prospects",
  },
  {
    n: "04",
    title: "Technical & HR Screening",
    desc: "Comprehensive evaluation of technical competency, career stability, communication, and compensation expectations through multi-level internal interviews.",
    image: process4,
    duration: "Day 5 - 7",
    tags: ["Technical Assessments", "Behavioral Interview", "CTC Fitment Check"],
    deliverables: "Vetted Candidate Profiles with Internal Scorecards",
  },
  {
    n: "05",
    title: "Curated Shortlisting",
    desc: "We present a select shortlist of top 3-5 high-fit candidates complete with detailed assessment summaries, resume dossiers, and availability timelines.",
    image: process5,
    duration: "Day 7 - 8",
    tags: ["Top 3-5 Shortlist", "Assessment Dossiers", "Compensation Pre-Alignment"],
    deliverables: "Client Presentation of Top Shortlisted Candidates",
  },
  {
    n: "06",
    title: "Interview Coordination",
    desc: "Flawless end-to-end interview scheduling across time zones, briefing candidates before rounds, and collecting timely feedback to maintain candidate momentum.",
    image: process6,
    duration: "Day 8 - 12",
    tags: ["Interview Logistics", "Candidate Briefing", "Rapid Feedback Loops"],
    deliverables: "Streamlined Interview Rounds & Feedback Consolidation",
  },
  {
    n: "07",
    title: "Offer & Background Verification",
    desc: "Support with offer roll-out, market compensation negotiation, counter-offer mitigation, and rigorous background verification (BGV) checks.",
    image: process7,
    duration: "Day 12 - 14",
    tags: ["Offer Structuring", "Salary Benchmarking", "Document & BGV Verification"],
    deliverables: "Accepted Offer Letter & Verified Credentials",
  },
  {
    n: "08",
    title: "Onboarding & 90-Day Retention",
    desc: "Ensuring smooth candidate joining, documented onboarding support, and continuous touchpoints during the critical first 90 days to guarantee mutual success.",
    image: process1,
    duration: "Post-Offer to Day 90",
    tags: ["Joining Assistance", "First 90-Day Check-ins", "Client-Candidate Alignment"],
    deliverables: "Successful Long-Term Candidate Integration",
  },
];

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Our Proven Methodology
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            The 8-Stage{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Recruitment Lifecycle
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base leading-relaxed">
            A transparent, rigorous, and result-oriented process designed to eliminate hiring friction, ensure cultural fit, and secure top-tier talent.
          </p>
        </div>

        {/* ── Interactive Phase Selector (Pill tabs) ── */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 scrollbar-none" data-aos="fade-up">
          {steps.map((st, i) => (
            <button
              key={st.n}
              onClick={() => setActiveStep(i)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer flex items-center gap-2 border ${
                activeStep === i
                  ? "bg-slate-900 text-white border-slate-900 shadow-md"
                  : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100 hover:text-slate-900"
              }`}
            >
              <span
                className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${
                  activeStep === i ? "bg-amber-400 text-slate-950" : "bg-slate-200 text-slate-700"
                }`}
              >
                {st.n}
              </span>
              <span>{st.title}</span>
            </button>
          ))}
        </div>

        {/* ── Featured Active Phase Showcase Card ── */}
        <div
          className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-slate-50 via-white to-amber-50/30 border border-slate-200 shadow-xl mb-14"
          data-aos="fade-up"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Details (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl font-black font-display text-amber-500">
                    Phase {steps[activeStep].n}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                    {steps[activeStep].duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-display text-slate-900 mb-4">
                  {steps[activeStep].title}
                </h3>

                <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                  {steps[activeStep].desc}
                </p>

                {/* Key Deliverable */}
                <div className="p-3.5 rounded-2xl bg-white border border-amber-200/80 shadow-xs mb-6 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">Core Deliverable:</span>
                    <span className="text-xs text-slate-600">{steps[activeStep].deliverables}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {steps[activeStep].tags.map((tg, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/60"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="mt-8 pt-6 border-t border-slate-200/80 flex items-center justify-between">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700 hover:bg-slate-100 disabled:opacity-30 disabled:pointer-events-none transition-all"
                >
                  Previous Phase
                </button>

                <div className="text-xs font-semibold text-slate-400">
                  Step {activeStep + 1} of {steps.length}
                </div>

                <button
                  disabled={activeStep === steps.length - 1}
                  onClick={() => setActiveStep((prev) => Math.min(steps.length - 1, prev + 1))}
                  className="px-4 py-2 rounded-xl text-xs font-bold bg-slate-900 text-white hover:bg-amber-600 disabled:opacity-30 disabled:pointer-events-none transition-all flex items-center gap-1.5"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right Image Illustration (5 cols) */}
            <div className="lg:col-span-5 flex justify-center items-center p-4 bg-white/70 rounded-2xl border border-slate-200/80">
              <img
                src={steps[activeStep].image}
                alt={steps[activeStep].title}
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-md transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* ── Quick Overview Grid for all 8 stages ── */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {steps.map((st, i) => (
            <button
              key={st.n}
              onClick={() => setActiveStep(i)}
              className={`p-3.5 rounded-2xl text-left border transition-all duration-200 cursor-pointer ${
                activeStep === i
                  ? "bg-amber-50 border-amber-300 shadow-sm"
                  : "bg-slate-50 border-slate-200/80 hover:bg-white hover:border-slate-300"
              }`}
            >
              <div className="text-xs font-black text-amber-600 mb-1">Stage {st.n}</div>
              <div className="text-xs font-bold text-slate-900 line-clamp-1">{st.title}</div>
            </button>
          ))}
        </div>

      </div>
    </section>
  );
}