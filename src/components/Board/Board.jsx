import Square from "../Square/Square";
import { SquareWrapper } from "./Board.styled";
import { useGame } from "../../Context/GameContext";

function Board() {
  const createInitialBoard = () => {
    return Array(3)
      .fill(null)
      .map((_, rowIndex) =>
        Array(3)
          .fill(null)
          .map((_, colIndex) => {
            const squareIndex = rowIndex * 3 + colIndex;
            return <Square key={squareIndex} squareIndex={squareIndex} />;
          })
      );
  };
  const initialBoard = createInitialBoard();
  return <SquareWrapper>{initialBoard}</SquareWrapper>;
}

export default Board;
