import { Section } from "../components/Section";
import { Reveal } from "../components/Reveal";
import { Label } from "../components/Label";
import { T } from "../data/theme";
import { BRAND_NAME } from "../data/constants";
import type { AboutLink } from "../data/constants";
import { AboutSubNav } from "./AboutSubNav";
import { VisionMissionPage } from "./about/VisionMissionPage";
import { FoundersMessagePage } from "./about/FoundersMessagePage";
import { BoardOfDirectorsPage } from "./about/BoardOfDirectorsPage";
import { OurConsultantsPage } from "./about/OurConsultantsPage";
import { CoreTeamPage } from "./about/CoreTeamPage";

export function AboutSection({
  activeAbout,
  setActiveAbout,
  standalone = false,
}: {
  activeAbout: AboutLink;
  setActiveAbout: (sub: AboutLink) => void;
  /** When rendered as its own page, add top padding to clear the fixed navbar. */
  standalone?: boolean;
}) {
  return (
    <div style={{ paddingTop: standalone ? 72 : 0 }}>
      <Section>
        {/* Shared masthead across all four sub-pages */}
        <Reveal>
          <div style={{ marginBottom: 44, maxWidth: "64ch" }}>
            <Label text="About us" />
            <h1
              style={{
                fontFamily: T.font.display,
                fontSize: "clamp(2rem, 4.4vw, 3.2rem)",
                fontWeight: 600,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: T.color.ink,
                margin: "22px 0 20px",
              }}
            >
              The people, principles, and purpose behind {BRAND_NAME}.
            </h1>
            <p style={{ fontFamily: T.font.body, fontSize: 17, lineHeight: 1.75, color: T.color.inkSoft }}>
              We combine applied research, practical education, and advisory leadership to help learners and
              organizations move from AI ambition to AI execution.
            </p>
          </div>
        </Reveal>

        <AboutSubNav active={activeAbout} onChange={setActiveAbout} />

        {/* key remounts the sub-page so reveals replay */}
        <div key={activeAbout}>
          {activeAbout === "Vision & Mission" && <VisionMissionPage />}
          {activeAbout === "Message From Founders" && <FoundersMessagePage />}
          {activeAbout === "Board of Directors" && <BoardOfDirectorsPage />}
          {activeAbout === "Our Consultants" && <OurConsultantsPage />}
          {activeAbout === "Core Team" && <CoreTeamPage />}
        </div>
      </Section>
    </div>
  );
}
