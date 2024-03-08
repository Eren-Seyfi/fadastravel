"use client";
import { useState } from "react";
import { IoMenu, IoCloseSharp } from "react-icons/io5";

const MenuButton = () => {
  const [useMenu, setMenu] = useState(true);
  const openMenu = () => {
    const ul = document.getElementById("menu");
    useMenu
      ? (setMenu(false),
        ul.classList.add("top-[100px]"),
        ul.classList.add("opacity-100"))
      : (setMenu(true),
        ul.classList.remove("top-[80px]"),
        ul.classList.remove("opacity-100"));
  };
  return (
    <button onClick={openMenu} className="mx-2 text-4xl md:hidden block">
      {useMenu ? <IoMenu /> : <IoCloseSharp />}
    </button>
  );
};
export default MenuButton;
