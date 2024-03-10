import hplogo from "../assets/hplogo.png";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import characterService from "../services/characterService";
import CharacterList from "../components/CharacterList";

const CharacterListPage = () => {
  const {
    isLoading,
    isError,
    data: charactersResponse,
  } = useQuery({
    queryKey: "characters",
    queryFn: () => characterService.getCharacters(20, 1),
  });
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setCharacters(charactersResponse);
  }, [charactersResponse]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className=" bg-hpbrown min-h-svh">
      <div className="container mx-auto py-10 px-16">
        <img src={hplogo} className="max-w-full w-96 mx-auto pb-8"></img>
        {characters && <CharacterList characterArray={characters} />}
      </div>
    </div>
  );
};

export default CharacterListPage;
