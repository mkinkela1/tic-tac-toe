import { XMarkIcon } from "@heroicons/react/24/outline";
import CircleIcon from "src/components/Board/CircleIcon";
import SkeletonLoader from "src/components/SkeletonLoader/SkeletonLoader";
import { useGame } from "src/contexts/GameContext";
import { TPlayer } from "src/types/TGetGamesResponse";
import {
  isNotNullOrUndefined,
  isNullOrUndefined,
} from "src/utils/helpers/isNotNullOrUndefined";

type Props = {
  isLoading: boolean;
  firstPlayer?: TPlayer;
  secondPlayer?: TPlayer;
  winner?: TPlayer;
};

const PlayerInfo: React.FC<Props> = ({
  isLoading,
  firstPlayer,
  secondPlayer,
  winner,
}) => {
  const { calculateTurn } = useGame();

  const getTurn = () => {
    const turn = calculateTurn();

    if (isNullOrUndefined(turn)) return "";
    if (turn === "player1") return `${firstPlayer?.username}'s turn`;
    return `${secondPlayer?.username}'s turn`;
  };

  return (
    <div className="flex flex-col gap-4 lg:items-start items-center">
      <div className="flex flex-col gap-1">
        <div className="font-bold">
          Player 1
          {winner?.id === firstPlayer?.id && isNotNullOrUndefined(winner?.id)
            ? " - Winner:"
            : ":"}
        </div>
        {isLoading ? (
          <SkeletonLoader type="row" />
        ) : (
          <div className="flex gap-2">
            <XMarkIcon className="w-6 h-6 text-blue-600" />
            <div className="font-normal">{firstPlayer?.username}</div>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-1">
        <div className="font-bold">
          Player 2
          {winner?.id === secondPlayer?.id && isNotNullOrUndefined(winner?.id)
            ? " - Winner:"
            : ":"}
        </div>
        {isLoading || isNullOrUndefined(secondPlayer) ? (
          <SkeletonLoader type="row" />
        ) : (
          <div className="flex gap-2">
            <CircleIcon className="w-6 h-6 text-red-600" />
            <div className="font-normal">{secondPlayer?.username}</div>
          </div>
        )}
      </div>
      <div className="font-bold">{getTurn()}</div>
    </div>
  );
};

export default PlayerInfo;
