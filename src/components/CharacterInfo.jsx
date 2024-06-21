import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterInfo = (character) => {
  const characterData = {
    Name: character.name,
    Species: character.species,
    BloodStatus: character.bloodStatus,
    House: character.house,
  };

  return (
    <div className="container mx-auto content-center py-2 flex justify-center px-1">
      <div className="flex w-96 flex-col justify-center items-center gap-4 p-6 rounded-lg bg-dun shadow-lg shadow-yellow-700 ring ring-yellow-500">
        <img
          src={character.image || MISSING_CHARACTER}
          className="object-cover object-top w-52 h-52 rounded-full mb-5 shadow-lg"
        ></img>
        {Object.entries(characterData).map(([property, value]) => {
          return (
            <div className="flex flex-col gap-2 items-center" key={property}>
              <p className="text-xl text-hpdarkbrown font-bold text-center">
                {property}
              </p>
              <p className="text-xl text-hpdarkbrown text-center">
                {value ?? "Unknown"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterInfo;
