import React, {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import useFetch from "src/hooks/useFetch";
import { TBoardResult } from "src/types/TGetGamesResponse";
import { GAME_REFETCH_INTERVAL_IN_MS } from "src/utils/Constants";
import {
  isNotNullOrUndefined,
  isNullOrUndefined,
} from "src/utils/isNotNullOrUndefined";

type GameContextProviderProps = {
  children: React.ReactNode;
};

export type TTurn = "player1" | "player2" | null;

type TGameContext = {
  setGameId: React.Dispatch<React.SetStateAction<number | null>>;
  getCell: (rowId: number, columnId: number) => number | null;
  data: TBoardResult | null;
  isGameLoaded: boolean;
  calculateTurn: () => TTurn;
};

const GameContext = createContext<TGameContext | null>(null);

export const GameProvider: React.FC<GameContextProviderProps> = ({
  children,
}) => {
  const [gameId, setGameId] = useState<number | null>(null);
  const [isGameLoaded, setIsGameLoaded] = useState(false);
  const { data, refetch } = useFetch<TBoardResult>(
    `https://tictactoe.aboutdream.io/games/${gameId}/`,
    {},
    false,
  );
  const intervalRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (isNotNullOrUndefined(data?.id)) setIsGameLoaded(true);
  }, [data?.id]);

  useEffect(() => {
    if (isNotNullOrUndefined(gameId))
      intervalRef.current = setInterval(refetch, GAME_REFETCH_INTERVAL_IN_MS);

    return () => {
      clearInterval(intervalRef.current);
      setIsGameLoaded(false);
    };
  }, [gameId]);

  const getCell = (rowId: number, columnId: number) =>
    data?.board.at(rowId)?.at(columnId) ?? null;

  const calculateTurn = (): TTurn => {
    if (data?.status !== "progress") return null;

    let totalPlayer1Turns = 0,
      totalPlayer2Turns = 0;

    data?.board.forEach((row: Array<number | null>) => {
      row.forEach((playerId: number | null) => {
        if (
          isNotNullOrUndefined(playerId) &&
          playerId === data?.first_player?.id
        )
          ++totalPlayer1Turns;
        else if (
          isNotNullOrUndefined(playerId) &&
          playerId === data?.second_player?.id
        )
          ++totalPlayer2Turns;
      });
    });

    return totalPlayer1Turns === totalPlayer2Turns ? "player1" : "player2";
  };

  return (
    <GameContext.Provider
      value={{ setGameId, getCell, data, isGameLoaded, calculateTurn }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (isNullOrUndefined(context)) {
    throw new Error("useGame must be used within GameProvider.");
  }

  return context;
};
