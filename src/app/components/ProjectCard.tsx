import React from "react";
import Image from "next/image";

type ProjectCardProps = {
  name: string;
  image: string;
  description: string;
  tech: string[];
  color: string;
  url: string;
};

function ProjectCard({
  name,
  image,
  description,
  tech,
  color,
  url,
}: ProjectCardProps) {
  return (
    <div className="flex flex-col justify-between h-full bg-gray-200 pb-2 rounded-lg shadow-md">
      {/* <div className="flex flex-col justify-between items-center bg-gray-200 pb-2 rounded-lg"> */}
      <Image
        src={image}
        height={500}
        width={500}
        alt={name}
        className="h-48 w-full object-cover rounded-t-lg"
      ></Image>
      <div className="flex flex-col grow mt-2 px-4 pb-2 pt-1">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-xl font-semibold">{name}</h1>
        </div>
        <div className="flex flex-grow">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
