import React from "react";

type Props = {
  value: string;
};

const DateTimeCell: React.FC<Props> = ({ value }) => {
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  };
  const humanReadableDateTime = new Date(value).toLocaleString(
    "en-US",
    options,
  );
  return humanReadableDateTime;
};

export default DateTimeCell;
