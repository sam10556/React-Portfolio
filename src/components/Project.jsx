import React from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    x: (index) => (window.innerWidth > 768 ? 100 : 50),
  },
  animate: (index) => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5 * index,
        duration: window.innerWidth > 768 ? 0.6 : 0.4,
      },
    };
  },
};

const projects = [
  {
    title: "OvenOnWheels",
    description:
      "The Pizza Shop Web App is a modern platform for online pizza ordering and management, built with Next.js, MongoDB, Stripe, and Cloudinary. It features a user-friendly interface for customers to browse, customize, and order pizzas, with secure payment processing via Stripe. A unique AI-powered Pizza Customization Assistant personalizes recommendations based on customer preferences, dietary needs, and order history, enhancing the user experience.  The admin panel allows efficient management of menu items, categories, users, and orders, with dynamic image handling powered by Cloudinary. With a clean and responsive design, the app delivers a seamless experience for both customers and administrators, making it an ideal solution for pizza businesses.",
    techStack: ["React", "Next.js"],
    imgSrc: "/image/OvenOnWheels.png",
    codeLink: "https://github.com/sam10556/OvenOnWheels",
    demoLink: "https://oven-on-wheels.vercel.app/",
  },
  {
    title: "MockMate",
    description:
      "MockMate is an AI-powered interview and exam preparation platform built with React (Vite) on the frontend and Node.js on the backend. It leverages Google's Gemini API to generate intelligent interview questions, evaluate responses, and provide insightful feedback. Currently, the project is being enhanced with LangChain to improve conversational AI capabilities, enabling dynamic, context-aware interactions. Whether you're preparing for a job interview or an exam, MockMate offers a seamless, interactive experience to refine your skills.",
    techStack: ["React", "Express.js", "Node.js"],
    imgSrc: "/image/MockMate.png",
    codeLink: "https://github.com/sam10556/MockMate",
    demoLink: "https://mock-mate-opal.vercel.app/",
  },
  {
    title: "NattyFit",
    description:
      "The Gym Web App is a comprehensive fitness platform built with the MERN stack (MongoDB, Express, React, Node.js) to support users on their fitness journeys. It offers general content for all visitors, while registered users gain access to personalized features, including a workout tracker, a random workout generator, and an AI-powered fitness chatbot for guidance. Additionally, users can track their progress over time, making it easier to stay motivated and achieve their fitness goals.",
    techStack: ["React", "Express.js", "Node.js"],
    imgSrc: "/image/NattyFit.png",
    codeLink: "https://github.com/sam10556/React-NattyFit",
    demoLink: "https://nattyfit-gym-app.vercel.app/",
  },
  {
    title: "Route Planning In Cpp",
    description:
      "The Path finding Visualizer is a C++ project that demonstrates efficient route-finding using the A algorithm*. It visually simulates how the algorithm discovers the shortest path between two points on a grid, accounting for obstacles and varying traversal costs. With a clean and interactive interface, users can set start and end points, place barriers, and watch the algorithm dynamically calculate the optimal route in real-time. This project showcases the power of heuristic-based search in a visually engaging and educational way.",
    techStack: ["C++"],
    imgSrc: "/image/cpp.png",
    codeLink: "#",
    demoLink: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "My portfolio website is a responsive and minimalistic platform built using React.js and TailwindCSS. It showcases my skills, projects, and experiences in a clean and modern design, emphasizing usability and performance. With a mobile-first approach and smooth navigation, it provides an engaging experience across all devices, reflecting my focus on simplicity and attention to detail in web development.",
    techStack: ["React.jss", "TailwindCSS"],
    imgSrc: "/image/Portfolio.png",
    codeLink: "https://github.com/sam10556/React-Portfolio",
    demoLink: "https://samyakdev.netlify.app/",
  },
];

const Project = () => {
  return (
    <div
      id="project"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] py-[8rem] px-0 h-auto"
    >
      <div className="mx-auto my-0 max-w-[120rem] lg:px-16 md:px-16 px-8 py-0">
        <div className="text-center">
          <h3 className="text-[#147efb] dark:text-[#82aaff] text-[1.75rem] font-bold mb-4 uppercase">
            Project
          </h3>
          <h4 className="text-[#2d2e32] dark:text-[#e4e4e7] text-3xl font-semibold mb-8">
            These are the recent projects to showcase my skills
          </h4>
        </div>
        <div id="container" className="mx-auto my-0 max-w-[135rem] px-10 py-0">
          <div className="flex flex-wrap lg:gap-20 md:gap-1 gap-10 justify-center items-start lg:mx-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="my-5 px-2 w-full lg:px-10"
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                viewport={{
                  once: true,
                }}
                custom={index}
              >
                <article className="overflow-hidden rounded-lg shadow-lg dark:shadow-gray-800 flex flex-col lg:flex-row">
                  {/* Image on the left */}
                  <img
                    alt={project.title}
                    className="block h-auto w-full lg:w-1/3 object-cover"
                    src={project.imgSrc}
                  />
                  {/* Text on the right */}
                  <div className="flex flex-col justify-between p-4 lg:w-2/3">
                    <header className="flex flex-row justify-between mb-4 mx-4">
                      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#2d2e32] dark:text-[#e4e4e7]">
                        <a
                          className="no-underline hover:underline"
                          href={project.demoLink}
                        >
                          {project.title}
                        </a>
                      </h1>
                      <div className="flex flex-wrap gap-2 text-xl lg:text-2xl font-semibold">
                        {project.techStack.map((tech, i) => (
                          <h2
                            key={i}
                            className="hover:underline cursor-pointer text-[#2d2e32] dark:text-[#82aaff]"
                          >
                            {tech}
                          </h2>
                        ))}
                      </div>
                    </header>
                    <p className="text-[#767676] dark:text-[#a1a1aa] font-semibold text-justify text-2xl mb-4 mx-5 leading-relaxed">
                      {project.description}
                    </p>
                    <footer className="flex items-center justify-center gap-5 leading-none">
                      {/* Code Link */}
                      <a
                        className="flex items-center no-underline hover:underline text-black dark:text-[#e4e4e7]"
                        href={project.codeLink}
                        aria-label={`Code for ${project.title}`}
                      >
                        <p className="text-2xl mr-1">Code</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          aria-hidden="true"
                          className="dark:text-white"
                          fill="currentColor"
                        >
                          <path
                            d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 
        c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 
        c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 
        c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 
        c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 
        c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 
        c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 
        c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
                          />
                        </svg>
                      </a>

                      {/* Live Demo Link */}
                      <a
                        className="flex items-center no-underline hover:underline text-black dark:text-[#e4e4e7]"
                        href={project.demoLink}
                        aria-label={`Live demo for ${project.title}`}
                      >
                        <p className="text-2xl mr-1">Live Demo</p>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          viewBox="0 0 30 30"
                          aria-hidden="true"
                          className="dark:text-white"
                          fill="currentColor"
                        >
                          <path
                            d="M 5 3 C 3.9069372 3 3 3.9069372 3 5 L 3 19 C 3 20.093063 3.9069372 21 5 21 L 19 21 C 20.093063 21 21 20.093063 21 19 
        L 21 12 L 19 12 L 19 19 L 5 19 L 5 5 L 12 5 L 12 3 L 5 3 z M 14 3 L 14 5 L 17.585938 5 L 8.2929688 14.292969 
        L 9.7070312 15.707031 L 19 6.4140625 L 19 10 L 21 10 L 21 3 L 14 3 z"
                          />
                        </svg>
                      </a>
                    </footer>
                  </div>
                </article>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
