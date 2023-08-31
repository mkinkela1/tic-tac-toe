import React from "react";

type Props = {
  name: string;
};

const PlayerCell: React.FC<Props> = ({ name }) => {
  return name;
};

export default PlayerCell;
