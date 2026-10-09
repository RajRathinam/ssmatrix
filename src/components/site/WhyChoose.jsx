import {
  Clock,
  ShieldCheck,
  TrendingUp,
  Globe2,
  FileCheck2,
  Code2,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import whyChooseImage from "../../assets/whychooseus.png";

const reasons = [
  {
    icon: Clock,
    title: "48-Hour Candidate Shortlist",
    description: "Rapid delivery of interview-ready profiles through our active database of 100K+ pre-screened professionals.",
  },
  {
    icon: ShieldCheck,
    title: "Top 3% Rigorous Vetting",
    description: "Multi-layered technical assessments, behavioral interviews, and background verification before candidate presentation.",
  },
  {
    icon: TrendingUp,
    title: "98% Placement Retention",
    description: "We focus on long-term cultural alignment, resulting in industry-leading retention rates and low attrition.",
  },
  {
    icon: Globe2,
    title: "Pan-India Sourcing Network",
    description: "Extensive talent reach spanning Chennai, Bengaluru, Hyderabad, Pune, Mumbai, Delhi-NCR, and tier-2 tech hubs.",
  },
  {
    icon: FileCheck2,
    title: "Full Statutory HR Compliance",
    description: "End-to-end management of labour compliance, payroll processes, ESIC, PF, and contractual documentation.",
  },
  {
    icon: Code2,
    title: "Dual Talent & Technology Prowess",
    description: "Unique ability to provide both engineering talent and turnkey custom web & software development services.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background glows */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column - Content */}
          <div className="flex-1" data-aos="fade-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              The SS MATRIX Advantage
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Why Leading Enterprises{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                Choose SS MATRIX
              </span>
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              We operate not merely as external recruiters, but as strategic workforce partners invested in your organizational milestones. Here is why over 300 companies rely on us:
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center mb-3 group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-sm font-bold font-display text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Call to action pill */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-semibold text-xs hover:bg-amber-600 transition-colors shadow-sm"
              >
                <span>Schedule a Talent Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Zero upfront discovery fees</span>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Showcase */}
          <div className="flex-1 w-full" data-aos="fade-left">
            <div className="relative max-w-lg mx-auto">

              {/* Ambient Glow */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-amber-400/20 via-purple-500/20 to-transparent rounded-3xl blur-2xl -z-10" />

              {/* Image Container with rounded styling */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-white">
                <img
                  src={whyChooseImage}
                  alt="Why Choose SS MATRIX - Trusted HR and IT Partner"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        12+ Years Dedicated Service
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Chennai Headquarters • Pan-India Execution
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">
                      VERIFIED
                    </span>
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