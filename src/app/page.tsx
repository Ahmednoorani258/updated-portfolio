import About from "@/components/About";
import Service from "@/components/Service";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import CAllToActionSec from "@/components/CallTOActionSec";

export default function Home() {
  return (
    <>
      <div className=" px-8 sm:px-12 md:px-16 lg:px-20">
        <HeroSection />
        <About />
        <Service />
        <FeaturedProjects />
      </div>
      <CAllToActionSec />
    </>
  );
}
