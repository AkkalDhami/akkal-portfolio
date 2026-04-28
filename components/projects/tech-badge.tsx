import { cn } from "@/lib/utils";

export interface Tech {
  name: string;
}

export function TechBadge({
  children,
  className
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        `from-background rounded-primary to-card-hover primary-ring text-accent-foreground relative mx-0.5 inline-flex items-center border border-neutral-300 bg-linear-to-r px-2 py-1 text-base dark:border-neutral-700`,
        className
      )}>
      {children}
    </div>
  );
}
