import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { ConsultantsRoster } from "../../components/ConsultantsRoster";
import { T } from "../../data/theme";

export function OurConsultantsPage() {
  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 48, maxWidth: "62ch" }}>
          <Label text="Our consultants" />
          <h2
            style={{
              fontFamily: T.font.display,
              fontSize: "clamp(1.8rem, 3.6vw, 2.8rem)",
              fontWeight: 600,
              lineHeight: 1.14,
              letterSpacing: "-0.02em",
              color: T.color.ink,
              margin: "20px 0 18px",
            }}
          >
            Advisors who strengthen delivery from strategy to deployment.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
            From AI architecture to healthcare analytics and LLM systems, our consultant network supports
            practical execution at every stage.
          </p>
        </div>
      </Reveal>

      <Rule />
      <ConsultantsRoster />
    </>
  );
}
