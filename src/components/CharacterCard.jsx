import { Link } from "react-router-dom";
import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterCard = ({ name, species, image, slug }) => {
  return (
    <Link to={`/character/${slug}`}>
      <div className="flex flex-col justify-between items-center rounded-lg bg-dun shadow-md w-64 h-80 hover:shadow-lg hover:shadow-yellow-700 hover:ring hover:ring-yellow-500">
        <img
          src={image || MISSING_CHARACTER}
          className="rounded-t-lg mb-2 min-h-52 max-h-52 w-full object-cover object-top"
        ></img>
        <div className="flex flex-col h-36 p-2 items-center justify-center">
          <p className="line-clamp-2 text-xl text-center text-harrypotterdarkbrown font-bold w-full">
            {name}
          </p>
          <p className="text-md text-yellow-900">{species}</p>
        </div>
      </div>
    </Link>
  );
};

export default CharacterCard;
