"use client";

import { getAnimeResponse } from "@/libs/api-libs";
import TopCharacters from "@/components/Character/TopCharacters";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";

// eslint-disable-next-line @next/next/no-async-client-component
const TopCharacter = async () => {
  const [page, setPage] = useState(1);
  const [topCharacters, setTopCharacters]: any = useState([]);

  const fetchData = async () => {
    const characters = await getAnimeResponse("top/characters", `page=${page}`);
    setTopCharacters(characters);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="mt-2 px-4">
      <section>
        <HeaderMenu linkHome="/" title={`Character Terpopuler #${page}`} />
        <TopCharacters api={topCharacters} />
        <Pagination
          page={page}
          lastPage={topCharacters.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  );
};

export default TopCharacter;
