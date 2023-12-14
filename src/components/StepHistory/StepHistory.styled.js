import styled from "styled-components";
import {
  padding,
  borderRadius,
  gap,
  BREAKPONITS,
  fontSize,
  fontSizeVmin,
} from "../../theme/commonStyles";

import { theme } from "../../theme/theme";

export const StepHistoryWrapper = styled.div`
  display: grid;
  gap: ${gap.lg}rem;
  grid-column: span 12;
  background-color: ${theme.secondDarkBlue};
  border-radius: ${borderRadius}rem;
  padding: ${padding.md}rem;
  caret-color: transparent;
  font-size: ${fontSizeVmin.sm}vmin;

  ${BREAKPONITS.small} {
    font-size: ${fontSize.sm}rem;
  }
`;
