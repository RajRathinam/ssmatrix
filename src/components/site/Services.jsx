import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  Users,
  Briefcase,
  ShieldCheck,
  Code2,
  Cloud,
  BarChart3,
  Bot,
  Lock,
  Compass,
  Building,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Check,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import statImage from "../../assets/500.png";
import recruitmentImage from "../../assets/recruitment.png";
import placementImage from "../../assets/placement.png";
import itImage from "../../assets/it.png";

const categories = ["All Services", "Manpower Solutions", "Technology Consulting"];

const allServices = [
  // ── MANPOWER SOLUTIONS ──
  {
    id: "perm-recruitment",
    category: "Manpower Solutions",
    title: "Permanent Recruitment",
    desc: "Sourcing, screening and closing talent for junior to leadership roles across technical and commercial disciplines.",
    icon: GraduationCap,
    badge: "Core Workforce",
    color: "amber",
    image: recruitmentImage,
    features: [
      "Role definition support",
      "Technical & HR screening",
      "Replacement guarantee",
    ],
    ctaText: "Request Talent",
  },
  {
    id: "contract-staffing",
    category: "Manpower Solutions",
    title: "Contract Staffing",
    desc: "Skilled professionals on our payroll, deployed to your project for the exact duration you need with zero overhead.",
    icon: Briefcase,
    badge: "Agile Scale",
    color: "indigo",
    features: [
      "Agile ramp-up & profile turnaround",
      "Flexible project tenure",
      "Convert-to-hire options",
    ],
    ctaText: "Hire Contractors",
  },
  {
    id: "payroll-compliance",
    category: "Manpower Solutions",
    title: "Payroll & Compliance",
    desc: "Accurate payroll, statutory compliance, and smooth employee onboarding handled for your entire workforce.",
    icon: ShieldCheck,
    badge: "Risk Mitigation",
    color: "emerald",
    features: [
      "PF, ESI, TDS & tax filing support",
      "Smooth onboarding & exit formalities",
      "Transparent monthly reporting",
    ],
    ctaText: "Discuss Compliance",
  },
  {
    id: "it-staffing",
    category: "Manpower Solutions",
    title: "IT Staffing",
    desc: "Developers, QA testers, DevOps, data engineers, and cloud architects matched on real, proven technical ability.",
    icon: Code2,
    badge: "Tech Talent",
    color: "blue",
    image: itImage,
    features: [
      "Full-stack & specialized engineers",
      "Rigorous technical vetting",
      "Immediate-joiner talent pool",
    ],
    ctaText: "Hire Tech Talent",
  },
  {
    id: "non-it-bulk",
    category: "Manpower Solutions",
    title: "Non-IT & Bulk Hiring",
    desc: "Operations, sales, customer support, back-office, and plant staffing delivered at scale with high speed.",
    icon: Building,
    badge: "High Volume",
    color: "purple",
    image: placementImage,
    features: [
      "High-volume talent pipelines",
      "Multi-city sourcing footprint",
      "Quick-turnaround placement drives",
    ],
    ctaText: "Scale Your Team",
  },
  {
    id: "rpo",
    category: "Manpower Solutions",
    title: "Recruitment Process Outsourcing (RPO)",
    desc: "We run your hiring process end to end as an embedded recruitment team directly aligned with your hiring goals.",
    icon: Users,
    badge: "Dedicated Pod",
    color: "amber",
    features: [
      "Full lifecycle talent acquisition",
      "Employer branding & ATS setup",
      "Measurable cost & time reduction",
    ],
    ctaText: "Explore RPO",
  },

  // ── TECHNOLOGY CONSULTING ──
  {
    id: "software-web",
    category: "Technology Consulting",
    title: "Software & Web Development",
    desc: "Custom web applications, portals, mobile apps, and scalable APIs engineered for high performance and maintainability.",
    icon: Code2,
    badge: "Engineering",
    color: "cyan",
    features: [
      "Full-stack web & SaaS platforms",
      "Responsive customer portals & apps",
      "Secure REST & GraphQL APIs",
    ],
    ctaText: "Book Consultation",
  },
  {
    id: "cloud-devops",
    category: "Technology Consulting",
    title: "Cloud & DevOps",
    desc: "Cloud migration, infrastructure automation, modern CI/CD deployment pipelines, and 24x7 monitoring.",
    icon: Cloud,
    badge: "Infrastructure",
    color: "indigo",
    features: [
      "AWS, Azure & Google Cloud migration",
      "Automated CI/CD release pipelines",
      "24x7 reliability & observability",
    ],
    ctaText: "Cloud Assessment",
  },
  {
    id: "data-analytics",
    category: "Technology Consulting",
    title: "Data & Analytics",
    desc: "Data engineering, business intelligence dashboards, and analytics that turn raw telemetry into confident decisions.",
    icon: BarChart3,
    badge: "Intelligence",
    color: "blue",
    features: [
      "Data pipeline & warehouse setup",
      "Executive BI dashboards & KPI tracking",
      "Predictive modeling & insights",
    ],
    ctaText: "Unlock Your Data",
  },
  {
    id: "ai-automation",
    category: "Technology Consulting",
    title: "AI & Automation",
    desc: "Intelligent workflow automation, AI agents, chatbots, and generative tools that eliminate manual friction.",
    icon: Bot,
    badge: "AI Powered",
    color: "purple",
    features: [
      "Custom workflow & RPA bots",
      "Generative AI & LLM integration",
      "Automated customer support tools",
    ],
    ctaText: "Automate Workflows",
  },
  {
    id: "cybersecurity",
    category: "Technology Consulting",
    title: "Cybersecurity & Hardening",
    desc: "Security assessments, vulnerability audits, hardening, and compliance best practices to protect your systems.",
    icon: Lock,
    badge: "Protection",
    color: "emerald",
    features: [
      "Security posture & vulnerability audit",
      "Cloud & server infrastructure hardening",
      "Access governance & compliance guidance",
    ],
    ctaText: "Secure Systems",
  },
  {
    id: "it-strategy",
    category: "Technology Consulting",
    title: "IT Strategy & Digital Transformation",
    desc: "Technology roadmaps, modern architecture reviews, and vendor/tool selection aligned with your business milestones.",
    icon: Compass,
    badge: "Advisory",
    color: "amber",
    features: [
      "Tech stack audit & architecture roadmap",
      "Legacy modernisation blueprints",
      "Vendor & tool selection advisory",
    ],
    ctaText: "Speak With Architect",
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [isPaused, setIsPaused] = useState(false);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const filteredServices =
    selectedCategory === "All Services"
      ? allServices
      : allServices.filter((s) => s.category === selectedCategory);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
      emblaApi.off("reInit", onSelect);
    };
  }, [emblaApi, onSelect]);

  // When category changes, reInit and scroll to beginning
  useEffect(() => {
    if (emblaApi) {
      emblaApi.reInit();
      emblaApi.scrollTo(0);
      setScrollSnaps(emblaApi.scrollSnapList());
    }
  }, [selectedCategory, emblaApi]);

  // Auto-scroll every 5 seconds (pauses on hover)
  useEffect(() => {
    if (!emblaApi || isPaused) return;
    const timer = setInterval(() => {
      if (emblaApi.canScrollNext()) {
        emblaApi.scrollNext();
      } else {
        emblaApi.scrollTo(0);
      }
    }, 5000);
    return () => clearInterval(timer);
  }, [emblaApi, isPaused]);

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-40 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ── Section Header ── */}
        <div className="text-center max-w-3xl mx-auto mb-12" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            What We Do
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Two Practices.{" "}
            <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 bg-clip-text text-transparent">
              One Outcome: Your Growth.
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
            Whether you need to scale your workforce or modernise your technology, our consultants work as an extension of your team.
          </p>

          {/* Quick Dual Practice Highlights */}
          <div className="mt-8 grid sm:grid-cols-2 gap-4 text-left">
            <div
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === "Manpower Solutions" ? "All Services" : "Manpower Solutions"
                )
              }
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedCategory === "Manpower Solutions"
                  ? "bg-amber-50/80 border-amber-400 shadow-sm"
                  : "bg-white border-slate-200/80 hover:border-amber-300"
              }`}
            >
              <div className="flex items-center gap-2.5 text-amber-600 font-bold text-sm mb-1">
                <span className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center">👥</span>
                <span>Manpower Solutions</span>
              </div>
              <p className="text-xs text-slate-600">
                Hire faster. Hire better. Stay compliant. Permanent, contract, IT & bulk workforce solutions.
              </p>
            </div>

            <div
              onClick={() =>
                setSelectedCategory(
                  selectedCategory === "Technology Consulting" ? "All Services" : "Technology Consulting"
                )
              }
              className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                selectedCategory === "Technology Consulting"
                  ? "bg-indigo-50/80 border-indigo-400 shadow-sm"
                  : "bg-white border-slate-200/80 hover:border-indigo-300"
              }`}
            >
              <div className="flex items-center gap-2.5 text-indigo-600 font-bold text-sm mb-1">
                <span className="w-7 h-7 rounded-lg bg-indigo-100 flex items-center justify-center">⚙️</span>
                <span>Technology Consulting</span>
              </div>
              <p className="text-xs text-slate-600">
                Technology that works for your business. Software, cloud, DevOps, data, AI & automation.
              </p>
            </div>
          </div>
        </div>

        {/* ── Category Filter Pills ── */}
        <div
          className="flex justify-center mb-8"
          data-aos="fade-up"
        >
          {/* Filter Pills */}
          <div className="inline-flex p-1.5 rounded-full bg-slate-200/80 border border-slate-300/80 gap-1 flex-wrap justify-center">
            {categories.map((cat) => {
              const count =
                cat === "All Services"
                  ? allServices.length
                  : allServices.filter((s) => s.category === cat).length;
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 sm:px-5 py-2 rounded-full text-xs font-bold transition-all duration-200 cursor-pointer flex items-center gap-2 ${
                    isActive
                      ? "bg-slate-900 text-white shadow-md"
                      : "text-slate-700 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <span>{cat}</span>
                  <span
                    className={`text-[10px] px-1.5 py-0.5 rounded-full font-semibold ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-slate-300/80 text-slate-700"
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Services Carousel ── */}
        <div
          className="relative group/carousel"
          data-aos="fade-up"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Side Floating Nav Arrow: Previous (desktop XL) */}
          <button
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            aria-label="Previous slide"
            className="hidden xl:flex absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Side Floating Nav Arrow: Next (desktop XL) */}
          <button
            onClick={scrollNext}
            disabled={!canScrollNext}
            aria-label="Next slide"
            className="hidden xl:flex absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/95 backdrop-blur border border-slate-200 text-slate-700 hover:text-amber-600 hover:border-amber-400 shadow-lg items-center justify-center transition-all duration-200 disabled:opacity-0 disabled:pointer-events-none cursor-pointer hover:scale-105 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden py-4 -my-4 px-1 -mx-1" ref={emblaRef}>
            <div className="flex -ml-6 items-stretch cursor-grab active:cursor-grabbing select-none">
              {filteredServices.map((service) => {
                const Icon = service.icon;
                return (
                  <div
                    key={service.id}
                    className="pl-6 min-w-0 shrink-0 grow-0 basis-[88%] sm:basis-[80%] md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="rounded-3xl bg-white border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 group relative h-full">
                      <div>
                        {/* Top Header */}
                        <div className="flex items-center justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                            <Icon className="w-6 h-6" />
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 border border-slate-200">
                            {service.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-display font-bold text-slate-900 mb-2.5 group-hover:text-amber-600 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-5">
                          {service.desc}
                        </p>

                        {/* Bullet points */}
                        <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                          {service.features.map((feat, fIdx) => (
                            <div
                              key={fIdx}
                              className="flex items-center gap-2 text-xs text-slate-700 font-medium"
                            >
                              <Check className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                              <span>{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Card CTA Link */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <a
                          href="#contact"
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700 transition-colors"
                        >
                          <span>{service.ctaText}</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                          AIT3CH360
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex items-center justify-center gap-2 mt-8 pt-2">
            {scrollSnaps.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  index === selectedIndex
                    ? "w-8 bg-amber-500 shadow-xs"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* ── Engagement & Delivery Models Showcase ── */}
        <div className="mt-20 grid lg:grid-cols-2 gap-8" data-aos="fade-up">

          {/* Manpower Engagement Models */}
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200/90 shadow-md flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-600 mb-2">
                <span>Workforce Engagement Models</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                Choose How You Want to Hire
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-6">
                Pricing is transparent and agreed in advance. We'll recommend the model that balances cost, speed and risk for your situation.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: "Success-based fee", desc: "Pay only upon successful placement and candidate onboarding" },
                  { title: "Contract billing", desc: "Transparent monthly rate per resource deployed on your project" },
                  { title: "Dedicated team", desc: "Exclusive recruiter pod for continuous ongoing hiring volumes" },
                  { title: "Hybrid model", desc: "Custom mixture tailored to your dynamic staffing lifecycle" },
                ].map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200/60 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-slate-900">{m.title}</div>
                      <div className="text-[11px] text-slate-500 mt-0.5">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              <span>Request Talent Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Technology Delivery Models */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-indigo-400 mb-2">
                <span>Technology Delivery Models</span>
              </div>
              <h3 className="text-2xl font-display font-bold text-white mb-2">
                Flexible Ways to Work with Us
              </h3>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6">
                Because we also provide manpower, you can pair any technology project with the staffing you need to run it afterwards.
              </p>

              <div className="space-y-3 mb-6">
                {[
                  { title: "Fixed-scope projects", desc: "Defined deliverables, milestones and committed timelines" },
                  { title: "Dedicated teams", desc: "Engineers working as an extension of your in-house product team" },
                  { title: "Time & material", desc: "Agile sprints adapted for evolving scopes and fast iterations" },
                  { title: "Managed services", desc: "Ongoing 24x7 monitoring, maintenance and cloud support" },
                ].map((m, idx) => (
                  <div key={idx} className="p-3.5 rounded-2xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold text-white">{m.title}</div>
                      <div className="text-[11px] text-slate-400 mt-0.5">{m.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <a
              href="#contact"
              className="relative z-10 inline-flex items-center justify-center gap-2 w-full py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs sm:text-sm transition-colors shadow-sm"
            >
              <span>Book a Technology Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}