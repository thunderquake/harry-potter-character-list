import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterArray }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      {characterArray.map((character) => (
        <CharacterCard
          name={character.attributes.name}
          image={character.attributes.image}
          species={character.attributes.species}
          id={character.attributes.id}
        />
      ))}
    </div>
  );
};

export default CharacterList;
