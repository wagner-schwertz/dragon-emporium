import styled from "styled-components";
import { lighten, darken } from "polished";
import Logo from "components/Logo";

export const NavContainer = styled.nav`
  background-color: ${({ theme }) => lighten(0.1, theme.colors.background)};
  border-bottom: 1px solid
    ${({ theme }) => darken(0.05, theme.colors.background)};
  padding: 1rem;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  @media (max-width: 600px) {
    justify-content: space-around;
    margin-bottom: 1rem;
    padding: 0.5rem;
  }
`;

export const StyledLogo = styled(Logo)`
  flex: 1;
`;
