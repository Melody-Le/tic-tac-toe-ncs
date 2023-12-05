import React from "react";
import { StepItem, StepItemInactive } from "./Step.styled";

function Step({ stepDisplay, onClick, currentStep, active }) {
  console.log(stepDisplay);
  const description = `BACK TO STEP # ${stepDisplay}`;
  return (
    <>
      {currentStep + 1 !== stepDisplay && (
        <>
          {active ? (
            <StepItem>
              <button onClick={onClick}>{description}</button>
            </StepItem>
          ) : (
            <StepItemInactive>
              <button onClick={onClick}>{description}</button>
            </StepItemInactive>
          )}
        </>
      )}
    </>
  );
}

export default Step;
