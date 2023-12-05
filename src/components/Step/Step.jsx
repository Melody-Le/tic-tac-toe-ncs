import React, { useState } from "react";
import { StepLi, StepButton } from "./Step.styled";
import {
  GameState,
  PLAYER_O,
  PLAYER_X,
  LOCAL_STORAGE_KEY,
} from "../../store/constant.js";

function Step({ stepDisplay, onClick, currentStep, active }) {
  let description;
  if (stepDisplay > 0) {
    description = `BACK to step # ${stepDisplay}`;
  } else {
    description = "Step 0: Go to Game Start";
  }
  return (
    <>
      {currentStep + 1 !== stepDisplay && (
        <StepLi>
          {active ? (
            <button onClick={onClick}>{description}</button>
          ) : (
            <button onClick={onClick} style={{ color: "black" }} disabled>
              {description}
            </button>
          )}
        </StepLi>
      )}
    </>
  );
}

export default Step;
