import { useLocation, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useStore } from "store/store";
import { Button, ThemeButton, LanguageButton } from "components/Buttons";
import { NavContainer, StyledLogo } from "./styles";

export default function Nav() {
  const location = useLocation();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const toggleTheme = useStore((store) => store.toggleTheme);
  const logout = useStore((store) => store.logout);

  const toggleLanguage = () => {
    const currentLanguage = i18n.language;
    i18n.changeLanguage(currentLanguage === "en" ? "pt" : "en");
    localStorage.setItem("locale", i18n.language);
  };

  return (
    <NavContainer role="navigation">
      <StyledLogo />
      <ThemeButton onClick={toggleTheme} aria-label={t("Change Theme")} />
      <LanguageButton
        onClick={toggleLanguage}
        aria-label={t("Change Language")}
      >
        {i18n.language.toUpperCase()}
      </LanguageButton>
      <Button
        disabled={location.pathname === "/add"}
        onClick={() => history.push("/add")}
      >
        {t("Add Dragon")}
      </Button>
      <Button onClick={logout}>{t("Sign Out")}</Button>
    </NavContainer>
  );
}
