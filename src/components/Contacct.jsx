import Image from "next/image";
import React from "react";

function Contacct() {
  return (
    <div className="h-[75vh] max-md:h-auto max-md:p-0 p-8 max-md:gap-8 flex max-md:flex-col bg-gradient-to-r max-md:bg-gradient-to-b from-fuchsia-200 to-primary">
      <div className="flex-1">
        <Image
          src="/lady.jpg"
          width={600}
          height={600}
          className="max-md:w-screen"
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="lady"
        />
      </div>
      <div className="flex-1 grid grid-cols-4 max-md:grid-cols-1 gap-3 max-md:px-8 max-md:pb-8">
        <input
          type="text"
          placeholder="First Name"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="email"
          placeholder="Email Address"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Mobile No"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Age"
          className="col-span-1 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Latest Qualification"
          className="col-span-3 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Post Address"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Interested area of studies"
          className="col-span-2 max-md:col-span-full"
        />
        <input
          type="text"
          placeholder="Message"
          className="col-span-4 max-md:col-span-full"
        />
        <button className="bg-gradient-to-r from-pink-600 to-secondary text-white font-semibold p-2 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contacct;
