/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

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
  return (
    <div>
      <Image
        src={"/profilePhotoBW.jpg"}
        alt="personal photo"
        height={150}
        width={150}
        className="rounded-full aspect-square object-cover mb-10"
      ></Image>

      <span>Good {getCurrentTime()}! My name is</span>
      <div className="mt-2 my-4 font-bold text-4xl">
        <h1>Michael Fu.</h1>
        <h1>I'm currently building...</h1>
      </div>
      <div className="flex gap-4">
        {logos.map((logo) => {
          return (
            <Image
              key={logo.alt}
              src={logo.src}
              alt={logo.alt}
              height={25}
              width={25}
              className="rounded-full aspect-square object-cover mb-10"
            ></Image>
          );
        })}
      </div>
    </div>
  );
}

export default LandingPage;
