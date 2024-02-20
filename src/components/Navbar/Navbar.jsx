import Nav from "./Nav/Nav";
import NavContact from "./NavContact/NavContact";
const Navbar = () => {
  return (
    <nav className="py-2 space-y-4 container">
      <NavContact />
      <Nav />
    </nav>
  );
};
export default Navbar;
