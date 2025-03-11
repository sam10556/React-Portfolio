import React from "react";
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
  return (
    <div
      id="about"
      className="bg-[#F9F9F9] dark:bg-[#0e1012] lg:py-[15rem] md:py-[13rem] sm:py-[8rem] py-[8rem] px-0 h-auto"
    >
      <motion.div
        variants={fadeIn}
        initial="initial"
        whileInView="animate"
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
            <h3 className="text-[#147efb] text-[1.75rem] font-bold mb-4 uppercase">
              About Me
            </h3>
            <h4 className="text-[#2d2e32] dark:text-white lg:text-[2.5rem] text-4xl font-semibold mb-8">
              Full Stack Developer <br /> based in Gujarat, India 📍
            </h4>
            <p className="text-[#767676] dark:text-gray-300 text-[1.75rem] font-medium">
              Hello, I'm Samyak, a Full Stack Developer with expertise in
              designing and developing user-centric web applications. I
              specialize in creating clean and intuitive UI/UX experiences that
              elevate user engagement and satisfaction.
              <br />
              <br />
              My primary technology stack includes the MERN stack (MongoDB,
              Express.js, React/Next.js, and Node.js), combined with Tailwind
              CSS for responsive and modern designs.
            </p>

            {/* Download CV Button */}
            <div className="flex gap-4 items-center justify-center lg:justify-start mt-8">
              <button
                type="button"
                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-3xl px-5 py-2.5 text-center me-2 mb-2"
                onClick={() => window.open("/CV/Samyak_Shah_Resume.pdf")}
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
