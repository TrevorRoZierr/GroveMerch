"use client";

import Image from "next/image";
import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import NavButton from "./NavButton";
import { useState } from "react";
import Menu from "./Menu";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full flex justify-between items-center p-6 bg-black border-b-4 border-green-400">
      <div onClick={handleMenu}>
        {isMenuOpen ? (
          <NavButton buttonComp={<RxCross2 />} />
        ) : (
          <NavButton buttonComp={<IoMenuSharp />} />
        )}
      </div>
      {isMenuOpen && <Menu />}
      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={400}
          height={100}
          className="hover:opacity-50 duration-300 w-[200px] lg:w-[400px] lg:ml-0 ml-2"
        />
      </Link>
      <div className="flex flex-row">
        <NavButton buttonComp={<FaRegUser />} />
        <NavButton buttonComp={<MdOutlineShoppingCart />} />
      </div>
    </div>
  );
};

export default Navbar;
