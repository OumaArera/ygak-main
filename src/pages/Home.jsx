import React from "react";
import HeroSection from "../components/home/HeroSection";
import AboutPreview from "../components/home/AboutPreview";
import FeaturedProjects from "../components/home/FeaturedProjects";
import UpcomingEvents from "../components/home/UpcomingEvents";
import ImpactStats from "../components/home/ImpactStats";
import MediaGallery from "../components/home/MediaGallery";
import Testimonials from "../components/home/Testimonials";
import CTASection from "../components/home/CTASection";

const Home = () => {
  return (
    <div className="bg-white text-gray-800">
      <HeroSection />
      <AboutPreview />
      <FeaturedProjects />
      <UpcomingEvents />
      <ImpactStats />
      <MediaGallery />
      <Testimonials />
      <CTASection />
    </div>
  );
};

export default Home;
