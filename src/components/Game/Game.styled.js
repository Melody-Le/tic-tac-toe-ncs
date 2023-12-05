import styled from "styled-components";

import { squareWrapperSize, gap } from "../../theme/commonStyles";

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.lg}rem;
  width: ${squareWrapperSize}rem;
`;
