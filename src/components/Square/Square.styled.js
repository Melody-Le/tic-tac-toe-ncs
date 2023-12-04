import styled from "styled-components";
import { theme } from "../../theme/theme";

import { borderRadius, fontSize } from "../../theme/commonStyles";
import { PLAYER_O, PLAYER_X } from "../../store/constant.js";

export const Cell = styled.div`
  display: grid;
  place-content: center;
  font-size: ${fontSize.xl}rem;
  font-weight: 900;
  width: 100%;
  font-family: "Varela Round", sans-serif;
  color: ${({ value }) =>
    value === "X" ? theme.primary : theme.secondPrimary};
  background-color: ${theme.bright};
  border-radius: ${borderRadius}rem;
  cursor: pointer;
  box-shadow: 5px 5px 5px ${theme.darkDeepBlue};
  caret-color: transparent;
  transition: all 0.5s ease-in-out;
  &:hover {
    background-color: ${(props) => !props.value && theme.secondHightlight};
  }
  &:hover::after {
    content: "${(props) =>
      props.value ? "" : props.player === PLAYER_X ? "X" : "O"}";
    color: ${theme.bright};
  }
`;
