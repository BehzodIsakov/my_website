import Link from "next/link";
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

export default function Header() {
  return (
    <header className='flex justify-between items-center mb-8'>
      <Link href='/' className='font-medium text-lg px-2'>
        Bekzod Isakov
      </Link>
      <div className='flex items-center'>
        <Navigation navLinks={navLinks} />
        <div className='w-24 ml-10 mr-4'>
          <ThemeSwitcher />
        </div>
        <MobileNavigation navLinks={navLinks} />
      </div>
    </header>
  );
}
