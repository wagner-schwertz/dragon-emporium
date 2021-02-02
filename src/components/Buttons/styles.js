import styled from "styled-components";
import { rgba, lighten } from "polished";

export const StyledButton = styled.button`
  background-color: transparent;
  outline: none;
  border: 1px solid ${({ theme }) => lighten(0.5, theme.colors.primary)};
  cursor: pointer;
  font-size: 1rem;
  color: ${({ theme }) => lighten(0.6, theme.colors.primary)};
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  white-space: nowrap;
  transition: all 0.2s ease-out;
  box-shadow: ${({ theme }) =>
    `0 0 0.1rem 0.1rem ${lighten(
      theme.colors.primary
    )}, 0 0 0.1rem 0.1rem ${lighten(0.6, theme.colors.primary)} inset`};
  text-shadow: 0 0 0.5rem ${({ theme }) => theme.colors.primary};

  &:hover,
  &:focus {
    box-shadow: 0 0 0.5rem 0.25rem
        ${({ theme }) => rgba(lighten(0.2, theme.colors.primary), 0.3)},
      0 0 0.5rem 0.25rem
        ${({ theme }) => rgba(lighten(0.2, theme.colors.primary), 0.3)} inset;
    text-shadow: 0 0 1rem ${({ theme }) => lighten(0.4, theme.colors.primary)};
  }
  &:active {
    color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  }
  &:disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  & + & {
    margin-left: 1.5rem;
  }
  @media (max-width: 600px) {
    padding: 0.25rem 0.5rem;
    & + & {
      margin-left: 1rem;
    }
  }
`;

export const StyledIconButton = styled.button`
  margin: 0.25rem;
  padding: 0.25rem;
  height: auto;
  min-height: auto;
  background-color: transparent;
  cursor: pointer;
  border: none;
  outline: none;
  font-size: 1.5rem;
  color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1.5rem;
  svg {
    transition: all 0.1s ease-out;
  }
  &:hover,
  &:focus {
    svg {
      filter: drop-shadow(
        0 0 0.5rem ${({ theme }) => lighten(0.2, theme.colors.primary)}
      );
    }
  }
  &:active {
    svg {
      color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
    }
  }
`;

export const StyledThemeButton = styled.button`
  padding: 0;
  margin: 0 1rem;
  border-radius: 2rem;
  height: 2rem;
  width: 2rem;
  outline: none;
  border: 1px solid transparent;
  background-color: ${({ theme }) => theme.colors.background};
  transition: all 0.1s ease-out;
  svg {
    color: ${({ theme }) => lighten(0.4, theme.colors.background)};
  }
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  }
  &:active {
    border-color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    svg {
      color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
    }
  }
`;

export const StyledLanguageButton = styled.button`
  padding: 0;
  margin-right: 1rem;
  border-radius: 2rem;
  height: 2rem;
  width: 2rem;
  outline: none;
  border: 1px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => lighten(0.4, theme.colors.background)};
  transition: all 0.1s ease-out;
  cursor: pointer;
  &:hover,
  &:focus {
    border-color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  }
  &:active {
    border-color: ${({ theme }) => lighten(0.3, theme.colors.primary)};
    color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
  }
`;
