"use client";

import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import {
  BACKEND_STACKS,
  DATABASE_STACKS,
  FRONTEND_STACKS,
  TOOLS_STACKS
} from "@/utils/stack";
import { SkillCategoryCard } from "./skill-category";
import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

const skills = [
  {
    title: "Frontend",
    description: "Modern frontend technologies and frameworks",
    stacks: FRONTEND_STACKS
  },
  {
    title: "Backend",
    description: "Server-side technologies and runtime environments",
    stacks: BACKEND_STACKS
  },
  {
    title: "Database",
    description: "Database management systems and data storage",
    stacks: DATABASE_STACKS
  },
  {
    title: "Tools",
    description: "Development tools and technologies",
    stacks: TOOLS_STACKS
  }
];

export function SkillsSection({ home = false }: { home?: boolean }) {
  return (
    <Section id="skills" className={cn(home && "screen-line-before")}>
      <div className="mb-4 px-4">
        <Heading>Skills & Technologies</Heading>
        <SubHeading className="mx-0 max-w-2xl">
          A collection of skills and technologies that I have acquired over the
          years.
        </SubHeading>
      </div>

      <div className="screen-line-before grid grid-cols-1">
        {skills.map((skill, index) => (
          <SkillCategoryCard key={index} {...skill} />
        ))}
      </div>
    </Section>
  );
}
