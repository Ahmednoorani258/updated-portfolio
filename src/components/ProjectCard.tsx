import Image from "next/image";
import { projectCard } from "@/app/data/Projectdata";

export default function ProjectCard({ project }: { project: projectCard }) {
  return (
    <div className="flex flex-col justify-between bg-white dark:bg-gray-800  rounded-lg overflow-hidden shadow-glow hover:shadow-intenseGlow transition-shadow duration-300 border-t-4 border-green-500 dark:border-green-300">
      {/* Image Section */}
      {project.image ? (
        <Image
          src={project.image}
          alt={project.projectName}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
        />
      ) : (
        <div className="w-full h-48 flex items-center justify-center bg-gray-400 dark:bg-gray-700 text-gray-500 dark:text-gray-300">
          <p>No Image Available</p>
        </div>
      )}

      {/* Content Section */}
      <div className="p-6 flex flex-col justify-between flex-grow bg-gray-100 dark:bg-gray-800">
        {/* Title */}
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
          {project.projectName}
        </h3>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-3">
          {project.techStack.map((tech, index) => (
            <span
              key={index}
              className="px-2 py-1 text-sm font-medium bg-green-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-300 dark:border-gray-600">
          {/* GitHub Link */}
          {project.githubLink ? (
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 font-medium hover:underline"
            >
              GitHub
            </a>
          ) : (
            <span className="text-gray-400 text-sm">No GitHub Link</span>
          )}

          {/* Live Demo Link */}
          {project.vercelLink ? (
            <a
              href={project.vercelLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 font-medium hover:underline"
            >
              Live Demo
            </a>
          ) : (
            <span className="text-gray-400 text-sm">No Live Demo</span>
          )}
        </div>
      </div>
    </div>
  );
}
