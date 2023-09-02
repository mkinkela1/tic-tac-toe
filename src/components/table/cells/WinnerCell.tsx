import React from "react";
import { TPlayer, TStatus } from "src/types/TGetGamesResponse";
import { isNotEmpty } from "src/utils/isEmpty";

type Props = {
  winner?: TPlayer;
  status: TStatus;
};

const WinnerCell: React.FC<Props> = ({ winner, status }) => {
  if (status === "finished" && isNotEmpty(winner?.username))
    return <div className="font-bold">{winner?.username}</div>;

  return "";
};

export default WinnerCell;
