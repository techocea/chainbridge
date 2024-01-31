"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Study Destinations", href: "/study-destinations" },
  { name: "News", href: "/news" },
  { name: "Testimonials", href: "/testimonials" },
];

function Header() {
  const pathname = usePathname();
  return (
    <header className="fixed w-full border-b  border-slate-400 bg-white z-10 flex items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="/logoColor.png"
            width={150}
            height={150}
            alt="logo"
            className="max-md:w-[100px]"
          />
        </Link>
      </div>
      <nav className="flex items-center w-full justify-evenly font-bold max-md:hidden">
        {links.map((link, idx) => {
          return (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  className="text-lg font-bold text-red-600 border-b-[4px] border-red-600"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-slate-800 hover:text-red-600 transition duration-100 hover:border-b-[4px] hover:border-red-600"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          );
        })}
      </nav>
    </header>
  );
}

export default Header;
