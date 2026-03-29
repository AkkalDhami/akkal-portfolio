import { Metadata } from "next";
import { SetupSection } from "@/components/setup/setup-section";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Development Setup",
  description:
    "A detailed look at my development environment, including my IDE setup, themes, fonts, and tools."
};

export default function Page() {
  return (
    <div className={cn("border-edge mx-auto max-w-4xl border-x pt-16")}>
      <SetupSection />
    </div>
  );
}
