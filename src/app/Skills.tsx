/* eslint-disable react/no-unescaped-entities */
import React from "react";
const skills = [
  {
    title: "Programming Languages",
    items: [
      "C++",
      "C",
      "Python",
      "Java",
      "Typescript",
      "Javacript",
      "HTML",
      "CSS",
    ],
  },
  {
    title: "Front-end",
    items: ["Next.js", "React.js", "Tailwind CSS", "Headless UI"],
  },
  {
    title: "Back-end",
    items: [
      "Database Architecture",
      "Firebase",
      "MongoDB",
      "Node.js",
      "Express.js",
      "Flask",
      "REST",
      "Oauth 2.0",
    ],
  },
  // {
  //   title: "Other Tools and Services",
  //   items: [
  //     "Pandas",
  //     "Numpy",
  //     "Jupyter Notebook",
  //     "Figma",
  //     "AWS Lambda",
  //     "Firebase",
  //     "Git",
  //     "REST",
  //     "OAuth 2.0",
  //     "Tableau",
  //   ],
  // },
];

function Skills() {
  return (
    <div className="flex flex-col">
      <h1 className="text-2xl font-bold">Skills</h1>
      <div></div>
    </div>
  );
}

export default Skills;
