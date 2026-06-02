import { Users, Briefcase, BookOpenCheck, Crown, Handshake, GraduationCap, Code2, Cpu, ArrowRight } from "lucide-react";

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
        background: "var(--color-background-tertiary, #f5f5f3)",
        position: "relative",
        overflow: "hidden",
        fontFamily: "inherit",
      }}
    >
      {/* decorative blobs */}
      <div style={{ position: "absolute", width: 320, height: 320, borderRadius: "50%", background: "rgba(83,74,183,0.07)", top: -80, right: -80, pointerEvents: "none" }} />
      <div style={{ position: "absolute", width: 200, height: 200, borderRadius: "50%", background: "rgba(29,158,117,0.06)", bottom: -60, left: 40, pointerEvents: "none" }} />

      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative" }}>
        {/* Header */}
        <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.15em", color: "#534AB7", textTransform: "uppercase", marginBottom: "0.6rem" }}>
          Our Services
        </p>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2.2rem)", fontWeight: 500, lineHeight: 1.3, color: "var(--color-text-primary)", marginBottom: "0.4rem" }}>
          Comprehensive Solutions For{" "}
          <span style={{ color: "#534AB7" }}>Modern Businesses</span>
        </h2>
        <p style={{ fontSize: 14, color: "var(--color-text-secondary)", maxWidth: 460, lineHeight: 1.6 }}>
          End-to-end HR, IT, and digital services tailored for growing organizations.
        </p>

        {/* Bento Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(6, 1fr)", gap: 12, marginTop: "2.5rem" }}>

          {/* Big stat card */}
          <Card span={2} style={{ display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", minHeight: 200, background: "linear-gradient(135deg,#EEEDFE 0%,#fff 100%)" }}>
            <div>
              <span style={{ fontSize: "3.5rem", fontWeight: 500, color: "#534AB7", display: "block", lineHeight: 1 }}>500+</span>
              <div style={{ fontSize: "1.05rem", fontWeight: 500, color: "var(--color-text-primary)", marginTop: "0.5rem" }}>Placements Done</div>
              <p style={{ fontSize: 12, color: "var(--color-text-secondary)", marginTop: "0.3rem" }}>Across India &amp; abroad</p>
            </div>
          </Card>

          {/* Recruitment */}
          <Card span={2}>
            <IconBox color="#EEEDFE" icon={<Users size={20} color="#534AB7" />} />
            <h3 style={h3}>Recruitment Services</h3>
            <p style={body}>End-to-end hiring from sourcing to onboarding.</p>
            <LearnMore />
          </Card>

          {/* Staffing */}
          <Card span={2}>
            <IconBox color="#E1F5EE" icon={<Briefcase size={20} color="#0F6E56" />} />
            <h3 style={h3}>Staffing Solutions</h3>
            <p style={body}>Temporary, permanent and contract staffing at scale.</p>
            <LearnMore />
          </Card>

          {/* Executive Search */}
          <Card span={2}>
            <IconBox color="#FAEEDA" icon={<Crown size={20} color="#854F0B" />} />
            <h3 style={h3}>Executive Search</h3>
            <p style={body}>Leadership hiring for critical C-suite positions.</p>
            <LearnMore />
          </Card>

          {/* HR Consultancy wide with stats */}
          <Card span={4}>
            <IconBox color="#FBEAF0" icon={<BookOpenCheck size={20} color="#993556" />} />
            <h3 style={h3}>HR Consultancy</h3>
            <p style={body}>Strategic HR solutions for organizational growth and compliance.</p>
            <div style={{ display: "flex", gap: 10, marginTop: "1rem" }}>
              {stats.map((s) => (
                <div key={s.l} style={{ flex: 1, background: "rgba(0,0,0,0.04)", borderRadius: 8, padding: "0.6rem", textAlign: "center" }}>
                  <div style={{ fontSize: "1.15rem", fontWeight: 500, color: s.accent ? "#0F6E56" : "#534AB7" }}>{s.n}</div>
                  <div style={{ fontSize: 11, color: "var(--color-text-secondary)", marginTop: 2 }}>{s.l}</div>
                </div>
              ))}
            </div>
            <LearnMore />
          </Card>

          {/* Placement with avatars */}
          <Card span={4}>
            <IconBox color="#EAF3DE" icon={<Handshake size={20} color="#3B6D11" />} />
            <h3 style={h3}>Placement Services</h3>
            <p style={body}>Connecting top talent with the right opportunities.</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: "0.75rem" }}>
              {placed.map((m) => (
                <div key={m.initials} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 32, height: 32, borderRadius: "50%", background: m.green ? "#E1F5EE" : "#EEEDFE", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, fontWeight: 500, color: m.green ? "#0F6E56" : "#534AB7", flexShrink: 0 }}>{m.initials}</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500, color: "var(--color-text-primary)" }}>{m.name}</div>
                    <div style={{ fontSize: 11, color: "var(--color-text-secondary)" }}>{m.role}</div>
                  </div>
                  <span style={{ marginLeft: "auto", fontSize: 11, background: "#EEEDFE", color: "#534AB7", borderRadius: 20, padding: "2px 8px" }}>Placed ✓</span>
                </div>
              ))}
            </div>
          </Card>

          {/* Final Year Projects */}
          <Card span={2}>
            <IconBox color="#E6F1FB" icon={<GraduationCap size={20} color="#185FA5" />} />
            <h3 style={h3}>Final Year Projects</h3>
            <p style={body}>Innovative project solutions for engineering students.</p>
            <LearnMore />
          </Card>

          {/* Web Dev with wave */}
          <Card span={3}>
            <div style={{ display: "flex", gap: 5, marginBottom: 10 }}>
              {[0,1,2].map(i => <span key={i} style={{ width: 8, height: 8, borderRadius: "50%", background: "var(--color-border-secondary,#ccc)", display: "block" }} />)}
            </div>
            <IconBox color="#FCEBEB" icon={<Code2 size={20} color="#A32D2D" />} />
            <h3 style={h3}>Web Design & Development</h3>
            <p style={body}>Modern websites, landing pages, and business applications built to convert.</p>
            <svg viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", height: "auto", marginTop: "1rem", opacity: 0.85 }}>
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30 L300 60 L0 60 Z" fill="#EEEDFE" opacity="0.6" />
              <path d="M0 45 C30 20 60 50 90 30 S150 10 180 35 S240 55 270 25 L300 30" stroke="#534AB7" strokeWidth="2" fill="none" />
            </svg>
            <LearnMore />
          </Card>

          {/* IT Services */}
          <Card span={3}>
            <IconBox color="#E1F5EE" icon={<Cpu size={20} color="#0F6E56" />} />
            <h3 style={h3}>IT Services</h3>
            <p style={body}>Digital transformation, cloud solutions, and technology consulting for modern enterprises.</p>
            <div style={{ display: "flex", gap: 8, marginTop: "0.75rem", flexWrap: "wrap" }}>
              {itTags.map((t, i) => (
                <span key={t} style={{ fontSize: 11, borderRadius: 20, padding: "3px 10px", background: i === 1 ? "#EEEDFE" : "#E1F5EE", color: i === 1 ? "#534AB7" : "#0F6E56", fontWeight: 500 }}>{t}</span>
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
      background: "var(--color-background-primary, #fff)",
      border: "0.5px solid var(--color-border-tertiary, rgba(0,0,0,0.12))",
      borderRadius: 12,
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
    <div style={{ width: 44, height: 44, borderRadius: 10, background: color, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1rem" }}>
      {icon}
    </div>
  );
}

function LearnMore() {
  return (
    <a href="#contact" style={{ display: "inline-flex", alignItems: "center", gap: 4, fontSize: 12, fontWeight: 500, color: "#534AB7", marginTop: "0.75rem", textDecoration: "none" }}>
      Learn more <ArrowRight size={13} />
    </a>
  );
}

const h3 = { fontSize: 15, fontWeight: 500, color: "var(--color-text-primary)", marginBottom: "0.35rem" };
const body = { fontSize: 13, color: "var(--color-text-secondary)", lineHeight: 1.6 };