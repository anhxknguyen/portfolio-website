import React from "react";

const Navbar = ({ setPage }) => {
  return (
    <ul className="font-neueThin flex flex-col items-end text-justify gap-9 text-5xl text-darkGray">
      <a
        onClick={() => setPage("About")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        about
      </a>
      <a
        onClick={() => setPage("Experience")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        experience
      </a>
      <a
        onClick={() => setPage("Projects")}
        className="transition hover:font-neueItalic cursor-pointer"
      >
        projects
      </a>
      <a
        href="../Resume.pdf"
        target="_blank"
        className="transition hover:font-neueItalic cursor-pointer"
      >
        resume
      </a>
    </ul>
  );
};

export default Navbar;