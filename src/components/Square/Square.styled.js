import styled from "styled-components";
import { theme } from "../../theme/theme";

import { borderRadius, fontSize } from "../../theme/commonStyles";
import { PLAYER_X } from "../../store/constant.js";

export const Cell = styled.div`
  display: grid;
  place-content: center;
  font-size: ${fontSize.xl}rem;
  font-weight: 900;
  width: 100%;
  font-family: "Varela Round", sans-serif;
  color: ${({ value }) =>
    value === "X" ? theme.primary : theme.secondPrimary};
  background-color: ${({ cellWin }) => {
    return cellWin ? theme.highlight : theme.secondDarkBlue;
  }};
  border-radius: ${borderRadius}rem;
  cursor: pointer;
  caret-color: transparent;
  transition: all 0.5s ease-in-out;
  ${({ value, player, gameState }) => `
      &:hover {
        background-color: ${!value && theme.secondHightlight}
      }
      &:hover::after {
        content: "${value ? "" : player === PLAYER_X ? "X" : "O"}";
        color: ${theme.secondDarkBlue}
      }
    `}
`;
