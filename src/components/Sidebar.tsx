"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {  usePathname} from "next/navigation"; // Ensure this is the correct import based on your setup
import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaMoon,
  FaSun,
  FaBars,
} from "react-icons/fa";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = (event: React.MouseEvent) => {
    event.stopPropagation();
    setIsDarkMode(!isDarkMode);
  };

  // Persist dark mode preference in localStorage
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setIsDarkMode(JSON.parse(savedMode));
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
      document.documentElement.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  // Function to check if the current link is active
  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div className="z-10 flex h-full fixed dark:bg-gray-900 dark:text-white bg-white text-black">
      {/* Mobile Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden fixed top-4 left-4 z-50 text-gray-800 bg-green-500 dark:bg-green-300 rounded-full p-3 shadow-md"
      >
        <FaBars size={20} className="text-white dark:text-gray-500" />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 md:w-72 lg:w-72 border-r border-green-500 dark:border-green-300 p-5 space-y-8 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } 
          transition-transform duration-300 ease-in-out dark:bg-gray-800 dark:text-white bg-gray-200 text-black 
          lg:translate-x-0 lg:static lg:block z-40`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold mt-16">
            Code<span className="text-green-500 dark:text-green-300">AN</span>
          </h1>
          <button onClick={toggleSidebar} className="md:hidden text-2xl">
            &times;
          </button>
        </div>

        {/* Dark Mode Toggle */}
        <div className="flex items-center justify-between mb-4">
          <span className="font-semibold">Dark Mode</span>
          <button onClick={toggleDarkMode} className="text-xl">
            {isDarkMode ? (
              <FaSun className="text-yellow-400" />
            ) : (
              <FaMoon className="text-gray-700" />
            )}
          </button>
        </div>

        {/* Navigation Links */}
        <nav className="space-y-8 flex flex-col justify-between text-xl md:text-2xl">
          <Link
            href="/"
            className={` flex items-center space-x-3 dark:hover:text-green-300 hover:text-green-500 ${isActive("/") ? "text-green-500 dark:text-green-300" : ""}`}
            onClick={toggleSidebar}
          >
            <FaHome/> <span className="font-semibold ">Home</span>
          </Link>
          <Link
            href="/about"
            className={`flex items-center space-x-3 dark:hover:text-green-300 hover:text-green-500 ${isActive("/about") ? "text-green-500 dark:text-green-300" : ""}`}
            onClick={toggleSidebar}
          >
            <FaUser /> <span className="font-semibold">About</span>
          </Link>
          <Link
            href="/services"
            className={`flex items-center space-x-3 dark:hover:text-green-300 hover:text-green-500 ${isActive("/services") ? "text-green-500 dark:text-green-300" : ""}`}
            onClick={toggleSidebar}
          >
            <FaTools /> <span className="font-semibold">Services</span>
          </Link>
          <Link
            href="/projects"
            className={`flex items-center space-x-3 dark:hover:text-green-300 hover:text-green-500 ${isActive("/projects") ? "text-green-500 dark:text-green-300" : ""}`}
            onClick={toggleSidebar}
          >
            <FaProjectDiagram /> <span className="font-semibold">Projects</span>
          </Link>
          <Link
            href="/contact"
            className={`flex items-center space-x-3 dark:hover:text-green-300 hover:text-green-500 ${isActive("/contact") ? "text-green-500 dark:text-green-300" : ""}`}
            onClick={toggleSidebar}
          >
            <FaEnvelope /> <span className="font-semibold">Contact</span>
          </Link>
        </nav>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-4 mt-12 py-4 border-b border-green-500 dark:border-green-300">
          <Link
            href="https://www.linkedin.com/in/mahmednorani/"
            target="_blank"
            className="hover:text-green-500 dark:hover:text-green-300"
          >
            <FaLinkedin size={20} />
          </Link>
          <Link
            href="https://github.com/Ahmednoorani258"
            target="_blank"
            className="hover:text-green-500 dark:hover:text-green-300"
          >
            <FaGithub size={20} />
          </Link>
        </div>
      </aside>

      {/* Overlay for Mobile */}
      {isOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 md:hidden z-30"
        ></div>
      )}
    </div>
  );
}
