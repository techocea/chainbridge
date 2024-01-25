import Image from "next/image";
import React from "react";

function Contacct() {
  return (
    <div className="h-[75vh] p-8 flex bg-fuchsia-200">
      <div className="flex-1">
        <Image
          src="/lady.jpg"
          width={600}
          height={600}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
          alt="lady"
        />
      </div>
      <div className="flex-1 grid grid-cols-4 gap-3">
        <input type="text" placeholder="First Name" className="col-span-2" />
        <input type="text" placeholder="Last Name" className="col-span-2" />
        <input
          type="email"
          placeholder="Email Address"
          className="col-span-2"
        />
        <input type="text" placeholder="Mobile No" className="col-span-2" />
        <input type="text" placeholder="Age" className="col-span-1" />
        <input
          type="text"
          placeholder="Latest Qualification"
          className="col-span-3"
        />
        <input type="text" placeholder="Post Address" className="col-span-2" />
        <input
          type="text"
          placeholder="Interested area of studies"
          className="col-span-2"
        />
        <input type="text" placeholder="Message" className="col-span-4" />
        <button className="bg-gradient-to-r from-pink-600 to-secondary text-white font-semibold p-2 rounded-full">
          Submit
        </button>
      </div>
    </div>
  );
}

export default Contacct;
