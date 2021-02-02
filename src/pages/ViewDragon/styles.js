import styled from "styled-components";
import Card from "components/Card";
import { lighten, rgba } from "polished";

export const StyledCard = styled(Card)`
  max-width: 600px;
  p.error-message {
    text-align: center;
    color: ${({ theme }) => lighten(0.4, theme.colors.error)};
    text-shadow: 0 0 0.5rem
      ${({ theme }) => rgba(lighten(0.7, theme.colors.error), 0.6)};
  }
  div.button-row {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
`;
