import React from "react";
import {
  GameHeaderContainer,
  PlayerTurn,
  RestartButtonGameOver,
  RestartButtonInProgress,
} from "./GameHeader.styled";
import { GameState } from "../../utils/constant";

function GameHeader({ gameState, player, currentStep, restart }) {
  return (
    <GameHeaderContainer>
      {gameState === GameState.inProgress ? (
        <>
          <RestartButtonInProgress onClick={restart}>
            Restart
          </RestartButtonInProgress>
          <PlayerTurn>
            STEP {currentStep + 1} : {player} TURN
          </PlayerTurn>
        </>
      ) : (
        <RestartButtonGameOver onClick={restart}>Restart</RestartButtonGameOver>
      )}
    </GameHeaderContainer>
  );
}

export default GameHeader;
