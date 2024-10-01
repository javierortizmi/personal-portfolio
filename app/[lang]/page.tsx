import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SectionDivider from "@/components/section-divider";

export default async function IndexPage() {

  return (
    <main className="flex flex-col px-8 sm:px-0 w-full mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <div className="w-full h-36 sm:h-32" />
      <Intro />
      <SectionDivider />
      <Experience />
      <Projects />
      <Skills />
      <About />
      <Contact />
    </main>
  );
}
