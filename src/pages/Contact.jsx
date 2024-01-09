import Lottie from "lottie-react";
import animationData from "../assets/image/hire.json";

function contact() {
  return (
    <div className="bg-primary-purple flex flex-col justify-center items-center  h-[100vh] relative">
      {/* animation wrapper */}
      <div className="w-60 absolute right-20 opacity-80 bottom-10">
        <Lottie animationData={animationData} loop={true} />
      </div>
      <div className="mb-16">
        <h1 className="text-5xl font-bold relative">
          Contact
          <span className="absolute -bottom-5 left-[47%] transform -translate-x-1/2 block w-20 h-2 bg-primary-yellow"></span>
        </h1>
      </div>
      <section className="max-w-md w-full mx-auto bg-[#f4f4f4] rounded-lg shadow-md">
        <form className=" py-4 px-5 ">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-1">
              Phone:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block mb-1">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              placeholder="Your message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </form>
      </section>
    </div>
  );
}

export default contact;
