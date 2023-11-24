import Search from "@/components/Search";
import Header from "@/components/utilities/Header";
import { getAnimeResponse } from "@/libs/api-libs";

const SearchAnime = async ({ params }: any) => {
  const { keyword } = params;
  const decodedKeyword = decodeURI(keyword);
  const searchAnimes = await getAnimeResponse("anime", `q=${decodedKeyword}`);

  return (
    <div className="mt-2 px-4">
      <section>
        <Header linkHome="/" title={`Pencarian untuk ${decodedKeyword}`} />
        <Search api={searchAnimes} />
      </section>
    </div>
  );
};

export default SearchAnime;
