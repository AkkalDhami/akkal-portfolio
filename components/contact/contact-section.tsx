"use client";

import { Heading } from "@/components/ui/heading";
import { SubHeading } from "@/components/ui/sub-heading";
import { ContactForm } from "@/components/contact/contact-form";
import { ContactInfo } from "@/components/contact/contact-info";

import { Section } from "@/components/ui/section";
import { cn } from "@/lib/utils";

export function ContactSection({ home = false }: { home?: boolean }) {
  return (
    <Section
      id="contact"
      className={cn(
        "px-4",
        home
          ? "screen-line-before pb-4"
          : "bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.05),transparent)] dark:bg-[radial-gradient(35%_128px_at_0%_0%,--theme(--color-foreground/.08),transparent),radial-gradient(35%_128px_at_100%_0%,--theme(--color-foreground/.08),transparent)]",
        "pb-4"
      )}>
      <div className="mb-4">
        <Heading>Let&apos;s Connect</Heading>
        <SubHeading className="text-muted-foreground mx-0 max-w-2xl text-lg">
          Ready to start your next project? Reach out and let&apos;s create
          something amazing together.
        </SubHeading>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <ContactInfo />
        <ContactForm />
      </div>
    </Section>
  );
}
