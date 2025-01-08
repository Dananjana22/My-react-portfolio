import logo from "../assets/assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Navbar = () => {
  return (
  <nav className=" mb-20 flex items-center justify-between py-1">
    <div className="flex flex-shirnk-0 items-center">
        <img src={logo} alt="logo"  className="h-8 w-auto"/>
    </div>
    <div className="m-4 flex items-center justify-center gap-4 text-2xl">
      <FaLinkedin />
      <FaGithub />
      <FaInstagram />
    </div>
  </nav>

  );
};

export default Navbar;