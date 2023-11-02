import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Angels on Wheels Database Management Website",
    description: "Project 1 desc",
    image: "/projectPics/AoWscreenshot.png",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "AI-Prompts Full-Stack CRUD App",
    description: "Project 2 desc",
    image: "/projectPics/AI-Prompts.png",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Project 3 desc",
    image: "/projectPics/EcommerceWS.png",
    tag: ["All", "Web"],
  },
  {
    id: 4,
    title: "Grayscale Converter",
    description: "Project 4 desc",
    image: "/projectPics/greyscaleCropped.png",
    tag: ["All", "Web"],
  },
  {
    id: 5,
    title: "Spell Check",
    description: "Project 5 desc",
    image: "/projectPics/spelling.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 6,
    title: "Sentiment Analyzer",
    description: "Project 6 desc",
    image: "/projectPics/sentiment.png",
    tag: ["All", "Web"],
  },
];

const Projects = () => {
  return (
    <>
      <h2>My Projects</h2>
      <div>
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
