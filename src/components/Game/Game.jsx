import React, { useEffect, useState } from "react";
import {
  GameState,
  PLAYER_O,
  PLAYER_X,
  LOCAL_STORAGE_KEY,
} from "../../store/constant.js";
import { defineWinner } from "../../store/action";
import { GameWrapper } from "./Game.styled";
import GameHeader from "../GameHeader/GameHeader";
import Board from "../Board/Board";
import GameFooter from "../GameFooter/GameFooter.jsx";

function Game() {
  const [history, setHistory] = useState(() => {
    const histoyLCS = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    return (
      histoyLCS || [
        {
          step: 0,
          squares: Array(9).fill(null),
          squareIndex: null,
        },
      ]
    );
  });
  const [currentStep, setCurrentStep] = useState(() => {
    const histoyLCS = JSON.parse(
      window.localStorage.getItem(LOCAL_STORAGE_KEY)
    );
    if (histoyLCS) {
      return histoyLCS[histoyLCS?.length - 1].step;
    } else {
      return 0;
    }
  });

  const [gameState, setGameState] = useState(GameState.inProgress);
  const [winningLine, setwinningLine] = useState([]);
  const [player, setPlayer] = useState(PLAYER_X);
  const currentSquares = history[currentStep]?.squares;
  const [squareIndexOnHistoryHover, setSquareIndexOnHistoryHover] =
    useState(null);

  const handlePlay = (nextSquares, clickedSquareIndex) => {
    const nextHistory = [
      ...history.slice(0, currentStep + 1),
      {
        step: currentStep + 1,
        squares: nextSquares,
        squareIndex: clickedSquareIndex,
      },
    ];
    setHistory(nextHistory);
    setCurrentStep(nextHistory.length - 1);
    player === PLAYER_X ? setPlayer(PLAYER_O) : setPlayer(PLAYER_X);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, nextHistory);
  };

  const handleRestart = () => {
    localStorage.clear();
    setHistory([
      {
        step: 0,
        squares: Array(9).fill(null),
        squareIndex: null,
      },
    ]);
    setGameState(GameState.inProgress);
    setPlayer(PLAYER_X);
    setwinningLine([]);
    setCurrentStep(0);
  };
  const handleHistoryMouseOver = (index) => {
    setSquareIndexOnHistoryHover(index);
  };

  const jumpTo = (nextStep) => {
    setCurrentStep(nextStep);
    setPlayer(nextStep % 2 === 0 ? PLAYER_X : PLAYER_O);
    const nextHistory = [...history.slice(0, nextStep + 1)];
    setHistory(nextHistory);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, nextHistory);
  };

  const handleBackAStep = () => {
    jumpTo(currentStep - 2);
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
    <GameWrapper>
      <GameHeader
        gameState={gameState}
        player={player}
        currentStep={currentStep}
        backAStep={handleBackAStep}
        restart={handleRestart}
      />
      <Board
        player={player}
        squares={currentSquares}
        onPlay={handlePlay}
        gameState={gameState}
        winningLine={winningLine}
        squareIndexOnHistoryHover={squareIndexOnHistoryHover}
      />
      <GameFooter
        onClick={handleRestart}
        backAStep={handleBackAStep}
        gameState={gameState}
        history={history}
        player={player}
        currentStep={currentStep}
        jumpTo={jumpTo}
        handleMouseOver={handleHistoryMouseOver}
      />
    </GameWrapper>
  );
}

export default Game;
