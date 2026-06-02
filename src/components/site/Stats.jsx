"use client";

const stats = [
  {
    value: 99,
    suffix: "%",
    label: "Data Accuracy",
    description: "Minimize errors, maximize precision",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="3" />
        <line x1="12" y1="2" x2="12" y2="5" />
        <line x1="12" y1="19" x2="12" y2="22" />
        <line x1="2" y1="12" x2="5" y2="12" />
        <line x1="19" y1="12" x2="22" y2="12" />
      </svg>
    ),
    dark: false,
  },
  {
    value: 40,
    suffix: "%",
    label: "Less Manual Work",
    description: "Automate tasks and focus on growth",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <line x1="9" y1="9" x2="15" y2="9" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="15" x2="12" y2="15" />
      </svg>
    ),
    dark: false,
  },
  {
    value: 80,
    suffix: "%",
    label: "Faster Reporting",
    description: "Generate reports instantly with AI",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l18 18" />
        <path d="M3 21l4-4" />
        <path d="M14 10l3-3" />
        <path d="M10 14l-3 3" />
        <path d="M21 3l-4 4" />
      </svg>
    ),
    dark: true,
  },
  {
    value: 2,
    suffix: "x",
    label: "Time Efficiency",
    description: "Boost efficiency by automating work",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    dark: false,
  },
];

const NOTCH = 22;

const notchedClipPath = `polygon(
  0% ${NOTCH}px,
  ${NOTCH}px 0%,
  100% 0%,
  100% calc(100% - ${NOTCH}px),
  calc(100% - ${NOTCH}px) 100%,
  0% 100%
)`;

export default function Stats() {
  return (
    <section
      style={{
        padding: "48px 40px",
        background: "#F0EEF8",
        fontFamily: "'DM Sans', sans-serif",
        minHeight: "100vh",
        boxSizing: "border-box",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "32px",
          fontSize: "11px",
          color: "#9E9BB5",
          letterSpacing: "0.06em",
        }}
      >
        <span>Firmwise</span>
        <span style={{ display: "flex", gap: "80px" }}>
          <span>Time Efficiency</span>
          <span>02</span>
        </span>
      </div>

      {/* Header */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          marginBottom: "40px",
          gap: "24px",
        }}
      >
        <h2
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            fontWeight: "700",
            color: "#1A1730",
            margin: 0,
            lineHeight: 1.2,
            letterSpacing: "-0.02em",
          }}
        >
          Boost Efficiency by<br />Automating Work
        </h2>
        <p
          style={{
            maxWidth: "280px",
            fontSize: "13px",
            color: "#6B6880",
            lineHeight: 1.7,
            margin: 0,
          }}
        >
          Save time by eliminating repetitive tasks, allowing accountants to
          focus on high-value advisory services.
        </p>
      </div>

      {/* Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "16px",
        }}
      >
        {stats.map((stat, idx) => (
          <div
            key={idx}
            style={{
              clipPath: notchedClipPath,
              background: stat.dark ? "#6B3FD4" : "#E8E4FC",
              padding: "28px 24px 24px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              minHeight: "240px",
              boxSizing: "border-box",
              transition: "transform 0.2s ease",
              cursor: "default",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "translateY(-4px)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "translateY(0)")
            }
          >
            {/* Icon */}
            <div
              style={{
                width: "38px",
                height: "38px",
                borderRadius: "10px",
                background: stat.dark
                  ? "rgba(255,255,255,0.2)"
                  : "rgba(255,255,255,0.6)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
                color: stat.dark ? "#fff" : "#6B3FD4",
              }}
            >
              {stat.icon}
            </div>

            {/* Value */}
            <div
              style={{
                fontSize: "56px",
                fontWeight: "800",
                lineHeight: 1,
                marginBottom: "6px",
                color: stat.dark ? "#fff" : "#6B3FD4",
                letterSpacing: "-0.03em",
              }}
            >
              {stat.value}
              <span style={{ fontSize: "32px", fontWeight: "700" }}>
                {stat.suffix}
              </span>
            </div>

            {/* Label */}
            <div
              style={{
                fontSize: "14px",
                fontWeight: "600",
                color: stat.dark ? "#E8DEFF" : "#3C3489",
                marginBottom: "auto",
              }}
            >
              {stat.label}
            </div>

            {/* Description */}
            <div
              style={{
                fontSize: "12px",
                color: stat.dark ? "rgba(255,255,255,0.6)" : "#7F77DD",
                lineHeight: 1.5,
                marginTop: "16px",
              }}
            >
              {stat.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}