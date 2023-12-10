import { StepItem, StepItemInactive } from "./Step.styled";
import { useGame } from "../../Context/GameContext";

function Step({ stepDisplay, onShowHistory, active, squareIndex }) {
  const {
    currentStep,
    handleHistoryMouseOver,
    handleHistoryMouseOut,
    handleHistoryStepClick,
    history,
  } = useGame();

  let stepDescription;

  if (stepDisplay === 0) {
    stepDescription = `START GAME`;
  } else if (stepDisplay === history.length - 1) {
    stepDescription = `LATEST STEP : ${stepDisplay}`;
  } else {
    stepDescription = `STEP # ${stepDisplay}`;
  }

  return (
    <>
      {currentStep + 1 !== stepDisplay && (
        <div
          onMouseOver={() => handleHistoryMouseOver(squareIndex)}
          onMouseOut={handleHistoryMouseOut}
        >
          {active ? (
            <StepItem>
              <button
                onClick={() => {
                  handleHistoryStepClick(stepDisplay);
                  onShowHistory();
                }}
              >
                BACK TO {stepDescription}
              </button>
            </StepItem>
          ) : (
            <StepItemInactive>
              <button>{stepDescription}</button>
            </StepItemInactive>
          )}
        </div>
      )}
    </>
  );
}

export default Step;
