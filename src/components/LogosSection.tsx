import { Reveal } from "./Reveal";
import { T } from "../data/theme";

type PartnerLogo = {
  name: string;
  category: string;
  svg: (color: string) => JSX.Element;
};

const PARTNERS: PartnerLogo[] = [
  {
    name: "Google",
    category: "Cloud & Research",
    svg: (c) => (
      <svg viewBox="0 0 100 32" height="24" fill="none" stroke="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fill="currentColor"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="22"
          letterSpacing="-0.03em"
        >
          Google
        </text>
      </svg>
    ),
  },
  {
    name: "Microsoft",
    category: "Enterprise AI",
    svg: (c) => (
      <svg viewBox="0 0 120 32" height="22" fill="currentColor" style={{ color: c }}>
        <g transform="translate(0, 5)">
          <rect x="0" y="0" width="9.5" height="9.5" />
          <rect x="11.5" y="0" width="9.5" height="9.5" />
          <rect x="0" y="11.5" width="9.5" height="9.5" />
          <rect x="11.5" y="11.5" width="9.5" height="9.5" />
        </g>
        <text
          x="30"
          y="21"
          fontFamily="Segoe UI, system-ui, sans-serif"
          fontWeight="600"
          fontSize="17"
          letterSpacing="-0.02em"
        >
          Microsoft
        </text>
      </svg>
    ),
  },
  {
    name: "NVIDIA",
    category: "Compute & Hardware",
    svg: (c) => (
      <svg viewBox="0 0 110 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="0.08em"
        >
          NVIDIA
        </text>
      </svg>
    ),
  },
  {
    name: "Meta",
    category: "Open Source AI",
    svg: (c) => (
      <svg viewBox="0 0 90 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="21"
          letterSpacing="-0.04em"
        >
          Meta
        </text>
      </svg>
    ),
  },
  {
    name: "OpenAI",
    category: "Foundation Models",
    svg: (c) => (
      <svg viewBox="0 0 100 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="600"
          fontSize="19"
          letterSpacing="-0.02em"
        >
          OpenAI
        </text>
      </svg>
    ),
  },
  {
    name: "AWS",
    category: "Cloud Infrastructure",
    svg: (c) => (
      <svg viewBox="0 0 80 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="800"
          fontSize="20"
          letterSpacing="0.02em"
        >
          AWS
        </text>
      </svg>
    ),
  },
  {
    name: "Hugging Face",
    category: "Model Hub",
    svg: (c) => (
      <svg viewBox="0 0 130 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="16"
          letterSpacing="-0.02em"
        >
          🤗 Hugging Face
        </text>
      </svg>
    ),
  },
  {
    name: "IIT Delhi",
    category: "Academic Research",
    svg: (c) => (
      <svg viewBox="0 0 110 32" height="22" fill="currentColor" style={{ color: c }}>
        <text
          x="50%"
          y="68%"
          textAnchor="middle"
          fontFamily="serif"
          fontWeight="700"
          fontSize="17"
          letterSpacing="0.05em"
        >
          IIT DELHI
        </text>
      </svg>
    ),
  },
];

export function LogosSection() {
  return (
    <div
      style={{
        background: T.color.paper,
        borderTop: `1px solid ${T.color.rule}`,
        borderBottom: `1px solid ${T.color.rule}`,
        padding: "48px 6%",
      }}
    >
      <div style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 16,
              marginBottom: 32,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ width: 12, height: 2, background: T.color.accent }} />
              <span
                style={{
                  fontFamily: T.font.mono,
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: T.color.inkFaint,
                }}
              >
                Collaborations & Industry Network
              </span>
            </div>
            <span
              style={{
                fontFamily: T.font.body,
                fontSize: 14,
                color: T.color.inkSoft,
                fontStyle: "italic",
              }}
            >
              Engineers, researchers, and alumni from leading teams
            </span>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))",
              gap: 20,
              alignItems: "center",
            }}
          >
            {PARTNERS.map((p) => (
              <div
                key={p.name}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "16px 12px",
                  background: "transparent",
                  borderRadius: T.radius,
                  border: `1px solid ${T.color.rule}44`,
                  transition: "all 0.25s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = T.color.accent;
                  e.currentTarget.style.background = T.color.paperAlt;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = `${T.color.rule}44`;
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ opacity: 0.82, transition: "opacity 0.2s" }}>
                  {p.svg(T.color.ink)}
                </div>
                <span
                  style={{
                    marginTop: 8,
                    fontFamily: T.font.mono,
                    fontSize: 9,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: T.color.inkFaint,
                  }}
                >
                  {p.category}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
