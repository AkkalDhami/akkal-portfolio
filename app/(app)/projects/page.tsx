import { Metadata } from "next";
import { ProjectsSection } from "@/components/projects/project-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "A showcase of my recent work in web development, from full-stack applications to component registries."
};

export default function Page() {
  return (
    <div
      className={cn(
        "border-edge mx-auto max-w-4xl border-x pt-18",
        "bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.08),transparent),radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.08),transparent)]"
      )}>
      <ProjectsSection details={false} />
    </div>
  );
}
