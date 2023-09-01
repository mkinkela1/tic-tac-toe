import React from "react";

type Props = {
  value: number;
};

const WinRateCell: React.FC<Props> = ({ value }) => {
  return `${(value * 100).toFixed(2)} %`;
};

export default WinRateCell;
