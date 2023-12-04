import React from "react";
import { Cell } from "./Square.styled";

function Square({
  value,
  onSquareClick,
  player,
  winningLine,
  squareIndex,
  gameState,
}) {
  const cellWin = winningLine?.includes(squareIndex);
  return (
    <Cell
      onClick={onSquareClick}
      value={value}
      player={player}
      cellWin={cellWin}
      gameState={gameState}
    >
      {value}
    </Cell>
  );
}

export default Square;
