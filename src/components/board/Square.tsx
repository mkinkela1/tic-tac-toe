// Square.tsx
import React from "react";

interface SquareProps {
  value: string;
  onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button
      className="w-20 h-20 bg-white text-3xl font-semibold border-none border-0"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
