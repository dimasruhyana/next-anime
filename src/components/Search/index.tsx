import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ISearchAnime {
  mal_id: number;
  title: string;
  images: { webp: { image_url: string } };
}

const SearchAnime = ({ api }: any) => {
  if (api.data.length > 0) {
    return (
      <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
        {api.data?.map((anime: ISearchAnime, index: any) => {
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
                  <h3 className="font-medium md:text-xl text-sm p-4 dark:hover:text-yellow-500">
                    {anime.title}
                  </h3>
                </div>
              </Link>
            </>
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="min-h-screen min-w-xl flex justify-center items-center">
        <h3 className="font-bold text-2xl md:text-3xl text-yellow-400">
          NOT FOUND
        </h3>
      </div>
    );
  }
};

export default SearchAnime;
