const CharacterCard = ({ name, species, image }) => {
  console.log(name);

  const MISSING_CHARACTER = "https://potterdb.com/images/missing_character.svg";
  return (
    <div className="flex flex-col justify-between items-center mx-auto p-4 rounded-lg bg-dun shadow-md w-64 h-80 border-dun border-2 hover:border-wtfdarkbrown">
      <img src={image || MISSING_CHARACTER} className="rounded-lg mb-2"></img>
      <div>
        <p className="text-xl text-black font-bold">{name}</p>
        <p className="text-md text-gray-700">{species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
