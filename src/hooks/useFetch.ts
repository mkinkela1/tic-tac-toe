import { useEffect, useRef, useState } from "react";
import axiosInstance from "src/utils/axiosInstance";

const useFetch = <T>(url: string) => {
  const abortController = useRef<AbortController>();
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    abortController.current = new AbortController();

    loadData();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const loadData = async () => {
    try {
      const { data } = await axiosInstance.get(url, {
        signal: abortController.current?.signal,
      });

      setData(data);
    } catch {
      console.log("Unable to fetch data");
    }
  };

  return data;
};

export default useFetch;
