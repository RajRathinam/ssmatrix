import { 
  Award, 
  BarChart3, 
  Clock, 
  Database, 
  Eye, 
  PieChart, 
  Shield, 
  Zap,
  Globe2,
  Settings,
  TrendingUp,
  Network,
  UserCheck,
  Smile
} from "lucide-react";
import whyChooseImage from '../../assets/whychooseus.png';

const featuresList = [
  { icon: BarChart3, text: "Pioneering Next-Gen BI Solutions" },
  { icon: Zap, text: "Transformative AI & ML Integrations" },
  { icon: Eye, text: "Real-time Analytics & Decision Making" },
  { icon: PieChart, text: "Advanced Data Visualization Techniques" },
  { icon: Database, text: "Multiple Data Source Integration" },
  { icon: Shield, text: "Cloud-native BI & Advanced Architectures" },
];

export default function BusinessIntelligenceSection() {
  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: "var(--gradient-hero)", backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column - Content */}
          <div className="flex-1" data-aos="fade-right">
     
            <h2 className="mt-6 font-display font-bold text-4xl md:text-5xl lg:text-6xl leading-[1.2] tracking-tight" style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.4rem" }}>
              Leading the future of{' '}
              <span className="bg-gradient-to-r from-brand-purple via-brand-orange to-brand-purple bg-clip-text text-transparent">
                Business Intelligence
              </span>
            </h2>
            
            <p className="mt-5 text-body leading-relaxed max-w-xl" style={{ color: "var(--muted-foreground)" }}>
              Beyond being data specialists, we stand as your strategic allies, committed to providing actionable intelligence, enabling continuous process monitoring and deploying customized strategies to propel your business forward.
            </p>

            <div className="mt-8 grid grid-cols-1 gap-x-5 gap-y-3.5">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2.5 group">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-colors" style={{ backgroundColor: "var(--accent)", color: "var(--primary)" }}>
                    <feature.icon className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-body font-medium" style={{ color: "var(--foreground)" }}>{feature.text}</span>
                </div>
              ))}
            </div>

        
          </div>

          {/* Right Column - Image */}
          <div className="flex-1 w-full" data-aos="fade-left" data-aos-delay="200">
            <div className="relative">
          
              {/* Image Container with styling */}
              <div className="relative">
                <img 
                  src={whyChooseImage}
                  alt="Why Choose SS MATRIX - Recruitment and staffing solutions"
                  className="w-full h-auto object-cover"
                  style={{ borderRadius: "var(--radius)" }}
                />
                
                {/* Optional overlay gradient for better blending */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent pointer-events-none"></div>
              </div>
              
            
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}