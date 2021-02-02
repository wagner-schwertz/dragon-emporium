import styled from "styled-components";
import { lighten } from "polished";

export const StyledField = styled.div`
  position: relative;
  label {
    display: block;
    color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
    margin-bottom: 0.5rem;
    padding-left: 0.5rem;
  }
  input {
    background-color: ${({ theme }) => theme.colors.background};
    outline: none;
    border-radius: 0.5rem;
    border: 1px solid transparent;
    ${({ error, theme }) =>
      error ? `border: 1px solid ${theme.colors.error};` : ""}
    padding: 0.5rem 1rem;
    font-size: 1rem;
    width: 100%;
    box-sizing: border-box;
    color: ${({ theme }) => lighten(0.6, theme.colors.primary)};
    transition: border-color 0.1s ease-out;
  }
  span {
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;
    bottom: -1rem;
    font-size: 0.875rem;
    color: ${({ theme }) => lighten(0.3, theme.colors.error)};
    font-weight: 200;
  }
  & + & {
    margin-top: 2rem;
  }
`;
