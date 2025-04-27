import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { motion } from "framer-motion";

const DarkModeIcon = () => (
  <svg
    fill="#ffffff"
    height="40"
    width="40"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M490.667,234.667h-2.155c-9.92-48.619-53.013-85.333-104.512-85.333c-37.995,0-71.189,20.117-90.091,50.133 C282.965,194.517,270.912,192,256,192s-26.944,2.517-37.909,7.467c-18.901-29.995-52.096-50.133-90.091-50.133 c-51.499,0-94.592,36.715-104.512,85.333h-2.155C9.536,234.667,0,244.224,0,256c0,11.776,9.536,21.333,21.333,21.333h2.155 c9.92,48.619,53.013,85.333,104.512,85.333c58.816,0,106.667-47.851,106.667-106.667c0-5.632-0.811-11.051-1.664-16.448 c6.165-3.477,12.8-4.885,22.997-4.885c10.325,0,16.896,1.365,22.997,4.843c-0.853,5.419-1.664,10.837-1.664,16.491 c0,58.816,47.851,106.667,106.667,106.667c51.499,0,94.592-36.715,104.512-85.333h2.155c11.797,0,21.333-9.557,21.333-21.333 C512,244.224,502.464,234.667,490.667,234.667z"></path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const LightModeIcon = () => (
  <svg
    fill="#000000"
    height="40"
    width="40"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 512 512"
    xmlSpace="preserve"
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      {" "}
      <g>
        {" "}
        <g>
          {" "}
          <path d="M490.667,234.667h-2.155c-9.92-48.619-53.013-85.333-104.512-85.333c-37.995,0-71.189,20.117-90.091,50.133 C282.965,194.517,270.912,192,256,192s-26.944,2.517-37.909,7.467c-18.901-29.995-52.096-50.133-90.091-50.133 c-51.499,0-94.592,36.715-104.512,85.333h-2.155C9.536,234.667,0,244.224,0,256c0,11.776,9.536,21.333,21.333,21.333h2.155 c9.92,48.619,53.013,85.333,104.512,85.333c58.816,0,106.667-47.851,106.667-106.667c0-5.632-0.811-11.051-1.664-16.448 c6.165-3.477,12.8-4.885,22.997-4.885c10.325,0,16.896,1.365,22.997,4.843c-0.853,5.419-1.664,10.837-1.664,16.491 c0,58.816,47.851,106.667,106.667,106.667c51.499,0,94.592-36.715,104.512-85.333h2.155c11.797,0,21.333-9.557,21.333-21.333 C512,244.224,502.464,234.667,490.667,234.667z"></path>{" "}
        </g>{" "}
      </g>{" "}
    </g>
  </svg>
);

const Navbar = () => {
  // State to manage the navbar's visibility and theme
  const [nav, setNav] = useState(false);
  const [theme, setTheme] = useState(
    window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
  );
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

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleNavToggle = () => setNav(!nav);
  const handleThemeSwitch = () =>
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));

  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Projects", link: "#project" },
    { id: 4, text: "Contact", link: "#contact" },
  ];

  return (
    <div className="bg-white dark:bg-[#0e1012]/90 dark:shadow-gray-800 flex justify-between items-center h-auto w-full mx-auto px-20 lg:py-7 py-12 left-0 top-0 text-[1.7rem] fixed shadow-md z-20 transition-colors duration-300">
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-[9999]"
        style={{ backgroundColor: "#0e1012" }}
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut" }}
      />
      {/* Logo */}
      <h1
        onMouseEnter={textEnter}
        onMouseLeave={textLeave}
        className="w-full text-3xl font-bold text-[#2D2E32] dark:text-white px-10 cursor-pointer"
      >
        Samyak Shah
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none items-center">
        <button
          onClick={handleThemeSwitch}
          className="mr-20 transition-transform duration-300 transform hover:scale-125"
        >
          {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-[#147EFB] dark:hover:text-[#147EFB] rounded-xl cursor-pointer duration-300 text-[#2D2E32] dark:text-gray-300 font-semibold"
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNavToggle}
        className="block md:hidden cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {nav ? (
          <AiOutlineClose size={30} className="text-black dark:text-white" />
        ) : (
          <AiOutlineMenu size={30} className="text-black dark:text-white" />
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-800 border-r border-r-gray-900 dark:border-r-gray-600 ease-in-out duration-500 md:hidden ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Logo */}
        <div className="w-[90%] font-bold flex justify-end pt-5">
          <div
            onClick={handleNavToggle}
            className="block md:hidden cursor-pointer"
            aria-label="Close mobile menu"
          >
            {nav && (
              <AiOutlineClose
                size={30}
                className="text-black dark:text-white"
              />
            )}
          </div>
        </div>

        <button
          onClick={handleThemeSwitch}
          className="block items-center mx-auto my-20"
        >
          {theme === "dark" ? <DarkModeIcon /> : <LightModeIcon />}
        </button>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 text-center mt-20 font-semibold text-6xl rounded-xl hover:text-[#147EFB] dark:hover:text-blue-300 text-[#2D2E32] dark:text-gray-300 duration-300 cursor-pointer border-gray-600"
          >
            <a onClick={handleNavToggle} href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
