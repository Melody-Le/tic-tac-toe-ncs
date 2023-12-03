import styled from "styled-components";
import {
  boardSize,
  gap,
  padding,
  gameBoxSize,
  borderRadius,
} from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const BoardWrapper = styled.div`
  width: ${gameBoxSize}rem;
  background-color: ${theme.darkBlue};
  display: flex;
  flex-direction: column;
  gap: ${gap.lg}rem;
  padding: ${padding.lg}rem;
  border-radius: ${borderRadius}rem;
`;

export const StatusBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`;

export const PlayerTurn = styled.div`
  background-color: pink;
  padding: 1rem 1rem;
  border-radius: ${borderRadius}rem;
`;

export const BackButton = styled.button`
  background-color: yellow;
  padding: 1rem 1rem;
  border-radius: ${borderRadius}rem;
`;

export const SquareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${gap.sm}rem;
  width: ${boardSize}rem;
  height: ${boardSize}rem;
`;
export const RestartButton = styled.button`
  background-color: yellow;
  padding: 1rem 0rem;
  text-align: center;
  border-radius: ${borderRadius}rem;
`;
