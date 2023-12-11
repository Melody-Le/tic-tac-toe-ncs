import Square from "../Square/Square";
import { SquareWrapper } from "./Board.styled";

function Board() {
  const createInitialBoard = () => {
    return Array(9)
      .fill(null)
      .map((_, squareIndex) => {
        return <Square key={squareIndex} squareIndex={squareIndex} />;
      });
  };
  const initialBoard = createInitialBoard();
  return <SquareWrapper data-testid="board">{initialBoard}</SquareWrapper>;
}

export default Board;
