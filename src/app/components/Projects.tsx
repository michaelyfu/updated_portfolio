/* eslint-disable react/no-unescaped-entities */
import React from "react";
import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Weenix",
    image: "/projects/weenix.png",
    description: "Built Unix-based OS from scratch.",
    tech: ["C", "Unix"],
    color: "#de7402",
    url: "",
  },
  {
    name: "ScavengerAR",
    image: "/projects/ScavengerAR1.png",
    description: "Creating AR Experiences. One scavenger hunt at a time.",
    tech: ["React", "AR.js"],
    color: "#462515",
    url: "",
  },
  {
    name: "iPortfolio",
    image: "/projects/iPortfolio.png",
    description: "Portfolio growth estimation via Monte Carlo Simulation.",
    tech: ["Python"],
    color: "#1f77b4",
    url: "https://montecarlosimulation.streamlit.app/",
  },
  {
    name: "WorkoutCV",
    image: "/projects/WorkoutCV.png",
    description:
      "Personal Workout Buddy. Helping achieve first-year resolutions.",
    tech: ["Python"],
    color: "#4C514A",
    url: "",
  },
  {
    name: "Spotifly",
    image: "/projects/SpotiflyOutput.png",
    description: "Song-guessing Spotify Wordle Variant. Personalized for you.",
    tech: ["React", "CSS", "REST API"],
    color: "#1DB954",
    url: "",
  },
  {
    name: "Website A/B Testing",
    image: "/projects/B_heatmap.png",
    description:
      "Conducted A/B testing on 2 high fidelity prototypes, then generated eye tracking heatmap + replay of gaze motion. Optimized for Egg Tarts.",
    tech: ["JavaScript", "Figma"],
    color: "#C75260",
    url: "",
  },
  // {
  //   name: "Hedgehog",
  //   image: "HedgehogUI",
  //   description:
  //     "High-fidelity prototype for Hedgehog, an AI-driven mushroom farming startup. Mushrooms.",
  //   tech: ["Figma", "Balsamiq"],
  //   color: "#783F04",
  //   url: "",
  // },
  // {
  //   name: "Brock's Breakfast Foods",
  //   image: "brocks-breakfast",
  //   description:
  //     "Responsive menu page with filtering, favoriting, sorting, and aggregator functionality. Built for Brunch.",
  //   tech: ["React", "CSS"],
  //   color: "#d7b29d",
  //   url: "",
  // },
];

function Projects() {
  return (
    <div className="flex flex-col items-center m-auto gap-2">
      <h1 className="text-2xl font-bold">Projects</h1>
      <p>Here's a curated list of projects I've enjoyed the most!</p>
      <div className="flex flex-wrap">
        {projects.map((project) => {
          return (
            <div key={project.name} className="m-2 w-full md:w-1/3 max-w-xs">
              <ProjectCard
                name={project.name}
                image={project.image}
                description={project.description}
                tech={project.tech}
                color={project.color}
                url={project.url}
              ></ProjectCard>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
