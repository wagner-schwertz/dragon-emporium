import { StyledButton, StyledPagination } from "./styles";

export default function Paginator({
  pages = 1,
  onChange = () => {},
  currentPage = 1,
}) {
  return (
    <StyledPagination>
      {[...Array(pages)].map((_, index) => (
        <StyledButton
          key={`page-${index}`}
          onClick={() => onChange(index + 1)}
          disabled={currentPage === index + 1}
        >
          {index + 1}
        </StyledButton>
      ))}
    </StyledPagination>
  );
}
