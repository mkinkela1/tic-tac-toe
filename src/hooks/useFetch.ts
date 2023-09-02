import { CanceledError } from "axios";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import axiosInstance from "src/utils/axiosInstance";
import { convertObjectToUrlSearchParams } from "src/utils/convertObjectToSearchParams";

const useFetch = <T>(url: string, searchParams: Record<string, string>) => {
  const abortController = useRef<AbortController>();
  const [data, setData] = useState<T | null>(null);
  const urlWithSearchParams = convertObjectToUrlSearchParams(url, searchParams);

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  useEffect(() => {
    loadData();
  }, [urlWithSearchParams]);

  const loadData = async () => {
    try {
      const { data } = await axiosInstance.get(urlWithSearchParams, {
        signal: abortController.current?.signal,
      });

      setData(data);
    } catch (e) {
      if (!(e instanceof CanceledError)) toast.error("Unable to fetch data.");
    }
  };

  return data;
};

export default useFetch;
