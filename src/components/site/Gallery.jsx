import { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Calendar,
  Clock,
  GraduationCap,
  Users,
  Briefcase,
  Award,
} from "lucide-react";

import gallery1 from "../../assets/gallery_1.png";
import gallery2 from "../../assets/gallery_2.png";
import gallery3 from "../../assets/gallery_3.png";
import gallery4 from "../../assets/gallery_4.png";
import gallery5 from "../../assets/gallery_5.png";
import gallery6 from "../../assets/gallery_6.png";

const articles = [
  {
    category: "Campus Drives",
    title: "Campus Placement Drives: Bridging the Engineering Talent Gap",
    desc: "How structured campus recruitment drives help top universities place 500+ freshers annually in tier-1 IT enterprises.",
    image: gallery1,
    icon: GraduationCap,
    date: "March 2026",
    readTime: "4 min read",
  },
  {
    category: "Leadership Hiring",
    title: "Executive Search: Finding Transformational C-Suite Tech Leaders",
    desc: "Key frameworks for evaluating cultural alignment, technical foresight, and board-level chemistry in executive candidates.",
    image: gallery2,
    icon: Award,
    date: "February 2026",
    readTime: "5 min read",
  },
  {
    category: "IT Staffing",
    title: "The Surge in AI & Cloud Engineering Demand Across South India",
    desc: "Analysis of hiring velocity in Chennai, Bengaluru, and Hyderabad for full-stack, DevOps, and machine learning engineers.",
    image: gallery3,
    icon: Briefcase,
    date: "January 2026",
    readTime: "3 min read",
  },
  {
    category: "HR Advisory",
    title: "Contract-to-Hire: Scaling High-Volume Teams with Low Overhead",
    desc: "Why flexible staffing models are empowering modern enterprises to maintain operational agility without compliance risk.",
    image: gallery4,
    icon: Users,
    date: "December 2025",
    readTime: "4 min read",
  },
  {
    category: "Corporate Events",
    title: "Building Workplace Excellence & 90-Day Retention Milestones",
    desc: "Best practices from SS MATRIX's candidate care program that achieve industry-leading 98% placement retention.",
    image: gallery5,
    icon: Sparkles,
    date: "November 2025",
    readTime: "3 min read",
  },
  {
    category: "Campus Drives",
    title: "Student Project Mentoring & Industry Transition Bootcamps",
    desc: "Preparing final-year computer science students for enterprise software standards through hands-on capstone mentoring.",
    image: gallery6,
    icon: GraduationCap,
    date: "October 2025",
    readTime: "5 min read",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Smooth auto slide with pause on hover
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const max = Math.max(0, articles.length - itemsPerView);
        return prev >= max ? 0 : prev + 1;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [itemsPerView, isPaused]);

  const maxIndex = Math.max(0, articles.length - itemsPerView);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : maxIndex));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev < maxIndex ? prev + 1 : 0));
  };

  return (
    <section
      id="gallery"
      className="py-20 md:py-28 bg-white relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div data-aos="fade-right">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold tracking-wider uppercase mb-3 border border-amber-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Insights & Gallery
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-slate-900 leading-tight">
              Workforce Trends &{" "}
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-amber-600 bg-clip-text text-transparent">
                Campus Highlights
              </span>
            </h2>
            <p className="mt-3 text-slate-600 text-base max-w-xl">
              Stay ahead with our latest analysis on talent market dynamics, campus recruitment drives, and corporate hiring strategies.
            </p>
          </div>

          {/* Nav Controls */}
          <div className="flex items-center gap-3" data-aos="fade-left">
            <button
              onClick={prevSlide}
              aria-label="Previous slide"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-amber-500 hover:bg-amber-50 flex items-center justify-center text-slate-700 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next slide"
              className="w-10 h-10 rounded-full border border-slate-300 hover:border-amber-500 hover:bg-amber-50 flex items-center justify-center text-slate-700 hover:text-amber-600 transition-all cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* ── Carousel Slider ── */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {articles.map((item, idx) => (
              <div
                key={idx}
                className="px-3 shrink-0"
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="rounded-3xl bg-white border border-slate-200/90 overflow-hidden shadow-xs hover:shadow-xl hover:border-amber-300 transition-all duration-300 h-full flex flex-col group">
                  {/* Card Image */}
                  <div className="relative h-48 sm:h-52 overflow-hidden bg-slate-100">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-amber-300 text-[11px] font-semibold flex items-center gap-1.5 border border-slate-800">
                      <item.icon className="w-3 h-3" />
                      <span>{item.category}</span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* Meta dates */}
                      <div className="flex items-center gap-4 text-[11px] text-slate-400 font-medium mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" /> {item.date}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5" /> {item.readTime}
                        </span>
                      </div>

                      <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 group-hover:text-amber-600 transition-colors line-clamp-2 mb-2 leading-snug">
                        {item.title}
                      </h3>

                      <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-3 mb-5">
                        {item.desc}
                      </p>
                    </div>

                    <a
                      href="#contact"
                      className="pt-4 border-t border-slate-100 inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 group-hover:text-amber-700 transition-colors mt-auto"
                    >
                      <span>Read Full Insight</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Dot Indicators ── */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                currentIndex === i
                  ? "w-8 bg-amber-500"
                  : "w-2 bg-slate-200 hover:bg-slate-300"
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}