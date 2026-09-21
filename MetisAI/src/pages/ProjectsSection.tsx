import { useState } from "react";
import { Section, SectionHeading } from "../components/Section";
import { Reveal, Rule } from "../components/Reveal";
import { Tag } from "../components/Label";
import { Button } from "../components/Button";
import { T } from "../data/theme";
import { PROJECTS } from "../data/projects";

export function ProjectsSection() {
  const [active, setActive] = useState(0);
  const proj = PROJECTS[active];

  return (
    <Section alt>
      <SectionHeading
        eyebrow="Research & projects"
        title="Work that leaves the notebook."
        intro="Live projects solving critical problems across healthcare, natural language, and public health."
        accent={T.color.ink}
      />

      {/* Index selector */}
      <Reveal>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 0, marginBottom: 0 }}>
          {PROJECTS.map((p, i) => {
            const on = active === i;
            return (
              <button
                key={p.id}
                onClick={() => setActive(i)}
                style={{
                  flex: "1 1 220px",
                  textAlign: "left",
                  background: on ? T.color.card : "transparent",
                  border: "none",
                  borderTop: `2px solid ${on ? p.color : T.color.rule}`,
                  padding: "18px 20px",
                  cursor: "pointer",
                  transition: "background 0.25s, border-color 0.25s",
                }}
              >
                <div style={{ fontFamily: T.font.mono, fontSize: 10, letterSpacing: "0.1em", color: on ? p.color : T.color.inkFaint }}>
                  {p.ref} · {p.year}
                </div>
                <div
                  style={{
                    fontFamily: T.font.display,
                    fontSize: 17,
                    fontWeight: 600,
                    color: on ? T.color.ink : T.color.inkSoft,
                    marginTop: 8,
                  }}
                >
                  {p.title}
                </div>
              </button>
            );
          })}
        </div>
      </Reveal>

      {/* Entry body */}
      <Reveal key={active}>
        <div
          style={{
            background: T.color.card,
            border: `1px solid ${T.color.rule}`,
            borderTop: "none",
            padding: "clamp(26px, 4vw, 46px)",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "clamp(28px, 4vw, 56px)",
          }}
        >
          <div>
            <div style={{ fontFamily: T.font.mono, fontSize: 11, letterSpacing: "0.1em", color: proj.color, textTransform: "uppercase" }}>
              {proj.category}
            </div>
            <h3
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(1.6rem, 3vw, 2.3rem)",
                fontWeight: 600,
                letterSpacing: "-0.02em",
                color: T.color.ink,
                margin: "14px 0 6px",
              }}
            >
              {proj.title}
            </h3>
            <div style={{ fontFamily: T.font.body, fontStyle: "italic", fontSize: 16, color: T.color.inkFaint }}>
              {proj.subtitle}
            </div>

            <p
              style={{
                fontFamily: T.font.body,
                fontSize: 16,
                lineHeight: 1.75,
                color: T.color.inkSoft,
                margin: "24px 0",
              }}
            >
              {proj.desc}
            </p>

            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 28 }}>
              {proj.tech.map((t) => (
                <Tag key={t} text={t} />
              ))}
            </div>

            <Button color={proj.color}>View full case study</Button>
          </div>

          {/* Metrics as a spec sheet */}
          <div>
            <div
              style={{
                fontFamily: T.font.mono,
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: T.color.inkFaint,
                marginBottom: 4,
              }}
            >
              Results
            </div>
            <Rule />
            {proj.metrics.map((m) => (
              <div key={m.label}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    padding: "22px 0",
                    gap: 16,
                  }}
                >
                  <span style={{ fontFamily: T.font.body, fontSize: 15, color: T.color.inkSoft }}>{m.label}</span>
                  <span
                    style={{
                      fontFamily: T.font.display,
                      fontSize: "clamp(1.5rem, 2.6vw, 2rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.02em",
                      color: proj.color,
                    }}
                  >
                    {m.val}
                  </span>
                </div>
                <Rule />
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
