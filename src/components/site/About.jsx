import { Target, Eye, Heart } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    text: "Deliver reliable, efficient and customized recruitment and IT solutions that help businesses grow while creating meaningful career opportunities.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    text: "To be India's most trusted partner for talent acquisition and digital transformation, recognized for excellence and integrity.",
  },
  {
    icon: Heart,
    title: "Our Values",
    text: "Integrity, transparency, commitment and a relentless focus on outcomes for both candidates and client organizations.",
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
    <section id="about" className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">

        {/* ── Section Header ── */}
        <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
          <div>
            <span className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              About Us
            </span>
            <h2 className="mt-3 text-4xl md:text-5xl font-semibold leading-tight">
              Building Careers &{" "}
              <span className="text-primary">Empowering Businesses</span>
            </h2>
          </div>
          <p className="text-muted-foreground leading-relaxed self-end">
            SS MATRIX is a trusted Recruitment, Staffing, HR Consulting and IT
            Services company dedicated to connecting talented professionals with
            leading organizations across India.
          </p>
        </div>

        {/* ── Image + Breakout grid (about-3 style) ── */}
        <div className="grid gap-7 lg:grid-cols-3">
          {/* Main image */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=900&auto=format&fit=crop"
            alt="Team collaboration"
            className="size-full max-h-[520px] rounded-xl object-cover lg:col-span-2"
          />

          {/* Right column */}
          <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
            {/* Breakout card */}
            <div className="flex flex-col justify-between gap-6 rounded-xl bg-muted p-7 md:w-1/2 lg:w-auto">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                <Target className="w-6 h-6" />
              </div>
              <div>
                <p className="mb-2 text-lg font-semibold">
                  Trusted by 300+ companies
                </p>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Providing businesses with effective tools to improve workflows,
                  boost efficiency, and encourage growth across Tamil Nadu and
                  beyond.
                </p>
              </div>
              <a
                href="#contact"
                className="mr-auto inline-flex items-center gap-2 rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                Work with us
              </a>
            </div>

            {/* Secondary image */}
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&auto=format&fit=crop"
              alt="Office environment"
              className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
            />
          </div>
        </div>

        {/* ── Mission / Vision / Values cards ── */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {cards.map((c, i) => (
            <div
              key={i}
              className={`rounded-2xl p-6 bg-card border transition-transform hover:-translate-y-1 duration-200 ${
                i === 0 ? "lg:translate-y-4" : ""
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center text-primary-foreground">
                <c.icon className="w-6 h-6" />
              </div>
              <h3 className="mt-4 font-semibold text-lg">{c.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── Companies strip ── */}
        <div className="py-20">
          <p className="text-center text-muted-foreground text-sm font-medium tracking-wide">
            Valued by clients across India
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {companies.map((c) => (
              <div
                key={c.name}
                className="flex items-center justify-center rounded-lg border bg-card px-5 py-2.5 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
              >
                {c.name}
              </div>
            ))}
          </div>
        </div>

        {/* ── Achievements banner (about-3 style) ── */}
        <div className="relative overflow-hidden rounded-xl bg-muted p-10 md:p-16">
          {/* Grid overlay */}
          <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block" />

          <div className="flex flex-col gap-4 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-semibold">
              Our Achievements in Numbers
            </h2>
            <p className="max-w-screen-sm text-muted-foreground">
              Providing businesses with effective tools to improve workflows,
              boost efficiency, and encourage growth.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
            {achievements.map((item) => (
              <div key={item.label} className="flex flex-col gap-3">
                <p className="text-sm text-muted-foreground">{item.label}</p>
                <span className="text-4xl md:text-5xl font-semibold text-primary">
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