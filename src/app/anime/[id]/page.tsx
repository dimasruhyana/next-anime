import React from "react";
import { getAnimeResponse } from "@/libs/api-libs";
import Image from "next/image";
import VideoPlayer from "@/components/utilities/VideoPlayer";
import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

const page = async ({ params: { id } }: any) => {
  const anime = await getAnimeResponse(`anime/${id}`);
  return (
    <>
      <div className="px-4 pt-2 flex">
        <Link href="/">
          <ArrowLeft
            size={24}
            className="inline font-bold text-accent mr-2 hover:text-yellow-700 dark:hover:text-white"
          />
        </Link>
        <h3 className="md:text-xl text-md">
          {anime.data.title} - {anime.data.year}
        </h3>
      </div>
      <div className="flex gap-2 px-4 pt-2 text-white overflow-x-auto">
        <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-primary dark:bg-transparent dark:hover:bg-accent bg-yellow-700 transition-all">
          <h3>Peringkat</h3>
          <p>{anime.data.rank}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-primary dark:bg-transparent dark:hover:bg-accent bg-yellow-700 transition-all">
          <h3>Skor</h3>
          <p>{anime.data.score}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-primary dark:bg-transparent dark:hover:bg-accent bg-yellow-700 transition-all">
          <h3>Members</h3>
          <p>{anime.data.members}</p>
        </div>
        <div className="w-36 flex flex-col justify-center items-center rounded border dark:border-primary dark:bg-transparent dark:hover:bg-accent bg-yellow-700 transition-all">
          <h3>Episode</h3>
          <p>{anime.data.episodes}</p>
        </div>
      </div>

      <div className="mt-3 px-4 flex gap-2 sm:flex-nowrap flex-wrap">
        <Image
          src={anime.data.images.webp.image_url}
          alt={anime.data.images.jpg.image_url}
          width={250}
          height={250}
          className="object-cover"
        />
        <p className="text-justify">{anime.data.synopsis}</p>
      </div>
      <div>
        {/* <VideoPlayer youtubeId="TuQ_48qJS7I" /> */}
        <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
      </div>
    </>
  );
};

export default page;
