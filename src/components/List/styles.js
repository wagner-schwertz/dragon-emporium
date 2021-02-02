import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";
import { IconButton } from "components/Buttons";

export const StyledList = styled(motion.ul)`
  .header {
    margin: 0;
    padding: 0 1rem 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid
      ${({ theme }) => lighten(0.1, theme.colors.background)};
    display: flex;
    color: ${({ theme }) => lighten(0.4, theme.colors.primary)};

    cursor: default;
    .id {
      min-width: 3rem;
    }
  }
  li {
    display: flex;
    padding: 0 1rem;
    align-items: center;
    cursor: default;
    transition: all 0.1s ease-out;
    .id {
      color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
      min-width: 3rem;
      white-space: nowrap;
    }
    .name {
      color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
      flex: 1;
      line-height: normal;
      white-space: nowrap;
      cursor: pointer;
      text-decoration: none;
      outline: none;
      transition: all 0.1s ease-out;
      overflow-x: hidden;
      text-overflow: ellipsis;
      &:focus,
      &:hover {
        text-shadow: 0 0 1rem
          ${({ theme }) => lighten(0.3, theme.colors.primary)};
      }
      &:active {
        color: ${({ theme }) => lighten(0.4, theme.colors.primary)};
      }
    }
    div {
      display: flex;
    }
    &:hover,
    &:focus-within {
      background-color: ${({ theme }) =>
        lighten(0.09, theme.colors.background)};
      box-shadow: 0 0 1rem 0.5rem
        ${({ theme }) => lighten(0.09, theme.colors.background)};
    }
    @media (max-width: 600px) {
      padding: 0;
    }
  }
  .empty {
    display: block;
    color: ${({ theme }) => lighten(0.4, theme.colors.background)};
    font-weight: 200;
    text-align: center;
  }
`;

export const StyledIconButton = styled(IconButton)`
  font-size: 1rem;
`;
