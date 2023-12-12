import { StepItem, StepItemInactive } from "./Step.styled";
import { useGame } from "../../Context/GameContext";
import { PLAYER_X } from "../../utils/constant.js";

function Step({ stepDisplay, onShowHistory, squareIndex }) {
  const {
    handleHistoryMouseOver,
    handleHistoryMouseOut,
    handleHistoryStepClick,
    player,
    currentStep,
  } = useGame();

  let activeStep = [];
  if (player === PLAYER_X) {
    activeStep = [1, 3, 5, 7, 9];
  } else {
    activeStep = [2, 4, 6, 8];
  }

  const active = activeStep?.includes(stepDisplay);

  let stepDescription;

  if (stepDisplay === 0) {
    stepDescription = `START GAME`;
  } else if (stepDisplay === currentStep) {
    stepDescription = `LATEST STEP : ${stepDisplay}`;
  } else {
    stepDescription = `STEP : ${stepDisplay}`;
  }

  return (
    <div
      onMouseOver={() => handleHistoryMouseOver(squareIndex)}
      onMouseOut={handleHistoryMouseOut}
      data-testid="steps"
    >
      {active ? (
        <StepItem>
          <button
            onClick={() => {
              handleHistoryStepClick(stepDisplay);
              onShowHistory();
            }}
            data-testid={`step-${stepDisplay}`}
          >
            BACK TO {stepDescription}
          </button>
        </StepItem>
      ) : (
        <StepItemInactive>
          <button data-testid={`step-${stepDisplay}`} disabled>
            {stepDescription}
          </button>
        </StepItemInactive>
      )}
    </div>
  );
}

export default Step;
