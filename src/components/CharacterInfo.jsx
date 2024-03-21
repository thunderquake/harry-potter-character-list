import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterInfo = (character) => {
  const characterData = {
    Name: character.name,
    Species: character.species,
    BloodStatus: character.blood_status,
    House: character.house,
  };

  return (
    <div className="container w-fit mx-auto content-center py-2 px-16">
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-fit rounded-lg bg-dun shadow-lg shadow-yellow-700 ring ring-yellow-500">
        <img
          src={character.image || MISSING_CHARACTER}
          className="object-cover w-52 h-52 rounded-full mb-5 shadow-lg"
        ></img>
        {Object.entries(characterData).map(([property, value]) => {
          return (
            <div className="flex flex-col gap-2 items-center">
              <p className="text-xl text-hpdarkbrown font-bold text-center">
                {property}
              </p>
              <p className="text-xl text-hpdarkbrown text-center">
                {value || "Unknown"}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CharacterInfo;
