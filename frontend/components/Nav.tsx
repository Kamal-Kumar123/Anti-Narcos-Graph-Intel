"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Ask" },
  { href: "/graph", label: "Network" },
  { href: "/cases", label: "Cases" },
  { href: "/risk", label: "Risk flags" },
  { href: "/discover", label: "OSINT" },
  { href: "/ingest", label: "Ingest" },
];

export function Nav() {
  const path = usePathname();
  return (
    <aside className="nav">
      <div className="brand">
        <div className="mark">
          <span>NG</span>
        </div>
        <div>
          <h1>Narco-Graph</h1>
          <p>Intel console</p>
        </div>
      </div>
      {LINKS.map((link) => (
        <Link key={link.href} href={link.href} className={path === link.href ? "active" : ""}>
          {link.label}
        </Link>
      ))}
      <div className="grow" />
      <div className="meta">Answers come only from ingested reporting. Flags are not findings of guilt.</div>
    </aside>
  );
}
