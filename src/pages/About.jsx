import Lottie from "lottie-react";
import animationData from "../assets/image/about.json";

function About() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TailwindCSS",
    "Wordpress",
    "ReactJs",
    "NodeJs",
    "TypeScript",
    "Git",
    "Shadcn",
    "Adobe Illustrator",
    "Adobe After Effect",
  ];
  return (
    <div className="bg-[#F9F9F9] flex flex-col justify-center items-center  h-[100vh] relative">
      <div className="mb-16">
        {/* animation wrapper */}
        <div className="w-1/3 absolute left-0 opacity-80 top-4">
          <Lottie animationData={animationData} loop={true} />
        </div>
        <h1 className="text-5xl font-bold mb-5 relative">
          About
          <span className="absolute -bottom-5 left-[47%] transform -translate-x-1/2 block w-20 h-2 bg-primary-yellow"></span>
        </h1>
      </div>

      <section className="max-w-full  md:w-3/4 px-3 flex flex-col lg:flex-row gap-10">
        <p className="text-center lg:w-2/4 lg:mt-12">
          Hey, I&apos;m Kushal, a dedicated web developer from Melbourne. I
          blend creativity with code to craft sleek, user-friendly websites.
          Always learning and exploring new technologies, outside of coding,
          you&apos;ll find me exploring nature&apos;s wonders or embracing a
          fitness challenge.
          <br />
          <em>Let&apos;s build something awesome together!</em>
        </p>

        <div className="m-auto lg:w-2/4">
          <h2 className="text-center text-2xl mb-4">Skills/ Tech</h2>
          <div>
            <div className="grid grid-cols-3 lg:grid-cols-3 gap-5">
              {skills.map((skill) => (
                <li
                  className="list-none w-full bg-primary-yellow text-slate-800 text-center rounded-lg px-3  pb-2 pt-1 text-xs sm:text-lg hover:shadow-lg cursor-default"
                  key={skill}
                >
                  {skill}
                </li>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
