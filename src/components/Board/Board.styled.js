import styled from "styled-components";

import { squareWrapperSize, gap } from "../../theme/commonStyles";

export const SquareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${gap.md}rem;
  width: ${squareWrapperSize}rem;
  height: ${squareWrapperSize}rem;
`;
