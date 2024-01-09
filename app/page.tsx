import About from "@/components/about";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDivider from "@/components/section-divider";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-8 sm:px-0 w-full mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </main>
  );
}
