import { useState } from "react";
import { Section, SectionHeading } from "../components/Section";
import { Reveal, Rule } from "../components/Reveal";
import { Button } from "../components/Button";
import { T } from "../data/theme";
import { COURSES } from "../data/courses";

const FILTERS = ["All", "Beginner", "Intermediate", "Advanced"] as const;

export function CoursesSection() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]>("All");
  const [open, setOpen] = useState<number | null>(COURSES[0].id);

  const filtered = filter === "All" ? COURSES : COURSES.filter((c) => c.level.includes(filter));

  return (
    <Section>
      <SectionHeading
        eyebrow="Curriculum"
        title="A catalog built by people who ship."
        intro="Structured learning paths designed by industry veterans and researchers. Each course runs in cohorts with live review."
      />

      {/* Filters as a tab strip */}
      <Reveal>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 8 }}>
          {FILTERS.map((f) => {
            const on = filter === f;
            return (
              <button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  background: "none",
                  border: "none",
                  padding: "0 0 8px",
                  cursor: "pointer",
                  fontFamily: T.font.mono,
                  fontSize: 11,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: on ? T.color.ink : T.color.inkFaint,
                  borderBottom: `2px solid ${on ? T.color.accent : "transparent"}`,
                  transition: "color 0.2s, border-color 0.2s",
                }}
              >
                {f}
                <span style={{ marginLeft: 7, color: T.color.inkFaint }}>
                  {f === "All" ? COURSES.length : COURSES.filter((c) => c.level.includes(f)).length}
                </span>
              </button>
            );
          })}
        </div>
      </Reveal>

      <Rule />

      {/* Catalog rows — click to expand the syllabus */}
      {filtered.map((c, i) => {
        const isOpen = open === c.id;
        return (
          <Reveal key={c.id} delay={i * 0.05}>
            <div
              onClick={() => setOpen(isOpen ? null : c.id)}
              style={{ cursor: "pointer", padding: "26px 0" }}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "minmax(0,84px) minmax(0,1fr) minmax(0,auto)",
                  gap: "clamp(14px, 3vw, 40px)",
                  alignItems: "baseline",
                }}
              >
                <span style={{ fontFamily: T.font.mono, fontSize: 12, color: c.color, letterSpacing: "0.06em" }}>
                  {c.code}
                </span>

                <div>
                  <h3
                    style={{
                      fontFamily: T.font.display,
                      fontSize: "clamp(1.15rem, 2.2vw, 1.65rem)",
                      fontWeight: 600,
                      letterSpacing: "-0.015em",
                      color: T.color.ink,
                      margin: 0,
                    }}
                  >
                    {c.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: T.font.body,
                      fontSize: 15,
                      lineHeight: 1.65,
                      color: T.color.inkSoft,
                      margin: "10px 0 0",
                      maxWidth: "62ch",
                    }}
                  >
                    {c.desc}
                  </p>
                </div>

                <div style={{ textAlign: "right", whiteSpace: "nowrap" }}>
                  <div style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint }}>{c.duration}</div>
                  <div style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, marginTop: 6 }}>
                    {c.level}
                  </div>
                  <span
                    style={{
                      display: "inline-block",
                      marginTop: 12,
                      fontFamily: T.font.mono,
                      fontSize: 15,
                      color: c.color,
                      transform: isOpen ? "rotate(45deg)" : "none",
                      transition: "transform 0.25s",
                    }}
                    aria-hidden
                  >
                    +
                  </span>
                </div>
              </div>

              {/* Syllabus drawer */}
              <div
                style={{
                  maxHeight: isOpen ? 320 : 0,
                  opacity: isOpen ? 1 : 0,
                  overflow: "hidden",
                  transition: "max-height 0.4s cubic-bezier(.2,.6,.2,1), opacity 0.3s",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "10px 40px",
                    marginTop: 24,
                    paddingLeft: "clamp(0px, 6vw, 124px)",
                  }}
                >
                  {c.topics.map((t, ti) => (
                    <div key={t} style={{ display: "flex", alignItems: "baseline", gap: 10 }}>
                      <span style={{ fontFamily: T.font.mono, fontSize: 10, color: T.color.inkFaint }}>
                        {String(ti + 1).padStart(2, "0")}
                      </span>
                      <span style={{ fontFamily: T.font.body, fontSize: 15, color: T.color.inkSoft }}>{t}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 24, paddingLeft: "clamp(0px, 6vw, 124px)" }}>
                  <Button color={c.color} variant="outline">
                    Enroll in {c.code}
                  </Button>
                </div>
              </div>
            </div>
            <Rule />
          </Reveal>
        );
      })}
    </Section>
  );
}
