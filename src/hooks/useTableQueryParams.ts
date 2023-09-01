import { useSearchParams } from "react-router-dom";
import { TMeta } from "src/types/TableProps";

export type Props = TMeta & Record<string, unknown>;

const useTableQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const setFilters = (newFilters: Record<string, unknown>) => {
    console.log(newFilters);
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      ...newFilters,
    }));
  };

  return { filters: Object.fromEntries(searchParams), setFilters };
};

export default useTableQueryParams;
