import Lottie from "lottie-react";
import animationData from "../assets/image/zen.json";
import Typewriter from "typewriter-effect";

function Landing() {
  return (
    <div className="bg-white">
      <div className="h-screen flex flex-col lg:flex-row items-center justify-center text-center w-full  md:w-2/3 m-auto ">
        <div className="mt-24 sm:mt-40 lg:mt-0 p-5 w-full lg:w-1/2">
          {" "}
          {/* Added width setting */}
          <div className="text-3xl sm:text-4xl text-black font-firaCode">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .changeDelay(70) // Updated to a number (no quotes)
                  .typeString(
                    "Hi! I'm <strong>Kushal Rai</strong>,<br />and I'm a web developer based in <strong>Melbourne.</strong>"
                  )
                  .start();
              }}
            />
          </div>
        </div>
        <div className="w-full max-w-xs sm:max-w-md md:max-w-lg lg:w-1/2">
          {" "}
          {/* Added width setting */}
          <Lottie animationData={animationData} />
        </div>
      </div>
    </div>
  );
}

export default Landing;
