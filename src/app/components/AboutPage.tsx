/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";

function AboutPage() {
  return (
    <div className="flex flex-row-reverse justify-between w-full">
      <div className="text-left w-1/2">
        <h1 className="text-2xl pb-2 font-bold">
          Welcome to my corner of the world.
        </h1>
        <p className="text-med">
          I'm a third year student at Brown University studying Computer Science
          and Economics. I'm currently the Founding Engineer of an Edtech
          startup that reaches 400,000+ monthly impressions. I have prior
          experience leading technical consulting projects for clients ranging{" "}
        </p>
      </div>
      <div className="text-left w-1/2">
        <Image
          src={"/aboutPic.jpeg"}
          height={300}
          width={300}
          alt="about picture"
        />
      </div>
    </div>
  );
}

export default AboutPage;
