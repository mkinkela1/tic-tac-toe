// Board.tsx
import React from "react";
import Square from "src/components/board/Square";

interface BoardProps {
  squares: string[];
  onClick: (i: number) => void;
}

const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  return (
    <div className="w-fit grid grid-cols-3 gap-2 aspect-square bg-black">
      {squares.map((value, i) => (
        <Square key={i} value={""} onClick={() => onClick(i)} />
      ))}
    </div>
  );
};

export default Board;
