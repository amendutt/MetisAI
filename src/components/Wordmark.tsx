import logoFull from "../assets/brand/logo-full.png";
import { T } from "../data/theme";
import { BRAND_NAME } from "../data/constants";

/**
 * Official Metis AI logo lockup (icon + "METIS AI" + "INTELLIGENCE LLP").
 * Used identically in the header and footer so the brand mark never changes
 * shape across the site — only its size, and its background chip on dark
 * surfaces so the navy strokes keep contrast.
 */
export function Wordmark({ height = 44, onDark = false }: { height?: number; onDark?: boolean }) {
  const img = (
    <img
      src={logoFull}
      alt={`${BRAND_NAME} Intelligence LLP`}
      style={{ height, width: "auto", display: "block" }}
    />
  );

  if (!onDark) return img;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        background: T.color.paper,
        borderRadius: 8,
        padding: "10px 16px",
      }}
    >
      {img}
    </span>
  );
}
