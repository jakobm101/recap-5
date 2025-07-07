import Link from "next/link";

export default function Nav__Link({ link, children}) {
  return <Link href={link}>{children}</Link>;
}
