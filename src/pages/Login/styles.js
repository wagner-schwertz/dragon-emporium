import styled from "styled-components";
import Logo from "components/Logo";

export const StyledPage = styled.div`
  position: relative;
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  form {
    .button-row {
      display: flex;
      margin-top: 2rem;
      justify-content: center;
    }
  }
`;

export const StyledLogo = styled(Logo)`
  position: absolute;
  left: 2rem;
  bottom: 2rem;
  opacity: 0.2;
`;
