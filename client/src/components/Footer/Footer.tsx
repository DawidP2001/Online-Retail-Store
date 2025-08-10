import Logo from "../Symbols/Logo";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer w-full h-20 bg-gray-200">
        <div className="container mx-auto flex justify-between items-center h-full px-4">
            <Logo />
            <div className="social-icons flex items-center space-x-4 gap-2">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
                <FaFacebook size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-400 transition-colors">
                <FaTwitter size={24} />
            </a>
            <a href="#" className="text-gray-700 hover:text-pink-600 transition-colors">
                <FaInstagram size={24} />
            </a>
            </div>
            <p className="text-gray-700">© 2023 Italia Attire</p>
        </div>
    </footer>
  );
}   

export default Footer;