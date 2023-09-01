import { TGetListResponse } from "src/types/TGetListResponse";

export type TGetUsersResponse = TGetListResponse<TUser>;

export type TUser = {
  id: number;
  username: string;
  game_count: number;
  win_rate: number;
};
