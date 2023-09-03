import { CanceledError } from "axios";
import { useEffect, useRef } from "react";
import { toast } from "react-toastify";
import axiosInstance from "src/utils/axiosInstance";

const useJoinGame = (id: number) => {
  const abortController = useRef<AbortController>();

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const joinGame = async () => {
    try {
      await axiosInstance.post(
        `https://tictactoe.aboutdream.io/games/${id}/join/`,
        {},
        {
          signal: abortController.current?.signal,
        },
      );
      toast.success("Successfully joined a game.");
    } catch (e) {
      if (!(e instanceof CanceledError)) toast.error("Unable to join game.");
    }
  };

  return { joinGame };
};

export default useJoinGame;
