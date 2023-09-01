import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TMeta } from "src/types/TableProps";

export type Props = TMeta & Record<string, unknown>;

const useTableQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ limit: "10" });
  }, []);

  const setFilters = (newFilters: Record<string, unknown>) => {
    setSearchParams((prevSearchParams) => ({
      ...prevSearchParams,
      ...newFilters,
    }));
  };

  return { filters: Object.fromEntries(searchParams), setFilters };
};

export default useTableQueryParams;
