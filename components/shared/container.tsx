import React from "react";

export function Container({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`animate-fade-in-blur container mx-auto max-w-3xl ${className}`}
      {...props}>
      {children}
    </div>
  );
}
