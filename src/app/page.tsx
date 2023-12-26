import Head from "next/head";
import Image from "next/image";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./Skills";

export default function Home() {
  return (
    <>
      <main className="flex flex-col justify-between h-screen mx-auto max-w-screen-md px-4">
        <div className="font-mono text-sm lg:flex h-screen mt-16">
          <LandingPage />
        </div>
        <div className="m-auto font-mono text-sm lg:flex h-screen">
          <AboutPage />
        </div>
        <div className="m-auto font-mono text-sm lg:flex h-screen ">
          <Projects />
        </div>
      </main>
    </>
  );
}
