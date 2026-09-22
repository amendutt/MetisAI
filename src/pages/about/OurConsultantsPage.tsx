import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { TeamRoster } from "../../components/TeamRoster";
import { T } from "../../data/theme";
import { CONSULTANTS } from "../../data/about";

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
            Advisors from the Central Research Laboratory, Bharat Electronics Limited.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
            Our consultants bring AI and Data Science research from a national defense research
            institution directly into practical, deployable systems.
          </p>
        </div>
      </Reveal>

      <Rule />
      <TeamRoster members={CONSULTANTS} />
    </>
  );
}
