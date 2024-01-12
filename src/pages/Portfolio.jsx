import Lottie from "lottie-react";
import Project from "../components/Project";
import animationData from "../assets/image/about.json";

const projects = [
  {
    id: 1,
    url: "https://kushal-rai.github.io/react-pizza/",
    img: "./image/reactPizza.jpg",
  },
  {
    id: 2,
    url: "https://kushal-rai.github.io/usepopcorn/",
    img: "./image/usepopcorn.jpg",
  },
];
function Portfolio() {
  return (
    <div className="h-screen items-center bg-primary-yellow justify-center flex flex-col gap-20 text-center relative">
      <div className="w-1/3 m-0 absolute right-4 top-4 transform scale-x-flip">
        <Lottie animationData={animationData} loop={true} />
      </div>

      <div className="mb-2 ">
        <h1 className="text-5xl font-bold mb-5 relative">
          Portfolio
          <span className="absolute -bottom-5 left-[47%] transform -translate-x-1/2 block w-20 h-2 bg-primary-purple"></span>
        </h1>
      </div>
      <section>
        <ul className="grid grid-cols-2 gap-5 md:gap-10 m-auto">
          {projects.map((project) => (
            <Project project={project} key={project.id} />
          ))}
        </ul>

        <img href="" />
      </section>
    </div>
  );
}

export default Portfolio;
