import { useState } from "react";
import {
  Users,
  Briefcase,
  BookOpenCheck,
  Crown,
  Handshake,
  GraduationCap,
  Code2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import statImage from "../../assets/500.png";
import recruitmentImage from "../../assets/recruitment.png";
import placementImage from "../../assets/placement.png";
import itImage from "../../assets/it.png";

const categories = ["All Services", "Recruitment & Staffing", "Technology & IT Solutions"];

const allServices = [
  {
    id: "recruitment",
    category: "Recruitment & Staffing",
    title: "End-to-End Recruitment",
    desc: "Comprehensive talent sourcing, candidate screening, technical evaluation, and seamless onboarding across all industry verticals.",
    icon: Users,
    color: "amber",
    image: recruitmentImage,
    tags: ["Full-Cycle Hiring", "Technical Screening", "Pan-India Sourcing"],
    featured: true,
  },
  {
    id: "executive-search",
    category: "Recruitment & Staffing",
    title: "Executive Search & C-Suite",
    desc: "Discreet and targeted leadership hiring for CXOs, VPs, directors, and strategic business heads with proven track records.",
    icon: Crown,
    color: "purple",
    tags: ["Leadership Hiring", "Confidential Search", "C-Suite Mapping"],
  },
  {
    id: "staffing",
    category: "Recruitment & Staffing",
    title: "Staffing & Contract-to-Hire",
    desc: "Agile contract staffing, temp-to-perm, and rapid workforce ramp-up to support dynamic project demands without overhead.",
    icon: Briefcase,
    color: "amber",
    tags: ["Contract Staffing", "C2H Models", "Rapid Ramp-Up"],
  },
  {
    id: "hr-consulting",
    category: "Recruitment & Staffing",
    title: "Strategic HR Consultancy",
    desc: "Organizational design, HR compliance audits, compensation benchmarking, performance management, and policy formulations.",
    icon: BookOpenCheck,
    color: "purple",
    stats: [
      { num: "12+ Yrs", label: "Domain Expertise" },
      { num: "99%", label: "Statutory Compliance" },
      { num: "250+", label: "Audits Conducted" },
    ],
    tags: ["Policy Formulation", "Payroll Advisory", "Compliance Audits"],
    wide: true,
  },
  {
    id: "campus-placement",
    category: "Recruitment & Staffing",
    title: "Campus Hiring & Placement Drives",
    desc: "Partnering with top engineering and management universities across South India to recruit career-ready fresh talent.",
    icon: Handshake,
    color: "amber",
    image: placementImage,
    tags: ["University Drives", "Fresher Assessments", "Bootcamps"],
    featured: true,
  },
  {
    id: "web-dev",
    category: "Technology & IT Solutions",
    title: "Web & Digital Application Development",
    desc: "Modern, high-performance web applications, responsive corporate portals, and SaaS interfaces built with modern tech stacks.",
    icon: Code2,
    color: "indigo",
    tags: ["React & Next.js", "Full-Stack Dev", "Modern UX/UI", "API Integration"],
  },
  {
    id: "it-consulting",
    category: "Technology & IT Solutions",
    title: "Enterprise IT Services & Cloud",
    desc: "End-to-end digital transformation, cloud migrations, DevOps enablement, and enterprise application maintenance with 24/7 SLA.",
    icon: Cpu,
    color: "purple",
    image: itImage,
    tags: ["Cloud Migration", "24/7 Managed IT", "Cybersecurity", "DevOps"],
    featured: true,
  },
  {
    id: "final-year-projects",
    category: "Technology & IT Solutions",
    title: "Final Year Academic Tech Projects",
    desc: "Hands-on technical mentoring, IEEE research project guidance, and practical software implementation for engineering students.",
    icon: GraduationCap,
    color: "amber",
    tags: ["AI/ML Models", "IoT & Embedded", "Cloud Architectures"],
  },
];

export default function Services() {
  const [selectedCategory, setSelectedCategory] = useState("All Services");

  const filteredServices = allServices.filter((service) => {
    if (selectedCategory === "All Services") return true;
    return service.category === selectedCategory;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-amber-500/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-indigo-500/8 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              What We Do
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Comprehensive Talent &{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                Technology Solutions
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-2xl">
              From high-impact executive recruitment to enterprise-grade web development, SS MATRIX accelerates your organizational growth.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2" data-aos="fade-left">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-slate-900 text-white shadow-md"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-slate-300 hover:bg-slate-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* ── Highlight Banner Card (Placements Showcase) ── */}
        <div
          className="mb-8 rounded-3xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 p-1 shadow-lg overflow-hidden"
          data-aos="fade-up"
        >
          <div className="bg-slate-950 rounded-[22px] p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="hidden sm:block w-24 h-24 rounded-2xl overflow-hidden shrink-0 border border-amber-500/40">
                <img src={statImage} alt="500+ Placements Milestone" className="w-full h-full object-cover" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-semibold border border-amber-500/30">
                  MILESTONE RECORD
                </span>
                <h3 className="text-white text-xl sm:text-2xl font-bold font-display mt-2">
                  5,000+ Verified Candidates Placed Across India
                </h3>
                <p className="text-slate-400 text-xs sm:text-sm mt-1 max-w-xl">
                  Proven hiring speed with an average turnaround of 48 hours for niche tech and leadership roles.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm transition-all duration-200 shrink-0 shadow-md"
            >
              <span>Submit Hiring Mandate</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ── Dynamic Bento Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isWide = service.wide;

            return (
              <div
                key={service.id}
                className={`rounded-3xl bg-white border border-slate-200/90 p-7 shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden ${
                  isWide ? "md:col-span-2 lg:col-span-2" : "col-span-1"
                }`}
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                {/* Decorative image background if present */}
                {service.image && (
                  <div className="absolute top-0 right-0 w-32 sm:w-44 h-auto opacity-15 group-hover:opacity-25 transition-opacity pointer-events-none">
                    <img src={service.image} alt="" className="w-full h-auto object-contain" />
                  </div>
                )}

                <div>
                  {/* Icon & Category Pill */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 border border-amber-200 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-semibold tracking-wider text-slate-500 uppercase px-2.5 py-1 rounded-full bg-slate-100">
                      {service.category}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-xl font-bold font-display text-slate-900 group-hover:text-amber-600 transition-colors mb-2.5">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-5">
                    {service.desc}
                  </p>

                  {/* Optional Stats Row for Wide Card */}
                  {service.stats && (
                    <div className="grid grid-cols-3 gap-3 my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200/60">
                      {service.stats.map((st, i) => (
                        <div key={i} className="text-center">
                          <div className="text-lg sm:text-xl font-bold font-display text-amber-600">
                            {st.num}
                          </div>
                          <div className="text-[11px] text-slate-500 font-medium mt-0.5">
                            {st.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700 transition-colors"
                  >
                    <span>Request Details</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <span className="text-[10px] text-slate-400 font-semibold tracking-wider uppercase">
                    SS MATRIX
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}