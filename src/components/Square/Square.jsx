import React from "react";
import { Cell } from "./Square.styled";

function Square({ value, onSquareClick }) {
  return <Cell onClick={onSquareClick}>{value}</Cell>;
}

export default Square;
