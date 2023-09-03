import React from "react";
import Square from "src/components/board/Square";
import { useGame } from "src/contexts/GameContext";
import useMove from "src/hooks/useMove";

type Props = {
  isLoading: boolean;
};

const Board: React.FC<Props> = ({ isLoading }) => {
  const { getCell, data, calculateTurn } = useGame();
  const { addMove } = useMove();

  return (
    <div className="w-fit mx-auto grid grid-cols-3 gap-2 aspect-square bg-black">
      {Array.from({ length: 3 }, (_, rowId) => {
        return Array.from({ length: 3 }, (_, colId) => (
          <Square
            key={`cell-${rowId}-${colId}`}
            onClick={() => addMove(rowId, colId)}
            value={getCell(rowId, colId)}
            firstPlayerId={data?.first_player?.id}
            secondPlayerId={data?.second_player?.id}
            isLoading={isLoading}
            turn={calculateTurn()}
          />
        ));
      })}
    </div>
  );
};

export default Board;
