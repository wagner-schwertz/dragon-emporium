import styled from "styled-components";
import { lighten } from "polished";

export const StyledDialog = styled.article`
  padding: 0;
  background-color: transparent;
  & > p {
    color: ${({ theme }) => lighten(0.6, theme.colors.primary)};
    margin-bottom: 2rem;
  }
  & > div {
    text-align: center;
  }
`;
