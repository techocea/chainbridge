import { aboutData, messageData } from "@/data";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <>
      <section className=" h-[550px] w-full overflow-hidden">
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
      <section className="h-full bg-primary p-5">
        <div className="flex items-center justify-center">
          <div className="flex-1">
            <Image src="/logo.png" width={200} height={200} />
          </div>
          <div className="flex flex-[2] flex-col gap-4">
            {aboutData.map((about) => (
              <div key={about}>
                <p className="text-white text-[16px]">{about}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white flex flex-col gap-4 items-center p-8">
        {messageData.map((message, index) => (
          <>
            <h1 className="font-bold text-2xl text-primary text-center">
              {message.title}
            </h1>
            <p key={index} className="text-slate-600 text-left">
              {message.messages}
            </p>
            <h1 className="text-slate-600 text-center">{message.wish}</h1>
            <h1 className="text-slate-600 font-bold text-center">
              {message.bossName}
            </h1>
            <p className="text-slate-600 text-center">{message.bossTitle}</p>
          </>
        ))}
      </section>
    </>
  );
};

export default page;
