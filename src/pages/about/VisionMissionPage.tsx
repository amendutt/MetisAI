import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { T } from "../../data/theme";
import { ABOUT_PILLARS } from "../../data/about";

export function VisionMissionPage() {
  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 56, maxWidth: "62ch" }}>
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
            Where we're headed, and how we get there.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
            Our vision sets the destination; our mission defines the work. Together they keep every course,
            project, and engagement pointed at measurable, responsible impact.
          </p>
        </div>
      </Reveal>

      <Rule />

      {ABOUT_PILLARS.map((pillar, i) => (
        <Reveal key={pillar.title} delay={i * 0.1}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
              gap: "clamp(20px, 5vw, 64px)",
              padding: "clamp(32px, 5vw, 56px) 0",
              alignItems: "start",
            }}
          >
            <div>
              <div style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, letterSpacing: "0.12em" }}>
                {String(i + 1).padStart(2, "0")}
              </div>
              <h3
                style={{
                  fontFamily: T.font.display,
                  fontSize: "clamp(1.8rem, 3.4vw, 2.6rem)",
                  fontWeight: 600,
                  letterSpacing: "-0.025em",
                  color: T.color.accent,
                  margin: "12px 0 0",
                }}
              >
                {pillar.title}
              </h3>
            </div>
            <p
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(1.15rem, 2.1vw, 1.6rem)",
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: T.color.ink,
                margin: 0,
                maxWidth: "40ch",
              }}
            >
              {pillar.desc}
            </p>
          </div>
          <Rule />
        </Reveal>
      ))}
    </>
  );
}
