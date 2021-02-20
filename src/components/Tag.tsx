import React from "react";

interface TagProps {
  name: string;
  className?: string;
  closing?: boolean;
  block?: boolean;
}

const Tag: React.FC<TagProps> = ({ name, className, closing }) => {
  return (
    <span
      className={
        (!closing ? "block" : "inline-block") +
        " italic opacity-50 select-none font-light" +
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
