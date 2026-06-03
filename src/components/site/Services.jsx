import { Users, Briefcase, BookOpenCheck, Crown, Handshake, GraduationCap, Code2, Cpu, ArrowRight } from "lucide-react";
import statImage from "../../assets/500.png"; // Adjust the path based on your actual folder structure
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
        padding: "4rem 1.5rem",
        background: "var(--muted)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "inherit",
      }}
    >
      {/* decorative blobs */}
      <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "var(--brand-purple)", opacity: 0.07, top: -80, right: -80, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "var(--brand-orange)", opacity: 0.06, bottom: -60, left: 40, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", color: "var(--primary)", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Our Services
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--foreground)", marginBottom: "0.4rem" }}>
          Comprehensive Solutions For{" "}
          <span className="bg-gradient-to-r from-brand-purple to-brand-orange bg-clip-text text-transparent">
              Modern Businesses
            </span>
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted-foreground)", maxWidth: 460, lineHeight: 1.6 }}>
          End-to-end HR, IT, and digital services tailored for growing organizations.
        </p>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginTop: "2.5rem" }}>

          {/* Big stat card with image - full width/height */}
<Card span={2} style={{ padding: 0, overflow: "hidden", minHeight: 200 }}>
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
<Card span={2} style={{ position: "relative", overflow: "hidden" }}>
  <img 
    src={recruitmentImage} 
    alt="Recruitment" 
    style={{ 
      position: "absolute",
      top: 0,
      right: 0,
      width: "140px",
      height: "auto",
      pointerEvents: "none"
    }} 
  />
  <IconBox color="var(--accent)" icon={<Users size={20} color="var(--primary)" />} />
  <h3 style={h3}>Recruitment Services</h3>
  <p style={body}>End-to-end hiring from sourcing to onboarding.</p>
  <LearnMore />
