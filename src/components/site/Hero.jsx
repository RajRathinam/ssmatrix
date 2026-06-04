// src/components/site/Hero.tsx
import { ArrowRight, Play, CheckCircle, TrendingUp } from "lucide-react";
import hero1 from "../../assets/hero_1.png";
import hero2 from "../../assets/hero_2.png";
import hero3 from "../../assets/hero_3.png";
import hero4 from "../../assets/hero_4.png";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden"
      style={{
        fontFamily: "var(--font-sans)"
      }}
    >
    

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">

          {/* ── LEFT CONTENT ── */}
          <div className="flex-1 text-center lg:text-left">
            {/* Main Heading */}
            <h1 
              className="mt-6 font-bold text-4xl sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1] tracking-tight" 
              style={{ 
                color: "var(--foreground)",
                fontFamily: "var(--font-display)"
              }}
            >
              Empowering Your
              <br />
              <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
                Success with
              </span>
              <br />
              Digital Expertise
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl mx-auto lg:mx-0 text-body leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Leverage the power of AI, machine learning, and automation to
              achieve superior marketing and return on investment.
            </p>

            {/* Features List */}
            <div className="mt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
              {["AI-Powered Solutions", "Machine Learning", "Automation Tools"].map((f) => (
                <div key={f} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" style={{ color: "var(--brand-orange)" }} />
                  <span className="text-body" style={{ color: "var(--muted-foreground)" }}>{f}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                style={{
                  background: "var(--gradient-brand)",
                  color: "var(--primary)"
                }}
              >
                Explore AI Services <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "var(--card)",
                  color: "var(--card-foreground)",
                  border: "1px solid var(--border)"
                }}
              >
                Learn More
              </a>
              <a
                href="#demo"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300"
                style={{
                  backgroundColor: "var(--secondary)",
                  color: "var(--secondary-foreground)"
                }}
              >
                <Play className="w-4 h-4" /> Watch Demo
              </a>
            </div>

            {/* Trust Badges */}
            <div className="mt-8 pt-6" style={{ borderTop: "1px solid var(--border)" }}>
              <p className="text-xs mb-3" style={{ color: "var(--muted-foreground)" }}>
                TRUSTED BY LEADING COMPANIES
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start items-center opacity-60">
                {["MICROSOFT", "GOOGLE", "AMAZON", "META"].map((b) => (
                  <span key={b} className="text-body font-semibold" style={{ color: "var(--muted-foreground)" }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── RIGHT IMAGE GRID ── */}
          <div className="flex-1 mt-10 lg:mt-0 w-full">
            <div className="relative">

              {/* Floating Card — ROI */}
              <div
                className="absolute -top-5 -left-5 md:-top-8 md:-left-8 z-20 rounded-xl shadow-elegant p-3 md:p-4 backdrop-blur-sm"
                style={{
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-elegant)"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ backgroundColor: "var(--accent)" }}>
                    <TrendingUp className="w-4 h-4" style={{ color: "var(--brand-orange)" }} />
                  </div>
                  <div>
                    <div className="font-bold text-lg" style={{ color: "var(--foreground)" }}>300%</div>
                    <div className="text-body" style={{ color: "var(--muted-foreground)" }}>ROI Increase</div>
                  </div>
                </div>
              </div>

              {/* ── 4-IMAGE GRID: tall left + 3 stacked right ── */}
              <div className="flex gap-3 h-[420px] sm:h-[460px] lg:h-[500px]">

                {/* Left — single tall image */}
                <div
                  className="flex-[1.15] overflow-hidden shadow-elegant"
                  style={{ borderRadius: "40px 16px 40px 16px", boxShadow: "var(--shadow-elegant)" }}
                >
                  <img
                    src={hero1}
                    alt="Team working"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Right — three stacked images */}
                <div className="flex-1 flex flex-col gap-3">
                  <div
                    className="flex-1 overflow-hidden shadow-elegant"
                    style={{ borderRadius: "16px 40px 16px 40px", boxShadow: "var(--shadow-elegant)" }}
                  >
                    <img
                      src={hero2}
                      alt="Team collaboration"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div
                    className="flex-1 overflow-hidden shadow-elegant"
                    style={{ borderRadius: "40px 16px 40px 16px", boxShadow: "var(--shadow-elegant)" }}
                  >
                    <img
                      src={hero3}
                      alt="Digital marketing"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div
                    className="flex-1 overflow-hidden shadow-elegant"
                    style={{ borderRadius: "16px 40px 16px 40px", boxShadow: "var(--shadow-elegant)" }}
                  >
                    <img
                      src={hero4}
                      alt="Digital expertise"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Card — Rating */}
              <div
                className="absolute -bottom-5 -right-5 md:-bottom-8 md:-right-8 z-20 rounded-xl shadow-elegant p-3 md:p-4"
                style={{
                  backgroundColor: "var(--card)",
                  boxShadow: "var(--shadow-elegant)"
                }}
              >
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-3 h-3 fill-current" style={{ color: "var(--brand-orange)" }} viewBox="0 0 24 24">
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-body font-medium" style={{ color: "var(--foreground)" }}>4.9 Rating</div>
                </div>
                <div className="text-body mt-1" style={{ color: "var(--muted-foreground)" }}>500+ Reviews</div>
              </div>

              {/* Floating Card — AI Badge */}
              <div
                className="absolute top-1/2 -right-3 md:-right-6 transform -translate-y-1/2 z-20 rounded-lg shadow-glow p-2 md:p-3"
                style={{
                  background: "var(--gradient-brand)",
                  boxShadow: "var(--shadow-glow)"
                }}
              >
                <div className="text-white text-center">
                  <div className="text-xs md:text-sm font-bold">AI-POWERED</div>
                  <div className="text-[10px] md:text-xs opacity-90">Solutions</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}