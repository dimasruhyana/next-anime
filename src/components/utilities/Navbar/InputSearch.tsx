"use client";

import { MagnifyingGlass } from "@phosphor-icons/react/dist/ssr";
import { useRouter } from "next/navigation";
import React, { useRef } from "react";

const InputSearch = () => {
  const searchRef: any = useRef();
  const router = useRouter();

  const handleSearch = (event: any) => {
    const keyword = searchRef.current.value;
    if (!keyword) return;

    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <div>
        <input
          placeholder="cari anime..."
          className="p-2 w-full rounded dark:bg-white dark:text-dark"
          ref={searchRef}
          onKeyDown={handleSearch}
        />
        <button className="absolute top-2 end-1" onClick={handleSearch}>
          <MagnifyingGlass size={24} className="dark:text-dark" />
        </button>
      </div>
    </div>
  );
};

export default InputSearch;
