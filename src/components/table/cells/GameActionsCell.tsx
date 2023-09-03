import React from "react";
import { useNavigate } from "react-router-dom";
import Button, { ButtonProps } from "src/components/Button";
import { useAuth } from "src/contexts/AuthContext";
import { AllRoutes } from "src/enums/AllRoutes";
import { TBoardResult } from "src/types/TGetGamesResponse";
import { isNullOrUndefined } from "src/utils/isNotNullOrUndefined";

type Props = {
  value: TBoardResult;
};

const GameActionsCell: React.FC<Props> = ({
  value: { id, first_player, second_player, status },
}) => {
  const navigate = useNavigate();
  const { userId } = useAuth();

  const getButtonProps = (): ButtonProps => {
    if (
      status === "open" &&
      isNullOrUndefined(second_player) &&
      first_player.id !== userId
    )
      return {
        label: "Join",
        onClick: () => navigate(`${AllRoutes.GAMES}/${id}`),
      };

    if (
      status === "progress" &&
      (first_player.id === userId || second_player?.id === userId)
    )
      return {
        label: "Play",
        onClick: () => navigate(`${AllRoutes.GAMES}/${id}`),
      };

    return {
      label: "View",
      onClick: () => navigate(`${AllRoutes.GAMES}/${id}`),
    };
  };

  return <Button {...getButtonProps()} />;
};

export default GameActionsCell;
