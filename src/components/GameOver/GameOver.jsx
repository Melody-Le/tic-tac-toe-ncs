import React from "react";
import { GameState } from "../../utils/constant";
import { GameOverContainer } from "./GameOver.styled";
import { useGame } from "../../Context/GameContext";

function GameOver() {
  const { gameState } = useGame();
  switch (gameState) {
    case GameState.inProgress:
      return <></>;
    case GameState.playerOWins:
      return <GameOverContainer>O Wins</GameOverContainer>;
    case GameState.playerXWins:
      return <GameOverContainer>X Wins</GameOverContainer>;
    case GameState.draw:
      return <GameOverContainer>Draw</GameOverContainer>;
    default:
      return <></>;
  }
}

export default GameOver;
