import { MISSING_CHARACTER } from "../constants/constants.jsx";

const CharacterInfo = ({ image, name, species, bloodStatus, house }) => {
  return (
    <div className="container w-fit mx-auto content-center py-10 px-16">
      <div className="flex flex-col justify-center items-center gap-4 p-6 w-fit rounded-lg bg-dun shadow-lg shadow-yellow-700 ring ring-yellow-500">
        <img
          src={image || MISSING_CHARACTER}
          className="object-cover w-52 h-52 rounded-full mb-5 shadow-lg"
        ></img>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-xl text-hpdarkbrown font-bold">Name</p>
          <p className="text-xl text-hpdarkbrown">{name || "Unknown"}</p>
        </div>
        <div className="flex flex-col gap-2 items-center">
          <p className="text-xl text-hpdarkbrown font-bold">Species</p>
          <p className="text-xl text-hpdarkbrown">{species || "Unknown"}</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-xl text-hpdarkbrown font-bold">Blood status</p>
          <p className="text-xl text-hpdarkbrown">{bloodStatus || "Unknown"}</p>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <p className="text-xl text-hpdarkbrown font-bold">House</p>
          <p className="text-xl text-hpdarkbrown">{house || "Unknown"}</p>
        </div>
      </div>
    </div>
  );
};

export default CharacterInfo;
