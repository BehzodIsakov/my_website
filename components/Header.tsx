import Link from "next/link";
import Navigation from "./Navigation";
import { NavLink } from "@/lib/types";
import MobileNavigation from "./MobileNavigation";
import ThemeSwitcher from "./ThemeSwitcher";
import { Nunito } from "next/font/google";

const navLinks: NavLink[] = [
  { name: "about", href: "/about" },
  { name: "projects", href: "/projects" },
  { name: "blog", href: "/posts" },
  { name: "contact", href: "/contact" },
];

const nunito = Nunito({ subsets: ["latin"] });

export default function Header() {
  return (
    <header className='flex justify-between items-center mb-4 sm:mb-8'>
      <Link
        href='/'
        className={`font-semibold text-xl px-2 tracking-wide ${nunito.className}`}
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
    </header>
  );
}
