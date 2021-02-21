import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const skills: Array<{ name: string; iconProp: IconProp }> = [
  { name: "CSS3", iconProp: ["fab", "css3"] },
  { name: "HTML5", iconProp: ["fab", "html5"] },
  { name: "React", iconProp: ["fab", "react"] },
  { name: "SASS", iconProp: ["fab", "sass"] },
  { name: "JavaScript", iconProp: ["fab", "js"] },
  { name: "Python", iconProp: ["fab", "python"] },
];

const SkillsPage: React.FC = ({}) => {
  return (
    <div className="pt-10 md:pt-20 relative mb-20">
      <div className="uppercase font-light text-2xl mb-3">Skills</div>
      <div className=" font-medium text-4xl mb-16">What I can use</div>
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {skills.map(({ name, iconProp }, idx) => (
          <div
            key={idx}
            style={{ backgroundColor: " #303338 " }}
            className="p-8 flex flex-col items-center justify-center"
          >
            <FontAwesomeIcon className="text-5xl" icon={iconProp} />
            <div className="mt-5 text-center text-base font-light">{name}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;
