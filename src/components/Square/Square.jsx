import React from "react";
import { Cell } from "./Square.styled";
import { useGame } from "../../Context/GameContext";

function Square({ squareIndex }) {
  const {
    gameState,
    player,
    winningLine,
    squareIndexOnHistoryHover,
    handleSquareClick,
    currentSquares,
  } = useGame();

  const cellWin = winningLine?.includes(squareIndex);
  const cellOnHistoryHover = squareIndexOnHistoryHover === squareIndex;
  const value = currentSquares[squareIndex];

  return (
    <Cell
      onClick={() => handleSquareClick(squareIndex)}
      data-testid={`cell-${squareIndex}`}
      value={value}
      $player={player}
      $cellWin={cellWin ? 1 : 0}
      $gamestate={gameState}
      $onHistoryHover={cellOnHistoryHover ? 1 : 0}
    >
      {value}
    </Cell>
  );
}

export default Square;
