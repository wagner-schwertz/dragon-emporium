import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

export const StyledLoader = styled(motion.span)`
  display: block;
  margin: 0 auto;
  text-align: center;
  text-transform: uppercase;
  color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
  font-size: 1.5rem;
  text-shadow: 0 0 1rem ${({ theme }) => lighten(0.5, theme.colors.primary)};
  animation: glowing 0.5s ease-in-out infinite alternate-reverse;

  @keyframes glowing {
    0% {
      opacity: 0.8;
      text-shadow: 0 0 0.5rem
        ${({ theme }) => lighten(0.5, theme.colors.primary)};
    }
    100% {
      opacity: 1;
      text-shadow: 0 0 1rem ${({ theme }) => lighten(0.7, theme.colors.primary)};
    }
  }
`;
