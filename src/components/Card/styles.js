import styled from "styled-components";
import { motion } from "framer-motion";
import { lighten } from "polished";

export const StyledCard = styled(motion.div)`
  background-color: ${({ theme }) => lighten(0.07, theme.colors.background)};
  padding: 1.5rem;
  border-radius: 0.5rem;
  margin: 0 auto;
  box-shadow: 0.25rem 0.25rem 1rem 1rem rgba(0, 0, 0, 0.15);
  h2 {
    font-size: 1rem;
    margin-bottom: 2rem;
    color: ${({ theme }) => lighten(0.5, theme.colors.primary)};
    text-shadow: 0 0 1rem ${({ theme }) => theme.colors.primary};
    cursor: default;
  }
  @media (max-width: 600px) {
    padding: 1rem;
  }
`;
