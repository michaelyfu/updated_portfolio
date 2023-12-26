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
      {/* <Image
        src={"/profilePhotoBW.jpg"}
        alt="personal photo"
        height={150}
        width={150}
        className="rounded-full aspect-square object-cover mb-10"
      ></Image> */}

      <span>Good {getCurrentTime()}! My name is</span>
      <div className="mt-2 my-4 text-4xl font-bold">
        <h1>Michael Fu.</h1>
        <h1>Let's build magic.</h1>
      </div>
      <div>QuantGuide ▪ [___] ▪ [___] ↗ </div>
      <div>Pace '21 ▪ Brown '25 ↗ </div>
      <div>ATL ▪ PVD ▪ NYC ↗ </div>

      {/* <div className="flex gap-4">
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
      </div> */}
    </div>
  );
}

export default LandingPage;
