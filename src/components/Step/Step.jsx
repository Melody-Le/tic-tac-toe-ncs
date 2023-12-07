import { StepItem, StepItemInactive } from "./Step.styled";
import { useGame } from "../../Context/GameContext";

function Step({ stepDisplay, onClick, active,  squareIndex }) {
  const { currentStep, handleHistoryMouseOver } = useGame();

  const description = `BACK TO STEP # ${stepDisplay}`;
  return (
    <>
      {currentStep + 1 !== stepDisplay && (
        <div onMouseOver={() => handleHistoryMouseOver(squareIndex)}>
          {active ? (
            <StepItem>
              <button onClick={onClick}>{description}</button>
            </StepItem>
          ) : (
            <StepItemInactive>
              <button onClick={onClick}>{description}</button>
            </StepItemInactive>
          )}
        </div>
      )}
    </>
  );
}

export default Step;
