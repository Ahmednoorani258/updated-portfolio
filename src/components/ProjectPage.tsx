"use client";
import React, { useState } from "react";
import { projectData, ProjectDatatype } from "@/app/data/Projectdata";
import ProjectCard from "@/components/ProjectCard";



const ProjectPage = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projectData.filter((project) => {
    if (filter === "featured") return project.isFeatured;
    if (filter === "cli") return project.interfaceType === "COMMAND_LINE";
    if (filter === "Python") return project.techStack.includes("Python");
    return true; // default to show all
  });
  console.log("Project Types:", projectData.map(p => p.interfaceType));
  console.log("Filter:", filter);
  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-white min-h-screen py-16 px-6 sm:px-8 lg:px-12">
      <section className="max-w-7xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl sm:text-5xl font-bold text-center text-green-500 dark:text-green-300 mb-12">
          My Projects
        </h1>

        {/* Filter Buttons */}
        <div className="flex justify-center space-x-6 mb-12 md:text-xl">
          <button
            onClick={() => setFilter("all")}
            className={`${
              filter === "all"
                ? "text-green-500 dark:text-green-300 border-b-2 border-green-500 dark:border-green-300"
                : "text-gray-400 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300"
            } transition-all duration-300 focus:outline-none pb-2`}
          >
            All Projects
          </button>
          <button
            onClick={() => setFilter("featured")}
            className={`${
              filter === "featured"
                ? "text-green-500 dark:text-green-300 border-b-2 border-green-500 dark:border-green-300"
                : "text-gray-400 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300"
            } transition-all duration-300 focus:outline-none pb-2`}
          >
            Featured
          </button>
          <button
            onClick={() => setFilter("cli")}
            className={`${
              filter === "cli"
                ? "text-green-500 dark:text-green-300 border-b-2 border-green-500 dark:border-green-300"
                : "text-gray-400 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300"
            } transition-all duration-300 focus:outline-none pb-2`}
          >
            CLI Projects
          </button>
          <button
            onClick={() => setFilter("Python")}
            className={`${
              filter === "Python"
                ? "text-green-500 dark:text-green-300 border-b-2 border-green-500 dark:border-green-300"
                : "text-gray-400 dark:text-gray-400 hover:text-green-500 dark:hover:text-green-300"
            } transition-all duration-300 focus:outline-none pb-2`}
          >
            Python
          </button>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project: ProjectDatatype) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ProjectPage;
