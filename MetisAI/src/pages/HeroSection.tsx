import { Reveal, Rule } from "../components/Reveal";
import { Button } from "../components/Button";
import { Label } from "../components/Label";
import { T } from "../data/theme";
import { BRAND_NAME } from "../data/constants";
import type { NavLink } from "../data/constants";
import { STATS } from "../data/about";

const DISCIPLINES = [
  { n: "01", name: "Machine Learning", color: T.cat.ml },
  { n: "02", name: "Computer Vision", color: T.cat.cv },
  { n: "03", name: "Natural Language", color: T.cat.nlp },
  { n: "04", name: "Generative Systems", color: T.cat.gen },
];

export function HeroSection({ setActive }: { setActive: (section: NavLink) => void }) {
  return (
    <div
      style={{
        background: T.color.paper,
        padding: "clamp(130px, 16vw, 190px) 6% clamp(56px, 7vw, 88px)",
      }}
    >
      <div style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <Reveal>
          <Label text="Institute of applied intelligence" />
        </Reveal>

        <Reveal delay={0.06}>
          <h1
            style={{
              fontFamily: T.font.display,
              fontSize: "clamp(2.6rem, 7vw, 5.4rem)",
              fontWeight: 600,
              lineHeight: 1.02,
              letterSpacing: "-0.035em",
              color: T.color.ink,
              margin: "26px 0 0",
              maxWidth: "15ch",
            }}
          >
            Learn the systems
            <br />
            that are learning
            <br />
            <span style={{ fontStyle: "italic", color: T.color.accent }}>us</span>.
          </h1>
        </Reveal>

        <Reveal delay={0.12}>
          <p
            style={{
              fontFamily: T.font.body,
              fontSize: "clamp(1rem, 1.5vw, 1.2rem)",
              lineHeight: 1.7,
              color: T.color.inkSoft,
              maxWidth: "56ch",
              margin: "30px 0 0",
            }}
          >
            {BRAND_NAME} runs industry-aligned AI and machine learning courses, publishes real research
            projects, and advises teams putting models into production.
          </p>
        </Reveal>

        <Reveal delay={0.18}>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap", margin: "36px 0 0" }}>
            <Button onClick={() => setActive("Courses")}>Browse courses</Button>
            <Button onClick={() => setActive("Projects")} variant="outline" color={T.color.ink}>
              Read the research
            </Button>
          </div>
        </Reveal>

        {/* Signature: the disciplines as a typeset index */}
        <div style={{ marginTop: "clamp(56px, 8vw, 96px)" }}>
          <Rule />
          {DISCIPLINES.map((d, i) => (
            <Reveal key={d.n} delay={0.24 + i * 0.07}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                  gap: "clamp(14px, 3vw, 36px)",
                  padding: "clamp(14px, 2vw, 22px) 0",
                }}
              >
                <span style={{ fontFamily: T.font.mono, fontSize: 12, color: T.color.inkFaint, width: 28 }}>
                  {d.n}
                </span>
                <span
                  style={{
                    fontFamily: T.font.display,
                    fontSize: "clamp(1.3rem, 3.2vw, 2.3rem)",
                    fontWeight: 500,
                    letterSpacing: "-0.02em",
                    color: T.color.ink,
                    flex: 1,
                  }}
                >
                  {d.name}
                </span>
                <span style={{ width: 40, height: 3, background: d.color, flexShrink: 0 }} />
              </div>
              <Rule delay={0.1} />
            </Reveal>
          ))}
        </div>

        {/* Stats as a spec strip */}
        <Reveal delay={0.3}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
              gap: 28,
              marginTop: 56,
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: T.font.display,
                    fontSize: "clamp(1.6rem, 2.6vw, 2.1rem)",
                    fontWeight: 600,
                    color: T.color.ink,
                    letterSpacing: "-0.02em",
                  }}
                >
                  {s.val}
                </div>
                <div
                  style={{
                    fontFamily: T.font.mono,
                    fontSize: 11,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: T.color.inkFaint,
                    marginTop: 6,
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </div>
  );
}
