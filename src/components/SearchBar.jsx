import { useCallback } from "react";
import { useMemo, useEffect } from "react";
import debounce from "lodash.debounce";
import { useSearchParams } from "react-router-dom";

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  const [searchParams, setSearchParams] = useSearchParams();

  const changeSearchParams = useCallback(
    (searchName) => {
      const newSearchParams = {};

      searchParams.forEach((value, key) => {
        newSearchParams[key] = value;
      });

      newSearchParams.page = 1;
      searchName.length > 0
        ? (newSearchParams.name = searchName)
        : delete newSearchParams.name;

      setSearchParams(newSearchParams);
    },
    [searchParams, setSearchParams]
  );

  const handleChange = (e) => {
    const searchName = e.target.value.trimStart();
    setSearchTerm(searchName);

    debouncedSearchParams(searchName);
  };

  const debouncedSearchParams = useMemo(() => {
    return debounce(changeSearchParams, 1000);
  }, [changeSearchParams]);

  useEffect(() => {
    return () => {
      debouncedSearchParams.cancel();
    };
  }, [debouncedSearchParams]);

  return (
    <div className="mb-3 xl:w-96">
      <div className="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          className="relative m-0 block flex-auto rounded border border-solid placeholder-hpbrown border-yellow-700 bg-dun bg-opacity-50 bg-clip-padding px-3 py-1 text-base font-normal text-hpbrown transition duration-200 ease-in-out focus:border-none focus:ring focus:ring-yellow-500 focus:text-hpdarkbrown focus:outline-none pr-10"
          placeholder="Search"
          aria-label="Search"
          value={searchTerm}
          onChange={handleChange}
        />
        <span className="absolute inset-y-0 right-0 flex items-center pr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-5 w-5 text-hpbrown"
          >
            <path
              fillRule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
