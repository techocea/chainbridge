import About from "@/components/About";
import Contacct from "@/components/Contacct";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Reasons from "@/components/Reasons";
import StudentSay from "@/components/StudentSay";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Reasons />
      <Partners />
      <StudentSay />
      <Contacct />
    </>
  );
}
