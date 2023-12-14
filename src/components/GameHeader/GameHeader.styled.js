import styled from "styled-components";
import {
  BREAKPONITS,
  BreakPointText,
  fontSizeVmin,
  padding,
  fontSize,
  borderRadius,
} from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const GameHeaderContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
`;
export const PlayerTurn = styled(BreakPointText)`
  padding: ${padding.md}rem 0;
  font-weight: 700;
  text-align: right;
  justify-content: end;
  grid-column: span 6/-1;
  pointer-events: none;
`;
export const RestartButton = styled(BreakPointText)`
  background-color: ${theme.secondDarkBlue};
  text-align: left;
  color: ${theme.highlight};
  transition: 0.2s;
  &:hover {
    justify-content: center;
    font-weight: 700;
    background-color: ${theme.highlight};
    color: ${theme.secondDarkBlue};
  }
`;
export const RestartButtonInProgress = styled(RestartButton)`
  grid-column: span 4;
  border-radius: 0 2rem 2rem 0;
  font-weight: 700;
  transition: all 0.5s ease-in-out;

  &:hover {
    grid-column: span 6;
  }
`;

export const RestartButtonGameOver = styled(RestartButton)`
  padding: ${padding.sm}rem;
  border-radius: ${borderRadius}rem;
  grid-column: span 12;
  font-size: ${fontSizeVmin.md}vmin;
  justify-content: center;
  font-weight: 700;
  transition: all 0.5s ease-in-out;

  ${BREAKPONITS.small} {
    font-size: ${fontSize.md}rem;
  }
  ${BREAKPONITS.tablet} {
    font-size: ${fontSize.lg}rem;
  }
`;
