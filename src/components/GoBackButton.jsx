import { useNavigate } from "react-router-dom";

const GoBackButton = () => {
  const navigate = useNavigate();

  const goBack = () => navigate(-1);

  return (
    <div className="flex justify-center">
      <button
        className="bg-dun shadow-md m-4 text-harrypotterdarkbrown font-bold py-2 px-4 rounded-full hover:shadow-lg hover:shadow-yellow-700 hover:ring hover:ring-yellow-500"
        onClick={goBack}
      >
        Go Back
      </button>
    </div>
  );
};

export default GoBackButton;
