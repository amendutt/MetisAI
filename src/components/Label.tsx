import { T, labelStyle } from "../data/theme";

/** Monospace uppercase eyebrow with an accent tick. Replaces the rounded pill. */
export function Label({ text, color = T.color.accent }: { text: string; color?: string }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
      <span style={{ width: 14, height: 2, background: color, flexShrink: 0 }} />
      <span style={{ ...labelStyle, color }}>{text}</span>
    </span>
  );
}

/** Small bordered tag for tech stacks and categories. Square corners. */
export function Tag({ text, color = T.color.inkFaint }: { text: string; color?: string }) {
  return (
    <span
      style={{
        fontFamily: T.font.mono,
        fontSize: 11,
        letterSpacing: "0.06em",
        color,
        border: `1px solid ${color}44`,
        padding: "3px 8px",
        borderRadius: T.radius,
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </span>
  );
}
