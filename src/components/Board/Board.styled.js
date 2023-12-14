import styled from "styled-components";
import { BREAKPONITS, fontSize } from "../../theme/commonStyles";

import { gap } from "../../theme/commonStyles";

export const SquareWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: ${gap.sm}rem;
  aspect-ratio: 1 / 1;
  ${BREAKPONITS.small} {
    gap: ${gap.md}rem;
  }
`;
