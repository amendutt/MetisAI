import { useState } from "react";
import type { CSSProperties, ReactNode } from "react";
import { T } from "../data/theme";

type ButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  variant?: "solid" | "outline" | "quiet";
  full?: boolean;
  color?: string;
  style?: CSSProperties;
};

export function Button({ children, onClick, variant = "solid", full = false, color = T.color.accent, style = {} }: ButtonProps) {
  const [hover, setHover] = useState(false);

  const base: CSSProperties = {
    fontFamily: T.font.mono,
    fontSize: 12,
    letterSpacing: "0.1em",
    textTransform: "uppercase",
    padding: "12px 22px",
    borderRadius: T.radius,
    cursor: "pointer",
    width: full ? "100%" : undefined,
    transition: "background 0.2s, color 0.2s, border-color 0.2s",
    ...style,
  };

  if (variant === "solid") {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...base,
          background: hover ? T.color.ink : color,
          color: T.color.paper,
          border: `1px solid ${hover ? T.color.ink : color}`,
        }}
      >
        {children}
      </button>
    );
  }

  if (variant === "outline") {
    return (
      <button
        onClick={onClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          ...base,
          background: hover ? color : "transparent",
          color: hover ? T.color.paper : color,
          border: `1px solid ${color}`,
        }}
      >
        {children}
      </button>
    );
  }

  // quiet: text + underline only
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        ...base,
        background: "transparent",
        border: "none",
        padding: "4px 0",
        color: hover ? T.color.accent : T.color.ink,
        borderBottom: `1px solid ${hover ? T.color.accent : T.color.rule}`,
        width: undefined,
      }}
    >
      {children}
    </button>
  );
}
