import React from "react";

interface Props {}

const Footer = (props: Props) => {
  return (
    <footer
      className="text-center text-lg text-opacity-80 text-white font-light
    "
    >
      &copy; Copyright Jbritz {new Date().getFullYear()}
    </footer>
  );
};

export default Footer;
