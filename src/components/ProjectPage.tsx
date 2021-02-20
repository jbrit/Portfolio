import React, { ReactElement } from "react";
import ProjectCard from "./ProjectCard";

const projects: Array<{
  githubName: string;
  liveLink?: string;
  children: Array<string>;
  stack: Array<string>;
}> = [
  {
    githubName: "portfolio",
    liveLink: "https://jbritz.netlify.app/",
    children: ["PureDev", "Polling", "Platform."],
    stack: ["Django", "HTML", "CSS", "JS"],
  },
  {
    githubName: "USSD-API",
    children: ["USSD API."],
    stack: ["Django", "HTML"],
  },
  {
    githubName: "Portfolio",
    liveLink: "https://jbritz.netlify.app/",
    children: ["My Portfolio."],
    stack: ["React", "TS"],
  },
  {
    githubName: "Creative-Coming-Soon",
    liveLink: "https://nutri-fi.netlify.app/",
    children: ["Nutri-Fi", "Coming Soon", "Page."],
    stack: ["HTML", "CSS", "JS", "GSAP"],
  },
  {
    githubName: "Music",
    liveLink: "https://musicport.netlify.app/",
    children: "Music Artiste Portfolio.".split(" "),
    stack: ["HTML", "CSS", "JS"],
  },
  {
    githubName: "seogrid",
    liveLink: "https://musicport.netlify.app/",
    children: "SEO Grid Campaign Dashboard.".split(" "),
    stack: ["HTML", "SCSS", "JS"],
  },
];

const ProjectPage: React.FC = ({}) => {
  return (
    <div className="pt-10 md:pt-20 relative mb-20">
      <div className="uppercase font-light text-2xl mb-3">Projects</div>
      <div className=" font-medium text-4xl mb-16">Stuffs I have worked on</div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.map((project, idx) => (
          <ProjectCard
            stack={project.stack}
            key={idx}
            githubName={project.githubName}
            liveLink={project.liveLink}
          >
            {project.children.map((child, idx) => (
              <div className="mr-2 mb-3" key={idx}>
                {child}
              </div>
            ))}
          </ProjectCard>
        ))}
      </div>
      <button className="bg-blue-500 block mt-10 mx-auto hover:bg-blue-700 text-base font-medium text-white py-2 px-8 rounded uppercase select-none">
        See More
      </button>
    </div>
  );
};

export default ProjectPage;
