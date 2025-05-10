import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/real-estate.png"
          title="Real Estate Site"
          description="A full-stack platform to list, search, and manage properties. Built with Next.js and MongoDB."
        />
        <ProjectCard
          src="/shoes.png"
          title="Interactive Website Cards"
          description="A full-stack web app to browse, filter, and purchase shoes online. Built with Next.js, Tailwind CSS, and Stripe for payments."
        />
        <ProjectCard
          src="/port.png"
          title="Modern Portfolio"
          description="A personal portfolio to showcase projects, skills, and experience. Built with ReactJs and Tailwind CSS."
        />
      </div>
    </div>
  );
};

export default Projects;