import { useTranslation } from "react-i18next";
import { StyledLoader } from "./styles";

export default function Loader() {
  const { t } = useTranslation();

  return (
    <StyledLoader
      role="alert"
      aria-live="assertive"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {t("LOADING...")}
    </StyledLoader>
  );
}
