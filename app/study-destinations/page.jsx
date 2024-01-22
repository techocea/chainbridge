import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className=" h-[380px] w-full overflow-hidden">
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
          <div className="absolute bottom-0 left-16 text-white">
            <h1 className="font-bold text-6xl capitalize">Know us better</h1>;
          </div>
        </div>
      </section>
      <section></section>
    </>
  );
};

export default page;
