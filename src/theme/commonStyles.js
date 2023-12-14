import styled from "styled-components";

export const BREAKPONITS = {
  small: `@media (min-width: 576px)`,
  tablet: `@media (min-width: 768px)`,
  large: `@media (min-width: 992px)`,
};

export const boardGameWidth = { sm: 18, md: 24, lg: 28 };
export const gap = { sm: 0.25, md: 0.5, lg: 1, xl: 2 };
export const padding = { sm: 0.5, md: 1, lg: 2, xl: 3 };
export const borderRadius = 0.5;
export const fontSize = { sm: 1, md: 1.5, lg: 2.5, xl: 3, xxl: 4, xxxl: 5 };
export const fontSizeVmin = { sm: 5, md: 10, lg: 15 };

export const BreakPointText = styled.button`
  display: flex;
  align-items: center;
  padding: ${padding.sm}rem 0;
  border-radius: ${borderRadius}rem;
  cursor: pointer;
  caret-color: transparent;
  font-size: ${fontSizeVmin.sm}vmin;
  transition: all 0.5s ease-in-out;

  ${BREAKPONITS.small} {
    font-size: ${fontSize.sm}rem;
  }

  ${BREAKPONITS.tablet} {
    font-size: ${fontSize.md}rem;
  }
  ${BREAKPONITS.large} {
  }
`;
