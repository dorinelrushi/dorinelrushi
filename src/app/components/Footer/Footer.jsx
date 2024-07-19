import React from "react";
import { FaInstagram, FaBehance, FaDribbble } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0c0c0c] text-white py-16 relative">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-16">
        {/* Column 1: Logo, Email, and Mobile Number */}
        <div className="relative">
          <h2 className="mb-[10px] font-bold text-[25px]">DorinelRushi</h2>
          <p className="flex items-center mb-2">
            <span className="mr-2">&#9993;</span> dorinelrushi8@gmail.com
          </p>
          <p className="flex items-center">
            <span className="mr-2">&#9742;</span> +355 67 6925 765
          </p>
        </div>

        {/* Column 2: Services Links */}
        <div className="relative">
          <h3 className="font-bold mb-6 text-lg">Services</h3>
          <ul>
            <li>
              <a
                href="#services"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Social Media
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Website Design
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Website Development
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Navigation Links */}
        <div className="relative">
          <h3 className="font-bold mb-6 text-lg">Navigation</h3>
          <ul>
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-gray-300 transition duration-300 mb-2 block"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Social Links */}
        <div className="relative">
          <h3 className="font-bold mb-6 text-lg">Follow Us</h3>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/dorinel.r/"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://www.behance.net/dorinelrushi"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaBehance size={24} />
            </a>
            <a
              href="https://dribbble.com/dorinelrushi123"
              target="_blank"
              className="hover:text-gray-300 transition duration-300"
            >
              <FaDribbble size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
