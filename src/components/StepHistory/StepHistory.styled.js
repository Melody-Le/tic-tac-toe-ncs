import styled from "styled-components";

import { padding, borderRadius, gap } from "../../theme/commonStyles";

import { theme } from "../../theme/theme";

export const StepHistoryWrapper = styled.div`
  display: grid;
  gap: ${gap.lg}rem;
  grid-column: span 12;
  background-color: ${theme.secondDarkBlue};
  border-radius: ${borderRadius}rem;
  padding: ${padding.md}rem;
`;
