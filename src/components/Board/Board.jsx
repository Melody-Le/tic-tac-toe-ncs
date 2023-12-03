import React from "react";
import Square from "../Square/Square";
import { RiArrowGoBackLine } from "react-icons/ri";
import { fontSize } from "../../theme/commonStyles";
import {
  BoardWrapper,
  SquareWrapper,
  StatusBar,
  PlayerTurn,
  BackButton,
  RestartButton,
} from "./Board.styled";

function Board() {
  return (
    <>
      <BoardWrapper>
        <StatusBar>
          <PlayerTurn>X Turn</PlayerTurn>
          <BackButton>
            <RiArrowGoBackLine size={`${fontSize.md}rem`} />
          </BackButton>
        </StatusBar>
        <SquareWrapper>
          <Square value={"X"} />
          <Square value={"0"} />
          <Square value={3} />
          <Square value={4} />
          <Square value={5} />
          <Square value={6} />
          <Square value={7} />
          <Square value={8} />
          <Square value={9} />
        </SquareWrapper>
        <RestartButton>Restart Game</RestartButton>
      </BoardWrapper>
    </>
  );
}

export default Board;
