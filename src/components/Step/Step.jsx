import { StepItem, StepItemInactive } from "./Step.styled";

function Step({
  stepDisplay,
  onClick,
  currentStep,
  active,
  handleMouseOver,
  squareIndex,
}) {
  const description = `BACK TO STEP # ${stepDisplay}`;
  return (
    <>
      {currentStep + 1 !== stepDisplay && (
        <div onMouseOver={() => handleMouseOver(squareIndex)}>
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
