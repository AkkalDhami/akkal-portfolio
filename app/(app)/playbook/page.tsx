import { PlaybookSection } from "@/components/playbook/playbook-section";
import { cn } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Playbook",
  description:
    "Explore our comprehensive playbook, featuring best practices, strategies, and guidelines to help you excel in your projects and initiatives."
};

export default function Page() {
  return (
    <div
      className={cn(
        "border-edge mx-auto max-w-4xl border-x pt-16"
        // "bg-[radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.08),transparent),radial-gradient(35%_128px_at_0%_100%,--theme(--color-foreground/.08),transparent)]"
      )}>
      <PlaybookSection />
    </div>
  );
}
