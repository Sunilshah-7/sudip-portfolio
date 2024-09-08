import React from "react";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ContactSection from "./ContactSection";
import ProjectsSection from "./ProjectsSection";
import SocialLinks from "./SocialLinks";

const MainContent: React.FC = () => (
  <main className="mt-5 max-md:max-w-full">
    <div className="flex gap-5 max-md:flex-col">
      <div className="flex flex-col w-[67%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col w-full max-md:mt-6 max-md:max-w-full">
          <HeroSection />
          <div className="mt-6 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                <AboutSection />
              </div>
              <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                <ContactSection />
              </div>
            </div>
          </div>
        </div>
      </div>
      <aside className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
        <div className="flex flex-col grow text-black whitespace-nowrap max-md:mt-7 max-md:max-w-full">
          <ProjectsSection />
          <SocialLinks />
        </div>
      </aside>
    </div>
  </main>
);

export default MainContent;
