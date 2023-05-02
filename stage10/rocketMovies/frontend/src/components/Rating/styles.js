import styled from "styled-components";

export const Container = styled.div`
  .stars {
    display: flex;
    gap: .5rem;
  }

  svg {
    color: ${({ theme }) => theme.COLORS.BRAND};
  }
`
