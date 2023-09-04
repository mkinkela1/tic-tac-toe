import React from "react";
import Square from "src/components/board/Square";
import { useGame } from "src/contexts/GameContext";
import useMove from "src/hooks/useMove";

type Props = {
  isLoading: boolean;
};

const Board: React.FC<Props> = ({ isLoading }) => {
  const { getCell, data, calculateTurn, board, setBoard } = useGame();
  const { addMove } = useMove();

  const onAddMove = (rowId: number, colId: number) => {
    setBoard(rowId, colId);
    addMove(rowId, colId);
  };

  return (
    <div className="w-fit mx-auto grid grid-cols-3 gap-2 aspect-square bg-black">
      {board.map((row, rowId) =>
        row.map((_, colId) => (
          <Square
            key={`cell-${rowId}-${colId}`}
            onClick={() => onAddMove(rowId, colId)}
            value={getCell(rowId, colId)}
            firstPlayerId={data?.first_player?.id}
            secondPlayerId={data?.second_player?.id}
            isLoading={isLoading}
            turn={calculateTurn()}
          />
        )),
      )}
    </div>
  );
};

export default Board;
