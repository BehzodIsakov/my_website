"use client";

import { useState } from "react";
import Link from "next/link";
import { Nunito } from "next/font/google";
import clsx from "clsx";

import Navigation from "./Navigation";
import { NavLink } from "@/lib/types";
import MobileNavigation from "./MobileNavigation";
import ThemeSwitcher from "./ThemeSwitcher";

const navLinks: NavLink[] = [
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/posts" },
  { name: "contact", href: "/contact" },
];

const nunito = Nunito({ subsets: ["latin"] });

export default function Header() {
  const [isSticky, setIsSticky] = useState(false);

  // useEffect(() => {
  //   function handleScroll() {
  //     setIsSticky(window.scrollY > 140);
  //   }

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header
      className={`py-7 transition-all duration-300 ${clsx(
        isSticky &&
          "fixed top-0 w-full backdrop-blur-xl bg-white/80 dark:bg-blue-500/10 shadow-lg"
      )}`}
    >
      <div className='flex justify-between items-center mx-auto'>
        <Link
          href='/'
          className={`font-semibold text-xl tracking-wide underline ${nunito.className}`}
        >
          Bekzod Isakov
        </Link>
        <div className='flex items-center'>
          <Navigation navLinks={navLinks} />
          <div className='w-6 ml-10 mr-4'>
            <ThemeSwitcher />
          </div>
          <MobileNavigation navLinks={navLinks} />
        </div>
      </div>
    </header>
  );
}
