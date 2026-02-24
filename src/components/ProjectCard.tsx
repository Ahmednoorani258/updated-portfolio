"use client";
import Image from "next/image";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { projectCard } from "@/app/data/Projectdata";

const techColors: Record<string, string> = {
  "NEXT.JS": "bg-black/80 text-white dark:bg-white/10 dark:text-white",
  "NEXT.Js": "bg-black/80 text-white dark:bg-white/10 dark:text-white",
  TypeScript: "bg-blue-500/15 text-blue-600 dark:text-blue-400",
  JavaScript: "bg-yellow-500/15 text-yellow-600 dark:text-yellow-400",
  React: "bg-cyan-500/15 text-cyan-600 dark:text-cyan-400",
  Python: "bg-indigo-500/15 text-indigo-600 dark:text-indigo-400",
  TAILWINDCSS: "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  "Tailwind CSS": "bg-teal-500/15 text-teal-600 dark:text-teal-400",
  HTML: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  HTML5: "bg-orange-500/15 text-orange-600 dark:text-orange-400",
  CSS: "bg-blue-400/15 text-blue-500 dark:text-blue-300",
  "ShadCn Ui": "bg-gray-500/15 text-gray-600 dark:text-gray-300",
  "ACETERNITY UI": "bg-purple-500/15 text-purple-600 dark:text-purple-400",
};

function getTechColor(tech: string): string {
  return techColors[tech] || "bg-green-500/10 text-green-700 dark:text-green-400";
}

export default function ProjectCard({ project }: { project: projectCard }) {
  return (
    <div className="group relative flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1.5"
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        boxShadow: "0 1px 4px rgba(0,0,0,0.06)",
      }}
      onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(34,197,94,0.3)")}
      onMouseLeave={e => (e.currentTarget.style.borderColor = "var(--border)")}
    >

      {/* Top accent gradient on hover */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-green-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Image */}
      <div className="relative w-full h-48 overflow-hidden bg-gray-100 dark:bg-white/5">
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt={project.projectName}
              fill
              style={{ objectFit: "cover" }}
              className="transition-transform duration-500 group-hover:scale-105"
            />
            {/* Hover overlay with links */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-green-500/30 hover:border-green-500/50 transition-all"
                >
                  <FaGithub size={18} />
                </a>
              )}
              {project.vercelLink && (
                <a
                  href={project.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-green-500/30 hover:border-green-500/50 transition-all"
                >
                  <FaExternalLinkAlt size={16} />
                </a>
              )}
            </div>
          </>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-4xl opacity-20">📁</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        <h3 className="font-semibold text-gray-900 dark:text-white text-sm leading-snug">
          {project.projectName}
        </h3>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5">
          {project.techStack.map((tech, i) => (
            <span
              key={i}
              className={`px-2 py-0.5 rounded-md text-[11px] font-medium ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links footer */}
        <div className="flex items-center gap-3 mt-auto pt-3" style={{ borderTop: "1px solid var(--border)" }}>
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={12} /> GitHub
            </a>
          ) : (
            <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>No repo</span>
          )}
          <span className="flex-1" />
          {project.vercelLink ? (
            <a
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs font-medium text-green-600 dark:text-green-400 hover:text-green-500 transition-colors"
            >
              Live Demo <FaExternalLinkAlt size={11} />
            </a>
          ) : (
            <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>No demo</span>
          )}
        </div>
      </div>
    </div>
  );
}
