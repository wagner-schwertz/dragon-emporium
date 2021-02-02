import {
  StyledButton,
  StyledIconButton,
  StyledThemeButton,
  StyledLanguageButton,
} from "./styles";
import { FaPaintBrush } from "react-icons/fa";

export const Button = (props) => <StyledButton {...props} />;

export const IconButton = ({ icon, ...props }) => (
  <StyledIconButton {...props}>{icon}</StyledIconButton>
);

export const ThemeButton = (props) => (
  <StyledThemeButton {...props}>
    <FaPaintBrush />
  </StyledThemeButton>
);

export const LanguageButton = (props) => <StyledLanguageButton {...props} />;
