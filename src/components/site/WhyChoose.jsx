import {
  ShieldCheck,
  Cpu,
  Layers,
  Clock,
  Sparkles,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import whyChooseImage from "../../assets/whychooseus.png";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Pre-Vetted Talent",
    description: "Technical screening, background checks and culture-fit interviews before any profile reaches you.",
    badge: "Quality First",
  },
  {
    icon: Cpu,
    title: "Technology Depth",
    description: "Because we build technology too, we understand roles and skills better than a typical staffing firm.",
    badge: "Engineering Rigor",
  },
  {
    icon: Layers,
    title: "Flexible Engagement",
    description: "Choose permanent, contract, dedicated team or project-based models as your needs change.",
    badge: "Agile Delivery",
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    description: "Average first-profile delivery within 48 hours for fast-track scaling with zero compromise on vetting.",
    badge: "Speed to Hire",
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
              Why AIT3CH360
            </span>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Built for Businesses{" "}
              <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-indigo-600 bg-clip-text text-transparent">
                That Move Fast
              </span>
            </h2>

            <p className="mt-4 text-slate-600 text-base sm:text-lg leading-relaxed">
              We operate as a true 360° people-and-technology partner. When hiring and engineering work in unison, your business moves faster with fewer bottlenecks.
            </p>

            {/* Feature Cards Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {reasons.map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 border border-amber-200/80 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-colors duration-200">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-white px-2 py-0.5 rounded-full border border-slate-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-bold font-display text-slate-900 mb-1.5 group-hover:text-amber-600 transition-colors">
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
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-slate-900 text-white font-semibold text-xs sm:text-sm hover:bg-amber-600 transition-colors shadow-sm"
              >
                <span>Talk to an Expert</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <div className="flex items-center gap-1.5 text-xs text-slate-500">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <span>Response within one business day</span>
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
                  alt="Why Choose AIT3CH360 - Trusted HR and IT Partner"
                  className="w-full h-auto object-cover"
                />

                {/* Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-200/80 shadow-lg">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-slate-900">
                        One Trusted Partner
                      </div>
                      <div className="text-[11px] text-slate-500">
                        Manpower & Technology Synergy
                      </div>
                    </div>
                    <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200">
                      360° Solutions
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