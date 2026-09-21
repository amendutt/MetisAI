import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { T } from "../../data/theme";
import { BOARD_MEMBERS } from "../../data/about";

export function BoardOfDirectorsPage() {
  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 48, maxWidth: "62ch" }}>
          <Label text="Board of directors" />
          <h2
            style={{
              fontFamily: T.font.display,
              fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.14,
              letterSpacing: "-0.02em",
              color: T.color.ink,
              margin: "20px 0 18px",
            }}
          >
            Governance, research, and learning at the core.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
            Our board structure is designed to balance innovation, responsible growth, and educational
            excellence.
          </p>
        </div>
      </Reveal>

      <Rule />

      {BOARD_MEMBERS.map((m, i) => (
        <Reveal key={m.title} delay={i * 0.07}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,60px) minmax(0,280px) minmax(0,1fr)",
              gap: "clamp(16px, 4vw, 48px)",
              padding: "32px 0",
              alignItems: "start",
            }}
          >
            <span style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, letterSpacing: "0.1em" }}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <h3
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(1.2rem, 2.3vw, 1.65rem)",
                fontWeight: 600,
                letterSpacing: "-0.015em",
                color: T.color.ink,
                margin: 0,
              }}
            >
              {m.title}
            </h3>
            <p
              style={{
                fontFamily: T.font.body,
                fontSize: 16,
                lineHeight: 1.7,
                color: T.color.inkSoft,
                margin: 0,
                maxWidth: "52ch",
              }}
            >
              {m.desc}
            </p>
          </div>
          <Rule />
        </Reveal>
      ))}
    </>
  );
}
