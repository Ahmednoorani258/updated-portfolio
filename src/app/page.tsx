import About from "@/components/About";
import Service from "@/components/Service";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
export default function Home() {
  return (
    <>
      <HeroSection />
      <About/>
      <Service/>
      <FeaturedProjects/>
    </>
  );
}
