"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="grid grid-cols-2 list-disc pl-2">
        <li>Next.js</li>
        <li>React</li>
        <li>HTML5</li>
        <li>CSS & TailwindCSS</li>
        <li>JavaScript</li>
        <li>TypeScript</li>
        <li>Python</li>
        <li>Java</li>
        <li>PHP</li>
        <li>SQL</li>
        <li>C & C#</li>
        <li>Git & GitHub</li>
        <li>Node.js</li>
        <li>Express.js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul>
        <li>
          <span className="font-semibold">School:</span> University of Mary
          Washington
        </li>
        <li>
          <span className="font-semibold">Degree:</span> Bachelor of Liberal
          Studies
        </li>
        <li>
          <span className="font-semibold">Major:</span> Computer Science
        </li>
      </ul>
    ),
  },
  {
    title: "Technical Expertise",
    id: "technicalExpertise",
    content: (
      <ul className="grid grid-cols-2 gap-2 list-disc pl-2">
        <li className="mt-0 mb-0">Software Development & Engineering</li>
        <li className="mt-0 mb-0">Software Development Life Cycle (SDLC)</li>
        <li className="mt-0 mb-0">Agile Development & Methodologies</li>
        <li className="mt-0 mb-0">Data Structures & Algorithms</li>
        <li className="mt-0 mb-0">Object-Oriented Programming (OOP)</li>
        <li className="mt-0 mb-0">Databases (Relational & Non-Relational)</li>
        <li className="mt-0 mb-0">Web Development</li>
        <li className="mt-0 mb-0">Unit Testing</li>
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
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px16">
        <Image src="/images/DALLdesk.png" alt="desk" height={500} width={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m a dedicated software developer driven by a love for
            continuous learning and solving problems. My experiences include
            collaborative projects such as responsive website development for
            Angels on Wheels, where I focused on enhancing user experience and
            security. My educational background in Computer Science along with
            technical proficiency in HTML, CSS, JavaScript, Java, Python, SQL
            and more prepare me for a successful career in the tech industry.
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
