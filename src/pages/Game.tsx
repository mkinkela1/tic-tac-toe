import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Modal from "src/components/Modal";
import PlayerInfo from "src/components/PlayerInfo";
import SkeletonLoader from "src/components/SkeletonLoader";
import Board from "src/components/board/Board";
import { useGame } from "src/contexts/GameContext";
import { AllRoutes } from "src/enums/AllRoutes";

const Game: React.FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { setGameId, data, isGameLoaded } = useGame();

  useEffect(() => {
    setGameId(parseInt(id ?? ""));
  }, [id]);

  const getTitle = () => {
    if (!isGameLoaded) return <SkeletonLoader type="row" />;
    if (data?.status === "open") return "Waiting for 2nd player to join!";
    return `${data?.first_player?.username} vs ${data?.second_player?.username}`;
  };

  return (
    <Modal onClose={() => navigate(AllRoutes.GAMES)} title={getTitle()}>
      <div className="flex lg:flex-row justify-between w-full flex-col gap-5">
        <div className="lg:w-2/3 w-full">
          <Board isLoading={!isGameLoaded} />
        </div>
        <div className="lg:w-1/3 w-full">
          <PlayerInfo
            isLoading={!isGameLoaded}
            firstPlayer={data?.first_player}
            secondPlayer={data?.second_player}
            winner={data?.winner}
          />
        </div>
      </div>
    </Modal>
  );
};

export default Game;
