import React from "react";
import { animate, delay, motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (idx) => {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.5 * idx,
      },
    };
  },
};

const skillIcons = [
  "react,next",
  "mongodb,express,nodejs",
  "git,javascript",
  "php,cpp",
];

const Hero = () => {
  return (
    <div
      id="home"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] flex lg:flex-col h-auto lg:h-[100vh] w-full relative justify-center py-44 lg:py-0 px-0"
    >
      <div
        id="container"
        className="mx-auto my-0 max-w-[120rem] lg:px-16 md:px-16 px-8 py-0"
      >
        <div
          id="content"
          className="flex flex-col lg:flex-row text-center items-center gap-12 lg:gap-40 h-auto lg:h-[80rem] justify-center relative"
        >
          <div
            id="hero-main"
            className="flex flex-col-reverse lg:flex-row items-center gap-12 h-auto lg:text-start md:text-start sm:text-center text-center lg:gap-40 justify-center relative"
          >
            <div
              id="hero-text"
              className="flex flex-col max-w-[50rem] gap-2 relative"
            >
              <h1 className="text-[#2D2E32] dark:text-white lg:text-[5.5rem] md:text-7xl sm:text-6xl text-6xl mb-8 mt-8 font-bold">
                Full Stack Web Developer
              </h1>
              <p className="text-[#555555] dark:text-gray-300 text-[1.8rem]">
                Hi, I'm Samyak Shah. A passionate Full Stack Web Developer
                based in Gujarat, India. 📍
              </p>
              <span className="flex lg:justify-start md:justify-center justify-center gap-5 my-10">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/samyak-shah-dev/"
                  className="text-[#2d2e32] dark:text-white text-5xl transition-all duration-200 hover:text-[#147EFB] dark:hover:text-[#147EFB]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-linkedin"
                  >
                    <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                    <path d="M8 11l0 5"></path>
                    <path d="M8 8l0 .01"></path>
                    <path d="M12 16l0 -5"></path>
                    <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
                  </svg>
                </a>

                {/* GitHub Icon */}
                <a
                  href="https://github.com/sam10556"
                  className="text-[#2d2e32] dark:text-white text-5xl transition-all duration-200 hover:text-[#147EFB] dark:hover:text-[#147EFB]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="tabler-icon tabler-icon-brand-github"
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
            </div>

            {/* Hero Image Placeholder */}
            <div className="hero-img h-[30rem] w-[30rem] lg:h-[37rem] lg:w-[37rem] bg-gray-300 dark:bg-gray-700 rounded-full"></div>
          </div>

          {/* Tech Stack Section */}
          <div className="flex lg:flex-row items-center bottom-20 text-[#767676] dark:text-gray-400 text-3xl left-0 lg:absolute static flex-col text-center">
            <p className="text-[#2d2e32] dark:text-white border-b-[2px] lg:border-b-0 lg:border-r-[2px] border-solid border-[#2d2e32] dark:border-gray-600 font-semibold mb-8 pb-8 lg:mb-0 lg:pb-0 lg:mr-20 lg:pr-8">
              Tech Stack
            </p>
            <ul className="flex gap-12 justify-center flex-wrap py-5">
              {skillIcons.map((icons, idx) => (
                <motion.li
                  key={idx}
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  custom={idx}
                >
                  <img
                    src={`https://skillicons.dev/icons?i=${icons}`}
                    className="h-20 hover:transform hover:translate-y-4 hover:duration-300 hover:ease-in-out"
                  />
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
