import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="w-full relative">
      <div className="h-[78vh] bg-indigo flex gap-4">
        <div>
          <Image
            src="/girl.jpg"
            width={580}
            height={400}
            className="opacity-75 flex-1"
          />
          <h1 className="font-bold text-xl text-blue text-left absolute top-10 left-10 w-1/4">
            Start your
            <span className="border-b-2 border-primary">
              &nbsp;international
            </span>{" "}
            education journey today
          </h1>
        </div>
        <form action="" className="relative flex-1">
          <div className="absolute top-10 w-[600px]  grid grid-cols-4 gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="col-span-2"
            />
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
              placeholder="Latest qualification"
              className="col-span-3"
            />
            <input
              type="text"
              placeholder="Postal Address"
              className="col-span-2"
            />
            <input
              type="text"
              placeholder="Interested area of studies"
              className="col-span-2"
            />
            <input type="text" placeholder="Message" className="col-span-4 " />
            <button className="bg-red-600 p-2 rounded-full text-white font-bold">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
