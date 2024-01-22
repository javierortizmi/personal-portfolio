"use client";

import React from "react";

import Project from "@/components/project";
import { useSectionInView } from "@/lib/hooks";
import SectionHeading from "@/components/section-heading";
import { useDictionary } from "@/context/dictionary-context";

export default function Projects() {
  const { dictionary } = useDictionary();
  const { ref } = useSectionInView(dictionary.links[1].name, 0.4);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>{dictionary.projectsData.title}</SectionHeading>
      <div>
        {dictionary.projectsData.projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
