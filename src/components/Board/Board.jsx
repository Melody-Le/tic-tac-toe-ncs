import Square from "../Square/Square";
import { SquareWrapper } from "./Board.styled";
import { GameState, PLAYER_X } from "../../store/constant.js";

function Board({ player, squares, onPlay, gameState, winningLine }) {
  const handleSquareClick = (index) => {
    const nextSquare = [...squares];
    if (nextSquare[index] || gameState !== GameState.inProgress) return;
    nextSquare[index] = player === PLAYER_X ? "X" : "O";
    onPlay(nextSquare);
  };

  return (
    <>
      <SquareWrapper>
        <Square
          squareIndex={0}
          value={squares[0]}
          onSquareClick={() => handleSquareClick(0)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={1}
          value={squares[1]}
          onSquareClick={() => handleSquareClick(1)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={2}
          value={squares[2]}
          onSquareClick={() => handleSquareClick(2)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={3}
          value={squares[3]}
          onSquareClick={() => handleSquareClick(3)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={4}
          value={squares[4]}
          onSquareClick={() => handleSquareClick(4)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={5}
          value={squares[5]}
          onSquareClick={() => handleSquareClick(5)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={6}
          value={squares[6]}
          onSquareClick={() => handleSquareClick(6)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={7}
          value={squares[7]}
          onSquareClick={() => handleSquareClick(7)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
        <Square
          squareIndex={8}
          value={squares[8]}
          onSquareClick={() => handleSquareClick(8)}
          player={player}
          winningLine={winningLine}
          gameState={gameState}
        />
      </SquareWrapper>
    </>
  );
}

export default Board;
