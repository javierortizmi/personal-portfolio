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
      
      <div className="w-full h-36 sm:h-28" />
      <Intro dictionary={dictionary} />
      <SectionDivider />
      <About dictionary={dictionary} />
      <Projects dictionary={dictionary} />
      <Skills dictionary={dictionary} />
      <Experience dictionary={dictionary} />
      <Contact dictionary={dictionary} />
    </main>
  );
}
