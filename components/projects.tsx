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
  const { ref } = useSectionInView("Projects", 0.4);

  return (
    <section id="projects" ref={ref} className="mb-28 scroll-mt-28">
      <SectionHeading>My projects</SectionHeading>
      <div>
        {dictionary.projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project project={project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
