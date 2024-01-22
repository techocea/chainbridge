import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className="m-3 flex">
      <Image
        src="/lecturer.jpg"
        alt="lecturer"
        width={500}
        height={300}
        className="flex-[2]"
      />
      <div className="bg-secondary text-white w-1/2 p-6 flex flex-col gap-6 items-start justify-center">
        {/* <div>
          <Image src="/lecturer.jpg" width={500} height={300} />
        </div> */}
        <h1 className="font-bold ">
          We are one of the fastest growing student recruitment centers in Sri
          Lanka that specializes in placing students to leading universities in
          Sweden and Hungary.
        </h1>
        <p>
          With an experience that spans over a decade in advising and guiding
          students to pursue and achieve their higher educational dreams, our
          young, student-focused and friendly staff at Emergence Education will
          provide you with an unmatched and personalized service in selecting
          the best university/institute that cater to your requirements
        </p>
        <div>
          <button className="bg-red-500 rounded-full p-2 font-bold">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
