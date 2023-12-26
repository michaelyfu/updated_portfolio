import Head from "next/head";
import Image from "next/image";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between px-24">
        <div className="max-w-5xl w-full m-auto items-center justify-between font-mono text-sm lg:flex h-screen">
          <LandingPage />
        </div>
        <div className="max-w-5xl w-full m-auto font-mono text-sm lg:flex h-screen">
          <AboutPage />
        </div>
        <div className="max-w-5xl w-full m-auto font-mono text-sm lg:flex h-screen ">
          <Projects />
        </div>
      </main>
    </>
  );
}
