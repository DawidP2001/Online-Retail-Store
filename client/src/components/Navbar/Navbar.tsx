import NavbarDesktop from "./Desktop/Navbar-desktop";
import NavbarMobile from "./Mobile/Navbar-mobile";

type NavbarProps = {
  setIsMegaMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setMegaMenuSection: React.Dispatch<React.SetStateAction<'mens' | 'womens' | 'kids' | 'sale'>>;
};

const Navbar: React.FC<NavbarProps> = ({ setIsMegaMenuOpen, setMegaMenuSection }) => {
  return (
    <>
      <NavbarDesktop setIsMegaMenuOpen={setIsMegaMenuOpen} setMegaMenuSection={setMegaMenuSection}/>
      <NavbarMobile />
    </>
  );
};

export default Navbar;