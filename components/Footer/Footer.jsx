import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-secondary p-6 text-white flex justify-between">
        <div className="flex flex-col gap-2 w-[320px]">
          <Image src="/logo.png" width={150} height={150} />
          <p className="text-justify">
            Chainbridge InternationaL is a higher education consultancy firm who
            has successfully placed students at leading Universities in Sweden
            and Hungary.
          </p>
        </div>
        <div>
          <h1 className="text-center font-bold text-2xl">Quick links</h1>
          <div className="flex flex-col items-center text-center gap-3">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/study-destinations">Study Destinations</Link>
            <Link href="/ielts">IELTS</Link>
            <Link href="/testimonials">Testimonials</Link>
            <Link href="/news">News</Link>
          </div>
        </div>
        <div className="text-right flex flex-col gap-2">
          <h1 className=" font-bold text-2xl">Contact us</h1>
          <p>Colombo</p>
          <p>
            No 26A, Welikadawatte, Nawala Road,
            <br /> Rajagiriya, Sri Lanka
          </p>
          <p>076 97 97 333</p>
          <p>info@chainbridgeintl.lk</p>
        </div>
      </div>
      <div className="py-3 bg-primary text-white font-bold text-center text-sm">
        <p>Developed & Maintained by Oneplace Business Solutions</p>
      </div>
    </>
  );
};

export default Footer;
