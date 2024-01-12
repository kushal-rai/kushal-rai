/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

function Project({ project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <li
      className={`relative border rounded-lg shadow-md bg-slate-700 overflow-hidden ${
        isHovered ? "hovered" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="w-40 h-40 md:w-80 md:h-80 flex justify-center items-center overflow-hidden">
        <img
          className={`w-full h-full object-cover rounded-t-lg ${
            isHovered ? "opacity-60" : ""
          }`}
          src={project.img}
          alt={`Project ${project.id}`}
        />
      </figure>
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center opacity-0 hover:opacity-100 transition-opacity duration-300">
        <Link to={project.url} className="text-center" target="_blank">
          <Button className="hover:bg-primary-purple">Visit Site</Button>
        </Link>
      </div>
    </li>
  );
}

export default Project;
