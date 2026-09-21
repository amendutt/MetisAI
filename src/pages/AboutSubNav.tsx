import { T } from "../data/theme";
import { ABOUT_LINKS } from "../data/constants";
import type { AboutLink } from "../data/constants";

export function AboutSubNav({ active, onChange }: { active: AboutLink; onChange: (sub: AboutLink) => void }) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 0,
        borderTop: `1px solid ${T.color.rule}`,
        marginBottom: 64,
      }}
    >
      {ABOUT_LINKS.map((sub, i) => {
        const on = active === sub;
        return (
          <button
            key={sub}
            onClick={() => onChange(sub)}
            style={{
              flex: "1 1 180px",
              textAlign: "left",
              background: "transparent",
              border: "none",
              borderTop: `2px solid ${on ? T.color.accent : "transparent"}`,
              marginTop: -1,
              padding: "18px 18px 18px 0",
              cursor: "pointer",
              transition: "border-color 0.25s",
            }}
          >
            <div
              style={{
                fontFamily: T.font.mono,
                fontSize: 10,
                letterSpacing: "0.12em",
                color: on ? T.color.accent : T.color.inkFaint,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </div>
            <div
              style={{
                fontFamily: T.font.body,
                fontSize: 15,
                color: on ? T.color.ink : T.color.inkSoft,
                marginTop: 8,
              }}
            >
              {sub}
            </div>
          </button>
        );
      })}
    </div>
  );
}
