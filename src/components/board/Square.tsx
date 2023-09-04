import XMarkIcon from "@heroicons/react/24/outline/XMarkIcon";
import React from "react";
import CircleIcon from "src/components/board/CircleIcon";
import SkeletonLoader from "src/components/SkeletonLoader/SkeletonLoader";
import { useAuth } from "src/contexts/AuthContext";
import { TTurn } from "src/contexts/GameContext";
import {
  isNotNullOrUndefined,
  isNullOrUndefined,
} from "src/utils/helpers/isNotNullOrUndefined";

type Props = {
  value: string | number | null;
  onClick: () => void;
  firstPlayerId?: number;
  secondPlayerId?: number;
  isLoading: boolean;
  turn: TTurn;
};

const Square: React.FC<Props> = ({
  value,
  onClick,
  firstPlayerId,
  secondPlayerId,
  isLoading,
  turn,
}) => {
  const { userId } = useAuth();
  const getIcon = () => {
    if (value === firstPlayerId)
      return <XMarkIcon className="w-full h-full text-blue-600" />;
    else if (value === secondPlayerId)
      return <CircleIcon className="w-full h-full text-red-600" />;
    return "";
  };

  const disabled = () => {
    if (isLoading) return true;
    if (isNotNullOrUndefined(value)) return true;
    if (isNullOrUndefined(turn)) return true;

    if (turn === "player1") return userId !== firstPlayerId;
    if (turn === "player2") return userId !== secondPlayerId;

    return true;
  };

  return (
    <button
      className="w-20 h-20 bg-white text-3xl font-semibold border-none border-0"
      onClick={onClick}
      disabled={disabled()}
    >
      {isLoading ? <SkeletonLoader type="square" /> : getIcon()}
    </button>
  );
};

export default Square;
