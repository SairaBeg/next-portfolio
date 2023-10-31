"use client";
import React from "react";
import Image from "next/image";

import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Hello! I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Saira Beg",
                5000, // wait 1s before replacing "Mice" with "Hamsters"
                "a Full-Stack Dev",
                3000,
                "a Front-End Dev",
                3000,
                "a Back-End Dev",
                3000,
              ]}
              wrapper="span"
              speed={25}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB&BE] text-base sm:text-lg lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            commodi, ratione animi debitis, recusandae, veritatis officiis
            dolores placeat facere quaerat fugit rerum non nam qui architecto
            nostrum dicta corporis! Incidunt!
          </p>

          <div>
            <a
              href="BegSairaResume.pdf"
              target="_blank"
              className="text-white"
              rel="noopener"
            >
              <button className="px-6 py-3 w-full mr-4 sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white mt-3">
                Resume/CV
              </button>
            </a>
            <a
              href="https://www.linkedin.com/in/saira-beg/"
              target="_blank"
              rel="noopener"
              className="text-white"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  LinkedIn
                </span>
              </button>
            </a>
            <a
              href="https://github.com/SairaBeg"
              target="_blank"
              className="text-white"
            >
              <button className="px-1 py-1 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white mt-3">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  GitHub
                </span>
              </button>
            </a>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] relative lg:w-[400px] lg:h-[400px]">
            <Image
              width={300}
              height={300}
              src="/images/Unblurred.png"
              alt="Saira with a purple background"
              className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;
