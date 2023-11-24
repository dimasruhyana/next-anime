import React from "react";
import Link from "next/link";
import InputSearch from "./InputSearch";
import ThemeSwitcher from "./ThemeSwitcher";

const Navbar = () => {
  return (
    <header className="bg-accent">
      <div className="flex justify-between md:items-center md:flex-row flex-col p-4 gap-2">
        <Link href="/" className="font-bold text-white text-2xl">
          Minki Anime
        </Link>
        <InputSearch />
        <ThemeSwitcher />
      </div>
    </header>
  );
};

export default Navbar;
