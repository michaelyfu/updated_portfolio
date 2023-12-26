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
    <div className="flex flex-col justify-center items-center bg-red-200 pb-2 rounded-lg">
      <Image
        src={image}
        height={500}
        width={500}
        alt={name}
        className="h-48 w-full object-cover rounded-t-lg"
      ></Image>
      <div className="flex flex-col w-4/5 gap-2 mt-2">
        <h1 className="text-xl font-semibold">{name}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
