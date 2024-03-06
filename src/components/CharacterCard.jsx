import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterCard = ({ name, species, image }) => {
  return (
    <div className="flex flex-col justify-between items-center p-4 rounded-lg bg-dun shadow-md w-64 h-80 hover:shadow-lg hover:shadow-yellow-700 hover:ring hover:ring-yellow-500">
      <img
        src={image || MISSING_CHARACTER}
        className="rounded-lg mb-2 h-52 w-48 object-cover"
      ></img>
      <div className="flex flex-col max-w-full items-center justify-center">
        <p className="text-xl text-center text-hpdarkbrown font-bold">{name}</p>
        <p className="text-md text-yellow-900">{species}</p>
      </div>
    </div>
  );
};

export default CharacterCard;
