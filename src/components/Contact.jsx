import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const fadeIn = {
    initial: { opacity: 0, y: 100 },
    animate: (idx) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.3 * idx },
    }),
  };

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
      id="contact"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] lg:py-44 md:py-32 sm:py-32 py-32 px-0"
    >
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: "#0e1012" }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />
      <div
        id="container"
        className="mx-auto my-0 max-w-[105rem] lg:px-16 md:px-16 sm:px-16 px-7 py-0"
      >
        <div className="flex flex-col">
          <div className="text-center">
            <p
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="uppercase text-[#147efb] dark:text-[#82aaff] text-[1.7rem] font-extrabold mb-4"
            >
              Contact
            </p>
            <h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-[#2d2e32] dark:text-[#e4e4e7] text-[2.5rem] font-bold"
            >
              Don't be shy! Hit me up!
            </h3>
          </div>
          <div className="flex flex-wrap gap-20 lg:gap-32 md:gap-32 sm:gap-20 mt-24 flex-col lg:flex-row md:flex-row sm:flex-col justify-center text-center">
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] dark:text-[#82aaff] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-map-search"
                >
                  <path d="M11 18l-2 -1l-6 3v-13l6 -3l6 3l6 -3v7.5"></path>
                  <path d="M9 4v13"></path>
                  <path d="M15 7v5"></path>
                  <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                  <path d="M20.2 20.2l1.8 1.8"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="text-[#2d2e32] dark:text-[#e4e4e7] text-[1.7rem] font-bold"
                >
                  Location
                </h3>
                <p className="text-[#767676] dark:text-[#a1a1aa] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb] dark:hover:text-[#147EFB]">
                  Gujarat, India
                </p>
              </div>
            </div>
            <div className="items-center flex lg:gap-6 md:gap-6 flex-col lg:flex-row md:flex-row">
              <span className="flex items-center text-[#147efb] dark:text-[#82aaff] h-20 justify-center w-20">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="tabler-icon tabler-icon-mail"
                >
                  <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                  <path d="M3 7l9 6l9 -6"></path>
                </svg>
              </span>
              <div className="flex flex-col gap-2">
                <h3
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  className="text-[#2d2e32] dark:text-[#e4e4e7] text-[1.7rem] font-bold"
                >
                  Mail
                </h3>
                <a
                  href="mailto:samyak55.shah@gmail.com"
                  className="text-[#767676] dark:text-[#a1a1aa] cursor-pointer text-[1.7rem] font-medium hover:text-[#147efb] dark:hover:text-[#147EFB]"
                >
                  samyak55.shah@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
