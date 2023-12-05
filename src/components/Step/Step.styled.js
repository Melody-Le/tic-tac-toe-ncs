import styled from "styled-components";
import { theme } from "../../theme/theme";
import { padding, borderRadius, fontSize, gap } from "../../theme/commonStyles";
export const StepItem = styled.div`
  cursor: pointer;
  &:hover {
    background-color: yellow;
    color: ${theme.darkBlue};
  }
`;
export const StepItemInactive = styled.div`
  color: ${theme.darkBlue};
  pointer-events: none;
`;
