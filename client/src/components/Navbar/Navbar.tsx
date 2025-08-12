import NavbarDesktop from "./Desktop/Navbar-desktop";
import NavbarMobile from "./Mobile/Navbar-mobile";

const Navbar: React.FC = () => {
  return (
    <>
      <NavbarDesktop />
      <NavbarMobile />
    </>
  );
};
export default Navbar;