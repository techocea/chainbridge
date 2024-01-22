import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className=" h-[550px] w-full overflow-hidden">
      <div className="relative">
        <Image
          src="/canadian.jpg"
          width={1440}
          height={440}
          alt="canadabg"
          className="w-full h-full object-cover z-[-10]"
          layout="responsive"
        />
        <div className="w-[1440px] h-[440px] bg-orange-500/25 z-10"></div>
        <div className="absolute top-28 left-16 text-white">
          <h1 className="font-bold text-6xl capitalize">
            canadian university placements
          </h1>
          <h6 className="font-bold text-4xl capitalize py-10">
            Apply after o/l,a/l or undergraduate
          </h6>
          <p className="font-normal text-xl">
            Apply now for 2024 january intake
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
