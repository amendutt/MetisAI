import { useEffect, useRef, useState } from "react";
import { Wordmark } from "./Wordmark";
import { Button } from "./Button";
import { T } from "../data/theme";
import { NAV_LINKS, ABOUT_LINKS } from "../data/constants";
import type { NavLink, AboutLink } from "../data/constants";

export function Navbar({
  active,
  setActive,
  activeAbout,
  goToAbout,
  onHeightChange,
}: {
  active: NavLink;
  setActive: (section: NavLink) => void;
  activeAbout: AboutLink;
  goToAbout: (sub: AboutLink) => void;
  /** Reports the navbar's real rendered height (it wraps to 2–3 rows on narrow screens), so callers can size content offsets exactly instead of guessing. */
  onHeightChange?: (height: number) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    const el = navRef.current;
    if (!el || !onHeightChange) return;
    const report = () => onHeightChange(el.offsetHeight);
    report();
    const ro = new ResizeObserver(report);
    ro.observe(el);
    window.addEventListener("resize", report);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", report);
    };
  }, [onHeightChange]);

  const linkStyle = (isActive: boolean) => ({
    fontFamily: T.font.mono,
    fontSize: 12,
    letterSpacing: "0.08em",
    textTransform: "uppercase" as const,
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${isActive ? T.color.accent : "transparent"}`,
    color: isActive ? T.color.ink : T.color.inkSoft,
    padding: "6px 2px",
    cursor: "pointer",
    transition: "color 0.2s, border-color 0.2s",
  });

  return (
    <nav
      ref={navRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? "rgba(247,244,239,0.92)" : T.color.paper,
        backdropFilter: scrolled ? "blur(10px)" : "none",
        borderBottom: `1px solid ${scrolled ? T.color.rule : "transparent"}`,
        transition: "border-color 0.3s, background 0.3s",
        padding: "0 6%",
      }}
    >
      <div
        style={{
          maxWidth: T.maxW,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
          minHeight: 92,
          flexWrap: "wrap",
          paddingBlock: 14,
        }}
      >
        <button
          onClick={() => setActive("Home")}
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          aria-label="MetisAI home"
        >
          <Wordmark height={62} />
        </button>

        <div style={{ display: "flex", gap: 22, flexWrap: "wrap", alignItems: "center" }}>
          {NAV_LINKS.map((l) => {
            const isActive = active === l;

            if (l === "About Us") {
              return (
                <div
                  key={l}
                  style={{ position: "relative" }}
                  onMouseEnter={() => setAboutOpen(true)}
                  onMouseLeave={() => setAboutOpen(false)}
                >
                  <button
                    onClick={() => setActive(l)}
                    style={{ ...linkStyle(isActive), display: "inline-flex", alignItems: "center", gap: 6 }}
                  >
                    {l}
                    <span
                      style={{
                        fontSize: 8,
                        color: T.color.inkFaint,
                        transform: aboutOpen ? "rotate(180deg)" : "none",
                        transition: "transform 0.2s",
                      }}
                    >
                      ▼
                    </span>
                  </button>

                  {aboutOpen && (
                    <div
                      style={{
                        position: "absolute",
                        top: "100%",
                        left: 0,
                        marginTop: 8,
                        minWidth: 230,
                        background: T.color.card,
                        border: `1px solid ${T.color.rule}`,
                        borderRadius: T.radius,
                        boxShadow: "0 14px 34px rgba(20,18,16,0.10)",
                        padding: 4,
                      }}
                    >
                      {ABOUT_LINKS.map((sub, i) => {
                        const subActive = active === "About Us" && activeAbout === sub;
                        return (
                          <button
                            key={sub}
                            onClick={() => {
                              goToAbout(sub);
                              setAboutOpen(false);
                            }}
                            style={{
                              display: "flex",
                              alignItems: "center",
                              gap: 10,
                              width: "100%",
                              textAlign: "left",
                              background: "transparent",
                              border: "none",
                              borderTop: i === 0 ? "none" : `1px solid ${T.color.rule}66`,
                              padding: "11px 12px",
                              cursor: "pointer",
                              fontFamily: T.font.body,
                              fontSize: 14,
                              color: subActive ? T.color.accent : T.color.inkSoft,
                              transition: "color 0.15s, background 0.15s",
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.background = T.color.paperAlt;
                              e.currentTarget.style.color = T.color.ink;
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.background = "transparent";
                              e.currentTarget.style.color = subActive ? T.color.accent : T.color.inkSoft;
                            }}
                          >
                            <span
                              style={{
                                fontFamily: T.font.mono,
                                fontSize: 10,
                                color: subActive ? T.color.accent : T.color.inkFaint,
                              }}
                            >
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {sub}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <button key={l} onClick={() => setActive(l)} style={linkStyle(isActive)}>
                {l}
              </button>
            );
          })}

          <Button onClick={() => setActive("Contact")} variant="outline" style={{ padding: "9px 16px" }}>
            Enquire
          </Button>
        </div>
      </div>
    </nav>
  );
}
