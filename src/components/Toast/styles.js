import styled from "styled-components";
import { lighten } from "polished";
import { motion } from "framer-motion";

export const StyledToast = styled(motion.div)`
  top: 0;
  left: 0;
  right: 0;
  position: fixed;
  display: flex;
  justify-content: center;
  span {
    max-width: 500px;
    margin-top: 2rem;
    width: 100%;
    background-color: ${({ theme }) => lighten(0.7, theme.colors.background)};
    padding: 1rem;
    text-align: center;
    border-radius: 0.5rem;
    color: ${({ theme, toastType }) =>
      toastType === "success" ? theme.colors.success : theme.colors.error};
  }
`;
