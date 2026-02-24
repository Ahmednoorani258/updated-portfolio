"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  FaTimes,
} from "react-icons/fa";

const navLinks = [
  { href: "/", icon: FaHome, label: "Home" },
  { href: "/about", icon: FaUser, label: "About" },
  { href: "/services", icon: FaTools, label: "Services" },
  { href: "/projects", icon: FaProjectDiagram, label: "Projects" },
  { href: "/contact", icon: FaEnvelope, label: "Contact" },
];

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // default: dark
  const pathname = usePathname();

  useEffect(() => {
    const saved = localStorage.getItem("darkMode");
    // Only override default if user has explicitly toggled before
    if (saved !== null) {
      setIsDarkMode(JSON.parse(saved));
    } else {
      // First visit: force dark mode and persist it
      localStorage.setItem("darkMode", JSON.stringify(true));
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDarkMode);
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const close = () => setIsOpen(false);

  return (
    <div className="z-40 flex h-full fixed">
      {/* Mobile hamburger */}
      <button
        onClick={() => setIsOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-green-500/10 border border-green-500/30 text-green-500 hover:bg-green-500/20 transition-all"
        aria-label="Open menu"
      >
        <FaBars size={18} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-72 flex flex-col glass-sidebar
          border-r border-green-500/10 dark:border-green-500/10
          transform transition-transform duration-300 ease-in-out z-40
          ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top green accent line */}
        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-green-500 to-transparent" />

        <div className="flex flex-col h-full px-6 py-8 overflow-y-auto">
          {/* Logo + close */}
          <div className="flex items-center justify-between mb-10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-green-500 flex items-center justify-center shadow-glow">
                <span className="text-white font-bold text-sm tracking-tight">AN</span>
              </div>
              <div>
                <p className="font-bold text-gray-900 dark:text-white leading-none">
                  Code<span className="text-green-500">AN</span>
                </p>
                <p className="text-[10px] text-gray-500 dark:text-gray-400 mt-0.5">
                  Portfolio
                </p>
              </div>
            </div>
            <button
              onClick={close}
              className="lg:hidden p-1.5 rounded-lg hover:bg-gray-200 dark:hover:bg-white/10 transition-colors text-gray-500"
            >
              <FaTimes size={16} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-col gap-1 flex-1">
            {navLinks.map(({ href, icon: Icon, label }) => {
              const active = pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  onClick={close}
                  className={`group relative flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200
                    ${active
                      ? "bg-green-500/10 text-green-500 dark:text-green-400"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                    }`}
                >
                  {active && (
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-green-500 rounded-full" />
                  )}
                  <Icon size={16} className={active ? "text-green-500" : "text-gray-400 group-hover:text-green-500 transition-colors"} />
                  {label}
                </Link>
              );
            })}
          </nav>

          {/* Dark mode toggle */}
          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-white/10">
            <div className="flex items-center justify-between px-2">
              <span className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {isDarkMode ? "Dark" : "Light"} Mode
              </span>
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`relative w-12 h-6 rounded-full transition-colors duration-300
                  ${isDarkMode ? "bg-green-500" : "bg-gray-300"}`}
                aria-label="Toggle dark mode"
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow-sm
                    flex items-center justify-center transition-transform duration-300
                    ${isDarkMode ? "translate-x-6" : "translate-x-0"}`}
                >
                  {isDarkMode
                    ? <FaSun size={10} className="text-green-500" />
                    : <FaMoon size={10} className="text-gray-400" />
                  }
                </span>
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3 mt-5 px-2">
              <Link
                href="https://www.linkedin.com/in/mahmednorani/"
                target="_blank"
                className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-blue-500/10 hover:text-blue-500 transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaLinkedin size={18} />
              </Link>
              <Link
                href="https://github.com/Ahmednoorani258"
                target="_blank"
                className="flex-1 flex items-center justify-center py-2.5 rounded-xl bg-gray-100 dark:bg-white/5 text-gray-500 dark:text-gray-400 hover:bg-gray-800/10 dark:hover:bg-white/10 hover:text-gray-900 dark:hover:text-white transition-all duration-200 hover:-translate-y-0.5"
              >
                <FaGithub size={18} />
              </Link>
            </div>

            {/* Availability badge */}
            <div className="mt-5 px-2">
              <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-xl bg-green-500/8 border border-green-500/20">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                </span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile overlay */}
      {isOpen && (
        <div
          onClick={close}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden z-30"
        />
      )}
    </div>
  );
}
