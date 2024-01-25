import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative">
      <Image
        src="/canada.jpg"
        width={1400}
        height={800}
        style={{
          maxWidth: "100%",
          height: "100vh",
        }}
        alt="hero Bg"
      />
      <div className="absolute top-[290px] left-10 w-1/2 leading-[69px] h-auto">
        <h1 className="font-bold text-white text-6xl bg-gradient-to-r from-purple to-blue mix-blend p-4">
          Canada intake for 2024 - September
        </h1>
      </div>
    </div>
  );
}

export default Hero;
