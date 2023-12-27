/* eslint-disable react/no-unescaped-entities */
"use client";
import Head from "next/head";
import Image from "next/image";
import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import Projects from "./components/Projects";
import Skills from "./Skills";
import { useEffect, useState } from "react";

export default function Home() {
  function getCurrentTime() {
    const date = new Date();
    const hours = date.getHours();
    if (hours < 12) {
      return "morning";
    } else if (hours < 18) {
      return "afternoon";
    } else {
      return "evening";
    }
  }

  const logos = [
    {
      src: "/github-mark.svg",
      alt: "github-logo",
    },
    {
      src: "/github-mark.svg",
      alt: "github-logo",
    },
    {
      src: "/github-mark.svg",
      alt: "github-logo",
    },
    {
      src: "/github-mark.svg",
      alt: "github-logo",
    },
  ];

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className=" dark:bg-slate-800 dark:text-white">
        <main className="flex flex-col justify-between mx-auto max-w-screen-md px-4 ">
          <div className="flex flex-col gap-4 font-mono text-sm lg:flex mt-16 ">
            <div>
              <span>Good {getCurrentTime()}! My name is</span>
              <div className="mt-2 my-4 text-4xl font-bold">
                <h1>Michael Fu.</h1>
                <h1>
                  Let's build{" "}
                  <button onClick={() => setDarkMode(!darkMode)}>magic.</button>
                </h1>
              </div>
              <div>QuantGuide ▪ [___] ▪ [___] ↗ </div>
              <div>Pace '21 ▪ Brown '25 ↗ </div>
              <div>ATL ▪ PVD ▪ NYC ↗ </div>
            </div>
            <AboutPage />
            <Projects />
          </div>
        </main>
      </div>
    </div>
  );
}
