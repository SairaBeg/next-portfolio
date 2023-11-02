import React from "react";
import ProjectCard from "./ProjectCard";

const projectData = [
  {
    id: 1,
    title: "Angels on Wheels Database Management Website",
    description: "Project 1 desc",
    image: "/projectPics/AoWscreenshot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/AngelsOnWheelsWebsite",
    previewUrl: "https://jenniferp98.sg-host.com/AngelsOnWheels/index.php",
  },
  {
    id: 2,
    title: "AI-Prompts Full-Stack CRUD App",
    description: "Project 2 desc",
    image: "/projectPics/AI-Prompts.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/ai-prompts",
    previewUrl: "https://ai-prompts-r4coab5ym-sairabeg.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description: "Project 3 desc",
    image: "/projectPics/EcommerceWS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/EcommerceWebsite",
    previewUrl: "https://e-commercewebsite.pages.dev/",
  },
  {
    id: 4,
    title: "Grayscale Converter",
    description: "Project 4 desc",
    image: "/projectPics/greyscaleCropped.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/GreyscaleConverter",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Spell Check",
    description: "Project 5 desc",
    image: "/projectPics/spelling.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/Spell-Checker",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Sentiment Analyzer",
    description: "Project 6 desc",
    image: "/projectPics/sentiment.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/SentimentAnalyzer",
    previewUrl: "/",
  },
];

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            imgUrl={project.image}
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
          />
        ))}
      </div>
    </>
  );
};

export default Projects;
