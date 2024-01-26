import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative">
      <Image
        src="/canada.jpg"
        width={1400}
        height={800}
        className="max-md:w-screen max-md:h-auto object-cover"
        style={{
          maxWidth: "100%",
          height: "100vh",
        }}
        alt="hero Bg"
      />
      <div className="absolute top-[290px] left-10 w-1/2 max-md:w-[290px] leading-[69px] h-auto">
        <h1 className="font-bold text-white text-6xl max-md:text-4xl bg-gradient-to-r from-purple to-blue mix-blend p-4">
          Canada intake for 2024 - September
        </h1>
      </div>
    </div>
  );
}

export default Hero;
