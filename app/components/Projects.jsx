"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "Angels on Wheels Database Management Website",
    description:
      "Collaborated with a team using Agile Methodologies to create a website for 'Angels on Wheels', a non-profit organization. Developed using HTML, CSS, PHP, JavaScript, and SQL for efficient volunteer, event, and campaign management. Integrates secure user authentication features to enhance security, privacy, and data protection",
    image: "/projectPics/AoWscreenshot.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/AngelsOnWheelsWebsite",
    previewUrl: "https://jenniferp98.sg-host.com/AngelsOnWheels/index.php",
  },
  {
    id: 2,
    title: "AI-Prompts Full-Stack CRUD App",
    description:
      "Developed a Next.js Full-Stack CRUD application that allows users to create, view, update, and delete Prompts for AI and store them using MongoDB. Deployed on Vercel, uses Next.js, React, TailwindCSS, Typescript and Javascript. Integrated Google OAuth2.0 authentication and authorization services to facilitate secure user access control in the application.",
    image: "/projectPics/AI-Prompts.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/ai-prompts",
    previewUrl: "https://ai-prompts-r4coab5ym-sairabeg.vercel.app/",
  },
  {
    id: 3,
    title: "E-Commerce Website",
    description:
      "Developed a sample client-side E-Commerce website to showcase HTML, CSS, and JavaScript proficiency to create an interactive and responsive online shopping experience. Incorporated best practices in front-end web development, responsive software design, and UX/UI principles to enhance the user experience.",
    image: "/projectPics/EcommerceWS.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/EcommerceWebsite",
    previewUrl: "https://e-commercewebsite.pages.dev/",
  },
  {
    id: 4,
    title: "MERN Recipe Web App",
    description:
      "A recipe web application that uses front-end technologies like React and JavaScript. This allows users to create accounts, upload recipes, and access a library of created recipes. Implements a communication system between the front-end and MongoDB backend database through API requests, enabling users to efficiently save and retrieve recipes associated with their accounts. Node and Express.js are used on the backend establishing a responsive server architecture that integrates with MongoDB for secure storage and retrieval of recipes, showcasing full-stack development and database management.",
    image: "/projectPics/RecipeApp.png",
    tag: ["All", "Web"],
    gitUrl: "https://https://github.com/SairaBeg/recipe-web-app",
    previewUrl: "https://recipe-web-app-eosin.vercel.app/auth",
  },
  {
    id: 5,
    title: "Grayscale Converter",
    description:
      "Image processing through a Java program that involves the manipulation of pixel data in a Multidimensional Array. It converts a small .ppm image into grayscale. Grayscale images are single-channel representations of the original image, where each pixel's color information is replaced with an intensity value, ranging from pure black to pure white.",
    image: "/projectPics/greyscaleCropped.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/GreyscaleConverter",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Spell Check",
    description:
      "This is a Java-based spell-checking application that utilizes a Binary Search Tree (BST) data structure to identify misspelled words in user-supplied text. The program prompts users to provide a dictionary file, which is loaded into a BST. The user is prompted to input a string of words for spell-checking. The program efficiently handles lowercase, non-punctuated words. The dictionary file can be customized, making this project a valuable tool for proofreading text.",
    image: "/projectPics/spelling.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/SairaBeg/Spell-Checker",
    previewUrl: "/",
  },
  // {
  //   id: 6,
  //   title: "Sentiment Analyzer",
  //   description:
  //     "A tool made in Java that evaluates the emotional tone of user-supplied text, categorizing it as positive, negative, or neutral using a HashTable for efficient word or phrase sentiment storage and retrieval. It parses a sentiment file, inserting entries into the HashTable, the input undergoes preprocessing to remove punctuation, extra spaces, and is analyzed for its emotional tone.",
  //   image: "/projectPics/sentiment.png",
  //   tag: ["All", "Web"],
  //   gitUrl: "https://github.com/SairaBeg/SentimentAnalyzer",
  //   previewUrl: "/",
  // },
];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" ref={ref}>
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {projectData.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
