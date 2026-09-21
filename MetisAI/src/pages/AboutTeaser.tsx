import { Section, SectionHeading } from "../components/Section";
import { Reveal, Rule } from "../components/Reveal";
import { Button } from "../components/Button";
import { T } from "../data/theme";
import { ABOUT_LINKS } from "../data/constants";
import type { AboutLink } from "../data/constants";
import { ABOUT_PILLARS } from "../data/about";

/**
 * Home-page summary of the About section.
 * Deliberately not the full AboutSection: the homepage should point
 * at the About pages, not swallow them.
 */
export function AboutTeaser({ goToAbout }: { goToAbout: (sub: AboutLink) => void }) {
  return (
    <Section alt>
      <SectionHeading
        eyebrow="About us"
        title="Research, taught. Practice, advised."
        intro="We combine applied research, practical education, and advisory leadership to help learners and organizations move from AI ambition to AI execution."
        accent={T.color.ink}
      />

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "clamp(28px, 5vw, 64px)",
          marginBottom: 72,
        }}
      >
        {ABOUT_PILLARS.map((p, i) => (
          <Reveal key={p.title} delay={i * 0.08}>
            <div style={{ fontFamily: T.font.mono, fontSize: 11, letterSpacing: "0.12em", color: T.color.accent }}>
              {p.title.toUpperCase()}
            </div>
            <p
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(1.1rem, 1.9vw, 1.45rem)",
                lineHeight: 1.55,
                letterSpacing: "-0.01em",
                color: T.color.ink,
                margin: "16px 0 0",
              }}
            >
              {p.desc}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Links into the four About pages */}
      <Rule />
      {ABOUT_LINKS.map((sub, i) => (
        <Reveal key={sub} delay={i * 0.05}>
          <button
            onClick={() => goToAbout(sub)}
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              gap: 20,
              width: "100%",
              background: "transparent",
              border: "none",
              padding: "22px 0",
              cursor: "pointer",
              textAlign: "left",
            }}
            onMouseEnter={(e) => {
              const t = e.currentTarget.querySelector("[data-title]") as HTMLElement | null;
              if (t) t.style.color = T.color.accent;
            }}
            onMouseLeave={(e) => {
              const t = e.currentTarget.querySelector("[data-title]") as HTMLElement | null;
              if (t) t.style.color = T.color.ink;
            }}
          >
            <span style={{ display: "flex", alignItems: "baseline", gap: "clamp(14px, 3vw, 36px)" }}>
              <span style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint }}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                data-title
                style={{
                  fontFamily: T.font.display,
                  fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)",
                  fontWeight: 500,
                  letterSpacing: "-0.015em",
                  color: T.color.ink,
                  transition: "color 0.2s",
                }}
              >
                {sub}
              </span>
            </span>
            <span style={{ fontFamily: T.font.mono, fontSize: 14, color: T.color.inkFaint }}>→</span>
          </button>
          <Rule delay={0.08} />
        </Reveal>
      ))}

      <Reveal delay={0.2}>
        <div style={{ marginTop: 40 }}>
          <Button variant="quiet" onClick={() => goToAbout("Vision & Mission")}>
            Read more about us
          </Button>
        </div>
      </Reveal>
    </Section>
  );
}
