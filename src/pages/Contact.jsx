import Lottie from "lottie-react";
import animationData from "../assets/image/hire.json";
import ContactForm from "./ContactForm";

function Contact() {
  return (
    <div className="bg-primary-purple flex flex-col justify-center items-center py-8 -mt-10 relative">
      {/* animation wrapper */}
      {/* <div className="md:w-40 w-20 absolute right-16 md:right-56 opacity-80  bottom-7 md:botton-20 ">
        <Lottie animationData={animationData} loop={true} />
      </div> */}
      <div className="mb-16">
        <h1 className="text-5xl font-bold relative">
          Contact
          <span className="absolute -bottom-5 left-[47%] transform -translate-x-1/2 block w-20 h-2 bg-primary-yellow"></span>
        </h1>
      </div>
      <section className="bg-primary-yellow rounded-lg ga shadow-md flex flex-col md:flex-row md:gap-0 justify-between items-center">
        {/* contact form */}
        <div className="p-8 md:w-[380px]">
          <ContactForm />
        </div>
        {/* Image wrapper */}
        <div className="md:-mr-1 w-[20rem] md:w-[400px] h-[400px] md:h-full">
          <img
            className="w-full h-full object-cover md:rounded-none rounded-b-lg md:rounded-r-lg"
            src="src/assets/image/kush3.jpg"
            alt="Responsive Image"
          />
        </div>
      </section>
    </div>
  );
}

export default Contact;
