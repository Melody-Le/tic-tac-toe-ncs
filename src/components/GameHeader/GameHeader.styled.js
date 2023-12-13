import styled from "styled-components";

import { padding, borderRadius, fontSize } from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const GameHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const PlayerTurn = styled.div`
  padding: ${padding.md}rem 0;
  border-radius: ${borderRadius}rem;
  font-size: ${fontSize.sm}rem;
  font-weight: 700;
  text-align: right;
  grid-column: span 6/-1;
`;
export const RestartButton = styled.button`
  background-color: ${theme.secondDarkBlue};
  padding: 1rem 0rem;
  text-align: left;
  border-radius: 0 2rem 2rem 0;
  font-size: ${fontSize.sm}rem;
  font-weight: 700;
  color: ${theme.highlight};
  transition: 0.2s;
  caret-color: transparent;
`;
export const RestartButtonInProgress = styled(RestartButton)`
  grid-column: span 4;
  &:hover {
    grid-column: span 6;
    text-align: center;
  }
`;

export const RestartButtonGameOver = styled(RestartButton)`
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.sm}rem;
  text-align: center;
  border-radius: 0 2rem 2rem 0;
  font-size: ${fontSize.md}rem;
  font-weight: 700;
  color: ${theme.highlight};
  transition: 0.5s;
  grid-column: span 12;
`;
