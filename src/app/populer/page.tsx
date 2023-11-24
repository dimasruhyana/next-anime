"use client";

import AnimeList from "@/components/AnimeList";
import HeaderMenu from "@/components/utilities/HeaderMenu";
import Pagination from "@/components/utilities/Pagination";
import { useEffect, useState } from "react";
import { getAnimeResponse } from "@/libs/api-libs";

// eslint-disable-next-line @next/next/no-async-client-component
const PopulerAnime = async () => {
  const [page, setPage] = useState(1);
  const [topAnime, setTopAnime]: any = useState([]);

  const fetchData = async () => {
    const animes = await getAnimeResponse("top/anime", `page=${page}`);
    setTopAnime(animes);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <div className="mt-2 px-4">
      <section>
        <HeaderMenu linkHome="/" title={`Anime Terpopuler #${page}`} />
        <AnimeList api={topAnime} />
        <Pagination
          page={page}
          lastPage={topAnime.pagination?.last_visible_page}
          setPage={setPage}
        />
      </section>
    </div>
  );
};

export default PopulerAnime;
