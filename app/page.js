"use client";

import dynamic from "next/dynamic";
import { personalData } from "@/utils/data/personal-data";

// Import components dynamically to handle client-side rendering
const HeroSection = dynamic(
  () => import("./components/homepage/hero-section"),
  {
    ssr: false,
  }
);
const AboutSection = dynamic(() => import("./components/homepage/about"), {
  ssr: false,
});
const Experience = dynamic(() => import("./components/homepage/experience"), {
  ssr: false,
});
const Skills = dynamic(() => import("./components/homepage/skills"), {
  ssr: false,
});
const Projects = dynamic(() => import("./components/homepage/projects"), {
  ssr: false,
});
const Education = dynamic(() => import("./components/homepage/education"), {
  ssr: false,
});
const Blog = dynamic(() => import("./components/homepage/project"), {
  ssr: false,
});
const ContactSection = dynamic(() => import("./components/homepage/contact"), {
  ssr: false,
});

// Your page component
export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Skills />
      <Projects />
      <Blog />
      <Education />
      <ContactSection />
    </>
  );
}
