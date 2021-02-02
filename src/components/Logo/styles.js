import styled from "styled-components";
import { lighten, rgba } from "polished";

export const StyledTitle = styled.h1`
  font-size: 2rem;
  pointer-events: none;
  font-weight: 200;
  text-shadow: 0 0 1rem ${({ theme }) => rgba(theme.colors.primary, 0.7)};
  color: ${({ theme }) => lighten(0.6, theme.colors.primary)};
  strong {
    font-weight: bold;
  }
  @media (max-width: 600px) {
    display: none;
  }
`;
