import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className=" h-28 flex">
      <div className="bg-secondary w-32">
        <Image src="/logo.png" width={120} height={120} />
      </div>
      <div className="flex items-center justify-around w-full text-blue font-bold">
        <Link href="/" className="border-b-[3px] border-red-700 text-red-700">
          Home
        </Link>
        <Link href="/about">About us</Link>
        <Link href="/study-destinations">Study Destinations</Link>
        <Link href="/ielts">IELTS</Link>
        <Link href="/testimonials">Testimonials</Link>
        <Link href="/news">News</Link>
      </div>
    </header>
  );
};

export default Header;
