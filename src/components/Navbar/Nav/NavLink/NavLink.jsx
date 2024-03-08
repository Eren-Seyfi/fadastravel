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
            ? " text-red-500"
            : " hover:text-red-500 duration-500 text-gray-700"
        } text-base font-bold font-poppins tracking-widest`}
      >
        {link.name}
      </Link>
    </div>
  );
};

export default NavLink;
