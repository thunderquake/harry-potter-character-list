import CharacterCard from "./CharacterCard";

const CharacterList = ({ characterArray }) => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-8">
      {characterArray.map((character) => (
        <CharacterCard
          name={character.attributes.name}
          image={character.attributes.image}
          species={character.attributes.species}
          key={character.id}
        />
      ))}
    </div>
  );
};

export default CharacterList;
