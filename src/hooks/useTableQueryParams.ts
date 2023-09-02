import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { TMeta } from "src/types/TableProps";

export type Props = TMeta & Record<string, unknown>;

const useTableQueryParams = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setSearchParams({ ...Object.fromEntries(searchParams), limit: "10" });
  }, []);

  const setFilters = (newFilters: Record<string, unknown>) => {
    setSearchParams(() => {
      const searchParams = new URLSearchParams({ limit: "10" });
      for (const [key, value] of Object.entries(newFilters))
        searchParams.set(key, value as string);

      return searchParams;
    });
  };

  return { filters: Object.fromEntries(searchParams), setFilters };
};

export default useTableQueryParams;
