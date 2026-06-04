import { Users, Briefcase, BookOpenCheck, Crown, Handshake, GraduationCap, Code2, Cpu, ArrowRight } from "lucide-react";
import statImage from "../../assets/500.png";
import recruitmentImage from "../../assets/recruitment.png";
import placementImage from "../../assets/placement.png";
import itImage from "../../assets/it.png";

const stats = [
  { n: "12+", l: "Years exp." },
  { n: "98%", l: "Client retention", accent: true },
  { n: "50+", l: "Clients" },
];

const placed = [
  { initials: "RK", name: "Ravi Kumar", role: "Software Engineer" },
  { initials: "PS", name: "Priya S.", role: "HR Manager", green: true },
];

const itTags = ["Cloud Migration", "24/7 Support", "ERP Solutions"];

export default function Services() {
  return (
    <section
      id="services"
      style={{
        padding: "3rem 1rem",
        background: "var(--muted)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "inherit",
      }}
      className="sm:py-16 sm:px-6 md:py-20 md:px-8"
    >
      {/* decorative blobs - hidden on mobile */}
      <div className="hidden sm:block" style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "var(--brand-purple)", opacity: 0.07, top: -80, right: -80, pointerEvents: "none" }} />
      <div className="hidden sm:block" style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "var(--brand-orange)", opacity: 0.06, bottom: -60, left: 40, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Our Services
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 5vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.75rem" }}>
          Comprehensive Solutions For{" "}
          <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
            Modern Businesses
          </span>
        </h2>
        <p className="text-body sm:max-w-[460px]" style={{ color: "var(--muted-foreground)", maxWidth: "100%", lineHeight: 1.6 }}>
          End-to-end HR, IT, and digital services tailored for growing organizations.
        </p>

        {/* Bento Grid - Responsive */}
        <div 
          style={{ 
            display: "grid", 
            gap: 12, 
            marginTop: "2rem",
          }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 sm:gap-4 lg:gap-5"
        >

          {/* Big stat card with image */}
          <Card span={2} style={{ padding: 0, overflow: "hidden", minHeight: 180 }} className="col-span-1 sm:col-span-2">
            <img 
              src={statImage} 
              alt="500+ Placements" 
              style={{ 
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                display: "block"
              }} 
            />
          </Card>

          {/* Recruitment */}
          <Card span={2} style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-2">
            <img 
              src={recruitmentImage} 
              alt="Recruitment" 
              style={{ 
                position: "absolute",
                top: 0,
                right: 0,
                width: "100px",
                height: "auto",
                pointerEvents: "none",
                opacity: 0.8
              }}
              className="sm:w-[140px]"
            />
            <IconBox color="var(--accent)" icon={<Users size={20} color="var(--primary)" />} />
            <h3 style={h3}>Recruitment Services</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>End-to-end hiring from sourcing to onboarding.</p>
            <LearnMore />
          </Card>

          {/* Staffing */}
          <Card span={2} style={{ display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-2">
            <IconBox color="var(--accent)" icon={<Briefcase size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>Staffing Solutions</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>Temporary, permanent and contract staffing at scale.</p>
            <LearnMore />
          </Card>

          {/* Executive Search */}
          <Card span={2} style={{ display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-2">
            <IconBox color="var(--accent)" icon={<Crown size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>Executive Search</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>Leadership hiring for critical C-suite positions.</p>
            <LearnMore />
          </Card>

       {/* HR Consultancy wide with stats */}
<Card span={4} style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-4">
  <div className="hidden sm:block" style={{
    position: "absolute",
    top: -50,
    right: -50,
    width: 150,
    height: 150,
    border: "2px solid var(--brand-purple)",
    opacity: 0.06,
    transform: "rotate(45deg)",
    pointerEvents: "none"
  }} />
  <div className="hidden sm:block" style={{
    position: "absolute",
    bottom: -50,
    left: -50,
    width: 150,
    height: 150,
    border: "2px solid var(--brand-orange)",
    opacity: 0.06,
    transform: "rotate(45deg)",
    pointerEvents: "none"
  }} />
  
  <IconBox color="var(--accent)" icon={<BookOpenCheck size={20} style={{ color: "var(--primary)" }} />} />
  <h3 style={h3}>HR Consultancy</h3>
  <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, fontSize: "14px" }}>Strategic HR solutions for organizational growth and compliance.</p>
  
  {/* Stats - flex column on mobile, flex row on desktop */}
  <div className="flex flex-col sm:flex-row gap-2 sm:gap-10 mt-4 mb-3">
    {stats.map((s) => (
      <div key={s.l} style={{ flex: 1, background: "var(--muted)", borderRadius: 8, padding: "0.6rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.1rem", fontWeight: 500, color: s.accent ? "var(--brand-orange)" : "var(--primary)" }} className="sm:text-[1.15rem]">{s.n}</div>
        <div className="text-body sm:text-sm" style={{ color: "var(--muted-foreground)", marginTop: 2, fontSize: "12px" }}>{s.l}</div>
      </div>
    ))}
  </div>
  <LearnMore />
</Card>

          {/* Placement with avatars */}
          <Card span={4} style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-4">
            <img 
              src={placementImage} 
              alt="Placement" 
              style={{ 
                position: "absolute",
                top: 0,
                right: 20,
                width: "180px",
                height: "auto",
                opacity: 0.3,
                pointerEvents: "none"
              }}
              className="sm:right-100 sm:w-[260px] sm:opacity-50"
            />
            <IconBox color="var(--accent)" icon={<Handshake size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>Placement Services</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, fontSize: "14px" }}>Connecting top talent with the right opportunities.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "0.75rem", marginBottom: "0.75rem" }}>
              {placed.map((m) => (
                <div key={m.initials} style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: m.green ? "var(--brand-orange)" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: m.green ? "var(--primary-foreground)" : "var(--primary)", flexShrink: 0 }}>{m.initials}</div>
                  <div style={{ flex: 1 }}>
                    <div className="text-body" style={{ fontWeight: 500, color: "var(--foreground)", fontSize: "13px" }}>{m.name}</div>
                    <div className="text-body" style={{ color: "var(--muted-foreground)", fontSize: "11px" }}>{m.role}</div>
                  </div>
                  <span style={{ fontSize: 10, background: "var(--accent)", color: "var(--primary)", borderRadius: 20, padding: "2px 8px" }}>Placed ✓</span>
                </div>
              ))}
            </div>
            <LearnMore />
          </Card>

          {/* Final Year Projects */}
          <Card span={2} style={{ display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-2">
            <IconBox color="var(--accent)" icon={<GraduationCap size={20} style={{ color: "var(--primary)" }} />} />
            <h3 style={h3}>Final Year Projects</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>Innovative project solutions for engineering students.</p>
            <LearnMore />
          </Card>

          {/* Web Dev with wave */}
          <Card span={3} style={{ display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-3">
            <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--border)", display: "block" }} className="sm:w-2 sm:h-2" />)}
            </div>
            <IconBox color="var(--accent)" icon={<Code2 size={20} style={{ color: "var(--primary)" }} />} />
            <h3 style={h3}>Web Design & Development</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>Modern websites, landing pages, and business applications built to convert.</p>
            <svg viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", marginTop: "0.75rem", marginBottom: "0.75rem", opacity: 0.85 }}>
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30 L300 60 L0 60 Z" fill="var(--accent)" opacity="0.6" />
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30" stroke="var(--primary)" strokeWidth="2" fill="none" />
            </svg>
            <LearnMore />
          </Card>

          {/* IT Services */}
          <Card span={3} style={{ position: "relative", overflow: "hidden", display: "flex", flexDirection: "column" }} className="col-span-1 sm:col-span-3">
            <img 
              src={itImage} 
              alt="IT Services" 
              style={{ 
                position: "absolute",
                bottom: 0,
                right: 0,
                width: "100px",
                height: "auto",
                opacity: 0.3,
                pointerEvents: "none"
              }}
              className="sm:w-[150px] sm:opacity-50"
            />
            <IconBox color="var(--accent)" icon={<Cpu size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>IT Services</h3>
            <p className="text-body" style={{ color: "var(--muted-foreground)", lineHeight: 1.6, flex: 1, fontSize: "14px" }}>Digital transformation, cloud solutions, and technology consulting for modern enterprises.</p>
            <div style={{ display: "flex", gap: 6, marginTop: "0.75rem", marginBottom: "0.75rem", flexWrap: "wrap" }}>
              {itTags.map((t, i) => (
                <span key={t} style={{ fontSize: 10, borderRadius: 20, padding: "2px 8px", background: i === 1 ? "var(--accent)" : "var(--muted)", color: i === 1 ? "var(--primary)" : "var(--brand-orange)", fontWeight: 500 }} className="sm:text-[11px] sm:px-3 sm:py-1">{t}</span>
              ))}
            </div>
            <LearnMore />
          </Card>

        </div>
      </div>
    </section>
  );
}

/* ── helpers ── */

function Card({ children, span, style, className }) {
  return (
    <div style={{
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "1rem",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.2s",
      display: "flex",
      flexDirection: "column",
      ...style,
    }}
    className={`${className} w-full`}>
      {children}
    </div>
  );
}

function IconBox({ color, icon }) {
  return (
    <div style={{ width: 40, height: 40, borderRadius: "var(--radius)", background: color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "0.75rem" }} className="sm:w-11 sm:h-11 sm:mb-4">
      {icon}
    </div>
  );
}

function LearnMore() {
  return (
    <a href="#contact"  style={{ display: "inline-flex", alignItems: "center", gap: 4, fontWeight: 500, color: "var(--primary)", marginTop: "0.5rem", textDecoration: "none", alignSelf: "flex-start", fontSize: "13px" }} className="sm:text-sm sm:mt-3 text-body">
      Learn more <ArrowRight size={12} className="sm:w-[13px] sm:h-[13px]" />
    </a>
  );
}

const h3 = { fontSize: "15px", fontWeight: 500, color: "var(--foreground)", marginBottom: "0.35rem" };