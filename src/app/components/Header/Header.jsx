"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isBlurred, setIsBlurred] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsBlurred(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleMenuClick = (event, section) => {
    event.preventDefault();
    setMenuVisible(false);

    if (section === "#home" || section === "#about") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const targetElement = document.querySelector(section);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div
      className={`fixed z-20 w-full ${
        isBlurred
          ? "bg-[#eeeeee2f] bg-opacity-50 backdrop-blur-lg"
          : "bg-transparent"
      } transition-all duration-300`}
    >
      <div className="flex justify-between py-[20px] w-[80%] m-auto">
        <div>Dorinel Rushi</div>
        <div onClick={toggleMenu} className="cursor-pointer">
          {menuVisible ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>
      </div>
      {menuVisible && (
        <div
          className="fixed inset-0 z-10 bg-transparent"
          onClick={toggleMenu}
        ></div>
      )}
      <div
        ref={menuRef}
        className={`fixed top-0 right-0 h-[100vh] w-[75%] max-w-[400px] bg-[#181818]  shadow-lg transform ${
          menuVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 z-30`}
      >
        <div className="p-4 h-full flex flex-col justify-center items-center relative">
          <div
            className="absolute top-4 right-4 cursor-pointer"
            onClick={toggleMenu}
          >
            <FaTimes size={24} />
          </div>
          <h2 className="text-xl mb-4">Menu</h2>
          <ul className="text-center">
            <li className="mb-2">
              <a href="#home" onClick={(e) => handleMenuClick(e, "#home")}>
                Home
              </a>
            </li>
            <li className="mb-2">
              <a href="#about" onClick={(e) => handleMenuClick(e, "#about")}>
                About
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#services"
                onClick={(e) => handleMenuClick(e, "#services")}
              >
                Services
              </a>
            </li>
            <li className="mb-2">
              <a
                href="#contact"
                onClick={(e) => handleMenuClick(e, "#contact")}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
