import React from "react";
import { RestartButton } from "./GameFooter.styled";

function GameFooter({ onClick }) {
  return <RestartButton onClick={onClick}>Restart Game</RestartButton>;
}

export default GameFooter;
