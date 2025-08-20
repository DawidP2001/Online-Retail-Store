import Logo from "../Symbols/Logo";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer w-full h-full bg-gray-200 grid grid-cols-5 gap-4">
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Italia Attire</h2>
            <a href="#">About Us</a>
            <a href="#">Store Locator</a>
            <a href="#">Available jobs</a>
            <a href="#">Press</a>
            <a href="#">Affiliate</a>
            <a href="#">Student discount</a>
            <a href="#">Newsletter subscription</a>
            <a href="#">Key Worker Discount</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Help</h2>
            <a href="#">Track order</a>
            <a href="#">FAQ</a>
            <a href="#">Delivery methods</a>
            <a href="#">Return & refund policy</a>
            <a href="#">Payments</a>
            <a href="#">Black Friday FAQ</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Legal</h2>
            <a href="#">Privacy notice</a>
            <a href="#">Cookie notice</a>
            <a href="#">Terms & conditions</a>
            <a href="#">Terms of service</a>
            <a href="#">Accessibility</a>
            <a href="#">Cookie settings</a>
        </div>
        <div className="flex flex-col justify-start items-start p-5 space-y-4">
            <h2>Socials</h2>
            <a href="#">Instagram</a>
            <a href="#">Twitter</a>
            <a href="#">Facebook</a>
        </div>
        <div className="flex justify-start items-start flex-row p-5 space-x-4">
            <div>Ireland</div>
            <div>Log in</div>
            <Logo size={30} className="cursor-pointer" />
        </div>
    </footer>
  );
}   

export default Footer; 