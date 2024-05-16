const RemoveFiltersButton = ({ setSearchParams, setSearchTerm }) => {
  const handleClick = () => {
    setSearchTerm("");
    setSearchParams({ page: 1 });
  };

  return <button onClick={handleClick}>Hello</button>;
};

export default RemoveFiltersButton;
