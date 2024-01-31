import Image from "next/image";
import React from "react";

function page() {
  return (
    <div className="pt-[136px] max-md:pt-0">
      <section className="relative ">
        <div className="bg-gradient-to-b from-fuchsia-400 to-black">
          <Image
            src="/aboutImg.jpg"
            width={1400}
            height={800}
            className="max-md:w-screen max-md:h-auto object-cover"
            style={{
              maxWidth: "100%",
              height: "100vh",
            }}
            alt="about Bg"
          />
        </div>
        <div className="absolute bottom-1/3 left-10 max-md:w-[290px] leading-[69px] h-auto">
          <h1 className="capitalize font-semibold text-6xl text-white bg-gradient-to-r from-sky-800 to-orange-900">
            Know us better?
          </h1>
        </div>
      </section>
      <div className="bg-secondary flex max-md:gap-4 py-12 px-20 max-md:px-8 lg:p-12 h-1/2 max-md:flex-col max-md:w-screen">
        <div className="flex-1 max-md:flex max-md:items-center max-md:justify-center">
          <Image src="/logoNew.png" width={200} height={200} alt="logo" />
        </div>
        <div className="flex-[2] flex flex-col gap-4 text-white max-md:text-left">
          <p>
            Chainbridge International was established by a team of professionals
            in 2010 to provide consultancy services in education and career
            guidance to students who aspire to pursue higher studies overseas.
          </p>
          <p>
            The founders and the consulting team at Chainbridge International
            possess wide experience in the areas of science and technology,
            higher education, investment banking & financial services,
            professional development, student counseling and career guidance.
            More than 45 years of collective experience of these professionals
            is the key success factor of Chainbridge International becoming a
            reputed service provider to deserving students seeking to further
            their higher education overseas.
          </p>
          <p>
            Chainbridge International is privileged to represent a group of
            reputed universities, colleges and institutions. The portfolio of
            such representations continues to grow providing a greater choice to
            our clientele. The primary focus is to offer a variety of programs
            to our prospects from full time to part time courses, skills
            development to professional development programs, graduate to post
            graduate programs conducted by accredited and recognized
            institutions. Chainbridge International provides a range of services
            including career counseling, assistance in the selection of the
            study course, education institution and country, facilitating the
            application process & visa, coordination for travel arrangements,
            accommodation etc., and pre-departure advice.
          </p>
        </div>
      </div>
      <div className="flex flex-col max-md:py-12 px-8 lg:p-16 gap-4 items-center">
        <h1 className="text-center text-primary font-bold text-2xl">
          Message From Director/President & CEO
        </h1>
        <p className="max-md:text-left text-slate-800">
          Emerging from the ideals & vision of a renowned scientist &
          educationist, Vidhya Nidhi Dr. N. R. de Silva, Emergence Education was
          born in May 2010 to serve the growing demand for professional &
          ethical advisory services in the higher education space. Over the past
          10 years, Emergence Education has pursued a simple business
          philosophy, “to provide a personalized service of excellent quality in
          a wholesome partnership”, that has made us to be one of the most
          sought-after education consultants in Sri Lanka. Our success comes
          from a highly resourceful & committed team who have more than 45 years
          of collective experience with an engrained passion to serve and guide
          our students.
        </p>
        <p className="max-md:text-left text-slate-800">
          Emergence Education is a career guidance firm that focuses on
          Australia, Canada, UK, New Zealand, USA and Germany focused career
          guidance firm. As a result, we have built domain expertise on study
          options in Australia and Canada with an enviable success rate in
          securing offers for our students from a select group of universities &
          higher education institutions in Australia. Our focus on quality
          applications to our partner institutions, ethical processes and
          professional advice to our students & parents have allowed Emergence
          Education to maintain a very high conversion rate of students being
          enrolled to study in Australia and Canada.
        </p>
        <p className="max-md:text-left text-slate-800">
          Emergence Education has strategically pursued a policy of representing
          select partners and currently represents more than 100+ universities,
          colleges & higher education institutions in Australia, Canada, UK, New
          Zealand, USA and Germany. These institutions are spread across the
          states most popular among the Sri Lankan students. Among our
          complementary services include: career counseling, institution
          selection, application process, scholarships and personalized visa
          assistance.
        </p>
        <div className="flex flex-col gap-4 items-center text-center">
          <p className="text-slate-800">With best wishes,</p>
          <p className="font-semibold text-primary">Shyamani Yatawara</p>
          <p className="text-slate-800">Director & President/CEO</p>
        </div>
      </div>
      <div className="flex flex-col border-t border-slate-600 max-md:py-12 px-8 lg:p-16 gap-6 items-center ">
        <h1 className="text-center font-semibold text-primary text-2xl">
          Our partnerships
        </h1>
        <Image
          src="/uni-logo-2.jpg"
          width={200}
          height={200}
          alr="partnership-logo"
        />
        <p className="text-slate-800 max-md:text-left">
          Navitas is a leading global education provider that has helped
          generations of learners transform their lives through education.
          Navitas creates life-changing opportunities to learn by delivering an
          extensive range of educational services to over 70,000 aspirational
          students across their global network each year.
        </p>
        <p className="text-slate-800 max-md:text-left">
          From pre-university and pathway programs to university, to English
          language and vocational training and undergraduate and postgraduate
          degrees, Navitas reaches more than 70,000 aspirational learners at
          more than 120 colleges and campuses across their global network each
          year, powered by a diverse and talented group of 7,000 employees.
        </p>
      </div>
    </div>
  );
}

export default page;
