import Encryption from "@/components/main/Encryption";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
// import Image from "next/image";
import Footer from "@/components/main/Footer";
// import Login from "@/components/LoginSignUp/Login";
export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col h-[850px] gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Footer/>
        {/* <Login/> */}
      </div>
    </main>
  );
}
