import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const fadeIn = {
  initial: {
    opacity: 0,
    x: -300,
  },
  animate: () => {
    return {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.75,
      },
    };
  },
};

const TextCircleAnimation = () => {
  const radius = 85; // Radius for the circular path

  return (
    <div className="relative flex items-center justify-center">
      {/* Circular text rotating animation */}
      <motion.svg
        viewBox="0 0 200 200"
        className="w-80 h-80 bg-[#F9F9F9] dark:bg-[#0e1012] rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 10, ease: "linear", repeat: Infinity }}
      >
        <defs>
          {/* Circular path definition */}
          <path
            id="circlePath"
            d={`
              M 100, 100
              m -${radius}, 0
              a ${radius},${radius} 0 1,0 ${radius * 2},0
              a ${radius},${radius} 0 1,0 -${radius * 2},0
            `}
          />
        </defs>

        {/* Text following the circular path */}
        <text
          fontSize="22"
          fontWeight="bold"
          fill="currentColor"
          style={{
            fontFamily: " 'Cormorant Garamond' , serif",
            letterSpacing: "5px",
          }}
        >
          <textPath href="#circlePath" startOffset="0">
            FULL-STACK &nbsp; WEB &nbsp; DEVELOPER
          </textPath>
        </text>
      </motion.svg>
    </div>
  );
};

const About = () => {
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
      id="about"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] lg:py-[15rem] md:py-[13rem] sm:py-[8rem] py-[8rem] px-0 h-auto"
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
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
        viewport={{
          once: true,
        }}
        id="container"
        className="mx-auto my-0 max-w-[120rem] px-16 py-0"
      >
        <div
          id="abtcon"
          className="items-center grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1 justify-center text-center lg:text-start"
        >
          {/* Image Section */}
          <div
            id="img"
            className="relative flex justify-center text-center mb-12"
          >
            <div className="about-img h-[30rem] w-[35rem] lg:h-[35rem] md:h-[35rem] lg:w-[41rem] md:w-[41rem] text-center">
              <span className="absolute hidden lg:block md:block lg:bottom-[-33px] md:bottom-[-40px] lg:right-[0px] dark:text-white md:right-[100px] bg-[#f9f9f9] dark:bg-black rounded-full">
                <img
                  src="./image/manT.png"
                  alt="Developer illustration"
                  className="w-[50px] absolute z-10 bottom-32 right-[70px]"
                />
                <TextCircleAnimation />
              </span>
            </div>
          </div>

          {/* Text Section */}
          <div className="px-10">
            <h3
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-[#147efb] text-[1.75rem] font-bold mb-4 uppercase"
            >
              About Me
            </h3>
            <h4
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              className="text-[#2d2e32] dark:text-white lg:text-[2.5rem] text-4xl font-semibold mb-8"
            >
              Full Stack Developer <br /> based in Gujarat, India 📍
            </h4>
            <p className="text-[#767676] dark:text-gray-300 text-[1.75rem] font-medium">
              Hey, I'm Samyak — whether it's building a single-page web app or a
              full-blown multi-page project, I'm always ready to dive in and
              make it happen.
              <br />
              <br />
              I focus on creating clean, user-friendly websites that not only
              look great but actually make sense — smooth experience, fast
              performance, and scalable for the long run.
              <br />
              <br />
              Smooth operator with the MERN stack, and always up for a new
              challenge.
              <br />
              <br />
              When I'm not coding, you’ll probably find me playing football,
              watching football.
            </p>

            {/* Download CV Button */}
            <div className="flex gap-4 items-center justify-center lg:justify-start mt-8">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => window.open("/CV/SamyakShah-Resume.pdf")}
              >
                Download CV
              </button>

              {/* Emojis */}
              <img
                src="/image/backhand.png"
                alt="backhand emoji"
                className="hidden md:block lg:block w-[40px]"
              />
              <img
                src="/image/manT.png"
                alt="man emoji"
                className="lg:hidden md:hidden block w-[40px]"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default About;
