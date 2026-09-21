# MetisAI

Editorial-themed rebuild. Same content, different visual system.

## Run

    npm install
    npm run dev

## Structure

    index.html
    src/
      main.tsx              entry point
      index.css             global styles (focus, selection, reduced-motion)
      App.tsx               routing
      data/
        theme.ts            design tokens — change the look here
        constants.ts        brand, nav, About links, types
        courses.ts
        projects.ts
        about.ts
      components/
        Wordmark.tsx        typographic logo (no image asset needed)
        Reveal.tsx          scroll reveal + self-drawing Rule divider
        Label.tsx           Label + Tag primitives
        Button.tsx          solid / outline / quiet
        Section.tsx         page band + heading
        Navbar.tsx          with About Us dropdown
        LogosSection.tsx    industry partner / collaborator logos
        ConsultantsRoster.tsx
        Footer.tsx
        useInView.ts
      pages/
        HeroSection.tsx
        AboutTeaser.tsx     home-page About summary
        AboutSection.tsx    About shell, routes the 4 sub-pages
        AboutSubNav.tsx
        CoursesSection.tsx
        ProjectsSection.tsx
        ConsultingSection.tsx
        ContactSection.tsx
        about/
          VisionMissionPage.tsx
          FoundersMessagePage.tsx
          BoardOfDirectorsPage.tsx
          OurConsultantsPage.tsx

## Notes

No logo image required — the wordmark is typeset. To restyle the whole
site, edit `src/data/theme.ts`; every color and typeface derives from it.
