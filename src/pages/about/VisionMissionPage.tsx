import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { T } from "../../data/theme";
import { VISION_INTRO, VISION_PILLARS, MISSION_TEXT } from "../../data/about";

export function VisionMissionPage() {
  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 40, maxWidth: "62ch" }}>
          <Label text="Vision & Mission" />
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
            Metis AI Intelligence: practical, adaptive, contextual wisdom.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.8, color: T.color.inkSoft }}>
            {VISION_INTRO}
          </p>
        </div>
      </Reveal>

      <Rule />

      {/* Vision pillars */}
      {VISION_PILLARS.map((pillar, i) => (
        <Reveal key={pillar.title} delay={i * 0.08}>
          <div style={{ padding: "clamp(32px, 5vw, 48px) 0" }}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
                gap: "clamp(20px, 5vw, 64px)",
                alignItems: "start",
                marginBottom: 18,
              }}
            >
              <div>
                <div style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, letterSpacing: "0.12em" }}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  style={{
                    fontFamily: T.font.display,
                    fontSize: "clamp(1.3rem, 2.6vw, 1.9rem)",
                    fontWeight: 600,
                    letterSpacing: "-0.02em",
                    color: T.color.accent,
                    margin: "12px 0 0",
                    lineHeight: 1.25,
                  }}
                >
                  {pillar.title}
                </h3>
              </div>
              <p
                style={{
                  fontFamily: T.font.display,
                  fontSize: "clamp(1.05rem, 1.9vw, 1.35rem)",
                  lineHeight: 1.55,
                  letterSpacing: "-0.01em",
                  color: T.color.ink,
                  margin: 0,
                  maxWidth: "48ch",
                }}
              >
                {pillar.definition}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
                gap: "clamp(20px, 5vw, 64px)",
              }}
            >
              <div style={{ fontFamily: T.font.mono, fontSize: 10, letterSpacing: "0.12em", color: T.color.inkFaint, textTransform: "uppercase" }}>
                The AI translation
              </div>
              <p style={{ fontFamily: T.font.body, fontSize: 15, lineHeight: 1.7, color: T.color.inkSoft, margin: "0 0 14px", maxWidth: "62ch" }}>
                {pillar.translation}
              </p>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
                gap: "clamp(20px, 5vw, 64px)",
              }}
            >
              <div style={{ fontFamily: T.font.mono, fontSize: 10, letterSpacing: "0.12em", color: T.color.inkFaint, textTransform: "uppercase" }}>
                Real-world example
              </div>
              <p style={{ fontFamily: T.font.body, fontSize: 15, lineHeight: 1.7, color: T.color.inkSoft, margin: 0, maxWidth: "62ch", fontStyle: "italic" }}>
                {pillar.example}
              </p>
            </div>
          </div>
          <Rule />
        </Reveal>
      ))}

      {/* Mission */}
      <Reveal delay={0.1}>
        <div style={{ padding: "clamp(40px, 6vw, 56px) 0 0" }}>
          <Label text="Mission" />
          <p
            style={{
              fontFamily: T.font.body,
              fontSize: 17,
              lineHeight: 1.8,
              color: T.color.inkSoft,
              margin: "20px 0 0",
              maxWidth: "72ch",
            }}
          >
            {MISSION_TEXT}
          </p>
        </div>
      </Reveal>
    </>
  );
}
