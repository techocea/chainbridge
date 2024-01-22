import About from "@/components/About/About";
import Hero from "@/components/Hero/Hero";
import Partners from "@/components/Partners/Partners";
import Reason from "@/components/Reason/Reason";
import Students from "@/components/Students/Students";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reason />
      <Students />
      <Partners />
      <Contact />
    </>
  );
}
