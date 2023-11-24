import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ITopCharacters {
  mal_id: number;
  name: string;
  images: { webp: { image_url: string } };
}

const TopCharacters = ({ api }: any) => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4">
      {api.data?.map((character: ITopCharacters, index: any) => {
        return (
          <>
            <Link
              href={`/${character.mal_id}`}
              className="cursor-pointer"
              key={index}>
              <div className="shadow-md dark:border dark:border-white">
                <Image
                  src={character.images.webp.image_url}
                  alt=""
                  width={350}
                  height={350}
                  className="w-full object-cover max-h-80"
                />
                <h3 className="font-medium md:text-xl text-sm p-4 hover:text-yellow-500 dark:hover:text-yellow-500">
                  {character.name}
                </h3>
              </div>
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default TopCharacters;
