import React from "react";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

interface IHeaderAnimeList {
  linkHome?: string;
  title: string;
  linkRef?: string;
  linkTitle?: string;
}

const Header: React.FC<IHeaderAnimeList> = ({
  linkHome,
  title,
  linkRef,
  linkTitle,
}) => {
  return (
    <div className="flex justify-between items-center md:py-3 py-2">
      <h1 className="font-medium md:text-2xl text-m">
        {linkHome ? (
          <Link href="/">
            <ArrowLeft
              size={24}
              className="inline font-bold text-accent mr-2 hover:text-yellow-700 dark:hover:text-white"
            />
          </Link>
        ) : null}
        {title}
      </h1>
      {linkRef && linkTitle ? (
        <Link
          href={linkRef}
          className="hover:text-accent text-md dark:text-white text-secondary dark:hover:text-accent">
          {linkTitle}
        </Link>
      ) : null}
    </div>
  );
};

export default Header;
