import { Wordmark } from "./Wordmark";
import { T } from "../data/theme";
import { NAV_LINKS, BRAND_TAGLINE, BRAND_NAME } from "../data/constants";
import type { NavLink } from "../data/constants";

export function Footer({ setActive }: { setActive: (section: NavLink) => void }) {
  const colTitle = {
    fontFamily: T.font.mono,
    fontSize: 10,
    letterSpacing: "0.14em",
    textTransform: "uppercase" as const,
    color: "#8A8279",
    marginBottom: 18,
  };

  return (
    <footer style={{ background: T.color.ink, padding: "72px 6% 32px" }}>
      <div style={{ maxWidth: T.maxW, margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 48,
            paddingBottom: 48,
          }}
        >
          <div style={{ gridColumn: "span 2", minWidth: 240 }}>
            <Wordmark size={24} onDark />
            <p
              style={{
                fontFamily: T.font.body,
                fontSize: 15,
                lineHeight: 1.7,
                color: "#9A9289",
                maxWidth: "38ch",
                marginTop: 22,
              }}
            >
              {BRAND_TAGLINE} Bridging the gap between academic research and real-world AI applications.
            </p>
          </div>

          <div>
            <div style={colTitle}>Navigate</div>
            {NAV_LINKS.map((l) => (
              <div key={l} style={{ marginBottom: 10 }}>
                <button
                  onClick={() => setActive(l)}
                  style={{
                    background: "none",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    fontFamily: T.font.body,
                    fontSize: 14,
                    color: "#9A9289",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = T.color.paper)}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#9A9289")}
                >
                  {l}
                </button>
              </div>
            ))}
          </div>

          <div>
            <div style={colTitle}>Contact</div>
            {["hello@metisai.ai", "+91 98765 43210", "Lucknow, UP, India"].map((t) => (
              <div
                key={t}
                style={{ fontFamily: T.font.body, fontSize: 14, color: "#9A9289", marginBottom: 10 }}
              >
                {t}
              </div>
            ))}
          </div>
        </div>

        <div style={{ height: 1, background: "#2E2A26" }} />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 12,
            paddingTop: 24,
            fontFamily: T.font.mono,
            fontSize: 11,
            letterSpacing: "0.06em",
            color: "#6E6862",
          }}
        >
          <span>© {new Date().getFullYear()} {BRAND_NAME}</span>
          <span>Built for the AI-first future</span>
        </div>
      </div>
    </footer>
  );
}
