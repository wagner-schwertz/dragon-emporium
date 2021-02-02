import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { StyledModal } from "./styles";

export default function Modal({ show = false, children }) {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return (
    <AnimatePresence>
      {show && (
        <StyledModal
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.1 }}
          data-testid="modal-overlay"
        >
          {children}
        </StyledModal>
      )}
    </AnimatePresence>
  );
}
