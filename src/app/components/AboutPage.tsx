/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import Link from "next/link";

function AboutPage() {
  return (
    <div className="flex flex-row justify-between w-full h-full">
      <div className="flex flex-col text-left w-full md:w-1/2">
        <h1 className="text-2xl pb-2 font-bold">
          Welcome to my corner of the world.
        </h1>
        <p className="text-med">
          I believe in the{" "}
          <span className="text-primary-100 font-bold">power of technolgy</span>
          , and am obssessed with building scalable software. I'm currently a
          student at{" "}
          <span className="text-primary-100 font-bold">Brown University</span>{" "}
          studying Computer Science and Economics, where I helped teach Systems
          and Data Structures and Algorithms. My interests lie within{" "}
          <span className="text-primary-100 font-bold">
            systems and machine learning.
          </span>
        </p>
        <p className="text-med pt-2">
          Previously, I was the founding engineer of an{" "}
          <Link
            href={"https://www.ycombinator.com/"}
            className="no-underline hover:underline decoration-primary-100  text-primary-100 font-bold"
          >
            Y Combinator-backed startup
          </Link>{" "}
          that reached over 400,000+ monthly impressions.
        </p>
        <p className="text-med pt-2">
          You can find me playing blindfold chess on
          <Link
            href={"https://lichess.org/@/mfu2003"}
            className="no-underline hover:underline decoration-primary-100 hover:text-primary-100 text-primary-100 font-bold"
          >
            {" "}
            Lichess,
          </Link>{" "}
          <Link
            href={"https://www.youtube.com/watch?v=trnzLrPWLVU"}
            className="no-underline hover:underline decoration-primary-100 hover:text-primary-100 text-primary-100 font-bold"
          >
            playing table tennis,
          </Link>{" "}
          or taking{" "}
          <Link
            href={"/photos"}
            className="no-underline hover:underline decoration-primary-100 hover:text-primary-100 text-primary-100 font-bold"
          >
            photos.
          </Link>
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <hr style={{ borderTop: "1px solid #a37e2c" }} />
          <h2 className="inline-block m-0">
            <Link
              href="https://github.com/michaelyfu"
              className="no-underline hover:underline decoration-primary-100 hover:text-primary-100"
            >
              Github →
            </Link>
          </h2>
          <h2 className="inline-block m-0">
            <Link
              href="https://www.linkedin.com/in/michaelyfu/"
              className="no-underline hover:underline decoration-primary-100 hover:text-primary-100"
            >
              LinkedIn →
            </Link>
          </h2>
          <h2 className="inline-block m-0">
            <Link
              href="https://www.linkedin.com/in/michaelyfu/"
              className="no-underline hover:underline decoration-primary-100 hover:text-primary-100"
            >
              Resume →
            </Link>
          </h2>
          <hr style={{ borderTop: "1px solid #a37e2c" }} />
        </div>

        <div className="flex h-full items-end mt-4">
          <Link
            href={"/photos"}
            className="p-2 outline-primary-100  outline hover:bg-primary-100 hover:text-white rounded-lg"
          >
            <h1>Photos</h1>
          </Link>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex justify-end items-center">
        <div style={{ maxWidth: "100%", height: "auto", maxHeight: "350px" }}>
          <Image
            src="/profilePhoto2.png"
            width={325}
            height={325}
            objectFit="contain"
            className="max-w-full h-auto"
            alt="about picture"
          />
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
