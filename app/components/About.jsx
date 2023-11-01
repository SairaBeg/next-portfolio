"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Next.js</li>
        <li>React</li>
        <li>HTML5</li>
        <li>CSS & TailwindCSS</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>Java</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>University of Mary Washington</li>
        <li>Bachelor of Liberal Studies</li>
        <li>Major in Computer Science</li>
      </ul>
    ),
  },
  {
    title: "Technical Expertise",
    id: "technicalExpertise",
    content: (
      <ul className="list-disc pl-2">
        <li>Software Development</li>
        <li>Software Development Life Cycle (SDLC)</li>
        <li>Agile Methodologies</li>
        <li> Data Structures & Algorithms</li>
        <li>Object-Oriented Programming (OOP)</li>
        <li>Databases</li>
        <li>Web Development</li>
        <li>Unit Testing</li>
      </ul>
    ),
  },
];

const About = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };
  return (
    <section className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
        <Image src="/images/VapoDesk.png" alt="desk" height={500} width={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            iste officiis recusandae iure laudantium accusamus provident culpa
            aperiam dolorum? Reprehenderit ipsam eligendi temporibus
            perspiciatis, autem commodi sed harum culpa pariatur.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("technicalExpertise")}
              active={tab === "technicalExpertise"}
            >
              {" "}
              Technical Expertise{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
