import type { ReactNode } from "react";
import { T } from "../data/theme";
import { Reveal, Rule } from "./Reveal";
import { Label } from "./Label";

/** Page band. `alt` swaps to the secondary paper tone. */
export function Section({
  children,
  alt = false,
  id,
}: {
  children: ReactNode;
  alt?: boolean;
  id?: string;
}) {
  return (
    <section
      id={id}
      style={{
        background: alt ? T.color.paperAlt : T.color.paper,
        padding: "clamp(64px, 9vw, 112px) 6%",
      }}
    >
      <div style={{ maxWidth: T.maxW, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

/**
 * Left-aligned heading. Editorial pages don't center their headlines —
 * the eye needs a consistent left margin to scan from.
 */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  accent = T.color.accent,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  accent?: string;
}) {
  return (
    <Reveal>
      <div style={{ marginBottom: 48 }}>
        <Label text={eyebrow} color={accent} />
        <h2
          style={{
            fontFamily: T.font.display,
            fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
            fontWeight: 600,
            lineHeight: 1.12,
            letterSpacing: "-0.02em",
            color: T.color.ink,
            margin: "20px 0 0",
            maxWidth: 20 + "ch",
          }}
        >
          {title}
        </h2>
        {intro && (
          <p
            style={{
              fontFamily: T.font.body,
              fontSize: 17,
              lineHeight: 1.7,
              color: T.color.inkSoft,
              margin: "18px 0 0",
              maxWidth: "62ch",
            }}
          >
            {intro}
          </p>
        )}
        <div style={{ marginTop: 32 }}>
          <Rule />
        </div>
      </div>
    </Reveal>
  );
}
