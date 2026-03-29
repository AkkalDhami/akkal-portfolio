import Image from "next/image";
import Link from "next/link";
import { CornerMarkers } from "../ui/corner-markers";

export function Profile() {
  return (
    <Link href="/" className="group relative flex items-center justify-center">
      <Image
        src="/images/profile.jpg"
        alt="Profile"
        width={50}
        height={50}
        className="primary-ring rounded-primary size-10 object-cover object-left p-0.5"
      />
      <CornerMarkers offset={5} hoverOffset={4} />
    </Link>
  );
}
