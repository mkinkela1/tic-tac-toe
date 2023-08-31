import { TGetListResponse } from "src/types/TGetListResponse";

export type TGetGamesResponse = TGetListResponse<TResult>;

type TResult = {
  id: number;
  board: number[][];
  winner?: TPlayer;
  first_player: TPlayer;
  second_player: TPlayer;
  created: Date;
  status: TStatus;
};

type TPlayer = {
  id: number;
  username: string;
};

type TStatus = "open" | "progress" | "finished";
