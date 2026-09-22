import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { T } from "../../data/theme";
import { BRAND_NAME } from "../../data/constants";
import { FOUNDERS_MESSAGE, FOUNDERS_PRIORITIES, INSPIRATION } from "../../data/about";

export function FoundersMessagePage() {
  const body = FOUNDERS_MESSAGE.body;
  const firstLetter = body.charAt(0);
  const rest = body.slice(1);

  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 48 }}>
          <Label text="Message from founder" />
        </div>
      </Reveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "clamp(32px, 6vw, 80px)",
          alignItems: "start",
        }}
      >
        {/* The letter */}
        <Reveal style={{ gridColumn: "span 1", minWidth: 0 }}>
          <div style={{ maxWidth: "58ch" }}>
            <h2
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(1.6rem, 3.2vw, 2.5rem)",
                fontWeight: 600,
                lineHeight: 1.18,
                letterSpacing: "-0.025em",
                color: T.color.ink,
                margin: "0 0 32px",
              }}
            >
              {FOUNDERS_MESSAGE.headline}
            </h2>

            <Rule />

            <p
              style={{
                fontFamily: T.font.body,
                fontSize: 17,
                lineHeight: 1.8,
                color: T.color.inkSoft,
                margin: "32px 0 20px",
              }}
            >
              <span
                style={{
                  float: "left",
                  fontFamily: T.font.display,
                  fontSize: "4.2rem",
                  lineHeight: 0.82,
                  fontWeight: 600,
                  color: T.color.accent,
                  paddingRight: 12,
                  paddingTop: 4,
                }}
              >
                {firstLetter}
              </span>
              {rest}
            </p>

            <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.8, color: T.color.inkSoft, margin: "0 0 40px" }}>
              {FOUNDERS_MESSAGE.closing}
            </p>

            {/* Signature block */}
            <div style={{ display: "inline-block" }}>
              <div style={{ width: 130, height: 1, background: T.color.ink, marginBottom: 10 }} />
              <div
                style={{
                  fontFamily: T.font.mono,
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: T.color.inkFaint,
                }}
              >
                Founding team, {BRAND_NAME}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Priorities sidebar */}
        <Reveal delay={0.12} style={{ minWidth: 0 }}>
          <div style={{ borderTop: `2px solid ${T.color.ink}`, paddingTop: 20 }}>
            <div
              style={{
                fontFamily: T.font.mono,
                fontSize: 10,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: T.color.inkFaint,
                marginBottom: 8,
              }}
            >
              Founder priorities
            </div>
            {FOUNDERS_PRIORITIES.map((item, i) => (
              <div key={item}>
                <div style={{ display: "flex", gap: 14, alignItems: "baseline", padding: "20px 0" }}>
                  <span style={{ fontFamily: T.font.mono, fontSize: 10, color: T.color.accent }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span style={{ fontFamily: T.font.body, fontSize: 15, lineHeight: 1.6, color: T.color.inkSoft }}>
                    {item}
                  </span>
                </div>
                <Rule />
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Our Inspiration */}
      <Reveal delay={0.16}>
        <div style={{ marginTop: "clamp(56px, 8vw, 88px)" }}>
          <Label text="Our inspiration" />
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "minmax(0,220px) minmax(0,1fr)",
              gap: "clamp(24px, 5vw, 56px)",
              alignItems: "start",
              marginTop: 24,
            }}
          >
            <div>
              <img
                src={INSPIRATION.photo}
                alt={INSPIRATION.name}
                style={{
                  width: "100%",
                  maxWidth: 220,
                  aspectRatio: "4 / 3",
                  objectFit: "cover",
                  borderRadius: T.radius,
                  border: `1px solid ${T.color.rule}`,
                  display: "block",
                }}
              />
              <div
                style={{
                  fontFamily: T.font.display,
                  fontSize: 17,
                  fontWeight: 600,
                  color: T.color.ink,
                  marginTop: 14,
                  lineHeight: 1.3,
                }}
              >
                {INSPIRATION.name}
              </div>
              <a
                href={INSPIRATION.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  fontFamily: T.font.mono,
                  fontSize: 11,
                  color: T.color.accent,
                  letterSpacing: "0.04em",
                }}
              >
                IET Lucknow faculty page ↗
              </a>
            </div>
            <p
              style={{
                fontFamily: T.font.body,
                fontSize: 16,
                lineHeight: 1.75,
                color: T.color.inkSoft,
                margin: 0,
                maxWidth: "64ch",
              }}
            >
              {INSPIRATION.bio}
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
}
