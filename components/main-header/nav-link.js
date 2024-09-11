"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ href, children }) {
  const path = usePathname();
  console.log(href, path.startsWith(href));
  return (
    <li className={path.startsWith(href) ? "active" : undefined}>
      <Link href={href}>{children}</Link>
    </li>
  );
}

export default NavLink;
