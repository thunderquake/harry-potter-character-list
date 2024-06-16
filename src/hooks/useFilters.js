import { useSearchParams } from "react-router-dom";
import { FILTERING_OPTIONS } from "../constants/constants";

export const useFilters = (house, bloodStatus, species) => {
  const [searchParams, setSearchParams] = useSearchParams();
  return {
    setFilters: () => {
      const filters = {};
      const page = 1;
      FILTERING_OPTIONS.forEach((option) => {
        const searchBarOption = searchParams.get(option);
        if (!!searchBarOption) {
          filters[option] = searchBarOption;
        }
      });

      if (house) filters.house = house;
      if (bloodStatus) filters.blood_status = bloodStatus;
      if (species) filters.species = species;

      setSearchParams({ ...filters, page });
    },
  };
};
