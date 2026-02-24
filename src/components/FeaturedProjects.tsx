import { projectData, projectCard } from "@/app/data/Projectdata";
import ProjectCard from "./ProjectCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const FeaturedProjects = () => {
  const featured = projectData.filter((p: projectCard) => p.isFeatured);

  return (
    <section className="py-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
        <div>
          <div className="section-tag">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            Selected Work
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white leading-tight">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="mt-2 text-gray-500 dark:text-gray-400 text-sm max-w-md">
            A curated selection of projects that showcase my skills across web, AI, and design.
          </p>
        </div>
        <Link
          href="/projects"
          className="flex items-center gap-2 text-sm font-semibold text-green-500 dark:text-green-400 hover:text-green-600 transition-colors group whitespace-nowrap"
        >
          View all projects
          <FaArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {featured.map((project: projectCard) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default FeaturedProjects;
