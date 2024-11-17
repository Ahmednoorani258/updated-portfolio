import {projectData ,projectCard }from "@/app/data/Projectdata";  
import ProjectCard from "./ProjectCard";  

const FeaturedProjects = () => {

   const FeaturedProjects = projectData.filter((project:projectCard ) => project.isFeatured);

 return (
   <section className="py-12">
   <h2 className="text-3xl font-bold text-center mb-8 border-b-4 border-green-500 dark:border-green-300">
       Featured <span className="text-green-500 dark:text-green-300">Projects</span>
   </h2>
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
       {FeaturedProjects.map((project: projectCard) => (
           <ProjectCard key={project.id} project={project} />
       ))}
   </div>
</section>
 )
};

export default FeaturedProjects;
