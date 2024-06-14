import hplogo from "../assets/hplogo.png";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import characterService from "../services/characterService";
import CharacterList from "../components/CharacterList";
import PaginationButtons from "../components/PaginationButtons";
import { Link, useSearchParams } from "react-router-dom";
import { CHARACTERS_PAGE_LIMIT } from "../constants/constants";
import SearchBar from "../components/SearchBar";
import RemoveFiltersButton from "../components/RemoveFiltersButton";
import "react-loading-skeleton/dist/skeleton.css";
import ListSkeleton from "../components/ListSkeleton";

const CharacterListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page"));
  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") ?? "");
  const [characters, setCharacters] = useState([]);

  const {
    isLoading,
    isError,
    data: charactersResponse,
  } = useQuery({
    queryKey: [
      "characters",
      Number(searchParams.get("page")),
      ...(searchParams.has("name") ? [searchParams.get("name")] : []),
    ],
    queryFn: () =>
      characterService.getCharacters(
        20,
        searchParams.get("page") ? Number(searchParams.get("page")) : 1,
        searchParams.get("name") ?? ""
      ),
  });

  useEffect(() => {
    setCharacters(charactersResponse ? charactersResponse.data : []);
  }, [charactersResponse, searchTerm]);

  if (isError) return <div>Error fetching data</div>;

  const recordsCount = charactersResponse?.meta?.pagination?.records || 0;
  const pageCount = Math.ceil(recordsCount / CHARACTERS_PAGE_LIMIT);

  return (
    <div className=" bg-hpbrown min-h-svh">
      <div className="container mx-auto py-10">
        <Link to="?page=1" onClick={() => setSearchTerm("")}>
          <img src={hplogo} className="max-w-full w-96 mx-auto pb-8"></img>
        </Link>
        <div className="flex justify-center">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </div>

        {isLoading ? (
          <div className="flex flex-wrap items-center justify-center gap-8">
            <ListSkeleton cards={10} />
          </div>
        ) : characters.length > 0 ? (
          <CharacterList characterArray={characters} />
        ) : (
          <RemoveFiltersButton
            setSearchParams={setSearchParams}
            setSearchTerm={setSearchTerm}
          />
        )}
      </div>
      {characters.length > 0 && (
        <PaginationButtons
          pageCount={pageCount}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setPage={setPage}
          page={page}
        />
      )}
    </div>
  );
};

export default CharacterListPage;
