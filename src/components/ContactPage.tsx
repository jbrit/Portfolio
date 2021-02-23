import React, { useRef, useState } from "react";
import { ReactComponent as Linkedin } from "../assets/img/sc-linkedin.svg";
import { ReactComponent as Phone } from "../assets/img/sc-phone.svg";
import { ReactComponent as Twitter } from "../assets/img/sc-twitter.svg";
import { ReactComponent as Mail } from "../assets/img/sc-mail.svg";
import { validateForm } from "./utils";

const ContactPage: React.FC = ({}) => {
  const [status, setStatus] = useState("");
  const [error, setError] = useState("");

  const formRef = useRef<HTMLFormElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handlesubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors = validateForm([
      nameRef.current,
      emailRef.current,
      messageRef.current,
    ]);
    if (errors.length) {
      setError(errors[0]);
      return;
    }
    setError("");

    const form: HTMLFormElement = formRef.current!;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        setStatus("SUCCESS");
      } else {
        setStatus("ERROR");
      }
    };

    xhr.send(data);
  };

  return (
    <div className="pt-10 md:pt-20 relative mb-20">
      <div className="uppercase font-light text-2xl mb-3">Contact Me</div>
      <div className=" font-medium text-4xl mb-10">Let's have a chat!</div>
      <div className="grid md:grid-cols-2 gap-10 lg:gap-20">
        <div className="form-holder">
          <div className="error h-6 text-red-300 mb-3">{error}</div>
          <form
            method="POST"
            action="https://formspree.io/f/mzbkqqbn"
            ref={formRef}
            onSubmit={handlesubmit}
          >
            <div className="form-group mb-6">
              <label className="sr-only" htmlFor="name">
                First Name
              </label>
              <input
                className="outline-none rounded p-3 w-full"
                id="name"
                name="name"
                placeholder="Full Name"
                type="text"
                ref={nameRef}
              />
            </div>
            <div className="form-group mb-6">
              <label className="sr-only" htmlFor="email">
                Email Address
              </label>
              <input
                className="outline-none rounded p-3 w-full"
                id="email"
                name="email"
                placeholder="Email Address"
                type="email"
                ref={emailRef}
              />
            </div>
            <div className="form-group mb-6">
              <label className="sr-only" htmlFor="message">
                Message
              </label>
              <textarea
                placeholder="Your Message"
                className="outline-none resize-none rounded p-3 w-full"
                id="message"
                name="message"
                rows={6}
                ref={messageRef}
                // Work on fized size
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 w-full block mt-10 mx-auto hover:bg-blue-700 text-base font-medium text-white py-2 px-8 rounded uppercase focus:outline-none select-none"
            >
              Send
            </button>
          </form>
        </div>
        <div className="social-details">
          <div className="uppercase font-light text-2xl mb-8">Reach me on</div>
          <div className="flex flex-wrap md:flex-nowrap md:flex-col text-lg font-light">
            <a
              href="tel:+2347050424927"
              className="flex items-center tracking-wide mr-6 mb-6"
            >
              <Phone className="mr-4 flex-none" /> +234 705 042 4927
            </a>
            <a
              target="__blank"
              href="https://linkedin.com/in/ajibolaojo/"
              className="flex items-center tracking-wide mr-6 mb-6"
            >
              <Linkedin className="mr-4 flex-none" />
              <span className="text-blue-300">
                https://linkedin.com/in/ajibolaojo/
              </span>
            </a>
            <a
              target="__blank"
              href="https://twitter.com/ajibola_ojo_/"
              className="flex items-center tracking-wide mr-6 mb-6"
            >
              <Twitter className="mr-4 flex-none" />
              <span className="text-blue-300">
                https://twitter.com/ajibola_ojo_/
              </span>
            </a>
            <a
              href="mailto:pro.ajibolaojo@gmail.com"
              className="flex items-center tracking-wide mr-6 mb-6"
            >
              <Mail className="mr-4 flex-none" />
              <span className="text-blue-300">pro.ajibolaojo@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
