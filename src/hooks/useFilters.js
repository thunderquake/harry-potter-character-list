import { useSearchParams } from "react-router-dom";
import { FILTERING_OPTIONS } from "../constants/constants";
import { useCallback } from "react";

export const useFilters = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const getFilters = useCallback(() => {
    const filtersObj = {};
    FILTERING_OPTIONS.forEach((option) => {
      const searchBarOption = searchParams.get(option);
      if (searchBarOption) {
        filtersObj[option] = searchBarOption;
      }
    });

    return filtersObj;
  }, [searchParams]);

  const setFilters = useCallback(
    (filters) => {
      setSearchParams({
        ...getFilters(),
        ...filters,
        page: 1,
      });
    },
    [getFilters, setSearchParams]
  );

  return [getFilters(), setFilters];
};
