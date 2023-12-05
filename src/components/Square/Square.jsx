import React from "react";
import { Cell } from "./Square.styled";

function Square({
  value,
  onSquareClick,
  player,
  winningLine,
  squareIndex,
  gameState,
  squareIndexOnHistoryHover,
}) {
  const cellWin = winningLine?.includes(squareIndex);
  const cellOnHistoryHover = squareIndexOnHistoryHover === squareIndex;
  return (
    <Cell
      onClick={onSquareClick}
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
