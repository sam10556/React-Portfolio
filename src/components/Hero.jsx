import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 100 },
  animate: (idx) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.3 * idx },
  }),
};

const skillIcons = [
  "react,next",
  "mongodb,express,nodejs",
  "git,javascript",
  "php,cpp",
];

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const mouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", mouseMove);
    return () => window.removeEventListener("mousemove", mouseMove);
  }, []);

  useEffect(() => {
    const matchDark = window.matchMedia("(prefers-color-scheme: dark)");

    setIsDarkMode(matchDark.matches);

    const handleChange = (e) => setIsDarkMode(e.matches);
    matchDark.addEventListener("change", handleChange);

    return () => matchDark.removeEventListener("change", handleChange);
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      height: 16,
      width: 16,
      backgroundColor: isDarkMode ? "#ffffff" : "#0e1012",
      mixBlendMode: isDarkMode ? "difference" : "normal",
      opacity: 0, // Hide in default
    },
    text: {
      x: mousePosition.x - 25,
      y: mousePosition.y - 25,
      height: 50,
      width: 50,
      backgroundColor: isDarkMode ? "#ffffff" : "#0e1012",
      mixBlendMode: "difference",
      opacity: 1, // Show when on text
    },
  };

  const textEnter = () => setCursorVariant("text");
  const textLeave = () => setCursorVariant("default");

  return (
    <div
      id="home"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] flex flex-col h-auto lg:h-[100vh] w-full relative justify-center py-44 lg:py-0 px-0"
      style={{ cursor: "auto" }} // Force default system cursor globally
    >
      {/* Custom Cursor */}
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: "#0e1012" }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />

      <div className="mx-auto max-w-[120rem] lg:px-16 md:px-16 px-8 py-0">
        <div className="flex flex-col lg:flex-row text-center items-center gap-12 lg:gap-40 h-auto lg:h-[80rem] justify-center relative">
          {/* Hero Main Section */}
          <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-40 relative">
            {/* Hero Text */}
            <div className="flex flex-col md:text-center lg:text-start max-w-[50rem] gap-2 relative">
              <h1
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                className="text-[#2D2E32] dark:text-white lg:text-[6.5rem] md:text-7xl sm:text-6xl text-6xl mb-8 mt-8 font-bold"
              >
                Full Stack Developer
              </h1>

              <p className="text-[#555555] dark:text-gray-300 text-[1.8rem]">
                Hi, I'm Samyak Shah. A Passionate Full Stack Web Developer Based
                In Gujarat, India. 📍
              </p>

              {/* Social Icons */}
              <span className="flex lg:justify-start md:justify-center justify-center gap-5 my-10">
                {/* LinkedIn Icon */}
                <a
                  href="https://www.linkedin.com/in/samyak-shah-dev/"
                  className="text-[#2d2e32] dark:text-white text-5xl transition-all hover:text-[#147EFB] dark:hover:text-[#147EFB]"
                >
                  {/* SVG ICON */}
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
                  className="text-[#2d2e32] dark:text-white text-5xl transition-all hover:text-[#147EFB] dark:hover:text-[#147EFB]"
                >
                  {/* SVG ICON */}
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
                  >
                    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                  </svg>
                </a>
              </span>
            </div>

            {/* Hero Image */}
            <div
              className="hero-img h-[30rem] w-[30rem] lg:h-[37rem] lg:w-[37rem] bg-gray-300 dark:bg-gray-700 rounded-full"
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
            ></div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-col lg:flex-row items-center bottom-20 text-[#767676] dark:text-gray-400 text-3xl left-0 lg:absolute static text-center">
            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-[#2d2e32] dark:text-white border-b-2 lg:border-b-0 lg:border-r-2 border-[#2d2e32] dark:border-gray-600 font-semibold mb-8 pb-8 lg:mb-0 lg:pb-0 lg:mr-20 lg:pr-8"
            >
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
                    onMouseEnter={textEnter}
                    onMouseLeave={textLeave}
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
