import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import Contact from "@/components/contact";
import Projects from "@/components/projects";
import Experience from "@/components/experience";
import SectionDivider from "@/components/section-divider";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/get-dictionary";

export default async function IndexPage({
  params: { lang },
}: {
  params: { lang: Locale };
}) {
  const dictionary = await getDictionary(lang);

  return (
    <main className="flex flex-col px-8 sm:px-0 w-full mx-auto max-w-md sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <p>Current locale: {lang}</p>
      <p>
        {dictionary.experiencesData[1].title}
      </p>
      <Intro />
      <SectionDivider />
      <About />
      <Projects dictionary={dictionary} />
      <Skills />
      <Experience dictionary={dictionary} />
      <Contact />
    </main>
  );
}
