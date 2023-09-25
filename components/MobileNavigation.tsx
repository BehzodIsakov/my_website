"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/lib/types";
import clsx from "clsx";
import { useState } from "react";

export default function MobileNavigation({
  navLinks,
}: {
  navLinks: NavLink[];
}) {
  const pathname = usePathname();

  const [isHidden, setIsHidden] = useState(true);

  return (
    <div className='sm:hidden'>
      <button
        // data-collapse-toggle='navbar-hamburger'
        onClick={() => setIsHidden(!isHidden)}
        type='button'
        className='inline-flex items-center justify-center p-2 w-10 h-10 ml-3 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
        aria-controls='navbar-hamburger'
        aria-expanded='false'
      >
        <span className='sr-only'>Open main menu</span>
        <svg
          className='w-5 h-5'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 17 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='M1 1h15M1 7h15M1 13h15'
          />
        </svg>
      </button>
      <div
        className={clsx(
          isHidden && "hidden",
          "fixed left-4 right-4 mt-1 rounded-sm bg-neutral-100 shadow-md"
        )}
        id='navbar-hamburger'
      >
        <ul className='flex flex-col font-medium capitalize'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className={clsx(
                    isActive && "text-indigo-500",
                    "block py-2 pl-3 pr-4"
                  )}
                >
                  {link.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
