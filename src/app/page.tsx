import About from "@/components/About";
import Service from "@/components/Service";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import { ProjectDatatype } from "./data/Projectdata";
import { projectData } from "./data/Projectdata";
export default function Home({ projects }: { projects: ProjectDatatype[] }) {

  return (
    <>
      <HeroSection />
      <About/>
      <Service/>
      <FeaturedProjects />
    </>
  );
}
