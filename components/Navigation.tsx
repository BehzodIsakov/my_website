"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/lib/types";

export default function Navigation({ navLinks }: { navLinks: NavLink[] }) {
  const pathname = usePathname();
  return (
    <div className='hidden sm:block capitalize'>
      <ul className=' flex justify-between gap-4'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href;

          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className={isActive ? "text-indigo-500" : "initial"}
              >
                {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
