"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav__Link({ link, children }) {
  const path = usePathname();

  return (
    <button disabled={path === link}>
      <Link href={link}>{children}</Link>
    </button>
  );
}
