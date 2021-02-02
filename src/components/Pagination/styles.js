import styled from "styled-components";
import { Button } from "components/Buttons";

export const StyledPagination = styled.nav`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledButton = styled(Button)`
  margin: 0;
  padding: 0;
  height: 2rem;
  width: 2rem;
  border-radius: 0.25rem;
  & + & {
    margin: 0 0 0 0.5rem;
  }
`;
