import React from "react";

function Reasons() {
  return (
    <div className="bg-purple text-white p-8 flex flex-col gap-6">
      <div>
        <h1 className="font-bold text-6xl w-3/4">
          REASONS TO STUDY IN SWEDEN & HUNGARY
        </h1>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">SWEDEN</h1>
        <hr />
        <div className="flex items-start justify-evenly">
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">3rd</h1>
            <p className="w-[220px]">
              Popular International student destination in the world
            </p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">6th</h1>
            <p className=" w-[220px]">world's top 100 universities*</p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">7th</h1>
            <p>Best city in the world**</p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">4</h1>
            <p>Year post study work</p>
          </div>
        </div>
        <p className="text-center text-[12px]">
          * Times Higher Education World University Rankings 2020** QS Best
          Student City 2019
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h1 className="font-bold text-3xl">HUNGARY</h1>
        <hr />
        <div className="flex items-center justify-evenly">
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">No.1</h1>
            <p>Quality of life*</p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">6th</h1>
            <p className="w-[220px]">Most liveable country in the world**</p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">7th</h1>
            <p className="w-[220px]">Of the world's top 10 universites***</p>
          </div>
          <div className="flex flex-col text-center  gap-2">
            <h1 className="font-bold text-3xl">4</h1>
            <p>Year post-study work</p>
          </div>
        </div>
        <p className="text-center text-[12px]">
          * Times Higher Education World University Rankings 2020** QS Best
          Student City 2019
        </p>
      </div>
    </div>
  );
}

export default Reasons;
