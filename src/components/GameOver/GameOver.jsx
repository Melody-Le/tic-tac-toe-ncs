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
      return (
        <GameOverContainer data-testid="gameOver">
          {GameState.playerOWins}
        </GameOverContainer>
      );
    case GameState.playerXWins:
      return (
        <GameOverContainer data-testid="gameOver">
          {GameState.playerXWins}
        </GameOverContainer>
      );
    case GameState.draw:
      return (
        <GameOverContainer data-testid="gameOver">
          {GameState.draw}
        </GameOverContainer>
      );
    default:
      return <></>;
  }
}

export default GameOver;
