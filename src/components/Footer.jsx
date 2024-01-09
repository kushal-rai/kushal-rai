import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagramSquare,
  faSquareGithub,
  faWhatsappSquare,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="h-20 bg-off-white flex items-center justify-between px-40">
      <div className="flex gap-6">
        <FontAwesomeIcon
          icon={faFacebookSquare}
          className="text-gray-600 text-3xl"
        />
        <FontAwesomeIcon
          icon={faInstagramSquare}
          className="text-gray-600 text-3xl"
        />
        <FontAwesomeIcon
          icon={faWhatsappSquare}
          className="text-gray-600 text-3xl"
        />
        <FontAwesomeIcon
          icon={faSquareGithub}
          className="text-gray-600 text-3xl"
        />
      </div>
      <div>
        <p className="">&copy; Kushal Rai {currentYear}</p>
      </div>
    </div>
  );
}

export default Footer;
