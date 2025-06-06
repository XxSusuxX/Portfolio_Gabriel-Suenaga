import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";
import Skills from "@/components/skills";
import Services from "@/components/services";
import Recommendations from "@/components/recommendations";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro/>
      <SectionDivider/>
      <About/>
      <SectionDivider/>
      <Projects/>
      <SectionDivider/>
      <Services/>
      <Recommendations />
      <Skills/>
      <Experience/>
      <Contact/>
      <Analytics/>
    </main>
  )
}
