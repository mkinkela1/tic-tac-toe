import { CanceledError } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { TBoardResult } from "src/types/TGetGamesResponse";
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
        "https://tictactoe.aboutdream.io/games/",
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
