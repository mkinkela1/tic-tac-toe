import { useNavigate } from "react-router-dom";
import Modal from "src/components/Modal";
import Board from "src/components/board/Board";
import { AllRoutes } from "src/enums/AllRoutes";

const Game: React.FC = () => {
  const navigate = useNavigate();

  return (
    <Modal onClose={() => navigate(AllRoutes.GAMES)} title="bla">
      <Board
        squares={Array.from({ length: 9 }, (_, i) => i.toString())}
        onClick={console.log}
      />
    </Modal>
  );
};

export default Game;
