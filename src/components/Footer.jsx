import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faLinkedinIn,
  faSquareGithub,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-20 bg-off-white flex items-center justify-between px-40">
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
      <div>
        <p className="">&copy; Kushal Rai {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
