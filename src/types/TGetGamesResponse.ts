import { TGetListResponse } from "src/types/TGetListResponse";

export type TGetGamesResponse = TGetListResponse<TBoardResult>;

export type TBoardResult = {
  id: number;
  board: number[][];
  winner?: TPlayer;
  first_player: TPlayer;
  second_player: TPlayer;
  created: string;
  status: TStatus;
};

export type TPlayer = {
  id: number;
  username: string;
};

export type TStatus = "open" | "progress" | "finished";
