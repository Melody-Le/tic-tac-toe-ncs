import React from "react";
import {
  GameHeaderContainer,
  PlayerTurn,
  RestartButtonGameOver,
  RestartButtonInProgress,
} from "./GameHeader.styled";
import { GameState } from "../../utils/constant";
import { useGame } from "../../Context/GameContext";

function GameHeader() {
  const { gameState, currentStep, handleRestart, player } = useGame();
  return (
    <GameHeaderContainer>
      {gameState === GameState.inProgress ? (
        <>
          <RestartButtonInProgress onClick={handleRestart}>
            Restart
          </RestartButtonInProgress>
          <PlayerTurn>
            STEP {currentStep + 1} : {player} TURN
          </PlayerTurn>
        </>
      ) : (
        <RestartButtonGameOver onClick={handleRestart}>
          Restart
        </RestartButtonGameOver>
      )}
    </GameHeaderContainer>
  );
}

export default GameHeader;
