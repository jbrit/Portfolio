import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import Tag from "../components/Tag";

const HomePage: React.FC = ({}) => {
  const slideRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".slide-in", {
      transform: "translateY(0%)",
      "--slideHeight": "0%",
      duration: 0.7,
      stagger: 0.1,
    }).to(".hireBtn", { opacity: 1 });

    gsap.fromTo(
      ".scroller",
      {
        "--scrollHeight": "-100%",
      },
      {
        "--scrollHeight": "100%",
        duration: 2,
        repeat: -1,
        yoyo: true,
      }
    );
  });
  return (
    <div className="pt-10 md:pt-20 relative mb-20">
      <Tag name="body" className="mb-16" />
      <Tag name="h4" />

      <div className="mb-4">
        <span
          ref={slideRef}
          className="slide-in text-2xl uppercase mr-1.5 font-medium leading-6 inline-block"
        >
          Hi There, I'm
        </span>
        <Tag name="h4" closing />
      </div>
      <div className="mb-4">
        <Tag name="h1" />
        <span className="slide-in text-6xl uppercase mr-1.5 font-medium">
          Ajibola Ojo
        </span>
        <Tag name="h1" closing />
      </div>
      <div className="mb-4">
        <Tag name="h4" />
        <span className="slide-in text-2xl text-blue-500 uppercase mr-1.5 font-medium">
          FullStack Developer
        </span>
        <Tag name="h4" closing />
      </div>
      <div className="mb-10">
        <Tag name="p" />
        <p className="font-light slide-in">
          I enjoy solving complex problems using web technologies and
          <br />
          building things that matter.
          <Tag name="p" className="ml-1.5" closing />
        </p>
      </div>
      <a
        href="#contactSection"
        className="bg-blue-500 opacity-0 hireBtn hover:bg-blue-700 focus:outline-none text-base font-medium text-white py-2 px-10 rounded uppercase select-none"
      >
        Hire Me
      </a>
      <Tag name="body" className="mt-10" />

      <span
        style={{ bottom: "100px", right: 0, transform: "rotate(90deg)" }}
        className="hidden md:flex absolute  uppercase"
      >
        <span
          style={{ height: "1px" }}
          className="scroller bg-white w-20 mr-2 self-center relative block overflow-hidden"
        ></span>
        <span className="text-xl font-light">Scroll</span>
      </span>
    </div>
  );
};

export default HomePage;
