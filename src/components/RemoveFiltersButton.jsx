const RemoveFiltersButton = ({ setSearchParams, setSearchTerm }) => {
  const handleClick = () => {
    setSearchTerm("");
    setSearchParams({ page: 1 });
  };

  return (
    <div className="max-w-full flex justify-center">
      <button
        onClick={handleClick}
        className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
      >
        Clear filters!
      </button>
    </div>
  );
};

export default RemoveFiltersButton;
