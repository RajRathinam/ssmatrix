import process1 from '../../assets/process1.png';
import process2 from '../../assets/process2.png';
import process3 from '../../assets/process3.png';
import process4 from '../../assets/process4.png';
import process5 from '../../assets/process5.png';
import process6 from '../../assets/process6.png';
import process7 from '../../assets/process7.png';
import process8 from '../../assets/process1.png';

const steps = [
  { 
    n: "01", 
    title: "Understand Requirements", 
    text: "Deep discovery of role, culture and business goals. We conduct comprehensive stakeholder interviews to understand your team dynamics, technical requirements, and long-term organizational objectives, ensuring perfect alignment from the start.", 
    image: process1, 
    tags: ["Role Discovery", "Culture Fit", "Business Goals", "Stakeholder Interviews"] 
  },
  { 
    n: "02", 
    title: "Workforce Planning", 
    text: "Strategy aligned to hiring volume and timelines. We analyze your hiring needs, forecast resource requirements, and create a strategic roadmap that balances immediate fills with long-term talent pipeline development.", 
    image: process2, 
    tags: ["Hiring Volume", "Timeline Strategy", "Resource Planning", "Talent Pipeline"] 
  },
  { 
    n: "03", 
    title: "Candidate Sourcing", 
    text: "Multi-channel sourcing from our talent network. We leverage job portals, social media platforms, employee referrals, and our extensive database of 100k+ pre-screened candidates to find the perfect match for your requirements.", 
    image: process3, 
    tags: ["Job Portals", "Social Media", "Referrals", "Talent Database"] 
  },
  { 
    n: "04", 
    title: "Profile Screening", 
    text: "Rigorous evaluation of skill and intent fit. Our team conducts thorough resume screening, skills assessments, and preliminary interviews to ensure only the most qualified and motivated candidates move forward in the process.", 
    image: process4, 
    tags: ["Resume Screening", "Skills Assessment", "Preliminary Interview"] 
  },
  { 
    n: "05", 
    title: "Shortlisting", 
    text: "Curated candidate pool with detailed insights. We present you with a carefully selected shortlist of top candidates along with comprehensive profiles, assessment scores, interview notes, and cultural fit analysis for informed decision-making.", 
    image: process5, 
    tags: ["Curated Shortlist", "Detailed Profiles", "Assessment Scores", "Cultural Fit"] 
  },
  { 
    n: "06", 
    title: "Interview Coordination", 
    text: "Seamless scheduling and feedback loops. We handle all interview logistics, coordinate between candidates and your hiring team across time zones, and ensure timely feedback collection and clear communication throughout.", 
    image: process6, 
    tags: ["Scheduling", "Logistics", "Feedback Collection", "Communication"] 
  },
  { 
    n: "07", 
    title: "Selection Process", 
    text: "Offer negotiation and decision support. We assist with offer creation, salary benchmarking, negotiation strategies, background verification, and provide decision support to help you secure the best talent for your team.", 
    image: process7, 
    tags: ["Offer Negotiation", "Decision Support", "Selection", "Background Check"] 
  },
  { 
    n: "08", 
    title: "Successful Placement", 
    text: "Smooth onboarding and post-join follow-up. We ensure a seamless transition with documented onboarding support, regular check-ins during the first 90 days, and ongoing relationship management to guarantee long-term success.", 
    image: process8, 
    tags: ["Onboarding", "Post-Join Follow-up", "Placement Support", "Relationship Management"] 
  },
];

export default function Process() {
  return (
    <section id="process" className="py-20 md:py-28" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold"  style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.4rem" }}>
            Our Recruitment  <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="mt-4 text-base leading-relaxed max-w-4xl" style={{ color: "var(--muted-foreground)" }}>
            A streamlined, proven approach to finding the right talent for your organization. Our 8-step methodology ensures quality, transparency, and successful outcomes.
          </p>
        </div>

        {/* Timeline Steps - Alternating layout */}
        <div className="relative">
          <div className="space-y-0">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx % 2 === 0 ? (
                  // Even indices - Image on right, content on left
                  <div className="lg:grid lg:grid-cols-2 items-stretch">
                    <div className="text-right lg:pr-6 flex items-center" data-aos="fade-right">
                      <div className="inline-block w-full max-w-lg">
                        <div className="text-5xl font-black" style={{ color: "var(--primary)", opacity: 0.1 }}>Phase {step.n}</div>
                        <div className="w-12 h-0.5 my-1 ml-auto" style={{ backgroundColor: "var(--primary)" }}></div>
                        <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-justify line-clamp-3" style={{ color: "var(--muted-foreground)" }}>{step.text}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5 justify-end">
                          {step.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-xs font-medium px-2 py-1 rounded-full" style={{ color: "var(--primary)", backgroundColor: "var(--accent)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="hidden lg:flex justify-start pl-6 items-stretch">
                      <div className="w-full flex items-center">
                        <img 
                          src={step.image} 
                          alt={`Phase ${step.n}: ${step.title}`}
                          className="w-[300px] h-auto object-contain"
                        />
                      </div>
                    </div>
                  </div>
                ) : (
                  // Odd indices - Image on left, content on right
                  <div className="lg:grid lg:grid-cols-2 items-stretch">
                    <div className="hidden lg:flex justify-end pr-6 items-stretch">
                      <div className="w-full flex items-center">
                        <img 
                          src={step.image} 
                          alt={`Phase ${step.n}: ${step.title}`}
                          className="w-[300px] h-auto object-contain ml-auto"
                        />
                      </div>
                    </div>
                    <div className="lg:pl-6 flex items-center" data-aos="fade-left">
                      <div className="w-full max-w-lg">
                        <div className="text-5xl font-black" style={{ color: "var(--primary)", opacity: 0.1 }}>Phase {step.n}</div>
                        <div className="w-12 h-0.5 my-1" style={{ backgroundColor: "var(--primary)" }}></div>
                        <h3 className="text-lg font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                        <p className="mt-1 text-sm leading-relaxed text-justify line-clamp-3" style={{ color: "var(--muted-foreground)" }}>{step.text}</p>
                        <div className="mt-2 flex flex-wrap gap-1.5">
                          {step.tags.map((tag, tagIdx) => (
                            <span key={tagIdx} className="text-xs font-medium px-2 py-1 rounded-full" style={{ color: "var(--primary)", backgroundColor: "var(--accent)" }}>
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Mobile view */}
                <div className="lg:hidden mt-2 p-3 rounded-2xl shadow-elegant" style={{ backgroundColor: "var(--card)", border: "1px solid var(--border)" }}>
                  <div className="flex flex-col items-center text-center">
                    <div className="text-3xl font-black" style={{ color: "var(--primary)", opacity: 0.2 }}>Phase {step.n}</div>
                    <img 
                      src={step.image} 
                      alt={`Phase ${step.n}: ${step.title}`}
                      className="w-24 h-24 object-contain my-1"
                    />
                    <h3 className="text-base font-bold" style={{ color: "var(--foreground)" }}>{step.title}</h3>
                    <p className="mt-1 text-xs text-justify line-clamp-2" style={{ color: "var(--muted-foreground)" }}>{step.text}</p>
                    <div className="mt-1 flex flex-wrap gap-1 justify-center">
                      {step.tags.slice(0, 3).map((tag, tagIdx) => (
                        <span key={tagIdx} className="text-xs font-medium px-2 py-0.5 rounded-full" style={{ color: "var(--primary)", backgroundColor: "var(--accent)" }}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}