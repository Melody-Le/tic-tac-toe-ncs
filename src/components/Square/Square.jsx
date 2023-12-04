import React from "react";
import { Cell } from "./Square.styled";

function Square({ value, onSquareClick, player }) {
  return (
    <Cell onClick={onSquareClick} value={value} player={player}>
      {value}
    </Cell>
  );
}

export default Square;
