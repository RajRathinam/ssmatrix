import { useState, useEffect } from "react";
import {
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Sparkles,
  Search,
  PencilRuler,
  Rocket,
  Headphones,
  UserCheck,
  Code,
  ShieldCheck,
} from "lucide-react";
import process1 from "../../assets/process1.png";
import process2 from "../../assets/process2.png";
import process3 from "../../assets/process3.png";
import process4 from "../../assets/process4.png";

const TIMER_SECONDS = 50; // 50 seconds auto-advance timer

const processTracks = {
  general: {
    label: "How We Work",
    badge: "Partnership Framework",
    steps: [
      {
        title: "Discover",
        desc: "We learn your goals, team structure and technical landscape through structured discovery conversations.",
        image: process1,
        deliverables: "Aligned requirements, tech ecosystem mapping & goal definition",
        icon: Search,
      },
      {
        title: "Design",
        desc: "We propose a tailored staffing or technology plan with clear timelines, cost projections and measurable milestones.",
        image: process2,
        deliverables: "Tailored talent roadmap or technical architecture specification",
        icon: PencilRuler,
      },
      {
        title: "Deliver",
        desc: "Vetted talent or engineering teams start delivering quickly with active oversight and fast-track velocity.",
        image: process3,
        deliverables: "Interview-ready shortlists or sprint-based software deployments",
        icon: Rocket,
      },
      {
        title: "Support",
        desc: "Continuous review, optimisation and dedicated account management to ensure long-term satisfaction and performance.",
        image: process4,
        deliverables: "Ongoing retention checks, code maintenance & strategic reviews",
        icon: Headphones,
      },
    ],
  },
  hiring: {
    label: "Our Hiring Process",
    badge: "Workforce Delivery",
    steps: [
      {
        title: "Understand",
        desc: "Role, required skills, budget and timelines clarified up front with your hiring managers and HR teams.",
        image: process1,
        deliverables: "Validated role competency matrix & budget alignment",
        icon: Search,
      },
      {
        title: "Source",
        desc: "Active outreach through our internal database, referral networks and targeted passive-candidate headhunting.",
        image: process2,
        deliverables: "Curated candidate pipeline from pre-screened talent pools",
        icon: UserCheck,
      },
      {
        title: "Screen",
        desc: "Multi-round technical, behavioural, and comprehensive background checks before profiles reach your inbox.",
        image: process3,
        deliverables: "Pre-vetted shortlist with technical scorecards & culture fit notes",
        icon: ShieldCheck,
      },
      {
        title: "Onboard",
        desc: "Smooth offer management, candidate engagement through notice period, and first 90-day retention support.",
        image: process4,
        deliverables: "Completed documentation, offer closure and joined candidate",
        icon: Rocket,
      },
    ],
  },
  tech: {
    label: "Our Technology Approach",
    badge: "Engineering Velocity",
    steps: [
      {
        title: "Assess",
        desc: "Understand your business goals, architectural constraints and current software or cloud systems.",
        image: process1,
        deliverables: "Architecture audit, gap analysis & feasibility report",
        icon: Search,
      },
      {
        title: "Architect",
        desc: "Design a scalable, secure solution, technical roadmap and clear sprint breakdown tailored to your objectives.",
        image: process2,
        deliverables: "System blueprint, technology stack selection & project plan",
        icon: PencilRuler,
      },
      {
        title: "Build",
        desc: "Agile 2-week sprints with regular live demos, code reviews and continuous stakeholder feedback.",
        image: process3,
        deliverables: "Production-ready software, automated CI/CD pipelines & test suites",
        icon: Code,
      },
      {
        title: "Operate",
        desc: "Production launch, 24x7 monitoring, user feedback integration and continuous software improvements.",
        image: process4,
        deliverables: "Monitored infrastructure, SLA compliance & version enhancements",
        icon: Headphones,
      },
    ],
  },
};

