import { Users } from "lucide-react";
import recruiter from '@/assets/recruiter.png';

export default function CTA() {
  return (
    <section className="py-16 md:py-10 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#fef9f0] to-[#fff5e6]/10">
      <div className="max-w-6xl mx-auto">
        {/* Main Card Container - Clean, elevated like a modern app card */}
        <div 
          className="relative overflow-hidden bg-white rounded"
          data-aos="zoom-in"
        >
          <div className="flex flex-col lg:flex-row">
            {/* Right Area - Image with modern floating elements - MOVED FIRST for mobile */}
            <div className="relative lg:w-[380px] bg-gradient-to-br from-[#fff8f0] to-[#fff2e5] overflow-hidden order-first lg:order-last">
              {/* Decorative circle */}
              <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-[#f3aa50]/5" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-[#f3aa50]/5" />
              
              {/* Image Container */}
              <div className="relative h-full flex items-end justify-center pt-8 lg:pt-16 pb-6 px-6">
                <img 
                  src={recruiter} 
                  alt="SS MATRIX Recruiter" 
                  className="w-full max-w-[280px] h-auto object-contain drop-shadow-xl mx-auto"
                />
                
                {/* Floating badge */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 lg:bottom-8 lg:translate-x-0 bg-white/95 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    <span className="text-xs font-semibold text-gray-800">Active Now</span>
                    <span className="text-xs text-gray-400">•</span>
                    <span className="text-xs font-medium text-[#f3aa50]">12 openings</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Left Content Area */}
            <div className="flex-1 p-6 md:p-12 lg:p-14">
              {/* Main Heading */}
              <h2 className="mb-2 text-2xl font-bold md:text-3xl lg:text-4xl leading-tight"
                style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.4rem" }}
              >
                Looking For The Right Talent Or Career Opportunity?
              </h2>
              
              {/* Description */}
              <p className="mt-4 text-gray-500 text-base md:text-sm leading-relaxed max-w-md">
                Partner with SS MATRIX and experience professional recruitment and technology solutions designed to accelerate growth.
              </p>
              
              {/* Stats Row */}
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-[#f3aa50]/20 border-2 border-white flex items-center justify-center">
                        <span className="text-xs font-medium text-[#f3aa50]">✓</span>
                      </div>
                    ))}
                  </div>
                  <span className="text-sm text-gray-600">500+ Companies</span>
                </div>
                <div className="w-px h-6 bg-gray-200" />
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-[#f3aa50]/20 flex items-center justify-center">
                    <Users className="w-4 h-4 text-[#f3aa50]" aria-hidden />
                  </div>
                  <span className="text-sm text-gray-600">10K+ Job Seekers</span>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a 
                  href="#contact" 
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 rounded-md bg-[#f3aa50] text-white font-semibold shadow-md hover:bg-[#e89a3a] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                >
                  <span>Contact Us</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
                <a 
                  href="mailto:hr@ssmatrix.in" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 bg-white text-gray-700 font-medium hover:border-[#f3aa50] hover:text-[#f3aa50] transition-all duration-300"
                >
                  Submit Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}