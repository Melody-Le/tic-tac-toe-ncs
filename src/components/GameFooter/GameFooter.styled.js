import styled from "styled-components";

import { padding, borderRadius, gap } from "../../theme/commonStyles";

import { theme } from "../../theme/theme";

export const FooterWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: ${gap.md}rem;
`;

export const BackButton = styled.button`
  grid-column: span 4;
  display: grid;
  place-content: center;
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.sm}rem;
  border-radius: ${borderRadius}rem;
  transition: background-color 0.2s ease-in-out;
`;
export const ShowHistoryButton = styled.button`
  grid-column: span 8/-1;
  background-color: ${theme.secondDarkBlue};
  padding: ${padding.sm}rem;
  border-radius: ${borderRadius}rem;
  transition: background-color 0.2s ease-in-out;
  text-align: center;
`;
