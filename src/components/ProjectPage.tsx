"use client";
import React, { useState } from "react";
import { projectData, ProjectDatatype } from "@/app/data/Projectdata";
import ProjectCard from "@/components/ProjectCard";

const filters = [
  { key: "all", label: "All Projects" },
  { key: "featured", label: "Featured" },
  { key: "fullstack", label: "FullStack" },
  { key: "chatbot", label: "Chatbot" },
  { key: "cli", label: "CLI" },
  { key: "Python", label: "Python" },
  { key: "ai-built", label: "AI Built" },
  { key: "map", label: "Map" },
];

const chatbotKeywords = ["Dialogflow", "Chatbot", "chatbot", "RAG", "MCP"];
const aiBuiltKeywords = ["AI Built"];
const mapKeywords = ["Map", "map", "OSM", "OpenStreetMap"];

const ProjectPage = () => {
  const [filter, setFilter] = useState<string>("all");

  const filteredProjects = projectData.filter((project) => {
    if (filter === "featured") return project.isFeatured;
    if (filter === "cli") return project.interfaceType === "COMMAND_LINE";
    if (filter === "Python") return project.techStack.includes("Python");
    if (filter === "chatbot") return chatbotKeywords.some((kw) => project.projectName.includes(kw));
    if (filter === "ai-built") return aiBuiltKeywords.some((kw) => project.projectName.includes(kw));
    if (filter === "fullstack") return (
      project.interfaceType === "BROWSER" &&
      !project.techStack.includes("Python") &&
      !chatbotKeywords.some((kw) => project.projectName.includes(kw)) &&
      !aiBuiltKeywords.some((kw) => project.projectName.includes(kw))
    );
    if (filter === "map") return mapKeywords.some((kw) => project.projectName.includes(kw) || project.techStack.includes(kw));
    return true;
  });

  return (
    <div className="min-h-screen py-16 px-6 sm:px-8 lg:px-12" style={{ background: "var(--background)" }}>
      <section className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
            style={{ background: "rgba(34,197,94,0.08)", color: "#16a34a", border: "1px solid rgba(34,197,94,0.2)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            <span className="dark:text-green-400">My Work</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            All{" "}
            <span style={{
              background: "linear-gradient(135deg, #15803d, #22c55e)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              Projects
            </span>
          </h1>
          <p className="mt-3 text-gray-500 dark:text-gray-400 text-base max-w-xl mx-auto">
            {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""} — filter by category below.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex gap-1 p-1 rounded-xl" style={{ background: "var(--surface)", border: "1px solid var(--border)" }}>
            {filters.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setFilter(key)}
                className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200
                  ${filter === key
                    ? "bg-green-500 text-white shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project: ProjectDatatype) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ProjectPage;
