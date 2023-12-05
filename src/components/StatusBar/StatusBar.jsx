import React from "react";
import { StatusBarContainer, PlayerTurn, BackButton } from "./StatusBar.styled";
import GameOver from "../GameOver/GameOver";
import { GameState } from "../../store/constant";
import { RiArrowGoBackLine } from "react-icons/ri";
import { fontSize } from "../../theme/commonStyles";

function StatusBar({ gameState, player }) {
  return (
    <>
      <StatusBarContainer>
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
      </StatusBarContainer>
    </>
  );
}

export default StatusBar;
