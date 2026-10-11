import React from "react";
import { motion } from "motion/react";
import { Star, Quote, Sparkles, CheckCircle2 } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Head of Talent Acquisition",
    company: "TechCorp India",
    rating: 5,
    text: "AIT3CH360 has consistently delivered exceptional engineering talent for our core product teams. Their pre-screening rigor saved our engineering managers countless interview hours.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    hireType: "Senior Full-Stack & Cloud Leads",
  },
  {
    name: "Priya Sharma",
    role: "HR Director",
    company: "FinEdge Solutions",
    rating: 5,
    text: "From mid-level lateral hiring to confidential leadership search, AIT3CH360 operates as an indispensable extension of our HR department. Exceptional speed and integrity.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
    hireType: "Executive C-Suite & VP Engineering",
  },
  {
    name: "Arun Venkatesh",
    role: "Founder & CEO",
    company: "NovaSoft Technologies",
    rating: 5,
    text: "Their technology consulting and web development team delivered a blazing-fast corporate platform ahead of schedule. An outstanding people and technology partner.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
    hireType: "Web App Dev & DevOps Deployment",
  },
  {
    name: "Meera Iyer",
    role: "VP Human Resources",
    company: "BrightPath Group",
    rating: 5,
    text: "Professional, responsive, and genuinely invested in candidate cultural alignment. AIT3CH360 raised our offer-to-join ratio from 65% to an incredible 92%.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
    hireType: "High-Volume Workforce Staffing",
  },
  {
    name: "Suresh Nair",
    role: "Chief Technology Officer",
    company: "DataVelocity Labs",
    rating: 5,
    text: "The technical specialists placed by AIT3CH360 hit the ground running with virtually zero ramp-up time. Exactly the skill profile, mindset, and experience we needed.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
    hireType: "Data Engineers & AI Architects",
  },
  {
    name: "Deepa Krishnan",
    role: "Head of People Operations",
    company: "FinServ Global",
    rating: 5,
    text: "Remarkably thorough background check and qualification screening. Every single candidate sent to our table was interview-ready, articulate, and verified.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    hireType: "Banking & Compliance Specialists",
  },
  {
    name: "Vikram Joshi",
    role: "Director of Operations",
    company: "CloudOps Infotech",
    rating: 5,
    text: "Agile profile turnarounds, transparent feedback, and a deep appreciation for modern technology architectures. They are our go-to recruitment partner in India.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
    hireType: "DevOps & SRE Specialists",
  },
  {
    name: "Ananya Reddy",
    role: "CHRO",
    company: "MediTech Innovations",
    rating: 5,
    text: "We have evaluated dozens of staffing firms. AIT3CH360 distinguishes themselves through continuous post-offer engagement and impeccable candidate care.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
    hireType: "Healthcare Tech & Project Managers",
  },
  {
    name: "Kiran Bose",
    role: "Head of Engineering",
    company: "Finova Cloud",
    rating: 5,
    text: "From requirement gathering to first 90-day retention checks, their client service is flawless. They truly understand the contemporary Indian IT landscape.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
    hireType: "Microservices & Backend Engineers",
  },
];

const StarRating = ({ rating }) => (
  <div className="flex gap-1 mb-3">
    {Array.from({ length: rating }).map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  <div className="p-7 sm:p-8 rounded-3xl bg-white border border-slate-200/90 shadow-sm hover:shadow-xl hover:border-amber-300 transition-all duration-300 w-full flex flex-col justify-between group">
    <div>
      <div className="flex items-center justify-between mb-4">
        <StarRating rating={item.rating} />
        <Quote className="w-6 h-6 text-amber-200 group-hover:text-amber-400 transition-colors" />
      </div>

      <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-normal">
        &ldquo;{item.text}&rdquo;
      </p>
    </div>

    <div>
      <div className="mb-4">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" /> {item.hireType}
        </span>
      </div>

      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
        <img
          src={item.image}
          alt={item.name}
          className="w-11 h-11 rounded-full object-cover ring-2 ring-amber-400/40 shrink-0"
        />
        <div>
          <h4 className="text-sm font-bold font-display text-slate-900 group-hover:text-amber-600 transition-colors">
            {item.name}
          </h4>
          <p className="text-xs text-slate-500 font-medium">
            {item.role}, <span className="font-semibold text-slate-700">{item.company}</span>
          </p>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsColumn = ({ testimonials, duration = 25, className = "" }) => (
  <div className={`overflow-hidden w-full ${className}`}>
    <motion.div
      animate={{ translateY: "-50%" }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "linear",
        repeatType: "loop",
      }}
      className="flex flex-col gap-6 pb-6 hover:[animation-play-state:paused] w-full"
    >
      {[...Array(2)].map((_, idx) => (
        <React.Fragment key={idx}>
          {testimonials.map((item, i) => (
            <TestimonialCard key={`${idx}-${i}`} item={item} />
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
);

const col1 = testimonials.slice(0, 3);
const col2 = testimonials.slice(3, 6);
const col3 = testimonials.slice(6, 9);

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14" data-aos="fade-up">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            Client Endorsements
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
            Trusted by Leaders{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
              Across Industries
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-base md:text-lg leading-relaxed">
            See why leading enterprises across India and globally depend on AIT3CH360 for mission-critical hiring and technology outcomes.
          </p>
        </div>

        {/* Scrolling columns spanning the full responsive container width */}
        <div className="relative max-h-[760px] overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 w-full">
            <TestimonialsColumn testimonials={col1} duration={26} />
            <TestimonialsColumn testimonials={col2} duration={32} className="hidden md:block" />
            <TestimonialsColumn testimonials={col3} duration={28} className="hidden lg:block" />
          </div>
        </div>

      </div>
    </section>
  );
}