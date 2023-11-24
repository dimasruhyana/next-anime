import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react";

interface IHeaderMenu {
  linkHome: string;
  title: string;
}

const HeaderMenu: React.FC<IHeaderMenu> = ({ linkHome, title }) => {
  return (
    <div className="flex items-center mb-2">
      {linkHome && (
        <Link href="/" className="text-dark">
          <ArrowLeft
            size={24}
            className="inline font-bold text-accent mr-2 hover:text-yellow-700 dark:hover:text-white"
          />
        </Link>
      )}
      <div className="text-center text-xl md:text-2xl mx-auto">{title}</div>
    </div>
  );
};

export default HeaderMenu;
