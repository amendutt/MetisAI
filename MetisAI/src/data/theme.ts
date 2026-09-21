/**
 * MetisAI design tokens.
 * Editorial / technical-journal direction: warm paper, deep ink,
 * one burnt-orange accent, monospace for utility text.
 */

export const T = {
  color: {
    paper: "#F7F4EF", // page background
    paperAlt: "#EFEAE1", // alternating band
    card: "#FFFFFF",
    ink: "#141210", // primary text
    inkSoft: "#5A544C", // body text
    inkFaint: "#8E877D", // captions, meta
    rule: "#D8D1C6", // hairline dividers
    accent: "#C2410C", // burnt orange
    accentSoft: "#FDE8D7",
  },
  // Category colors — muted, earthy, not neon
  cat: {
    ml: "#7A5C2E",
    cv: "#2F5D62",
    nlp: "#4A6741",
    ops: "#9B3226",
    ds: "#8A6D1F",
    gen: "#5B4A6B",
  },
  font: {
    display: `"Iowan Old Style", "Palatino Linotype", Palatino, "Book Antiqua", Georgia, serif`,
    body: `"Charter", "Bitstream Charter", Georgia, serif`,
    mono: `"SF Mono", "JetBrains Mono", "IBM Plex Mono", ui-monospace, Menlo, monospace`,
  },
  radius: 2, // near-zero: this design uses rules, not rounded cards
  maxW: 1080,
} as const;

/** Uppercase monospace eyebrow/label style, used all over the site. */
export const labelStyle = {
  fontFamily: T.font.mono,
  fontSize: 11,
  letterSpacing: "0.14em",
  textTransform: "uppercase" as const,
  color: T.color.inkFaint,
};
