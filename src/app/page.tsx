import AnimeList from "@/components/AnimeList";
import Header from "@/components/utilities/Header";
import TopCharacters from "@/components/Character/TopCharacters";
import {
  getAnimeResponse,
  getNestedAnimeResponse,
  reproduce,
} from "../libs/api-libs";

const Home = async () => {
  const topAnime = await getAnimeResponse("top/anime/", "limit=8");
  const topCharacters = await getAnimeResponse("top/characters", "limit=8");
  let recomendedAnime = await getNestedAnimeResponse(
    "recommendations/anime",
    "entry"
  );
  recomendedAnime = reproduce(recomendedAnime, 4);
  console.log(recomendedAnime);

  return (
    <>
      <div className="mt-2 px-4">
        <section>
          <Header
            title="Paling Populer"
            linkRef="/populer"
            linkTitle="Lihat Semua"
          />
          <AnimeList api={topAnime} />
        </section>

        <section className="mt-10">
          <Header title="Rekomendasi Anime" />
          <AnimeList api={recomendedAnime} />
        </section>

        <section className="mt-10">
          <Header
            title="Top Characters"
            linkRef="/character/top"
            linkTitle="Lihat Semua"
          />
          <TopCharacters api={topCharacters} />
        </section>
      </div>
    </>
  );
};

export default Home;
