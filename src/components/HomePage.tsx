import React from "react";
import Tag from "../components/Tag";
import { PRIMARY_COLOR } from "../constants";

const HomePage: React.FC = ({}) => {
  return (
    <div className="pt-10 md:pt-20 relative mb-20">
      <Tag name="body" className="mb-16" />
      <Tag name="h4" />

      <div className="mb-4">
        <span className="text-2xl uppercase mr-1.5 font-medium leading-6">
          Hi There, I'm
        </span>
        <Tag name="h4" closing />
      </div>
      <div className="mb-4">
        <Tag name="h1" />
        <span className="text-6xl uppercase mr-1.5 font-medium">
          Ajibola Ojo
        </span>
        <Tag name="h1" closing />
      </div>
      <div className="mb-4">
        <Tag name="h4" />
        <span className="text-2xl text-blue-500 uppercase mr-1.5 font-medium">
          Web Developer + Student
        </span>
        <Tag name="h4" closing />
      </div>
      <div className="mb-10">
        <Tag name="p" />
        <p className="font-light">
          I enjoy solving complex problems using web technologies and
          <br />
          building things that matter.
          <Tag name="p" className="ml-1.5" closing />
        </p>
      </div>
      <button className="bg-blue-500 hover:bg-blue-700 text-base font-medium text-white py-2 px-10 rounded uppercase select-none">
        Hire Me
      </button>
      <Tag name="body" className="mt-10" />

      <span
        style={{ bottom: "100px", right: 0, transform: "rotate(90deg)" }}
        className="inline-block absolute  uppercase flex"
      >
        <span
          style={{ height: "1px" }}
          className="scroller bg-white w-20 mr-2 self-center relative"
        ></span>
        <span className="text-xl font-light">Scroll</span>
      </span>
    </div>
  );
};

export default HomePage;
