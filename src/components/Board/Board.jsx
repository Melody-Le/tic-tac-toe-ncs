import Square from "../Square/Square";
import { SquareWrapper } from "./Board.styled";
import { GameState, PLAYER_X } from "../../utils/constant.js";
import { useGame } from "../../Context/GameContext";

function Board(
  {
    // player,
    // squares,
    // onPlay,
    // gameState,
    // winningLine,
    // squareIndexOnHistoryHover,
  }
) {
  const {
    player,
    currentSquares,
    gameState,
    winningLine,
    squareIndexOnHistoryHover,
    handleSquareClick,
  } = useGame();
  // const handleSquareClick = (index) => {
  //   const nextSquare = [...squares];
  //   if (nextSquare[index] || gameState !== GameState.inProgress) return;
  //   nextSquare[index] = player === PLAYER_X ? "X" : "O";
  //   onPlay(nextSquare, index);
  // };

  const createInitialBoard = () => {
    return Array(3)
      .fill(null)
      .map((_, rowIndex) =>
        Array(3)
          .fill(null)
          .map((_, colIndex) => {
            const squareIndex = rowIndex * 3 + colIndex;
            return (
              <Square
                key={squareIndex}
                squareIndex={squareIndex}
                squareIndexOnHistoryHover={squareIndexOnHistoryHover}
                value={currentSquares[squareIndex]}
                onSquareClick={() => handleSquareClick(squareIndex)}
                player={player}
                winningLine={winningLine}
                gameState={gameState}
              />
            );
          })
      );
  };
  const initialBoard = createInitialBoard();
  return <SquareWrapper>{initialBoard}</SquareWrapper>;
}

export default Board;
