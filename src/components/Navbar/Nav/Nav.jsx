import NavLink from "./NavLink/NavLink";
import Link from "next/link";
import MenuButton from "./MenuButton/MenuButton";
import { getDataNavbar } from "@/lib/getdata";
const Nav = async () => {
  const links = await getDataNavbar();
  return (
    <div className="md:flex md:items-center md:justify-between ">
      <div className="flex items-center justify-between md:px-0 px-4 ">
        <Link href="/">
          <img
            src="navbarLogo.jpg"
            alt="Logo"
            className=" cursor-pointer w-44 inline"
          />
        </Link>
        <MenuButton />
      </div>
      <ul
        id="menu"
        className="md:flex md:items-center z-[0] md:z-auto md:static absolute bg-white 
      w-full left-0 md:w-auto py-6 md:py-0 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-700"
      >
        {links.map((link, index) => (
          <li className="mx-4 my-6 md:my-0" key={index}>
            <NavLink link={link} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
