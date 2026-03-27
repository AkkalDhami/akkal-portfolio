import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section {...props} className={cn("px-4 pt-4", className)}>
      {children}
    </section>
  );
}
