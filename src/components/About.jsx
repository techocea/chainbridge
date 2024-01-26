import Image from "next/image";
import React from "react";

function About() {
  return (
    <div className="flex max-md:flex-col m-3 max-md:m-0 bg-secondary ">
      <div className="flex-1">
        <Image
          src="/lecturer.jpg"
          width={550}
          height={400}
          alt="lecturer"
          style={{
            maxWidth: "100%",
          }}
        />
      </div>
      <div className="flex flex-1 flex-col justify-between gap-5 p-8 h-auto bg-secondary text-white ">
        <h1 className="font-bold text-[20px] max-md:lg text-lg:text-[24px]">
          We are one of the fastest growing student recruitment centers in Sri
          Lanka that specializes in placing students to leading universities in
          Australia and Canada.
        </h1>
        <p>
          With an experience that spans over a decade in advising and guiding
          students to pursue and achieve their higher educational dreams, our
          young, student-focused and friendly staff at Emergence Education will
          provide you with an unmatched and personalized service in selecting
          the best university/institute that cater to your requirements
        </p>
        <div>
          <button className="bg-gradient-to-r from-pink-600 to-primary text-white font-semibold text-sm rounded-full p-2 max-md:px-4 max-md:text-lg">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
