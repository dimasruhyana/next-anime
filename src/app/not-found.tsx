import { FileSearch } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen min-w-xl flex justify-center items-center flex-col gap-1">
      <FileSearch size={38} className="text-yellow-400" />
      <h3 className="font-bold text-xl md:text-3xl text-yellow-400">
        NOT FOUND
      </h3>
      <Link
        href="/"
        className="underline text-slate-400 text-md md:text-xl hover:text-yellow-600">
        Kembali
      </Link>
    </div>
  );
};

export default NotFound;
