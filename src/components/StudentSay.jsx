import React from "react";

function StudentSay() {
  return (
    <div className="flex max-md:flex-col flex-[2,1,2] h-[290px] max-md:h-auto shadow-2xl shadow-slate-400 m-8 max-md:m-auto">
      <div className="bg-primary flex flex-col justify-between p-4 text-white">
        <p>
          I would highly recommend Emergence Education if you ever wanted to
          study in Australia. I've planned to go to Australia to do nursing,
          they've provided me the best service to overcome this. I've had no
          complications at all during the whole process. I received my visa just
          within a day. Thanks Emergence Education for all your support.
        </p>
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p>Deakin University</p>
      </div>
      <div className="bg-white flex flex-col gap-4 p-10 items-center justify-center">
        <p className="capitalize text-center text-xl">
          Hear from our own students
        </p>
        <button className="p-2 w-[100px] text-white font-medium rounded-full bg-gradient-to-r from-pink-600 to-secondary">
          View All
        </button>
      </div>
      <div className="bg-primary flex flex-col justify-between p-4 text-white">
        <p>
          I would highly recommend Emergence Education if you ever wanted to
          study in Australia. I've planned to go to Australia to do nursing,
          they've provided me the best service to overcome this. I've had no
          complications at all during the whole process. I received my visa just
          within a day. Thanks Emergence Education for all your support.
        </p>
        <h1 className="text-2xl font-bold">John Doe</h1>
        <p>Deakin University</p>
      </div>
    </div>
  );
}

export default StudentSay;
