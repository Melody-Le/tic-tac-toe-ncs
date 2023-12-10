import React, { createContext, useContext, useState, useEffect } from "react";
import { GameState, PLAYER_X, PLAYER_O } from "../utils/constant";
import { LOCAL_STORAGE_KEY } from "../utils/constant";
import { defineWinner } from "../utils/fn";

export const GameContext = createContext({});

export function useGame() {
  return useContext(GameContext);
}

export function GameProvider({ children }) {
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
    setSquareIndexOnHistoryHover(null);
  };
  const handleHistoryMouseOver = (index) => {
    setSquareIndexOnHistoryHover(index);
  };
  const handleHistoryMouseOut = () => {
    setSquareIndexOnHistoryHover(null);
  };

  const handleHistoryStepClick = (index) => {
    jumpTo(index - 1);
    setSquareIndexOnHistoryHover(null);
  };
  const jumpTo = (nextStep) => {
    setCurrentStep(nextStep);
    setPlayer(nextStep % 2 === 0 ? PLAYER_X : PLAYER_O);
    const nextHistory = [...history.slice(0, nextStep + 1)];
    setHistory(nextHistory);
    window.localStorage.setItem(LOCAL_STORAGE_KEY, nextHistory);
  };

  const handleBackAStep = () => {
    currentStep > 1 && jumpTo(currentStep - 2);
  };

  const handleSquareClick = (index) => {
    const nextSquare = [...currentSquares];
    if (nextSquare[index] || gameState !== GameState.inProgress) return;
    nextSquare[index] = player === PLAYER_X ? "X" : "O";
    handlePlay(nextSquare, index);
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
  const value = {
    history,
    gameState,
    currentSquares,
    currentStep,
    player,
    winningLine,
    squareIndexOnHistoryHover,
    jumpTo,
    handleRestart,
    handleBackAStep,
    handleHistoryMouseOver,
    handleHistoryMouseOut,
    handleHistoryStepClick,
    handleSquareClick,
  };
  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}
