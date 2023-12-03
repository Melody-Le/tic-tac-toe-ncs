import styled from "styled-components";

import {
  boardSize,
  gap,
  padding,
  gameBoxSize,
  borderRadius,
  fontSize,
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
  background-color: ${theme.bright};
  padding: ${padding.md}rem;
  border-radius: ${borderRadius}rem;
  font-size: ${fontSize.sm}rem;
  font-weight: 700;
  box-shadow: 5px 5px 5px ${theme.darkDeepBlue};
`;

export const BackButton = styled.button`
  background-color: ${theme.bright};
  padding: ${padding.sm}rem;
  border-radius: 2rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.highlight};
  }
`;

export const SquareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${gap.md}rem;
  width: ${boardSize}rem;
  height: ${boardSize}rem;
`;
export const RestartButton = styled.button`
  background-color: ${theme.bright};
  padding: 1rem 0rem;
  text-align: center;
  border-radius: ${borderRadius}rem;
  font-size: ${fontSize.sm}rem;
  font-weight: 700;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.highlight};
  }
`;
