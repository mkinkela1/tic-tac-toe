import Modal from "src/components/Modal";
import Board from "src/components/board/Board";

const Game: React.FC = () => {
  return (
    <Modal onClose={() => console.log("close")} title="bla">
      <Board
        squares={Array.from({ length: 9 }, (_, i) => i.toString())}
        onClick={console.log}
      />
    </Modal>
  );
};

export default Game;
