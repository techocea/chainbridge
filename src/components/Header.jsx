import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header className="flex items-center justify-between shadow-lg shadow-slate-300">
      <div>
        <Link href="/">
          <Image src="/logoColor.png" width={150} height={150} alt="logo" />
        </Link>
      </div>
      <nav className="flex items-center w-full justify-evenly font-bold max-md:hidden">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/study-destinations">Study Destinations</Link>
        <Link href="/news">News</Link>
        <Link href="/testimonials">Testimonials</Link>
      </nav>
    </header>
  );
}

export default Header;
