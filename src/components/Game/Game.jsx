import React, { useEffect, useState } from "react";
import Square from "../Square/Square";
import { RiArrowGoBackLine } from "react-icons/ri";
import { fontSize } from "../../theme/commonStyles";

import {
  GameState,
  PLAYER_O,
  PLAYER_X,
  LOCAL_STORAGE_KEY,
} from "../../store/constant.js";
import { defineWinner } from "../../store/action";
import GameOver from "../GameOver/GameOver";
import Board from "../Board/Board";
import {
  GameWrapper,
  StatusBar,
  RestartButton,
  PlayerTurn,
  BackButton,
} from "./Game.styled";

function Game() {
  const [history, setHistory] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem(LOCAL_STORAGE_KEY)) || [
        Array(9).fill(null),
      ]
    );
  });
  const [gameState, setGameState] = useState(GameState.inProgress);
  const [winningLine, setwinningLine] = useState([]);
  const [player, setPlayer] = useState(PLAYER_X);
  const currentSquares = history[history.length - 1];

  const handlePlay = (nextSquares) => {
    setHistory((prevHistory) => [...prevHistory, nextSquares]);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, [...history, nextSquares]);
    player === PLAYER_X ? setPlayer(PLAYER_O) : setPlayer(PLAYER_X);
  };
  const handleReset = () => {
    localStorage.clear();
    setHistory([Array(9).fill(null)]);
    setGameState(GameState.inProgress);
    setPlayer(PLAYER_X);
    setwinningLine([]);
  };

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history));
  }, [history]);
  useEffect(() => {
    const winner = defineWinner(currentSquares)?.winner;
    switch (winner) {
      case "X":
        setGameState(GameState.playerOWins);
        setwinningLine(defineWinner(currentSquares)?.winnningPositons);
        break;
      case "O":
        setwinningLine(defineWinner(currentSquares)?.winnningPositons);
        setGameState(GameState.playerOWins);
        break;
      case "draw":
        setGameState(GameState.draw);
        break;
      default:
        setGameState(GameState.inProgress);
    }
  }, [currentSquares]);
  return (
    <>
      <GameWrapper>
        <StatusBar>
          {gameState === GameState.inProgress ? (
            <>
              <PlayerTurn>{player} TURN</PlayerTurn>
              <BackButton>
                <RiArrowGoBackLine size={`${fontSize.md}rem`} />
              </BackButton>
            </>
          ) : (
            <GameOver gameState={gameState} />
          )}
        </StatusBar>
        <Board
          player={player}
          squares={currentSquares}
          onPlay={handlePlay}
          gameState={gameState}
          winningLine={winningLine}
        />
        <RestartButton onClick={handleReset}>Restart Game</RestartButton>
      </GameWrapper>
    </>
  );
}

export default Game;
