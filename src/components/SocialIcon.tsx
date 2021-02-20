import React from "react";

interface SocialIconProps {
  href: string;
  Icon: React.FunctionComponent;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, className }) => {
  return (
    <a target="__blank" className={className ?? "mx-3"} href={href}>
      <Icon />
    </a>
  );
};

export default SocialIcon;
