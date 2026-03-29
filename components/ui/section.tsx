import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      {...props}
      className={cn("screen-line-after px-0 pt-4", className)}>
      {children}
    </section>
  );
}
