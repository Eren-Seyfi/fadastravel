import Nav from "./Nav/Nav";
import NavContact from "./NavContact/NavContact";
const Navbar = () => {
  return (
    <nav className="py-2 pt-4 px-16 space-y-8 container sticky z-[2]" id="swipe">
      <NavContact />
      <Nav />
    </nav>
  );
};
export default Navbar;
