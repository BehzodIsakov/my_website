"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavLink } from "@/lib/types";
import clsx from "clsx";
import { useCallback, useEffect, useRef, useState } from "react";

export default function MobileNavigation({
  navLinks,
}: {
  navLinks: NavLink[];
}) {
  const [isHidden, setIsHidden] = useState(true);
  const pathname = usePathname();

  const modalRef = useRef<HTMLDivElement>(null);
  const modalElement = modalRef.current;
  const focusableElements = modalElement
    ? modalElement.querySelectorAll(
        "button, [href], input, select, textarea, [tabindex]:not([tabindex='-1'])"
      )
    : [];

  const firstElement = focusableElements[0];
  const lastElement = focusableElements[focusableElements.length - 1];

  const handleTabKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Tab") {
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    },
    [firstElement, lastElement]
  );

  const handleEscKeyPress = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      setIsHidden(true);
    }
  };

  useEffect(() => {
    modalElement?.addEventListener("keydown", handleTabKeyPress);
    modalElement?.addEventListener("keydown", handleEscKeyPress);

    return () => {
      modalElement?.removeEventListener("keydown", handleTabKeyPress);
      modalElement?.removeEventListener("keydown", handleEscKeyPress);
    };
  }, [modalElement, handleTabKeyPress]);

  useEffect(() => {
    setIsHidden(true);
  }, [pathname]);

  useEffect(() => {
    if (!isHidden) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isHidden]);

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
        ref={modalRef}
        className={clsx(
          isHidden && "hidden",
          "bg-dotted dark:bg-dotted-dark fixed top-0 left-0 right-0 rounded-sm bg-neutral-100 shadow-md min-h-screen"
        )}
        id='navbar-hamburger'
      >
        <div className='bg-indigo-200/10 dark:bg-transparent min-h-screen'>
          <div className='flex justify-end pt-3 pr-3'>
            <button onClick={() => setIsHidden(true)}>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M6 18L18 6M6 6l12 12'
                />
              </svg>
            </button>
          </div>
          <ul className='flex flex-col font-medium text-xl capitalize'>
            <li>
              <Link
                href={"/"}
                className={clsx(
                  pathname === "/" && "text-indigo-500",
                  "block py-2 pl-3 pr-4 text-center"
                )}
              >
                Home
              </Link>
            </li>

            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx(
                      isActive && "text-indigo-500",
                      "block py-2 pl-3 pr-4 text-center"
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
    </div>
  );
}
