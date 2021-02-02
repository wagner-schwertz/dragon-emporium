import { AnimatePresence } from "framer-motion";
import { useStore } from "store/store";
import { StyledToast } from "./styles";

export default function Toast() {
  const toast = useStore((store) => store.toast);

  return (
    <AnimatePresence>
      {toast.message && (
        <StyledToast
          variants={variants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          toastType={toast.type}
          aria-live="polite"
          role="alert"
        >
          <span>{toast.message}</span>
        </StyledToast>
      )}
    </AnimatePresence>
  );
}

const variants = {
  hidden: { y: -100, opacity: 0 },
  visible: { y: 0, opacity: 1 },
};
