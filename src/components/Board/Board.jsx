import React, { useEffect, useState } from "react";
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
import {
  GameState,
  PLAYER_O,
  PLAYER_X,
  LOCAL_STORAGE_KEY,
} from "../../store/constant.js";
import { defineWinner } from "../../store/action";

function Board() {
  const [squares, setSquares] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) ||
      Array(9).fill(null)
    );
  });
  const [player, setPlayer] = useState(PLAYER_X);
  const [gameState, setGameState] = useState(GameState.inProgress);

  const handleSquareClick = (index) => {
    const nextSquare = [...squares];
    if (nextSquare[index] || gameState !== GameState.inProgress) return;
    nextSquare[index] = player === PLAYER_X ? "X" : "O";
    setSquares(nextSquare);

    window.localStorage.setItem(
      "TIC_TAC_TO_STORAGE",
      JSON.stringify(nextSquare)
    );
    player === PLAYER_X ? setPlayer(PLAYER_O) : setPlayer(PLAYER_X);
  };

  useEffect(() => {
    const winner = defineWinner(squares);
    switch (winner) {
      case "X":
        setGameState(GameState.playerOWins);
        break;
      case "O":
        setGameState(GameState.playerOWins);
        break;
      case "draw":
        setGameState(GameState.draw);
        break;
      default:
        setGameState(GameState.inProgress);
    }
  }, [squares]);

  useEffect(() => {
    // const squareStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    // if (squareStorage) {
    //   setSquares(squareStorage);
    // }
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(squares));
  }, [squares]);

  return (
    <>
      <BoardWrapper>
        <StatusBar>
          <PlayerTurn>X Turn</PlayerTurn>
          <div>{gameState}</div>
          <BackButton>
            <RiArrowGoBackLine size={`${fontSize.md}rem`} />
          </BackButton>
        </StatusBar>
        <SquareWrapper>
          <Square
            value={squares[0]}
            onSquareClick={() => handleSquareClick(0)}
            player={player}
          />
          <Square
            value={squares[1]}
            onSquareClick={() => handleSquareClick(1)}
            player={player}
          />
          <Square
            value={squares[2]}
            onSquareClick={() => handleSquareClick(2)}
            player={player}
          />
          <Square
            value={squares[3]}
            onSquareClick={() => handleSquareClick(3)}
            player={player}
          />
          <Square
            value={squares[4]}
            onSquareClick={() => handleSquareClick(4)}
            player={player}
          />
          <Square
            value={squares[5]}
            onSquareClick={() => handleSquareClick(5)}
            player={player}
          />
          <Square
            value={squares[6]}
            onSquareClick={() => handleSquareClick(6)}
            player={player}
          />
          <Square
            value={squares[7]}
            onSquareClick={() => handleSquareClick(7)}
            player={player}
          />
          <Square
            value={squares[8]}
            onSquareClick={() => handleSquareClick(8)}
            player={player}
          />
        </SquareWrapper>
        <RestartButton>Restart Game</RestartButton>
      </BoardWrapper>
    </>
  );
}

export default Board;
