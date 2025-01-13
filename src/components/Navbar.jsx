import logo from "../assets/assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between py-1">
      <div className="flex flex-shirnk-0 items-center">
        <img src={logo} alt="logo" className="h-8 w-auto" />
      </div>
      <div className="m-4 flex items-center justify-center gap-4 text-2xl">
        <a
          href="https://www.linkedin.com/in/dananjana-ekanayake/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/Dananjana22"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-800"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/dananjana_ekanayake?igsh=MW9qNWEzbzgyNXdsZQ=="
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-500"
        >
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
