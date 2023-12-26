/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-row justify-between w-full h-full">
      <div className="flex flex-col text-left w-full md:w-1/2">
        <h1 className="text-2xl pb-2 font-bold">
          Welcome to my corner of the world.
        </h1>
        <p className="text-med">
          I'm a third year student at Brown University studying Computer Science
          and Economics. I'm currently the Founding Engineer of an Edtech
          startup that reaches 400,000+ monthly impressions. I have prior
          experience leading technical consulting projects for clients ranging
        </p>
        <div className="flex flex-col gap-2 mt-2">
          <hr></hr>
          <h2>Github →</h2>
          <h2>LinkedIn →</h2>
          <h2>Resume →</h2>
          <hr></hr>
        </div>
        <div className="flex h-full items-end">
          <button className="p-2 outline hover:bg-black hover:text-white rounded-lg">
            <h1>Photos</h1>
          </button>
        </div>
      </div>
      <div className="w-1/2 hidden md:flex">
        <Image
          src={"/aboutPic.jpeg"}
          height={300}
          width={300}
          className="ml-auto hidden md:flex"
          alt="about picture"
        />
      </div>
    </div>
  );
}

export default AboutPage;
