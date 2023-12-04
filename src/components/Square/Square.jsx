import React from "react";
import { Cell } from "./Square.styled";

function Square({ value, onSquareClick, xIsNext }) {
  return (
    <Cell onClick={onSquareClick} value={value} xIsNext={xIsNext}>
      {value}
    </Cell>
  );
}

export default Square;
