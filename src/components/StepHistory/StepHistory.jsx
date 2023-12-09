import React from "react";
import Step from "../Step/Step";
import { PLAYER_X } from "../../utils/constant.js";
import { StepHistoryWrapper } from "./StepHistory.styled";
import { useGame } from "../../Context/GameContext";

function StepHistory({ onShowHistory, innerRef }) {
  const { history, player } = useGame();

  let activeStep = [];
  if (player === PLAYER_X) {
    activeStep = [1, 3, 5, 7, 9];
  } else {
    activeStep = [2, 4, 6, 8];
  }

  const stepHistory = history
    ?.map((_, index) => {
      const stepNumber = history[index].step;
      return (
        <Step
          key={stepNumber}
          onShowHistory={onShowHistory}
          stepDisplay={stepNumber}
          active={activeStep?.includes(stepNumber)}
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
