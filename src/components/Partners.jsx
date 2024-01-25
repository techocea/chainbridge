import Image from "next/image";
import React from "react";

function Partners() {
  return (
    <div className="flex flex-col gap-4 mx-auto p-10">
      <h1 className="font-bold text-center text-3xl text-blue">
        Partner Universities & Colleges
      </h1>
      <div className="flex">
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="font-semibold text-xl text-primary">Sweden</h1>
          <div className="flex justify-between items-center">
            <Image
              src="/uni-logo-1.png"
              width={150}
              height={100}
              alt="uni-logo-1"
              style={{
                width: "auto",
                height: "80%",
                objectFit: "cover",
              }}
            />
            <Image
              src="/uni-logo-2.jpg"
              width={150}
              height={100}
              alt="uni-logo-2"
              style={{
                width: "auto",
                height: "30%",
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center">
          <h1 className="font-semibold text-xl text-primary">Hungary</h1>
          <div className="flex items-center justify-between">
            <div className="flex gap-4">
              <Image
                src="/uni-logo-3.jpg"
                width={150}
                height={100}
                alt="uni-logo-3"
                style={{
                  width: "auto",
                  height: "80%",
                  objectFit: "cover",
                }}
              />
              <Image
                src="/uni-logo-4.jpg"
                width={150}
                height={100}
                alt="uni-logo-4"
                style={{
                  width: "auto",
                  height: "70%",
                  objectFit: "cover",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;
