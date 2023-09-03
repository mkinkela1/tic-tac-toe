import { CanceledError } from "axios";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import axiosInstance from "src/utils/axiosInstance";

const useMove = () => {
  const abortController = useRef<AbortController>();
  const { id } = useParams();

  useEffect(() => {
    abortController.current = new AbortController();

    return () => {
      abortController.current?.abort();
    };
  }, []);

  const addMove = async (row: number, col: number) => {
    try {
      await axiosInstance.post(
        `https://tictactoe.aboutdream.io/games/${id}/move/`,
        { row, col },
        {
          signal: abortController.current?.signal,
        },
      );
      toast.success("Successfully added a move.");
    } catch (e) {
      if (!(e instanceof CanceledError)) toast.error("Unable to add move.");
    }
  };

  return { addMove };
};

export default useMove;