</Card>

          {/* Staffing */}
          <Card span={2}>
            <IconBox color="var(--accent)" icon={<Briefcase size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>Staffing Solutions</h3>
            <p style={body}>Temporary, permanent and contract staffing at scale.</p>
            <LearnMore />
          </Card>

          {/* Executive Search */}
          <Card span={2}>
            <IconBox color="var(--accent)" icon={<Crown size={20} style={{ color: "var(--brand-orange)" }} />} />
            <h3 style={h3}>Executive Search</h3>
            <p style={body}>Leadership hiring for critical C-suite positions.</p>
            <LearnMore />
          </Card>

      {/* HR Consultancy wide with stats */}
<Card span={4} style={{ position: "relative", overflow: "hidden" }}>
  {/* Simple decorative strips */}
  <div style={{
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
  <div style={{
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
  <p style={body}>Strategic HR solutions for organizational growth and compliance.</p>
  <div style={{ display: "flex", gap: 10, marginTop: "1rem" }}>
    {stats.map((s) => (
      <div key={s.l} style={{ flex: 1, background: "var(--muted)", borderRadius: 8, padding: "0.6rem", textAlign: "center", position: "relative", zIndex: 1 }}>
        <div style={{ fontSize: "1.15rem", fontWeight: 500, color: s.accent ? "var(--brand-orange)" : "var(--primary)" }}>{s.n}</div>
        <div style={{ fontSize: 11, color: "var(--muted-foreground)", marginTop: 2 }}>{s.l}</div>
      </div>
    ))}
  </div>
  <LearnMore />
</Card>
{/* Placement with avatars */}
<Card span={4} style={{ position: "relative", overflow: "hidden" }}>
  <img 
    src={placementImage} 
    alt="Placement" 
    style={{ 
      position: "absolute",
      top: 0,
      right: 100,
      width: "260px",
      height: "auto",
      opacity: 0.5,
      pointerEvents: "none"
    }} 
  />
  <IconBox color="var(--accent)" icon={<Handshake size={20} style={{ color: "var(--brand-orange)" }} />} />
  <h3 style={h3}>Placement Services</h3>
  <p style={body}>Connecting top talent with the right opportunities.</p>
  <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "0.75rem" }}>
    {placed.map((m) => (
      <div key={m.initials} style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <div style={{ width: 32, height: 32, borderRadius: "50%", background: m.green ? "var(--brand-orange)" : "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: m.green ? "var(--primary-foreground)" : "var(--primary)", flexShrink: 0 }}>{m.initials}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 500, color: "var(--foreground)" }}>{m.name}</div>
          <div style={{ fontSize: 11, color: "var(--muted-foreground)" }}>{m.role}</div>
        </div>
        <span style={{ marginLeft: "auto", fontSize: 11, background: "var(--accent)", color: "var(--primary)", borderRadius: 20, padding: "2px 8px" }}>Placed ✓</span>
      </div>
    ))}
  </div>
</Card>

          {/* Final Year Projects */}
          <Card span={2}>
            <IconBox color="var(--accent)" icon={<GraduationCap size={20} style={{ color: "var(--primary)" }} />} />
            <h3 style={h3}>Final Year Projects</h3>
            <p style={body}>Innovative project solutions for engineering students.</p>
            <LearnMore />
          </Card>

          {/* Web Dev with wave */}
          <Card span={3}>
            <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--border)", display: "block" }} />)}
            </div>
            <IconBox color="var(--accent)" icon={<Code2 size={20} style={{ color: "var(--primary)" }} />} />
            <h3 style={h3}>Web Design & Development</h3>
            <p style={body}>Modern websites, landing pages, and business applications built to convert.</p>
            <svg viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", marginTop: "1rem", opacity: 0.85 }}>
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30 L300 60 L0 60 Z" fill="var(--accent)" opacity="0.6" />
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30" stroke="var(--primary)" strokeWidth="2" fill="none" />
            </svg>
            <LearnMore />
          </Card>
{/* IT Services */}
<Card span={3} style={{ position: "relative", overflow: "hidden" }}>
  <img 
    src={itImage} 
    alt="IT Services" 
    style={{ 
      position: "absolute",
      bottom: 0,
      right: 0,
      width: "150px",
      height: "auto",
      opacity: 0.5,
      pointerEvents: "none"
    }} 
  />
  <IconBox color="var(--accent)" icon={<Cpu size={20} style={{ color: "var(--brand-orange)" }} />} />
  <h3 style={h3}>IT Services</h3>
  <p style={body}>Digital transformation, cloud solutions, and technology consulting for modern enterprises.</p>
  <div style={{ display: "flex", gap: 8, marginTop: "0.75rem", flexWrap: "wrap" }}>
    {itTags.map((t, i) => (
      <span key={t} style={{ fontSize: 11, borderRadius: 20, padding: "3px 10px", background: i === 1 ? "var(--accent)" : "var(--muted)", color: i === 1 ? "var(--primary)" : "var(--brand-orange)", fontWeight: 500 }}>{t}</span>
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

function Card({ children, span, style }) {
  return (
    <div style={{
      gridColumn: `span ${span}`,
      background: "var(--card)",
      border: "1px solid var(--border)",
      borderRadius: "var(--radius)",
      padding: "1.25rem",
      position: "relative",
      overflow: "hidden",
      transition: "border-color 0.2s",
      ...style,
    }}>
      {children}
    </div>
  );
}

function IconBox({ color, icon }) {
  return (
    <div style={{ width: 44, height: 44, borderRadius: "var(--radius)", background: color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
      {icon}
    </div>
  );
}

function LearnMore() {
  return (
    <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 500, color: "var(--primary)", marginTop: "0.75rem", textDecoration: "none" }}>
      Learn more <ArrowRight size={13} />
    </a>
  );
}

const h3 = { fontSize: 15, fontWeight: 500, color: "var(--foreground)", marginBottom: "0.35rem" };
const body = { fontSize: 13, color: "var(--muted-foreground)", lineHeight: 1.6 };