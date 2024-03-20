import CharacterInfo from "../components/CharacterInfo";
import { useQuery } from "react-query";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import characterService from "../services/characterService";

const CharacterPage = () => {
  const { slug } = useParams();
  const {
    isLoading,
    isError,
    isSuccess,
    data: characterByID,
  } = useQuery({
    queryKey: "character",
    queryFn: () => characterService.getCharacterByID(slug),
  });
  const [character, setCharacter] = useState(null);
  console.log(slug);

  useEffect(() => {
    setCharacter(characterByID);
  }, [characterByID, isSuccess, isLoading]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching data</div>;

  return (
    <div className=" bg-hpbrown min-h-svh">
      {character && (
        <CharacterInfo
          image={character.attributes.image}
          name={character.attributes.name}
          species={character.attributes.species}
          bloodStatus={character.attributes.blood_status}
          house={character.attributes.house}
        />
      )}
    </div>
  );
};

export default CharacterPage;
