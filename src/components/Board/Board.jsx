import React, { useState } from "react";
import Square from "../Square/Square";
import { RiArrowGoBackLine } from "react-icons/ri";
import { fontSize } from "../../theme/commonStyles";
import {
  BoardWrapper,
  SquareWrapper,
  StatusBar,
  PlayerTurn,
  BackButton,
  RestartButton,
} from "./Board.styled";
const PLAYER_X = "X";
const PLAYER_O = "O";

function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  const handleSquareClick = (index) => {
    const nextSquare = [...squares];
    if (nextSquare[index]) return;
    nextSquare[index] = xIsNext ? "X" : "O";
    setSquares(nextSquare);
    setXIsNext((prev) => !prev);
  };
  return (
    <>
      <BoardWrapper>
        <StatusBar>
          <PlayerTurn>X Turn</PlayerTurn>
          <BackButton>
            <RiArrowGoBackLine size={`${fontSize.md}rem`} />
          </BackButton>
        </StatusBar>
        <SquareWrapper>
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
            xIsNext={xIsNext}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
            xIsNext={xIsNext}
          />
        </SquareWrapper>
        <RestartButton>Restart Game</RestartButton>
      </BoardWrapper>
    </>
  );
}

export default Board;
