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
        <div className="flex flex-col gap-4 font-mono text-sm lg:flex h-screen mt-16">
          <LandingPage />
          <AboutPage />
          <Projects />
        </div>
      </main>
    </>
  );
}
