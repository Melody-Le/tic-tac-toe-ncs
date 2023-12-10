import React from "react";
import Step from "../Step/Step";
import { PLAYER_X } from "../../utils/constant.js";
import { StepHistoryWrapper } from "./StepHistory.styled";
import { useGame } from "../../Context/GameContext";

function StepHistory({ onShowHistory, innerRef }) {
  const { history } = useGame();

  const stepHistory = history
    ?.map((_, index) => {
      const stepNumber = history[index].step;
      return (
        <Step
          key={stepNumber}
          onShowHistory={onShowHistory}
          stepDisplay={stepNumber}
          squareIndex={history[index].squareIndex}
        />
      );
    })
    .reverse();

  return (
    <>
      {history?.length > 1 ? (
        <StepHistoryWrapper ref={innerRef}>{stepHistory}</StepHistoryWrapper>
      ) : (
        <StepHistoryWrapper ref={innerRef}>LETS START GAME</StepHistoryWrapper>
      )}
    </>
  );
}

export default StepHistory;
