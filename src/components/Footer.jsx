import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagramSquare,
  faLinkedinIn,
  faSquareGithub,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className=" bg-off-white ">
      <div className="flex flex-row md:items-center p-5 md:justify-center md:gap-96 justify-between">
        <div className="flex gap-6">
          <Link to={"https://www.instagram.com/_kushalrai/"} target="_blank">
            <FontAwesomeIcon
              icon={faInstagramSquare}
              className="text-gray-600 text-3xl cursor-pointer"
            />
          </Link>

          <Link to={"https://www.facebook.com/kushal.rai3/"} target="_blank">
            <FontAwesomeIcon
              icon={faWhatsappSquare}
              className="text-gray-600 text-3xl cursor-pointer"
            />
          </Link>

          <Link to={"https://github.com/kushal-rai"} target="_blank">
            <FontAwesomeIcon
              icon={faSquareGithub}
              className="text-gray-600 text-3xl cursor-pointer"
            />
          </Link>

          <Link
            to={"https://www.linkedin.com/in/kushal-rai-7ba598110/"}
            target="_blank"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              className="text-gray-600 text-3xl cursor-pointer"
            />
          </Link>
        </div>

        <div className="md:right-0">
          <p className="">&copy; Kushal Rai {currentYear}</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
