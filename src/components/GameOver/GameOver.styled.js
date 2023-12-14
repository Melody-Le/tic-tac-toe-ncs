import styled from "styled-components";
import {
  BreakPointText,
  BREAKPONITS,
  fontSizeVmin,
  fontSize,
} from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const GameOverContainer = styled(BreakPointText)`
  background-color: ${theme.secondDarkBlue};
  grid-column: 1 / span 12;
  justify-content: center;
  font-weight: 700;
  font-size: ${fontSizeVmin.md}vmin;
  &:hover {
    justify-content: center;
    font-weight: 700;
    background-color: ${theme.highlight};
    color: ${theme.secondDarkBlue};
  }

  ${BREAKPONITS.small} {
    font-size: ${fontSize.md}rem;
  }
  ${BREAKPONITS.tablet} {
    font-size: ${fontSize.lg}rem;
  }
`;
