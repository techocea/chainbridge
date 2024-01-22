import React from "react";

const Students = () => {
  return (
    <div className="flex m-3 shadow-2xl">
      <div className="flex flex-col flex-[2] items-start gap-3 text-justify  p-4 text-white bg-secondary">
        <p>
          I would highly recommend Chainbridge International if you ever wanted
          to study in Australia. I've planned to go to Australia to do nursing,
          they've provided me the best service to overcome this. I've had no
          complications at all during the whole process. I received my visa just
          within a day. Thanks Emergence Education for all your support.
        </p>
        <h1 className="font-bold text-2xl">John Doe</h1>
        <p className="font-bold text-xl">Sweden university</p>
      </div>
      <div className="flex flex-col flex-1 items-center justify-center bg-white">
        <p className="text-4xl p-4 text-center text-slate-800">
          Hear from our own students
        </p>
        <button className="bg-red-500 text-white font-bold rounded-full py-2 px-3">
          View More
        </button>
      </div>
      <div className="flex flex-col flex-[2] items-start gap-3 text-justify p-4 text-white bg-secondary">
        <p>
          I would highly recommend Chainbridge International if you ever wanted
          to study in Australia. I've planned to go to Australia to do nursing,
          they've provided me the best service to overcome this. I've had no
          complications at all during the whole process. I received my visa just
          within a day. Thanks Emergence Education for all your support.
        </p>
        <h1 className="font-bold text-2xl">John Doe</h1>
        <p className="font-bold text-xl">Hungary university</p>
      </div>
    </div>
  );
};

export default Students;
