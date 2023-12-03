import styled from "styled-components";
import { theme } from "../../theme/theme";

import { markSize, borderRadius, fontSize } from "../../theme/commonStyles";

export const Cell = styled.div`
  display: grid;
  place-content: center;
  font-size: ${fontSize.xl}rem;
  font-weight: 900;
  width: 100%;
  font-family: "Varela Round", sans-serif;
  color: ${theme.primary};
  background-color: ${theme.bright};
  border-radius: ${borderRadius}rem;
  cursor: pointer;
  box-shadow: 5px 5px 5px ${theme.darkDeepBlue};
`;
