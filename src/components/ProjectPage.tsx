import React, { ReactElement } from "react";
import ProjectCard from "./ProjectCard";

const projects: Array<{
  githubName?: string;
  liveLink?: string;
  children: Array<string>;
  stack: Array<string>;
}> = [
  {
    githubName: "raffle",
    children: "RalphBrooke Raffle Draw.".split(" "),
    stack: ["Django"],
  },
  {
    githubName: "Iykee-Creative-Portfolio",
    liveLink: "https://iykee.netlify.app/",
    children: "Iykee Creative Portfolio.".split(" "),
    stack: ["HTML", "SCSS", "Vue", "GSAP"],
  },
  {
    githubName: "Portfolio",
    liveLink: "https://jbritz.netlify.app/",
    children: ["My Portfolio."],
    stack: ["React", "TS"],
  },
  {
    liveLink: "https://pdvote.herokuapp.com/",
    children: ["PureDev", "Polling", "Platform."],
    stack: ["Django", "HTML", "CSS", "JS"],
  },
  {
    githubName: "USSD-Application",
    children: ["USSD API."],
    stack: ["Django"],
  },
  {
    liveLink: "https://seo-dashboard.netlify.app/",
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
      <button
        onClick={() => window.open("https://github.com/jbrit/")}
        className="bg-blue-500 block mt-10 mx-auto hover:bg-blue-700 text-base font-medium text-white py-2 px-8 rounded uppercase focus:outline-none select-none"
      >
        See More
      </button>
    </div>
  );
};

export default ProjectPage;
