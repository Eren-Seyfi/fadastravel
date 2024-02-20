import NavLink from "./NavLink/NavLink";

import MenuButton from "./MenuButton/MenuButton";
const Nav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Who We Are",
      path: "/whoweare",
    },
    {
      name: "Private Tours",
      path: "/privatetours",
    },
    {
      name: "Partner With Us",
      path: "/partnerwithus",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className=" md:flex md:items-center md:justify-between">
      <div className="flex items-center justify-between md:px-0 px-4 ">
        <img
          src="https://fadastravel.com/wp-content/uploads/2023/06/fadas-logo.png"
          alt="Logo"
          className=" cursor-pointer w-40 inline"
        />
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
