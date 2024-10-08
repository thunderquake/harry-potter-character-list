import hplogo from "../assets/hplogo.png";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import characterService from "../services/characterService";
import CharacterList from "../components/CharacterList";
import PaginationButtons from "../components/PaginationButtons";
import { Link, useSearchParams } from "react-router-dom";
import { CHARACTERS_PAGE_LIMIT, HTTP_PARAMS } from "../constants/constants";
import SearchBar from "../components/SearchBar";
import RemoveFiltersButton from "../components/RemoveFiltersButton";
import "react-loading-skeleton/dist/skeleton.css";
import ListSkeleton from "../components/ListSkeleton";
import FiltersButton from "../components/FiltersButton";
import { useFilters } from "../hooks/useFilters";

const CharacterListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(searchParams.get("page") ?? 1);
  const [searchTerm, setSearchTerm] = useState(searchParams.get("name") ?? "");
  const [characters, setCharacters] = useState([]);

  const [filters, setFilters] = useFilters();
  const {
    isSuccess,
    isLoading,
    isError,
    data: charactersResponse,
  } = useQuery({
    queryKey: [
      "characters",
      Number(searchParams.get("page")),
      ...(searchParams.has("name") ? [searchParams.get("name")] : []),
      filters.house,
      filters.blood_status,
      filters.species,
    ],
    queryFn: () =>
      characterService.getCharacters({
        [`page[${HTTP_PARAMS.pageSize}]`]: CHARACTERS_PAGE_LIMIT,
        [`page[${HTTP_PARAMS.pageNumber}]`]: searchParams.get("page")
          ? Number(searchParams.get("page"))
          : 1,
        [`filter[${HTTP_PARAMS.name}]`]: searchParams.get("name") ?? "",
        [`filter[${HTTP_PARAMS.house}]`]: filters.house,
        [`filter[${HTTP_PARAMS.bloodStatus}]`]: filters.blood_status,
        [`filter[${HTTP_PARAMS.species}]`]: filters.species,
      }),
  });
  useEffect(() => {
    setCharacters(charactersResponse ? charactersResponse.data : []);
  }, [charactersResponse]);

  const recordsCount = charactersResponse?.meta?.pagination?.records || 0;
  const pageCount = Math.ceil(recordsCount / CHARACTERS_PAGE_LIMIT);
  const currentPage = Number(searchParams.get("page") || 1);
  const isOutOfRange =
    currentPage < 1 || currentPage > pageCount ? true : false;

  useEffect(() => {
    if (isSuccess && !isLoading && isOutOfRange && pageCount > 0) {
      const fixedPage = isOutOfRange ? 1 : currentPage;
      setSearchParams({
        ...filters,
        page: fixedPage,
      });
    }
  }, [
    currentPage,
    filters,
    isLoading,
    isOutOfRange,
    isSuccess,
    pageCount,
    recordsCount.length,
    searchParams,
    setSearchParams,
  ]);

  if (isError) return <div>Error fetching data</div>;

  return (
    <div className=" bg-harrypotterbrown min-h-svh">
      <div className="container mx-auto py-10">
        <Link to="?page=1" onClick={() => setSearchTerm("")}>
          <img src={hplogo} className="max-w-full w-96 mx-auto pb-8"></img>
        </Link>
        <div className="flex flex-row gap-4 justify-center">
          <FiltersButton setFilters={setFilters} />
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
          pageCount={pageCount ?? 1}
          searchParams={searchParams}
          setSearchParams={setSearchParams}
          setPage={setPage}
          page={page ?? 1}
        />
      )}
    </div>
  );
};

export default CharacterListPage;
