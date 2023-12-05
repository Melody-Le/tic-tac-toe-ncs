import styled from "styled-components";

import { borderRadius, fontSize } from "../../theme/commonStyles";
import { theme } from "../../theme/theme";

export const RestartButton = styled.button`
  background-color: ${theme.secondDarkBlue};
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
