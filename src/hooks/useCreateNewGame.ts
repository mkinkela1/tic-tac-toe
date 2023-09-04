import { CanceledError } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { TBoardResult } from "src/types/TGetGamesResponse";
import { BASE_API_URL } from "src/utils/Constants";
import axiosInstance from "src/utils/axiosInstance";

const useCreateNewGame = () => {
  const abortController = useRef<AbortController>();

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const createNewGame = async () => {
    try {
      const {
        data: { id },
      } = await axiosInstance.post<TBoardResult>(
        `${BASE_API_URL}/games/`,
        {},
        {
          signal: abortController.current?.signal,
        },
      );

      return id;
    } catch (e) {
      if (!(e instanceof CanceledError))
        toast.error("Unable to create a new game.");
    }
  };

  return { createNewGame };
};

export default useCreateNewGame;
