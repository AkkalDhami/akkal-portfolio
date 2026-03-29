import { Metadata } from "next";
import { ContactSection } from "@/components/contact/contact-section";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Akkal Dhami for collaborations, inquiries, or just to say hi."
};

export default function Page() {
  return (
    <div className="border-edge mx-auto max-w-4xl border-x pt-16">
      <ContactSection />
    </div>
  );
}
