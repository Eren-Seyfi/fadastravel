"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
const NavLink = ({ link }) => {
  const pathname = usePathname();
  return (
    <div className="w-full">
      <Link
        href={link.path}
        className={`${
          pathname == link.path
            ? " text-cyan-500"
            : " hover:text-cyan-500 duration-500 text-gray-600"
        } text-xl font-bold`}
      >
        {link.name}
      </Link>
    </div>
  );
};

export default NavLink;
