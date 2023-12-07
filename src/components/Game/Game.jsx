import React from "react";
import { GameWrapper } from "./Game.styled";
import GameHeader from "../GameHeader/GameHeader";
import Board from "../Board/Board";
import GameFooter from "../GameFooter/GameFooter.jsx";

function Game() {
  return (
    <GameWrapper>
      <GameHeader />
      <Board />
      <GameFooter />
    </GameWrapper>
  );
}

export default Game;
