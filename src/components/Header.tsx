import React from "react";
import { ReactComponent as Logo } from "../assets/img/jbritz.svg";
import { ReactComponent as Linkedin } from "../assets/img/sc-linkedin.svg";
import { ReactComponent as Phone } from "../assets/img/sc-phone.svg";
import { ReactComponent as Twitter } from "../assets/img/sc-twitter.svg";
import SocialIcon from "../components/SocialIcon";

const Header: React.FC = ({}) => {
  return (
    <div className="flex">
      <Logo />
      <div className="ml-auto social-icons flex">
        <SocialIcon href="https://linkedin.com/in/ajibolaojo" Icon={Linkedin} />
        <SocialIcon href="https://twitter.com/jibolaojo/" Icon={Twitter} />
        <SocialIcon href="tel: +2347050424927" Icon={Phone} />
      </div>
    </div>
  );
};

export default Header;
