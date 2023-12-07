import styled from "styled-components";
import { padding, borderRadius, fontSize } from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const GameOverContainer = styled.div`
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.sm}rem;
  border-radius: ${borderRadius}rem;
  font-size: ${fontSize.md}rem;
  font-weight: 700;
  text-align: center;
  caret-color: transparent;
  grid-column: 1 / span 12;
`;
