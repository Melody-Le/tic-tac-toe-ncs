import styled from "styled-components";
import { theme } from "../../theme/theme";

import { borderRadius, fontSize } from "../../theme/commonStyles";
export const StepLi = styled.li`
  &:hover {
    background-color: yellow;
  }
`;
export const StepButton = styled.button`
  background-color: white;
  border: red solid 2px;
  &:hover {
    background-color: red;
  }
`;
