import { T } from "../data/theme";
import { BRAND_NAME } from "../data/constants";

/**
 * Typographic wordmark. Deliberately not an image file:
 * the brand mark is the letterform + the accent rule beneath it.
 */
export function Wordmark({ size = 22, onDark = false }: { size?: number; onDark?: boolean }) {
  const ink = onDark ? T.color.paper : T.color.ink;

  return (
    <span
      style={{
        display: "inline-flex",
        flexDirection: "column",
        alignItems: "flex-start",
        gap: size * 0.16,
        lineHeight: 1,
      }}
    >
      <span
        style={{
          fontFamily: T.font.display,
          fontSize: size,
          fontWeight: 600,
          letterSpacing: "-0.02em",
          color: ink,
        }}
      >
        {BRAND_NAME}
        <span style={{ color: T.color.accent }}>.</span>
      </span>
      <span
        style={{
          display: "block",
          width: size * 1.6,
          height: 2,
          background: T.color.accent,
        }}
      />
    </span>
  );
}
