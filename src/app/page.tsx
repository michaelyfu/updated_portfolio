/* eslint-disable react/no-unescaped-entities */
import Head from "next/head";
import Image from "next/image";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Michael Fu",
  description: "Michael Fu Portfolio",
  metadataBase: new URL("https://www.michaelyfu.com/"),
};

export default function Home() {
  return (
    <div className="flex flex-col justify-between mx-auto max-w-screen-md px-4 ">
      <div className="flex flex-col gap-4 font-mono text-sm lg:flex my-16 ">
        <LandingPage />
        <AboutPage />
        <Projects />
      </div>
    </div>
  );
}
