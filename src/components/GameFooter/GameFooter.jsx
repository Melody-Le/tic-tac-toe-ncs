import React, { useState, useEffect, useRef } from "react";
import {
  BackButton,
  ShowHistoryButton,
  FooterWrapper,
} from "./GameFooter.styled";
import { RiArrowGoBackLine } from "react-icons/ri";
import { fontSize } from "../../theme/commonStyles";
import { GameState } from "../../utils/constant";
import GameOver from "../GameOver/GameOver";
import StepHistory from "../StepHistory/StepHistory";
import { useGame } from "../../Context/GameContext";

function GameFooter() {
  const { handleBackAStep, gameState } = useGame();

  const [showHistory, setShowHistory] = useState(false);

  const newRef = useRef(null);

  const handleShowHistory = () => {
    setShowHistory((prev) => !prev);
  };

  const handleOutsideClick = (event) => {
    if (newRef.current && !newRef?.current?.contains(event.target)) {
      setShowHistory(false);
    }
  };
  // handle close History when user press ESC
  useEffect(() => {
    const keydownHandler = (event) => {
      event.key === "Escape" && setShowHistory(false);
    };
    document.addEventListener("keydown", keydownHandler);
    return () => document.removeEventListener("keydown", keydownHandler);
  });

  // handle close History when user click outside the box
  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  });

  return (
    <FooterWrapper>
      {gameState === GameState.inProgress ? (
        <>
          <BackButton onClick={handleBackAStep}>
            <RiArrowGoBackLine size={`${fontSize.md}rem`} />
          </BackButton>
          <ShowHistoryButton onClick={handleShowHistory}>
            STEP HISTORY
          </ShowHistoryButton>
          {showHistory && (
            <StepHistory innerRef={newRef} onShowHistory={handleShowHistory} />
          )}
        </>
      ) : (
        <GameOver />
      )}
    </FooterWrapper>
  );
}

export default GameFooter;
