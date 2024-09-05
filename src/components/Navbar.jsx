import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "#home" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Projects", link: "#project" },
    { id: 4, text: "Contact", link: "#contact" },
  ];

  return (
    <div
      id="navBar"
      className="bg-white flex justify-between items-center h-auto w-full mx-auto px-20 lg:py-7 py-12 left-0 top-0 text-[1.7rem] fixed shadow-md z-200"
    >
      {/* Logo */}
      <h1 className="w-full text-3xl font-bold text-[#2D2E32] px-10 cursor-pointer">
        Samyak Shah
      </h1>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex list-none">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 hover:text-[#147EFB] rounded-xl cursor-pointer duration-300 text-[#2D2E32] font-semibold"
          >
            <a href={item.link}>{item.text}</a>
          </li>
        ))}
      </ul>

      {/* Mobile Navigation Icon */}
      <div
        onClick={handleNav}
        className="block md:hidden cursor-pointer"
        aria-label="Toggle mobile menu"
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={`fixed top-0 left-0 w-full h-full bg-gray-50 border-r border-r-gray-900 ease-in-out duration-500 md:hidden ${
          nav ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Mobile Logo */}
        <div className="w-[90%] font-bold flex justify-end pt-5">
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer"
            aria-label="Close mobile menu"
          >
            {nav && <AiOutlineClose size={30} />}
          </div>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="p-4 text-center mt-20 font-semibold text-4xl rounded-xl hover:text-[#147EFB] text-[#2D2E32] duration-300 cursor-pointer border-gray-600"
          >
            <a onClick={handleNav} href={item.link}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
