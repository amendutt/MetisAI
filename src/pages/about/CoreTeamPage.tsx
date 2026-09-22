import { Reveal, Rule } from "../../components/Reveal";
import { Label } from "../../components/Label";
import { TeamRoster } from "../../components/TeamRoster";
import { T } from "../../data/theme";
import { CORE_TEAM } from "../../data/about";

export function CoreTeamPage() {
  return (
    <>
      <Reveal>
        <div style={{ marginBottom: 48, maxWidth: "62ch" }}>
          <Label text="Core team" />
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
            Researchers and engineers building the work day to day.
          </h2>
          <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
            From generative and agentic AI to robotics, cybersecurity, and optical networking, our core
            team spans research institutions including IIT Roorkee, IIT Jammu, NIT Trichy, and NIT
            Surathkal.
          </p>
        </div>
      </Reveal>

      <Rule />
      <TeamRoster members={CORE_TEAM} />
    </>
  );
}
