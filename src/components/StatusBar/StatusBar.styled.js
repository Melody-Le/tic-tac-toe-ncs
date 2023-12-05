import styled from "styled-components";

import { gap, padding, borderRadius, fontSize } from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const StatusBarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: start;
`;
export const PlayerTurn = styled.div`
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.md}rem;
  border-radius: ${borderRadius}rem;
  font-size: ${fontSize.sm}rem;
  font-weight: 700;
`;

export const BackButton = styled.button`
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.sm}rem;
  border-radius: 2rem;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: ${theme.highlight};
  }
`;
