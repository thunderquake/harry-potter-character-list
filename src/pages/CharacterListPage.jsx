import hplogo from "../assets/hplogo.png";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import characterService from "../services/characterService";
import CharacterList from "../components/CharacterList";
import PaginationButtons from "../components/PaginationButtons";
import { useSearchParams } from "react-router-dom";
import { CHARACTERS_PAGE_LIMIT } from "../constants/constants";

const CharacterListPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  const {
    isLoading,
    isError,
    data: charactersResponse,
    refetch,
  } = useQuery({
    queryKey: ["characters", Number(searchParams.get("page"))],
    queryFn: () =>
      characterService.getCharacters(
        20,
        searchParams.get("page") ? Number(searchParams.get("page")) : 1
      ),
  });

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(charactersResponse ? charactersResponse.data : []);
  }, [charactersResponse]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  console.log();
  const recordsCount = charactersResponse.meta.pagination.records;
  const pageCount = Math.ceil(recordsCount / CHARACTERS_PAGE_LIMIT);

  return (
    <div className=" bg-hpbrown min-h-svh">
      <div className="container mx-auto py-10">
        <img src={hplogo} className="max-w-full w-96 mx-auto pb-8"></img>
        {characters && <CharacterList characterArray={characters} />}
      </div>
      <PaginationButtons
        pageCount={pageCount}
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        setPage={setPage}
      />
    </div>
  );
};

export default CharacterListPage;
