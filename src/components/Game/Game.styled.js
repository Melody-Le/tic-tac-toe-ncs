import styled from "styled-components";
import { BREAKPONITS } from "../../theme/commonStyles";

import { boardGameWidth, gap } from "../../theme/commonStyles";

export const GameWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${gap.lg}rem;
  width: 90vw;
  ${BREAKPONITS.small} {
    width: ${boardGameWidth.sm}rem;
  }
  ${BREAKPONITS.tablet} {
    width: ${boardGameWidth.md}rem;
  }
  ${BREAKPONITS.large} {
    width: ${boardGameWidth.lg}rem;
  }
`;
