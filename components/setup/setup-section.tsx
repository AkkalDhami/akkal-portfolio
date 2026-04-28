"use client";

import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { SetupList } from "@/components/setup/setup-list";
import { Section } from "@/components/ui/section";

export function SetupSection() {
  return (
    <Section
      id="setup"
      className="bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.08),transparent),radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.08),transparent)] px-4">
      <div className="screen-line-after pb-4">
        <Heading>My Development Setup</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          My daily development environment, including editor configurations,
          themes, fonts, extensions, and tools designed for efficient and
          maintainable coding.
        </SubHeading>
      </div>

      <SetupList />
    </Section>
  );
}
