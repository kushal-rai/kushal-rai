/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

function Project({ project }) {
  return (
    <li className="border rounded-lg  shadow-md bg-slate-700 p-5">
      <figure className="w-20 h-20 md:w-40 md:h-40 bg-gray-300 flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src={project.img}
          alt={`Project ${project.id}`}
        />
      </figure>
      <Link to={project.url} className="block mt-2 text-center">
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-2 text-sm rounded">
          Visit Site
        </button>
      </Link>
    </li>
  );
}

export default Project;
