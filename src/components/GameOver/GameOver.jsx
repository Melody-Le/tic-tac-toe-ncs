import React from "react";
import { GameState } from "../../store/constant";
import { GameOverContainer } from "./GameOver.styled";

function GameOver({ gameState }) {
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
