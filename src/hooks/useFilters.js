import { useSearchParams } from "react-router-dom";
import { FILTERING_OPTIONS } from "../constants/constants";

export const useFilters = (house) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return {
    setFilters: () => {
      const filters = {};
      FILTERING_OPTIONS.forEach((option) => {
        const searchBarOption = searchParams.get(option);
        if (!!searchBarOption) {
          filters[option] = searchBarOption;
        }
      });
      setSearchParams({ ...filters, house });
    },
  };
};
