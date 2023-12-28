"use client";
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import DarkModeButton from "./DarkModeButton";
import Link from "next/link";

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

function LandingPage() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div>
      <span>Good {getCurrentTime()}! My name is</span>
      <div className="mt-2 my-4 text-4xl font-bold">
        <h1>Michael Fu.</h1>
        <h1>
          Let's build <DarkModeButton></DarkModeButton>
        </h1>
      </div>
      <div>
        <Link
          href={"https://www.quantguide.io/"}
          className="no-underline hover:underline decoration-primary-100 hover:text-primary-100"
        >
          QuantGuide
        </Link>{" "}
        ▪ [___] ▪ [___] ↗
      </div>
      <div>Pace '21 ▪ Brown '25 ↗ </div>
      <div>ATL ▪ PVD ▪ NYC ↗ </div>
    </div>
  );
}

export default LandingPage;
