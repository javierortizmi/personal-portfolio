"use client";

import React from "react";

import { useSectionInView } from "@/lib/hooks";

import Project from "@/components/project";
import SectionHeading from "@/components/section-heading";
import { Dictionary } from "@/lib/types";

export default function Projects({
  dictionary,
}: {
  dictionary: Dictionary;
}) {
  const { ref } = useSectionInView(dictionary.links[2].name, 0.4);

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
