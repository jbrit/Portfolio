import React, { Children } from "react";
import RoundedCard from "./RoundedCard";
import SocialIcon from "./SocialIcon";
import { ReactComponent as GithubIcon } from "../assets/img/github.svg";
import { ReactComponent as ExternalLinkIcon } from "../assets/img/external-link.svg";

interface ProjectCardProps {
  githubName?: string;
  liveLink?: string;
  stack?: Array<string>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  children,
  githubName,
  liveLink,
  stack,
}) => {
  return (
    <RoundedCard>
      <div className="flex items-center justify-end mb-8">
        {githubName && (
          <SocialIcon
            href={`https://github.com/jbrit/${githubName}`}
            className="ml-2"
            Icon={GithubIcon}
          />
        )}
        {liveLink && (
          <SocialIcon
            className="ml-2"
            href={liveLink}
            Icon={ExternalLinkIcon}
          />
        )}
      </div>
      <div className="py-6 text-3xl flex flex-wrap font-medium">{children}</div>
      <div className="font-light uppercase mt-8">{stack?.join(", ")}</div>
    </RoundedCard>
  );
};

ProjectCard.defaultProps = {
  liveLink: undefined,
  githubName: undefined,
  stack: ["HTML", "CSS", "JS"],
};

export default ProjectCard;
