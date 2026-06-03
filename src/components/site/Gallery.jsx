"use client";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar, TrendingUp, DollarSign, BookOpen, ArrowUpRight, ArrowRight } from "lucide-react";

const items = [
  {
    cat: "Recruitment Drives",
    title: "The Ultimate Guide to Budgeting 2024",
    description: "Master the art of budgeting with our comprehensive guide.",
    icon: DollarSign,
    type: "News | Insights",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=80",
  },
  {
    cat: "Corporate Events",
    title: "Top Investment Strategies for Growth",
    description: "Discover the best investment strategies to build wealth.",
    icon: TrendingUp,
    type: "Insights",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&q=80",
  },
  {
    cat: "Training Programs",
    title: "Understanding Cryptocurrency Basics",
    description: "Get a clear understanding of the risks and rewards.",
    icon: BookOpen,
    type: "News | Insights",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=80",
  },
  {
    cat: "Student Placements",
    title: "How to Reduce Your Debt Fast",
    description: "Effective strategies to improve financial health.",
    icon: DollarSign,
    type: "Insights",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=400&q=80",
  },
  {
    cat: "Office Activities",
    title: "The Future of Remote Work",
    description: "What it means for business operations.",
    icon: Calendar,
    type: "Insights",
    image: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=400&q=80",
  },
  {
    cat: "Recruitment Drives",
    title: "AI in Talent Acquisition",
    description: "Revolutionizing the way companies hire top talent.",
    icon: TrendingUp,
    type: "News | Insights",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=80",
  },
];

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  // Handle responsive items per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
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

  // Auto-slide every 2 seconds with infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        // Calculate total slides available
        const maxIndex = Math.max(0, items.length - itemsPerView);
        
        // If at the end, loop back to beginning
        if (prevIndex >= maxIndex) {
          return 0;
        }
        // Otherwise move to next
        return prevIndex + 1;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, [itemsPerView, items.length]);

  const maxIndex = Math.max(0, items.length - itemsPerView);
  const canScrollPrev = currentIndex > 0;
  const canScrollNext = currentIndex < maxIndex;

  const nextSlide = () => {
    if (canScrollNext) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      // Loop to beginning
      setCurrentIndex(0);
    }
  };

  const prevSlide = () => {
    if (canScrollPrev) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      // Loop to end
      setCurrentIndex(maxIndex);
    }
  };

  return (
    <section id="gallery" className="py-16 md:py-20" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="mb-8 flex flex-col justify-between md:flex-row md:items-end">
          <div>
            <h2
              className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl leading-tight"
              style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.4rem" }}
            >
              Latest{" "}
              <span className="text-gradient-brand">insights and trends</span>
            </h2>
            
            <a
              href="#"
              className="group inline-flex items-center gap-1 text-sm font-medium mt-2"
              style={{ color: "var(--primary)" }}
            >
              Book a demo
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Nav Buttons */}
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={nextSlide}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                color: "var(--foreground)",
              }}
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="overflow-hidden px-6">
        <div
          className="flex gap-4 transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
          }}
        >
          {items.map((it, i) => (
            <a
              key={i}
              href="#read-more"
              className="group flex-shrink-0 flex flex-col transition-transform duration-300"
              style={{ width: `calc(${100 / itemsPerView}% - 0.75rem)` }}
            >
              {/* Image - smaller size, no hover scale */}
              <div className="rounded-lg overflow-hidden" style={{ borderRadius: "var(--radius)" }}>
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-auto object-cover"
                  style={{ maxHeight: "230px" }}
                />
              </div>

              {/* Content - compact */}
              <div className="pt-3 flex flex-col flex-1">
                {/* Category + icon row */}
                <div className="flex items-center gap-1.5 mb-1.5">
                  <div
                    className="w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "var(--accent)" }}
                  >
                    <it.icon className="w-2.5 h-2.5" style={{ color: "var(--primary)" }} />
                  </div>
                  <span
                    className="text-[10px] font-semibold tracking-wide uppercase"
                    style={{ color: "var(--primary)" }}
                  >
                    {it.cat}
                  </span>
                </div>

                {/* Title - smaller */}
                <h3
                  className="text-sm font-semibold leading-snug mb-1 line-clamp-2 md:text-base"
                  style={{ fontFamily: "var(--font-display)", color: "var(--foreground)" }}
                >
                  {it.title}
                </h3>

                {/* Description - shorter */}
                <p
                  className="text-xs leading-relaxed line-clamp-2 mb-3"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {it.description}
                </p>

                {/* Read more - smaller */}
                <div className="mt-auto flex items-center text-xs font-medium" style={{ color: "var(--foreground)" }}>
                  Read more
                  <ArrowRight className="ml-1 w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-6">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className="h-1.5 rounded-full transition-all duration-300"
            style={{
              backgroundColor: currentIndex === i ? "var(--primary)" : "var(--border)",
              width: currentIndex === i ? "1.5rem" : "0.5rem",
            }}
          />
        ))}
      </div>
    </section>
  );
}