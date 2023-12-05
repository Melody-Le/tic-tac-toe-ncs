import React from "react";
import Step from "../Step/Step";
import { PLAYER_X } from "../../store/constant.js";
import { StepHistoryWrapper } from "./StepHistory.styled";

function StepHistory({
  history,
  player,
  currentStep,
  jumpTo,
  onShowHistory,
  innerRef,
}) {
  let activeStep = [];
  if (player === PLAYER_X) {
    activeStep = [1, 3, 5, 7, 9];
  } else {
    activeStep = [2, 4, 6, 8];
  }

  const stepHistory = history?.map((_, index) => {
    return (
      <Step
        key={history[index].step}
        onClick={() => {
          jumpTo(index);
          onShowHistory(false);
        }}
        stepDisplay={history[index].step + 1}
        currentStep={currentStep}
        player={player}
        active={activeStep?.includes(index + 1)}
      />
    );
  });
  return (
    <>
      {history.length > 1 ? (
        <StepHistoryWrapper ref={innerRef}>{stepHistory}</StepHistoryWrapper>
      ) : (
        <StepHistoryWrapper ref={innerRef}>
          LETS MAKE THE FIRST STEP
        </StepHistoryWrapper>
      )}
    </>
  );
}

export default StepHistory;
