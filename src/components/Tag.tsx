import gsap from "gsap";
import React, { useEffect } from "react";

interface TagProps {
  name: string;
  className?: string;
  closing?: boolean;
  block?: boolean;
}

const Tag: React.FC<TagProps> = ({ name, className, closing }) => {
  useEffect(() => {
    gsap.fromTo(
      ".tag",
      { opacity: "0", duration: 1 },
      { opacity: "0.5", delay: 1 }
    );
  }, []);
  return (
    <span
      className={
        (!closing ? "block" : "inline-block") +
        " italic opacity-0 select-none font-light tag  overflow-hidden h-6" +
        " " +
        className
      }
    >
      {"<"}
      {name}
      {closing ? "/" : ""}
      {">"}
    </span>
  );
};

Tag.defaultProps = {
  closing: false,
  block: false,
  className: "",
};
export default Tag;
