import React from "react";
import { USER_ID } from "src/utils/Constants";
import { isEmpty } from "src/utils/isEmpty";
import { isNullOrUndefined } from "src/utils/isNotNullOrUndefined";

type Props = {
  name?: string;
  userId?: number;
};

const PlayerCell: React.FC<Props> = ({ name, userId }) => {
  const myId = parseInt(localStorage.getItem(USER_ID) ?? "");

  if (isEmpty(name) || isNullOrUndefined(userId)) return "";
  return `${name}${myId === userId ? " (you)" : ""}`;
};

export default PlayerCell;
