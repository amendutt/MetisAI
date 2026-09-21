import { useState } from "react";
import { Section, SectionHeading } from "../components/Section";
import { Reveal, Rule } from "../components/Reveal";
import { Button } from "../components/Button";
import { T, labelStyle } from "../data/theme";
import type { ContactForm } from "../data/constants";

const INTERESTS = [
  ["course", "Courses"],
  ["project", "Projects"],
  ["consulting", "Consulting"],
] as const;

export function ContactSection() {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", type: "course", message: "" });
  const [sent, setSent] = useState(false);
  const [touched, setTouched] = useState(false);

  const missing = !form.name || !form.email || !form.message;

  const handleSubmit = () => {
    setTouched(true);
    if (!missing) setSent(true);
  };

  const inputStyle = {
    width: "100%",
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${T.color.rule}`,
    padding: "10px 0",
    fontFamily: T.font.body,
    fontSize: 16,
    color: T.color.ink,
    outline: "none",
    boxSizing: "border-box" as const,
  };

  return (
    <Section alt>
      <SectionHeading
        eyebrow="Contact"
        title="Start where you are."
        intro="Enrolling in a course, joining a project, or scoping an engagement — tell us which and we'll route it to the right person."
        accent={T.color.ink}
      />

      <div style={{ maxWidth: 680 }}>
        {sent ? (
          <Reveal>
            <div style={{ padding: "48px 0" }}>
              <Rule />
              <div style={{ padding: "40px 0" }}>
                <div style={{ ...labelStyle, color: T.color.accent }}>Received</div>
                <h3
                  style={{
                    fontFamily: T.font.display,
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    fontWeight: 600,
                    color: T.color.ink,
                    margin: "16px 0 12px",
                  }}
                >
                  Thanks, {form.name.split(" ")[0]}.
                </h3>
                <p style={{ fontFamily: T.font.body, fontSize: 16, lineHeight: 1.7, color: T.color.inkSoft }}>
                  Our team replies within one working day.
                </p>
                <div style={{ marginTop: 26 }}>
                  <Button
                    variant="quiet"
                    onClick={() => {
                      setSent(false);
                      setTouched(false);
                      setForm({ name: "", email: "", type: "course", message: "" });
                    }}
                  >
                    Send another
                  </Button>
                </div>
              </div>
              <Rule />
            </div>
          </Reveal>
        ) : (
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 32 }}>
              <div>
                <label style={{ ...labelStyle, display: "block", marginBottom: 4 }}>Your name</label>
                <input
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Ravi Kumar"
                  style={inputStyle}
                />
              </div>
              <div>
                <label style={{ ...labelStyle, display: "block", marginBottom: 4 }}>Email</label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="ravi@email.com"
                  style={inputStyle}
                />
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <label style={{ ...labelStyle, display: "block", marginBottom: 14 }}>I'm interested in</label>
              <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
                {INTERESTS.map(([val, label]) => {
                  const on = form.type === val;
                  return (
                    <button
                      key={val}
                      onClick={() => setForm({ ...form, type: val })}
                      style={{
                        background: "none",
                        border: "none",
                        padding: "0 0 8px",
                        cursor: "pointer",
                        fontFamily: T.font.body,
                        fontSize: 16,
                        color: on ? T.color.ink : T.color.inkFaint,
                        borderBottom: `2px solid ${on ? T.color.accent : "transparent"}`,
                        transition: "color 0.2s, border-color 0.2s",
                      }}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>
            </div>

            <div style={{ marginTop: 36 }}>
              <label style={{ ...labelStyle, display: "block", marginBottom: 4 }}>Message</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell us about your goals or requirements."
                rows={4}
                style={{ ...inputStyle, resize: "vertical", fontFamily: T.font.body }}
              />
            </div>

            {touched && missing && (
              <p
                style={{
                  fontFamily: T.font.mono,
                  fontSize: 11,
                  letterSpacing: "0.06em",
                  color: T.color.accent,
                  marginTop: 20,
                }}
              >
                Add your name, email, and a message to send.
              </p>
            )}

            <div style={{ marginTop: 40 }}>
              <Button onClick={handleSubmit}>Send message</Button>
            </div>
          </Reveal>
        )}
      </div>
    </Section>
  );
}
