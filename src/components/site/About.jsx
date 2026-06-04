import { Target, Eye, Heart } from "lucide-react";
import aboutImage from "../../assets/about_1.png"
import aboutImage2 from "../../assets/about_2.png"
import aboutImage3 from "../../assets/about_3.png"

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Deliver reliable, efficient and customized recruitment and IT solutions that help businesses grow while creating meaningful career opportunities.",
    image: null,
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be India's most trusted partner for talent acquisition and digital transformation, recognized for excellence and integrity.",
    image: null,
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Integrity, transparency, commitment and a relentless focus on outcomes for both candidates and client organizations.",
    image: null,
  },
];

const achievements = [
  { label: "Companies Supported", value: "300+" },
  { label: "Projects Finalized", value: "800+" },
  { label: "Happy Customers", value: "99%" },
  { label: "Recognized Awards", value: "10+" },
];

const companies = [
  { name: "Infosys" },
  { name: "TCS" },
  { name: "Wipro" },
  { name: "HCL" },
  { name: "Cognizant" },
  { name: "Tech Mahindra" },
];

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 relative" style={{ backgroundColor: "var(--background)" }}>
      <div className="container mx-auto px-4">

        {/* ── Section Header ── */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase" style={{ color: "var(--primary)" }}>
              About Us
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight" style={{ color: "var(--foreground)" }}>
              Building Careers &{" "}
              <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
              Empowering Businesses
            </span> </h2>
          </div>
          <p className="text-body leading-relaxed self-end" style={{ color: "var(--muted-foreground)" }}>
            SS MATRIX is a trusted Recruitment, Staffing, HR Consulting and IT
            Services company dedicated to connecting talented professionals with
            leading organizations across India.
          </p>
        </div>

        {/* ── Image + Breakout grid (about-3 style) ── */}
        <div className="grid gap-7 lg:grid-cols-3">
          {/* Main image */}
          <img
            src={aboutImage}
            alt="Team collaboration"
            className="size-full max-h-[520px] rounded-xl object-cover lg:col-span-2"
            style={{ borderRadius: "var(--radius)" }}
          />

          {/* Right column */}
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {/* Breakout card */}
            <div className="flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto" style={{ backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
              <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold" style={{ color: "var(--foreground)" }}>
                  Trusted by 300+ companies
                </p>
                <p className="text-body leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                  Providing businesses with effective tools to improve workflows,
                  boost efficiency, and encourage growth across Tamil Nadu and
                  beyond.
                </p>
              </div>
              <a
                href="#contact"
                className="mr-auto inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors"
                style={{
                  border: "1px solid var(--input)",
                  backgroundColor: "var(--background)",
                  color: "var(--foreground)"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "var(--accent-foreground)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--background)";
                  e.currentTarget.style.color = "var(--foreground)";
                }}
              >
                Work with us
              </a>
            </div>

            {/* Secondary image */}
            <img
              src={aboutImage2}
              alt="Office environment"
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
              style={{ borderRadius: "var(--radius)" }}
            />
          </div>
        </div>

        {/* ── Mission / Vision / Values cards ── */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Our Mission Card - Now shows only image */}

          {/* Vision Card */}
          <div
            className="rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-200"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)"
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
              <Eye className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-semibold text-lg" style={{ color: "var(--foreground)" }}>Our Vision</h3>
            <p className="mt-2 text-body leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              To be India's most trusted partner for talent acquisition and digital transformation, recognized for excellence and integrity.
            </p>
          </div>
          <div
            className="rounded-2xl p-0 overflow-hidden transition-transform hover:-translate-y-1 duration-200"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)"
            }}
          >
            <img 
              src={aboutImage3} 
              alt="Our Mission" 
              className="w-full h-full object-contain min-h-[180px] md:min-h-[220px]"
            />
          </div>

          {/* Values Card */}
          <div
            className="rounded-2xl p-6 transition-transform hover:-translate-y-1 duration-200"
            style={{
              backgroundColor: "var(--card)",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)"
            }}
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ backgroundColor: "var(--primary)", color: "var(--primary-foreground)" }}>
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="mt-4 font-semibold text-lg" style={{ color: "var(--foreground)" }}>Our Values</h3>
            <p className="mt-2 text-body leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              Integrity, transparency, commitment and a relentless focus on outcomes for both candidates and client organizations.
            </p>
          </div>
        </div>

    

        {/* ── Achievements banner (about-3 style) ── */}
        <div className="relative overflow-hidden rounded-xl px-5 py-10 mt-10 md:p-16" style={{ backgroundColor: "var(--muted)", borderRadius: "var(--radius)" }}>
          {/* Grid overlay */}
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,oklch(0.45_0_0)_1px,transparent_1px),linear-gradient(to_bottom,oklch(0.45_0_0)_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold" style={{ color: "var(--foreground)" }}>
              Our Achievements in Numbers
            </h2>
            <p className="text-body max-w-screen-sm" style={{ color: "var(--muted-foreground)" }}>
              Providing businesses with effective tools to improve workflows,
              boost efficiency, and encourage growth.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <p className="text-body" style={{ color: "var(--muted-foreground)" }}>{item.label}</p>
                <span className="text-4xl md:text-5xl font-semibold" style={{ color: "var(--primary)" }}>
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}