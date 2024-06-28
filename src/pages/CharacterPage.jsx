import CharacterInfo from "../components/CharacterInfo";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import characterService from "../services/characterService";
import GoBackButton from "../components/GoBackButton";
import PageSkeleton from "../components/PageSkeleton";

const CharacterPage = () => {
  const { slug } = useParams();
  const {
    isFetching,
    isError,
    isSuccess,
    data: characterByID,
  } = useQuery({
    queryKey: "character",
    queryFn: () => characterService.getCharacterByID(slug),
  });
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    setCharacter(characterByID);
  }, [characterByID, isSuccess, isFetching]);

  if (isError) return <div>Error fetching data</div>;

  return (
    <div className=" bg-harrypotterbrown min-h-svh">
      <GoBackButton />
      {character && !isFetching ? (
        <CharacterInfo
          image={character.attributes.image}
          name={character.attributes.name}
          species={character.attributes.species}
          bloodStatus={character.attributes.blood_status}
          house={character.attributes.house}
        />
      ) : (
        <PageSkeleton />
      )}
    </div>
  );
};

export default CharacterPage;
