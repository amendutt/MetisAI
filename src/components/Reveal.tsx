import { useRef } from "react";
import type { CSSProperties, ReactNode } from "react";
import { useInView, usePrefersReducedMotion } from "./useInView";
import { T } from "../data/theme";

/** Quiet scroll reveal. Honours prefers-reduced-motion. */
export function Reveal({
  children,
  delay = 0,
  style = {},
}: {
  children: ReactNode;
  delay?: number;
  style?: CSSProperties;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref);
  const reduced = usePrefersReducedMotion();

  if (reduced) return <div style={style}>{children}</div>;

  return (
    <div
      ref={ref}
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(14px)",
        transition: `opacity 0.7s cubic-bezier(.2,.6,.2,1) ${delay}s, transform 0.7s cubic-bezier(.2,.6,.2,1) ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/**
 * Signature element: a hairline rule that draws itself left-to-right
 * when scrolled into view. Used as the primary structural device.
 */
export function Rule({ color = T.color.rule, delay = 0 }: { color?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, 0.05);
  const reduced = usePrefersReducedMotion();

  return (
    <div ref={ref} style={{ height: 1, background: "transparent", overflow: "hidden" }}>
      <div
        style={{
          height: 1,
          background: color,
          transformOrigin: "left center",
          transform: reduced || inView ? "scaleX(1)" : "scaleX(0)",
          transition: reduced ? "none" : `transform 0.9s cubic-bezier(.2,.6,.2,1) ${delay}s`,
        }}
      />
    </div>
  );
}
