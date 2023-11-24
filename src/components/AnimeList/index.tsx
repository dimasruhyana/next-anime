import Image from "next/image";
import Link from "next/link";
import React from "react";

interface IAnimeList {
  mal_id: number;
  title: string;
  images: { webp: { image_url: string } };
}

const AnimeList = ({ api }: any) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((anime: IAnimeList, index: any) => {
        return (
          <>
            <Link
              href={`/anime/${anime.mal_id}`}
              className="cursor-pointer"
              key={index}>
              <div className="shadow-md dark:border dark:border-white">
                <Image
                  src={anime.images.webp.image_url}
                  alt=""
                  width={350}
                  height={350}
                  className="w-full object-cover max-h-80"
                />
                <h3 className=" font-medium md:text-xl text-sm p-4 dark:text-white text-dark hover:text-yellow-500 dark:hover:text-yellow-500 transition-all">
                  {anime.title}
                </h3>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default AnimeList;
