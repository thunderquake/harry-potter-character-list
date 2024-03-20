import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterInfo = ({ image, name, species, bloodStatus, house }) => {
  return (
    <div className="container mx-auto py-10 px-16">
      <img
        src={image || MISSING_CHARACTER}
        className="rounded-full mb-2 min-h-52 max-h-52 w-full object-cover"
      ></img>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-hpdarkbrown font-bold">Name</p>
        <p className="text-xl text-hpdarkbrown">{name || "Unknown"}</p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-xl text-hpdarkbrown font-bold">Species</p>
        <p className="text-xl text-hpdarkbrown">{species || "Unknown"}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl text-hpdarkbrown font-bold">Blood status</p>
        <p className="text-xl text-hpdarkbrown">{bloodStatus || "Unknown"}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="text-xl text-hpdarkbrown font-bold">House</p>
        <p className="text-xl text-hpdarkbrown">{house || "Unknown"}</p>
      </div>
    </div>
  );
};

export default CharacterInfo;
