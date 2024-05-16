import { LucideMenu, Menu, MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/sheet";

type Props = {};

const paths = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  // { label: "Privacy Policy", href: "/privacy-policy" },
];

const Navbar = (props: Props) => {
  return (
    <nav className="fixed z-50 flex items-center justify-between w-full h-24 px-4 py-10 backdrop-blur-md bg-background bg-opacity-30 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
      <Link href="/">
        <Image
          alt="logo"
          className="cursor-pointer dark:invert"
          src="/logo.svg"
          height={40}
          width={80}
        />
      </Link>
      <div className="hidden gap-1 md:gap-2 lg:gap-4 md:flex">
        {paths.map((path) => {
          return (
            <Link key={path.href} href={path.href}>
              <Button variant="ghost" className="font-semibold text-md">
                {path.label}
              </Button>
            </Link>
          );
        })}
      </div>
      <div className="hidden md:flex">
        <ModeToggle />
      </div>
      <Sheet>
        <SheetTrigger className="block p-3 md:hidden">
          <span className="text-2xl text-slate-950 dark:text-slate-200">
            <LucideMenu />
          </span>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetDescription>
              <div className="flex flex-col w-full h-full">
                {paths.map((path) => (
                  <SheetTrigger asChild key={path.href}>
                    <Link href={path.href}>
                      <Button
                        variant="link"
                        className="w-full font-semibold text-md"
                      >
                        {path.label}
                      </Button>
                    </Link>
                  </SheetTrigger>
                ))}
                <ModeToggle />
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
