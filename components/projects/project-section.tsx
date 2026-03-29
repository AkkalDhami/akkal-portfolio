"use client";

import { motion } from "motion/react";
import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { PROJECTS } from "@/data/projects";
import { ProjectCard } from "@/components/projects/project-card";
import { PrimaryButton } from "@/components/ui/primary-button";
import { Section } from "../ui/section";
import { cn } from "@/lib/utils";

const fadeInUp = {
  initial: { y: 40, opacity: 0 },
  animate: { y: 0, opacity: 1 }
};

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short"
  });
};

export function ProjectsSection({
  details = false,
  home = false
}: {
  details?: boolean;
  home?: boolean;
}) {
  return (
    <Section
      id="projects"
      className={cn(
        home
          ? "screen-line-before"
          : "bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.08),transparent),radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.08),transparent)]"
      )}>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="mb-4 px-4">
        <Heading> Featured Projects</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          A collection of projects that showcase my skills in modern web
          development and problem-solving capabilities.
        </SubHeading>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="screen-line-after grid grid-cols-1">
        {(home ? PROJECTS.slice(0, 7) : PROJECTS).map(project => (
          <motion.div key={project.slug} variants={fadeInUp} className="group">
            <ProjectCard project={project} details={details} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
