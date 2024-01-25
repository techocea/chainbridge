import Image from "next/image";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-primary p-8 text-white flex  justify-between">
      <div>
        <Image src="/logo.png" width={150} height={150} alt="footerLogo" />
      </div>
      <div className="flex flex-col gap-4 text-center">
        <h1 className="font-bold text-[22px] uppercase">Quick links</h1>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/study-destinations">Study Destinations</Link>
        <Link href="/news">News</Link>
        <Link href="/testimonials">Testimonials</Link>
      </div>
      <div className="text-right flex flex-col gap-2">
        <h1 className="font-bold text-[22px] uppercase">Contact us</h1>
        <p>
          <span className="font-medium">Colombo</span>
          <br />
          No 26A, Welikadawatte, Nawala Road,
          <br />
          Rajagiriya, Sri Lanka
          <br />
          076 97 97 333
        </p>
        <hr />
      </div>
    </div>
  );
}

export default Footer;