export default function Process() {
  const [activeTrack, setActiveTrack] = useState("general");
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Swipe tracking
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const currentTrack = processTracks[activeTrack];
  const steps = currentTrack.steps;

  // Auto-advance timer (50 seconds)
  useEffect(() => {
    if (isPaused) return;

    const intervalMs = 100;
    const stepIncrement = (intervalMs / (TIMER_SECONDS * 1000)) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((curr) => (curr + 1) % steps.length);
          return 0;
        }
        return prev + stepIncrement;
      });
    }, intervalMs);

    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  const goToStep = (index) => {
    setActiveStep(index);
    setProgress(0);
  };

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % steps.length);
    setProgress(0);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + steps.length) % steps.length);
    setProgress(0);
  };

  const handleTrackChange = (key) => {
    setActiveTrack(key);
    setActiveStep(0);
    setProgress(0);
  };

  // Touch Swipe Handlers
  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > minSwipeDistance) {
      handleNext(); // Swiped left -> Go next
    } else if (distance < -minSwipeDistance) {
      handlePrev(); // Swiped right -> Go previous
    }
  };

  return (
    <section id="process" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/3 right-0 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="text-center max-w-2xl mx-auto mb-10" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            How We Work
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            A Simple,{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 bg-clip-text text-transparent">
              Transparent Process
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            From first conversation to ongoing support, you always know what happens next.
          </p>

          {/* Track Switcher */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {[
              { key: "general", label: "Overview: How We Work" },
              { key: "hiring", label: "Workforce: Hiring Process" },
              { key: "tech", label: "Tech: Delivery Approach" },
            ].map((t) => (
              <button
                key={t.key}
                onClick={() => handleTrackChange(t.key)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeTrack === t.key
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200/80 border border-slate-200/60"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {/* ── Step Tracker (Sub-Tabs without numbers) ── */}
        <div className="mb-8 max-w-4xl mx-auto" data-aos="fade-up">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-4">
            {steps.map((st, i) => {
              const isCurrent = activeStep === i;
              const isPast = activeStep > i;
              const StepIcon = st.icon;
              return (
                <button
                  key={st.title}
                  onClick={() => goToStep(i)}
                  className={`p-3 sm:p-4 rounded-2xl text-left border transition-all duration-300 cursor-pointer ${
                    isCurrent
                      ? "bg-amber-50 border-amber-300 shadow-md ring-2 ring-amber-400/20"
                      : isPast
                      ? "bg-white border-slate-300 hover:border-amber-300"
                      : "bg-slate-50 border-slate-200 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div
                      className={`w-7 h-7 sm:w-8 sm:h-8 rounded-xl flex items-center justify-center transition-colors ${
                        isCurrent
                          ? "bg-amber-500 text-white shadow-xs"
                          : isPast
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-slate-200/80 text-slate-500"
                      }`}
                    >
                      <StepIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {isPast && <CheckCircle2 className="w-4 h-4 text-emerald-600" />}
                  </div>
                  <div
                    className={`text-xs sm:text-sm font-bold truncate ${
                      isCurrent ? "text-amber-900" : "text-slate-900"
                    }`}
                  >
                    {st.title}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Active Step Detailed Showcase with Swipe Arrows & 50s Timer ── */}
        <div className="relative max-w-4xl mx-auto mb-12" data-aos="fade-up">

          {/* Floating Left Swipe Arrow */}
          <button
            onClick={handlePrev}
            aria-label="Previous step"
            className="flex absolute -left-3 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg transition-all items-center justify-center cursor-pointer group"
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 group-hover:-translate-x-0.5 transition-transform" />
          </button>

          {/* Floating Right Swipe Arrow */}
          <button
            onClick={handleNext}
            aria-label="Next step"
            className="flex absolute -right-3 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white shadow-md border border-slate-200 text-slate-700 hover:bg-amber-50 hover:border-amber-400 hover:text-amber-600 hover:shadow-lg transition-all items-center justify-center cursor-pointer group"
          >
            <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <div
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className="relative rounded-3xl bg-slate-50 border border-slate-200/90 shadow-sm p-6 sm:p-10 overflow-hidden"
          >
            {/* Top 50s Timer Progress Bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-slate-200/70 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Left Content (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 text-amber-800 text-[11px] font-bold tracking-wider uppercase">
                      {steps[activeStep].title} Phase
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-slate-200 text-slate-700 text-xs font-semibold">
                      {currentTrack.badge}
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
                      <span className="text-xs font-bold text-slate-900 block">What Happens Here:</span>
                      <span className="text-xs text-slate-600">{steps[activeStep].deliverables}</span>
                    </div>
                  </div>
                </div>

                {/* Step Dots Pagination */}
                <div className="mt-4 pt-6 border-t border-slate-200/80 flex items-center justify-center">
                  <div className="flex items-center gap-2">
                    {steps.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goToStep(i)}
                        aria-label={`Go to step ${i + 1}`}
                        className={`transition-all rounded-full cursor-pointer ${
                          activeStep === i
                            ? "w-7 h-2.5 bg-amber-500"
                            : "w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Image Illustration (5 cols) */}
              <div className="lg:col-span-5 flex justify-center items-center p-6 bg-white rounded-2xl border border-slate-200/80 shadow-xs">
                <img
                  src={steps[activeStep].image}
                  alt={steps[activeStep].title}
                  className="w-full max-w-[240px] h-auto object-contain drop-shadow-md transition-all duration-300"
                />
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}