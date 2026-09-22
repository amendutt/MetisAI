import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { HeroSection } from "./pages/HeroSection";
import { AboutTeaser } from "./pages/AboutTeaser";
import { AboutSection } from "./pages/AboutSection";
import { CoursesSection } from "./pages/CoursesSection";
import { ProjectsSection } from "./pages/ProjectsSection";
import { ConsultingSection } from "./pages/ConsultingSection";
import { ContactSection } from "./pages/ContactSection";
import { LogosSection } from "./components/LogosSection";
import { T } from "./data/theme";
import { ABOUT_LINKS } from "./data/constants";
import type { NavLink, AboutLink } from "./data/constants";

export default function App() {
  const [active, setActive] = useState<NavLink>("Home");
  const [activeAbout, setActiveAbout] = useState<AboutLink>(ABOUT_LINKS[0]);
  // Real, measured navbar height (it wraps to more rows on narrow screens),
  // so content always clears it exactly instead of relying on guessed offsets.
  const [navHeight, setNavHeight] = useState(92);

  const scrollTo = (section: NavLink) => {
    setActive(section);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const goToAbout = (sub: AboutLink) => {
    setActiveAbout(sub);
    setActive("About Us");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div style={{ background: T.color.paper, color: T.color.ink }}>
      <Navbar
        active={active}
        setActive={scrollTo}
        activeAbout={activeAbout}
        goToAbout={goToAbout}
        onHeightChange={setNavHeight}
      />

      <main style={{ paddingTop: navHeight }}>
        {active === "Home" && (
          <>
            <HeroSection setActive={scrollTo} />
            <LogosSection />
            <AboutTeaser goToAbout={goToAbout} />
            <CoursesSection />
            <ProjectsSection />
            <ConsultingSection />
            <ContactSection />
          </>
        )}

        {active === "About Us" && (
          <AboutSection activeAbout={activeAbout} setActiveAbout={setActiveAbout} />
        )}
        {active === "Courses" && <CoursesSection />}
        {active === "Projects" && <ProjectsSection />}
        {active === "Consulting" && <ConsultingSection />}
        {active === "Contact" && <ContactSection />}
      </main>

      <Footer setActive={scrollTo} />
    </div>
  );
}
