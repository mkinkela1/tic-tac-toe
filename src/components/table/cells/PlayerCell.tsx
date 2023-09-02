import React from "react";
import { USER_ID } from "src/utils/Constants";

type Props = {
  name: string;
  userId: number;
};

const PlayerCell: React.FC<Props> = ({ name, userId }) => {
  const myId = parseInt(localStorage.getItem(USER_ID) ?? "");
  return `${name}${myId === userId ? " (you)" : ""}`;
};

export default PlayerCell;
