import { Section, SectionHeading } from "../components/Section";
import { Reveal, Rule } from "../components/Reveal";
import { ConsultantsRoster } from "../components/ConsultantsRoster";
import { T } from "../data/theme";
import { CONSULTING_SERVICES } from "../data/about";

export function ConsultingSection() {
  return (
    <Section>
      <SectionHeading
        eyebrow="Consulting"
        title="Advisory for teams past the demo stage."
        intro="Strategy, architecture, and delivery support from practitioners who have shipped models into production."
      />

      {/* Services as a numbered service index */}
      <div style={{ marginBottom: 88 }}>
        <Rule />
        {CONSULTING_SERVICES.map((s, i) => (
          <Reveal key={s} delay={i * 0.05}>
            <div
              style={{
                display: "flex",
                alignItems: "baseline",
                gap: "clamp(16px, 4vw, 40px)",
                padding: "20px 0",
              }}
            >
              <span style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, width: 26 }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                style={{
                  fontFamily: T.font.display,
                  fontSize: "clamp(1.1rem, 2.4vw, 1.7rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  color: T.color.ink,
                }}
              >
                {s}
              </span>
            </div>
            <Rule delay={0.08} />
          </Reveal>
        ))}
      </div>

      <SectionHeading
        eyebrow="Our consultants"
        title="Specialists who bridge strategy and execution."
        intro="A multi-disciplinary bench supporting delivery across product, research, and enterprise transformation."
        accent={T.color.ink}
      />
      <ConsultantsRoster />
    </Section>
  );
}
