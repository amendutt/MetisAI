import { useState } from "react";
import { Reveal, Rule } from "./Reveal";
import { Tag } from "./Label";
import { T } from "../data/theme";
import { CONSULTANTS } from "../data/about";

/** Roster laid out as an indexed list, not a card grid. */
export function ConsultantsRoster() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div>
      {CONSULTANTS.map((c, i) => {
        const isHover = hovered === c.name;
        return (
          <Reveal key={c.name} delay={i * 0.06}>
            <div
              onMouseEnter={() => setHovered(c.name)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(0,auto) minmax(0,1.1fr) minmax(0,1.4fr)",
                gap: "clamp(16px, 3vw, 44px)",
                alignItems: "start",
                padding: "30px 0",
                background: isHover ? T.color.card : "transparent",
                transition: "background 0.25s",
              }}
            >
              {/* index + initials */}
              <div style={{ display: "flex", alignItems: "baseline", gap: 14, minWidth: 92 }}>
                <span style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontFamily: T.font.display,
                    fontSize: 26,
                    fontWeight: 600,
                    color: isHover ? c.color : T.color.ink,
                    transition: "color 0.25s",
                  }}
                >
                  {c.initials}
                </span>
              </div>

              {/* name + role */}
              <div>
                <div
                  style={{
                    fontFamily: T.font.display,
                    fontSize: 19,
                    fontWeight: 600,
                    color: T.color.ink,
                    marginBottom: 4,
                  }}
                >
                  {c.name}
                </div>
                <div style={{ fontFamily: T.font.mono, fontSize: 11, letterSpacing: "0.06em", color: c.color }}>
                  {c.role.toUpperCase()}
                </div>
                <div style={{ fontFamily: T.font.mono, fontSize: 11, color: T.color.inkFaint, marginTop: 8 }}>
                  {c.exp} experience
                </div>
              </div>

              {/* bio + specialties */}
              <div>
                <p
                  style={{
                    fontFamily: T.font.body,
                    fontSize: 15,
                    lineHeight: 1.65,
                    color: T.color.inkSoft,
                    margin: "0 0 14px",
                  }}
                >
                  {c.bio}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                  {c.specialties.map((s) => (
                    <Tag key={s} text={s} color={c.color} />
                  ))}
                </div>
              </div>
            </div>
            <Rule />
          </Reveal>
        );
      })}
    </div>
  );
}
